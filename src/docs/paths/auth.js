const authPaths = {
  "/api/auth/login": {
    post: {
      tags: ["Auth"],

      summary: "Realiza o login do usuário.",

      description: "Autentica um usuário utilizando e-mail e senha.",

      requestBody: {
        required: true,

        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/LoginInput",
            },
          },
        },
      },

      responses: {
        200: {
          $ref: "#/components/responses/LoginSuccess",
        },

        400: {
          $ref: "#/components/responses/ValidationError",
        },

        401: {
          $ref: "#/components/responses/InvalidCredentials",
        },

        500: {
          $ref: "#/components/responses/InternalServerError",
        },
      },
    },
  },
};

export default authPaths;
