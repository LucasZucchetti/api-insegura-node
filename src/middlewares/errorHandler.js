import { error } from "../utils/response.js";
import multer from "multer";

export default function errorHandler(err, req, res, next) {
  console.error(err);

  if (err instanceof multer.MulterError) {
    return res.status(400).json(
      error("Erro no upload.", {
        file: [err.message],
      }),
    );
  }

  return res
    .status(err.status || 500)
    .json(error(err.message || "Erro interno."));
}
