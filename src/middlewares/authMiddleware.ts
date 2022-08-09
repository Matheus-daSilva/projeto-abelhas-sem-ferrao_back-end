import { Request, Response, NextFunction } from "express"
import { signInSchema, signUpSchema } from "../schemas/userSchema.js"

export async function signUpMiddleware(req: Request, res: Response, next: NextFunction) {
    const {body} = req
    const validation = signUpSchema.validate(body, { abortEarly: false })

    if(validation.error) throw {type: "invalid_input", message: "wrong credentials", code: 422}

    next()
}

export async function signInMiddleware(req: Request, res: Response, next: NextFunction) {
    const {body} = req
    const validation = signInSchema.validate(body, { abortEarly: false })

    if(validation.error) throw {type: "invalid_input", message: "wrong credentials", code: 422}

    next()
}
