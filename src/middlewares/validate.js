import { ZodError } from "zod";
import { error } from "../utils/response.js";

export default function validate(schemas) {
  return (req, res, next) => {
    try {
      req.validated = {
        body: {},
        params: {},
        query: {},
      };

      if (schemas.body) {
        req.validated.body = schemas.body.parse(req.body);
      }

      if (schemas.params) {
        req.validated.params = schemas.params.parse(req.params);
      }

      if (schemas.query) {
        req.validated.query = schemas.query.parse(req.query);
      }

      next();
    } catch (err) {
      if (err instanceof ZodError) {
        const errors = {};

        for (const issue of err.issues) {
          const field = issue.path.join(".");

          if (!errors[field]) {
            errors[field] = [];
          }

          errors[field].push(issue.message);
        }

        return res.status(400).json(error("Erro de validação.", errors));
      }

      next(err);
    }
  };
}
