export const commonSchemas = {

    SuccessResponse: {

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