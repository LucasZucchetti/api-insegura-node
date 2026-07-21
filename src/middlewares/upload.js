import multer from "multer";
import AppError from "../errors/AppError.js";
import { uploadConfig } from "../config/upload.js";

const storage = multer.memoryStorage();

const allowedMimeTypes = uploadConfig.allowedImageTypes;

const fileFilter = (req, file, cb) => {
  if (!allowedMimeTypes.includes(file.mimetype)) {
    return cb(new AppError("Tipo de arquivo não permitido.", 400));
  }

  cb(null, true);
};

export default multer({
  storage,

  limits: {
    fileSize: 2 * 1024 * 1024,
  },

  fileFilter,
});
