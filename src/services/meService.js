import UserModel from "../models/api/userModel.js";
import StorageService from "./StorageService.js";
import AppError from "../errors/AppError.js";

class MeService {
  async uploadAvatar(userId, file) {
    if (!file) {
      throw new AppError("Nenhuma imagem enviada.", 400);
    }

    const usuario = await UserModel.buscar(userId);

    if (!usuario) {
      throw new AppError("Usuário não encontrado.", 404);
    }

    // Guarda o avatar antigo para remover depois
    const oldAvatarPublicId = usuario.avatar_public_id;

    // Faz upload da nova imagem
    const avatar = await StorageService.uploadAvatar(file, userId);

    // Atualiza o banco
    await UserModel.atualizarAvatar(userId, avatar);

    // Remove a imagem antiga somente após sucesso
    if (oldAvatarPublicId) {
      try {
        await StorageService.deleteAvatar(oldAvatarPublicId);
      } catch (err) {
        console.error("Erro ao remover avatar antigo:", err);
      }
    }

    return {
      avatar_url: avatar.avatar_url,
    };
  }
}

export default new MeService();
