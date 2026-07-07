export const userResponses = {
  UserCreated: {
    description: "Usuário criado com sucesso.",

    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/UserResponse",
        },
      },
    },
  },

  UserUpdated: {
    description: "Usuário atualizado com sucesso.",

    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/SuccessResponse",
        },
      },
    },
  },

  UserDeleted: {
    description: "Usuário removido com sucesso.",

    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/SuccessResponse",
        },
      },
    },
  },

  UserFound: {
    description: "Usuário encontrado.",

    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/UserResponse",
        },
      },
    },
  },

  UserList: {
    description: "Lista de usuários.",

    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/UserListResponse",
        },
      },
    },
  },
};
