export const errorSchemas = {

    ErrorResponse: {

        type: "object",

        properties: {

            success: {
                type: "boolean",
                example: false
            },

            message: {
                type: "string",
                example: "Erro interno."
            }

        }

    },

    ValidationErrorResponse: {

        type: "object",

        properties: {

            success: {
                type: "boolean",
                example: false
            },

            message: {
                type: "string",
                example: "Erro de validação."
            },

            errors: {

                type: "object",

                additionalProperties: {

                    type: "array",

                    items: {
                        type: "string"
                    }

                },

                example: {
                    email: [
                        "Informe um e-mail válido."
                    ],
                    senha: [
                        "A senha deve possuir no mínimo 8 caracteres."
                    ]
                }

            }

        }

    }

};