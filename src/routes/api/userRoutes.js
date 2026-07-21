import express from "express";

import controller from "../../controllers/api/userController.js";

import validate from "../../middlewares/validate.js";

import authMiddleware from "../../auth/authMiddleware.js";

import {
  createUserSchema,
  updateUserSchema,
} from "../../validations/userValidation.js";

import {
  searchUserSchema,
  idParamSchema,
} from "../../validations/commonValidation.js";

const router = express.Router();

router.get(
  "/",
  authMiddleware,
  validate({
    query: searchUserSchema,
  }),
  controller.listar,
);

router.get(
  "/:id",
  authMiddleware,
  validate({
    params: idParamSchema,
  }),
  controller.buscar,
);

router.post("/", validate(createUserSchema), controller.criar);

router.put(
  "/:id",
  authMiddleware,
  validate({
    params: idParamSchema,
    ...updateUserSchema,
  }),
  controller.atualizar,
);

router.delete(
  "/:id",
  authMiddleware,
  validate({
    params: idParamSchema,
  }),
  controller.remover,
);

export default router;
