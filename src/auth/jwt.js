import jwt from "jsonwebtoken";
import authConfig from "../config/auth.js";

export function generateToken(payload) {
  return jwt.sign(payload, authConfig.secret, {
    expiresIn: authConfig.expiresIn,
  });
}

export function verifyToken(token) {
  return jwt.verify(token, authConfig.secret, {
    algorithms: ["HS256"],
  });
}
