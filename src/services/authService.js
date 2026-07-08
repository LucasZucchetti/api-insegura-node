import UserModel from "../models/api/userModel.js";
import AppError from "../errors/AppError.js";
import { comparePassword } from "../utils/password.js";
import toLoginResponse from "../utils/authSerializer.js";
import { generateToken } from "../auth/jwt.js";

class AuthService {
  async login({ email, senha }) {
    const usuario = await UserModel.buscarPorEmail(email);

    if (!usuario) {
      throw new AppError("Credenciais inválidas.", 401);
    }

    const senhaValida = await comparePassword(senha, usuario.senha);

    if (!senhaValida) {
      throw new AppError("Credenciais inválidas.", 401);
    }

    const token = generateToken({ id: usuario.id });

    return toLoginResponse(usuario, token);
  }
}

export default new AuthService();
