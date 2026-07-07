export const successSchemas = {

    Success: {

        type: "object",

        properties: {

            success: {
                type: "boolean",
                example: true
            },

            message: {
                type: "string",
                nullable: true,
                example: "Operação realizada com sucesso."
            }

        }

    }

};