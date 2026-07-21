import express from "express";

import authMiddleware from "../../auth/authMiddleware.js";
import uploadMiddleware from "../../middlewares/upload.js";

import controller from "../../controllers/api/meController.js";

const router = express.Router();

router.post(
  "/avatar",
  authMiddleware,
  uploadMiddleware.single("avatar"),
  controller.uploadAvatar,
);

export default router;
