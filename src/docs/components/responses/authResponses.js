export const authResponses = {
  LoginSuccess: {
    description: "Login realizado com sucesso.",

    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/LoginResponse",
        },
      },
    },
  },

  InvalidCredentials: {
    description: "E-mail ou senha inválidos.",

    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/ErrorResponse",
        },
      },
    },
  },
};
