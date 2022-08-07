import { Request, Response, NextFunction } from "express";

interface CustomErrors {
    type: string;
    message: string;
    code: number;
}

export async function errorHandler(error: CustomErrors, req: Request, res: Response, next: NextFunction) {
    if (error.type) {
        return res.status(Number(error.code)).send(error.message)
    }

    return res.status(500).send("Internal server error")
}