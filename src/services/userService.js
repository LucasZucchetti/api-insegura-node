import UserModel from "../models/api/userModel.js";
import AppError from "../errors/AppError.js";

class UserService {
  async listar() {
    return UserModel.listar();
  }

  async buscar(id) {
    const usuario = await UserModel.buscar(id);

    if (!usuario) {
      throw new AppError("Usuário não encontrado.", 404);
    }

    return usuario;
  }

  async criar(usuario) {
    return UserModel.criar(usuario);
  }

  async atualizar(id, usuario) {
    const existente = await UserModel.buscar(id);
    if (!existente) {
      throw new AppError("Usuário não encontrado.", 404);
    }
    return UserModel.atualizar(id, usuario);
  }

  async remover(id) {
    const existente = await UserModel.buscar(id);

    if (!existente) {
      throw new AppError("Usuário não encontrado.", 404);
    }

    await UserModel.remover(id);
  }
}

export default new UserService();
