import AuthService from "../../services/authService.js";

import { success } from "../../utils/response.js";

class AuthController {
  async login(req, res, next) {
    try {
      const usuario = await AuthService.login(req.validated.body);

      return res.json(success(usuario, "Login realizado com sucesso."));
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();
