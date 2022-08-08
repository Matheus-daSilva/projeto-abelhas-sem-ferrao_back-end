import { Request, Response } from "express";
import { authService } from "../service/authService.js";

async function SignUp(req: Request, res: Response ) {
    const { body } = req
    await authService.signUp(body)
    return res.status(201).send("created")
}

export const authController = {
    SignUp,
}
