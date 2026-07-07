import { ZodError } from "zod";

export default function validate(schemas) {
  return (req, res, next) => {
    try {
      if (schemas.body) {
        req.body = schemas.body.parse(req.body);
      }

      if (schemas.params) {
        req.params = schemas.params.parse(req.params);
      }

      if (schemas.query) {
        Object.assign(req.query, schemas.query.parse(req.query));
      }

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errors = {};

        for (const issue of error.issues) {
          const field = issue.path.join(".");

          if (!errors[field]) {
            errors[field] = [];
          }

          errors[field].push(issue.message);
        }

        return res.status(400).json(("Erro de validação.", errors));
      }

      next(error);
    }
  };
}
