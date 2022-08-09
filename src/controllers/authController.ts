import { Request, Response } from "express";
import { authService } from "../service/authService.js";

async function SignUp(req: Request, res: Response ) {
    const { body } = req
    await authService.signUp(body)
    return res.status(201).send("created")
}

async function SignIn(req: Request, res: Response) {
    const { body } = req
    const token = await authService.signIn(body)
    return res.status(201).send(token)
}

export const authController = {
    SignUp,
    SignIn,
}
