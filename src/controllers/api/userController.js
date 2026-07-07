import UserService from "../../services/userService.js";
import AppError from "../../errors/AppError.js";
import { success } from "../../utils/response.js";

class UserController {
  async listar(req, res, next) {
    try {
      const usuarios = await UserService.listar();

      return res.json(success(usuarios));
    } catch (erro) {
      next(erro);
    }
  }

  async buscar(req, res, next) {
    try {
      const usuario = await UserService.buscar(req.params.id);

      return res.json(success(usuario));
    } catch (erro) {
      next(erro);
    }
  }

  async criar(req, res, next) {
    try {
      const usuario = await UserService.criar(req.body);

      return res
        .status(201)
        .json(success(usuario, "Usuário criado com sucesso."));
    } catch (erro) {
      next(erro);
    }
  }

  async atualizar(req, res, next) {
    try {
      await UserService.atualizar(req.params.id, req.body);

      return res.json(success(null, "Usuário atualizado com sucesso."));
    } catch (erro) {
      next(erro);
    }
  }

  async remover(req, res, next) {
    try {
      await UserService.remover(req.params.id);

      return res.json(success(null, "Usuário removido com sucesso."));
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
