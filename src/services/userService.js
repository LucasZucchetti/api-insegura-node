import UserModel from "../models/api/userModel.js";
import AppError from "../errors/AppError.js";
import { hashPassword } from "../utils/password.js";
import { toUserListResponse, toUserResponse } from "../utils/userSerializer.js";

class UserService {
  async listar() {
    const usuarios = await UserModel.listar();
    return toUserListResponse(usuarios);
  }

  async buscar(id) {
    const usuario = await UserModel.buscar(id);

    if (!usuario) {
      throw new AppError("Usuário não encontrado.", 404);
    }

    return toUserResponse(usuario);
  }

  async criar(usuario) {
    const existente = await UserModel.buscarPorEmail(usuario.email);

    if (existente) {
      throw new AppError("E-mail já cadastrado.", 409);
    }

    usuario.senha = await hashPassword(usuario.senha);

    const novoUsuario = await UserModel.criar(usuario);

    return toUserResponse(novoUsuario);
  }

  async atualizar(id, usuario) {
    const existente = await UserModel.buscar(id);

    if (!existente) {
      throw new AppError("Usuário não encontrado.", 404);
    }

    const emailExistente = await UserModel.buscarPorEmail(usuario.email);

    if (emailExistente) {
      throw new AppError("E-mail já cadastrado.", 409);
    }

    usuario.senha = await hashPassword(usuario.senha);

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
