export const meSchemas = {
  AvatarUploadResponse: {
    type: "object",

    properties: {
      success: {
        type: "boolean",
        example: true,
      },

      message: {
        type: "string",
        example: "Avatar atualizado com sucesso.",
      },

      data: {
        type: "object",

        properties: {
          avatar_url: {
            type: "string",
            format: "uri",
            example:
              "https://res.cloudinary.com/demo/image/upload/v123/avatar.png",
          },
        },
      },
    },
  },
};
