const mePaths = {
  "/api/me/avatar": {
    post: {
      tags: ["Me"],

      summary: "Atualiza o avatar do usuário autenticado.",

      security: [
        {
          BearerAuth: [],
        },
      ],

      requestBody: {
        required: true,

        content: {
          "multipart/form-data": {
            schema: {
              type: "object",

              required: ["avatar"],

              properties: {
                avatar: {
                  type: "string",
                  format: "binary",
                },
              },
            },
          },
        },
      },

      responses: {
        200: {
          $ref: "#/components/responses/AvatarUpdated",
        },

        400: {
          $ref: "#/components/responses/ValidationError",
        },

        401: {
          description: "Token inválido ou ausente.",
        },

        500: {
          $ref: "#/components/responses/InternalServerError",
        },
      },
    },
  },
};

export default mePaths;
