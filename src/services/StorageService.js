import { Readable } from "stream";
import { fileTypeFromBuffer } from "file-type";
import { uploadConfig } from "../config/upload.js";
import cloudinary from "../config/cloudinary.js";
import AppError from "../errors/AppError.js";

class StorageService {
  async uploadAvatar(file, userId) {
    // Descobre o tipo REAL do arquivo
    const detectedType = await fileTypeFromBuffer(file.buffer);

    if (!detectedType) {
      throw new AppError("Tipo de arquivo inválido.", 400);
    }

    // Tipos permitidos
    const allowedTypes = uploadConfig.allowedImageTypes;

    if (!allowedTypes.includes(detectedType.mime)) {
      throw new AppError("Tipo de arquivo inválido.", 400);
    }

    // Somente após validar envia para o Cloudinary
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "api-insegura-node/avatars",
          public_id: `user-${userId}-${Date.now()}`,
          overwrite: true,
          resource_type: "image",
        },
        (error, result) => {
          if (error) {
            return reject(new AppError("Erro ao enviar imagem.", 500));
          }

          resolve({
            avatar_url: result.secure_url,
            avatar_public_id: result.public_id,
          });
        },
      );

      Readable.from(file.buffer).pipe(stream);
    });
  }

  async deleteAvatar(publicId) {
    if (!publicId) {
      return;
    }

    await cloudinary.uploader.destroy(publicId);
  }
}

export default new StorageService();
