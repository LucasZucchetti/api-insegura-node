import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import helmet from "helmet";

import swaggerSpec from "./src/docs/swagger.js";
import routes from "./src/routes/index.js";

import errorHandler from "./src/middlewares/errorHandler.js";
import insecureErrorHandler from "./src/middlewares/insecureErrorHandler.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

app.use(routes);

// SEMPRE por último
app.use(errorHandler);
// app.use(insecureErrorHandler);

export default app;