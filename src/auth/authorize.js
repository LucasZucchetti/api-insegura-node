import AppError from "../errors/AppError.js";

export default function authorize(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user) {
      return next(new AppError("Usuário não autenticado.", 401));
    }

    if (!allowedRoles.includes(req.user.role)) {
      return next(new AppError("Acesso negado.", 403));
    }

    next();
  };
}
