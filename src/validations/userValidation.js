import { z } from "zod";

const userBodySchema = z
  .object({
    nome: z
      .string()
      .trim()
      .min(3, "O nome deve possuir no mínimo 3 caracteres.")
      .max(100, "O nome deve possuir no máximo 100 caracteres."),

    email: z.string().trim().email("Informe um e-mail válido."),

    senha: z
      .string()
      .min(8, "A senha deve possuir no mínimo 8 caracteres.")
      .max(100, "A senha deve possuir no máximo 100 caracteres."),
  })
  .strict();

export const createUserSchema = {
  body: userBodySchema,
};

export const updateUserSchema = {
  body: userBodySchema,
};
