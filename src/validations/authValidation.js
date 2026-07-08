import { z } from "zod";

export const loginSchema = {
  body: z
    .object({
      email: z.string().email("E-mail inválido."),

      senha: z.string().min(8, "A senha deve possuir no mínimo 8 caracteres."),
    })
    .strict(),
};
