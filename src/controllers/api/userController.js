import User from "../../models/api/userModel.js";
import AppError from "../../errors/AppError.js";

class UserController {
  async listar(req, res, next) {
    try {
      const usuarios = await User.listar();

      return res.json(usuarios);
    } catch (erro) {
      next(erro);
    }
  }

  async buscar(req, res, next) {
    try {
      const usuario = await User.buscar(req.params.id);

      if (!usuario) {
        throw new AppError("Usuário não encontrado.", 404);
      }

      return res.json(usuario);
    } catch (erro) {
      next(erro);
    }
  }

  async criar(req, res, next) {
    try {
      const usuario = await User.criar(req.body);

      return res.status(201).json(usuario);
    } catch (erro) {
      next(erro);
    }
  }

  async atualizar(req, res, next) {
    try {
      await User.atualizar(req.params.id, req.body);

      return res.json({
        mensagem: "Usuário atualizado.",
      });
    } catch (erro) {
      next(erro);
    }
  }

  async remover(req, res, next) {
    try {
      await User.remover(req.params.id);

      return res.json({
        mensagem: "Usuário removido.",
      });
    } catch (erro) {
      next(erro);
    }
  }
}

export default new UserController();
