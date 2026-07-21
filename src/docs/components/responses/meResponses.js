export const meResponses = {
  AvatarUpdated: {
    description: "Avatar atualizado com sucesso.",

    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/AvatarUploadResponse",
        },
      },
    },
  },
};
