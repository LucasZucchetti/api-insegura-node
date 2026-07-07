import { z } from "zod";

export const createUserSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(3, "O nome deve possuir no mínimo 3 caracteres.")
    .max(100),

  email: z.string().trim().email("Informe um e-mail válido."),

  senha: z
    .string()
    .min(8, "A senha deve possuir no mínimo 8 caracteres.")
    .max(100),
});

export const updateUserSchema = createUserSchema;
