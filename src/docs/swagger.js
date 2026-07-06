import swaggerJsdoc from "swagger-jsdoc";

import { userSchemas } from "./schemas/userSchemas.js";
import { errorSchemas } from "./schemas/errorSchemas.js";

import healthPaths from "./paths/health.js";
import userPaths from "./paths/users.js";

const swaggerSpec = {
    openapi: "3.0.0",

    info: {
        title: "API Insegura Node",
        version: "1.0.0",
        description: "Laboratório de estudos em Application Security."
    },

    servers: [
        {
            url: "http://localhost:3000"
        }
    ],

    tags: [
        {
            name: "Health"
        },
        {
            name: "Users"
        },
        {
            name: "Labs"
        }
    ],

    paths: {
        ...healthPaths,
        ...userPaths
    },

    components: {
        schemas: {
            ...userSchemas,
            ...errorSchemas
        }
    }

};

export default swaggerJsdoc({
    definition: swaggerSpec,
    apis: []
});