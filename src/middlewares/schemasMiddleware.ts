import { Request, Response, NextFunction } from "express"
import { signInSchema, signUpSchema } from "../schemas/userSchema.js"

export const schemasValidation = (schema) => {
    return (schemasValidation[schema] = (req: Request, res: Response, next: NextFunction) => {
      const validation = schema.validate(req.body, { abortEarly: false });

      if(validation.error) throw {type: "invalid_input", message: "wrong credentials", code: 422}

      next()
    });
  };

