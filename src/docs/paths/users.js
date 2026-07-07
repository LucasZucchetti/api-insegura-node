const userPaths = {
  "/api/usuarios": {
    get: {
      tags: ["Users"],

      summary: "Lista todos os usuários.",

      responses: {
        200: {
          $ref: "#/components/responses/UserList",
        },

        500: {
          $ref: "#/components/responses/InternalServerError",
        },
      },
    },

    post: {
      tags: ["Users"],

      summary: "Cria um novo usuário.",

      requestBody: {
        required: true,

        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/UserInput",
            },
          },
        },
      },

      responses: {
        201: {
          $ref: "#/components/responses/UserCreated",
        },

        400: {
          $ref: "#/components/responses/ValidationError",
        },

        500: {
          $ref: "#/components/responses/InternalServerError",
        },
      },
    },
  },

  "/api/usuarios/{id}": {
    get: {
      tags: ["Users"],

      summary: "Busca um usuário por ID.",

      parameters: [
        {
          name: "id",

          in: "path",

          required: true,

          schema: {
            type: "integer",
          },
        },
      ],

      responses: {
        200: {
          $ref: "#/components/responses/UserFound",
        },

        404: {
          $ref: "#/components/responses/NotFound",
        },

        500: {
          $ref: "#/components/responses/InternalServerError",
        },
      },
    },
    put: {
      tags: ["Users"],

      summary: "Atualiza um usuário.",

      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: {
            type: "integer",
          },
          example: 1,
        },
      ],

      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/UserInput",
            },
            example: {
              nome: "Lucas Zucchetti",
              email: "lucas@email.com",
              senha: "NovaSenha123",
            },
          },
        },
      },

      responses: {
        200: {
          $ref: "#/components/responses/UserUpdated",
        },

        400: {
          $ref: "#/components/responses/ValidationError",
        },

        404: {
          $ref: "#/components/responses/NotFound",
        },

        500: {
          $ref: "#/components/responses/InternalServerError",
        },
      },
    },
    delete: {
      tags: ["Users"],

      summary: "Remove um usuário por ID.",

      parameters: [
        {
          name: "id",

          in: "path",

          required: true,

          schema: {
            type: "integer",
          },
        },
      ],
      responses: {
        200: {
          $ref: "#/components/responses/UserDeleted",
        },

        404: {
          $ref: "#/components/responses/NotFound",
        },

        500: {
          $ref: "#/components/responses/InternalServerError",
        },
      },
    },
  },
};

export default userPaths;
