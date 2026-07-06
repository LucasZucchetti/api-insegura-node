export const errorSchemas = {

    Error: {

        type: "object",

        properties: {

            success: {
                type: "boolean",
                example: false
            },

            message: {
                type: "string",
                example: "Usuário não encontrado."
            }

        }

    }

};