const User = {

    type: "object",

    properties: {

        id: {
            type: "integer",
            example: 1
        },

        nome: {
            type: "string",
            example: "User Name"
        },

        email: {
            type: "string",
            example: "user@email.com"
        }

    }

};

const UserInput = {

    type: "object",

    required: [
        "nome",
        "email",
        "senha"
    ],

    properties: {

        nome: {
            type: "string"
        },

        email: {
            type: "string"
        },

        senha: {
            type: "string"
        }

    }

};

const UserResponse = {

    type: "object",

    properties: {

        success: {
            type: "boolean",
            example: true
        },

        data: {

            $ref: "#/components/schemas/User"

        }

    }

};

const UserListResponse = {

    type: "object",

    properties: {

        success: {
            type: "boolean",
            example: true
        },

        data: {

            type: "array",

            items: {
                $ref: "#/components/schemas/User"
            }

        }

    }

};

export const userSchemas = {

    User,

    UserInput,

    UserResponse,

    UserListResponse

};