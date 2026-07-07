export const commonResponses = {
  ValidationError: {
    description: "Erro de validação.",

    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/ValidationErrorResponse",
        },
      },
    },
  },

  NotFound: {
    description: "Recurso não encontrado.",

    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/ErrorResponse",
        },
      },
    },
  },

  InternalServerError: {
    description: "Erro interno do servidor.",

    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/ErrorResponse",
        },
      },
    },
  },
};
