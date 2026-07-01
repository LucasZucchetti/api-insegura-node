import User from "../models/userModel.js";

class UserController {

    async listar(req, res) {

        try {

            const usuarios = await User.listar();

            return res.json(usuarios);

        } catch (erro) {

            return res.status(500).json(erro);

        }

    }

    async buscar(req, res) {

        try {

            const usuario = await User.buscar(req.params.id);

            if (!usuario) {

                return res.status(404).json({
                    mensagem: "Usuário não encontrado."
                });

            }

            return res.json(usuario);

        } catch (erro) {

            return res.status(500).json(erro);

        }

    }

    async criar(req, res) {

        try {

            const usuario = await User.criar(req.body);

            return res.status(201).json(usuario);

        } catch (erro) {

            return res.status(500).json(erro);

        }

    }

    async atualizar(req, res) {

        try {

            await User.atualizar(
                req.params.id,
                req.body
            );

            return res.json({
                mensagem: "Usuário atualizado."
            });

        } catch (erro) {

            return res.status(500).json(erro);

        }

    }

    async remover(req, res) {

        try {

            await User.remover(req.params.id);

            return res.json({
                mensagem: "Usuário removido."
            });

        } catch (erro) {

            return res.status(500).json(erro);

        }

    }

}

export default new UserController();