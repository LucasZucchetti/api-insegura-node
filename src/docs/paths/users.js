const userPaths = {

    "/api/usuarios": {

        get: {

            tags: ["Users"],

            summary: "Lista todos os usuários.",

            responses: {

                200: {

                    description: "Lista de usuários.",

                    content: {

                        "application/json": {

                            schema: {

                                type: "array",

                                items: {
                                    $ref: "#/components/schemas/User"
                                }

                            }

                        }

                    }

                }

            }

        },

        post: {

            tags: ["Users"],

            summary: "Cria um novo usuário.",

            requestBody: {

                required: true,

                content: {

                    "application/json": {

                        schema: {

                            $ref: "#/components/schemas/UserInput"

                        }

                    }

                }

            },

            responses: {

                201: {

                    description: "Usuário criado."

                }

            }

        }

    },

    "/api/usuarios/{id}": {

        get: {

            tags: ["Users"],

            summary: "Busca um usuário por ID.",

            parameters: [

                {

                    name: "id",

                    in: "path",

                    required: true,

                    schema: {

                        type: "integer"

                    }

                }

            ],

            responses: {

                200: {

                    description: "Usuário encontrado."

                },

                404: {

                    description: "Usuário não encontrado."

                }

            }

        }

    }

};

export default userPaths;