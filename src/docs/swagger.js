import swaggerJsdoc from "swagger-jsdoc";

import { userSchemas } from "./components/schemas/userSchemas.js";
import { errorSchemas } from "./components/schemas/errorSchemas.js";
import { commonSchemas } from "./components/schemas/commonSchemas.js";
import { userResponses } from "./components/responses/userResponse.js";
import { commonResponses } from "./components/responses/commonResponses.js";
import { authSchemas } from "./components/schemas/authSchemas.js";
import { authResponses } from "./components/responses/authResponses.js";
import { meSchemas } from "./components/schemas/meSchemas.js";
import { meResponses } from "./components/responses/meResponses.js";
import authPaths from "./paths/auth.js";
import healthPaths from "./paths/health.js";
import userPaths from "./paths/users.js";
import mePaths from "./paths/me.js";

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

  security: [
    {
      BearerAuth: [],
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
      name: "Me",
    },
    {
      name: "Labs",
    },
  ],

  paths: {
    ...healthPaths,
    ...userPaths,
    ...authPaths,
    ...mePaths,
  },

  components: {
    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      ...commonSchemas,

      ...userSchemas,

      ...errorSchemas,

      ...authSchemas,

      ...meSchemas,
    },
    responses: {
      ...commonResponses,

      ...userResponses,

      ...authResponses,

      ...meResponses,
    },
  },
};

export default swaggerJsdoc({
  definition: swaggerSpec,
  apis: ["./src/docs/paths/*.js"],
});
