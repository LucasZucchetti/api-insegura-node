import { z } from "zod";

export const idParamSchema = z
  .object({
    id: z.coerce
      .number()
      .int("O ID deve ser um número inteiro.")
      .positive("O ID deve ser maior que zero."),
  })
  .strict();

// coerce é usado para converter o valor para número, caso seja uma string. Isso é útil quando o ID é passado como parâmetro na URL, pois ele será recebido como string.

export const searchUserSchema = z
  .object({
    nome: z.string().trim().min(1).optional(),
  })
  .strict();
