import express from "express";

import controller from "../../controllers/api/userController.js";

import validate from "../../middlewares/validate.js";

import {
  createUserSchema,
  updateUserSchema,
} from "../../validations/userValidation.js";

import { searchUserSchema, idParamSchema } from "../../validations/commonValidation.js";

const router = express.Router();

router.get(
    "/",
    validate({
        query: searchUserSchema
    }),
    controller.listar
);

router.get(
    "/:id",
    validate({
        params: idParamSchema
    }),
    controller.buscar
);

router.post(
    "/",
    validate({
        body: createUserSchema
    }),
    controller.criar
);

router.put(
    "/:id",
    validate({
        params: idParamSchema,
        body: updateUserSchema
    }),
    controller.atualizar
);

router.delete(
    "/:id",
    validate({
        params: idParamSchema
    }),
    controller.remover
);

export default router;
