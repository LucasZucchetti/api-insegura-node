import express from "express";

import controller from "../../controllers/api/authController.js";
import validate from "../../middlewares/validate.js";

import { loginSchema } from "../../validations/authValidation.js";

const router = express.Router();

router.post("/login", validate(loginSchema), controller.login);

export default router;
