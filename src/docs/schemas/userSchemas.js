export const userSchemas = {
    User: {
        type: "object",
        properties: {
            id: {
                type: "integer",
                example: 1
            },
            nome: {
                type: "string",
                example: "Lucas Zucchetti"
            },
            email: {
                type: "string",
                example: "lucas@email.com"
            }
        }
    },

    UserInput: {
        type: "object",
        required: [
            "nome",
            "email",
            "senha"
        ],
        properties: {
            nome: {
                type: "string",
                example: "Lucas Zucchetti"
            },
            email: {
                type: "string",
                example: "lucas@email.com"
            },
            senha: {
                type: "string",
                example: "123456"
            }
        }
    }
};