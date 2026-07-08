export const authSchemas = {
  LoginInput: {
    type: "object",
    required: ["email", "senha"],

    properties: {
      email: {
        type: "string",
        format: "email",
        example: "user@email.com",
      },

      senha: {
        type: "string",
        example: "123456",
      },
    },
  },

  LoginUser: {
    type: "object",

    properties: {
      id: {
        type: "integer",
        example: 1,
      },

      nome: {
        type: "string",
        example: "user name",
      },

      email: {
        type: "string",
        format: "email",
        example: "user@email.com",
      },
    },
  },

  LoginResponse: {
    type: "object",

    properties: {
      success: {
        type: "boolean",
        example: true,
      },

      message: {
        type: "string",
        example: "Login realizado com sucesso.",
      },

      data: {
        $ref: "#/components/schemas/LoginUser",
      },
    },
  },
};
