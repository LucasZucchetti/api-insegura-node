import swaggerJsdoc from "swagger-jsdoc";

import { userSchemas } from "./components/schemas/userSchemas.js";
import { errorSchemas } from "./components/schemas/errorSchemas.js";
import { commonSchemas } from "./components/schemas/commonSchemas.js";
import { userResponses } from "./components/responses/userResponse.js";
import { commonResponses } from "./components/responses/commonResponses.js";
import { authSchemas } from "./components/schemas/authSchemas.js";
import { authResponses } from "./components/responses/authResponses.js";
import authPaths from "./paths/auth.js";
import healthPaths from "./paths/health.js";
import userPaths from "./paths/users.js";

const swaggerSpec = {
  openapi: "3.0.0",

  info: {
    title: "API Insegura Node",
    version: "1.0.0",
    description: "Laboratório de estudos em Application Security.",
  },

  servers: [
    {
      url: "http://localhost:3000",
    },
  ],

  tags: [
    {
      name: "Health",
    },
    {
      name: "Users",
    },
    {
      name: "Auth",
    },
    {
      name: "Labs",
    },
  ],

  paths: {
    ...healthPaths,
    ...userPaths,
    ...authPaths,
  },

  components: {
    schemas: {
      ...commonSchemas,

      ...userSchemas,

      ...errorSchemas,

      ...authSchemas,
    },
    responses: {
      ...commonResponses,

      ...userResponses,

      ...authResponses,
    },
  },
};

export default swaggerJsdoc({
  definition: swaggerSpec,
  apis: ["./src/docs/paths/*.js"],
});
