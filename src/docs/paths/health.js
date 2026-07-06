const healthPaths = {

    "/": {

        get: {

            tags: ["Health"],

            summary: "Verifica se a API está disponível.",

            responses: {

                200: {

                    description: "API em execução."

                }

            }

        }

    }

};

export default healthPaths;