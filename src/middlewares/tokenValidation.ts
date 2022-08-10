import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { publicationRepository } from "../repositories/publicationRepository.js"

export async function tokenValidation(req: Request, res: Response, next: NextFunction) {
    let token = req.headers.authorization
    
    if(!token) throw {type: "unauthorized", message: "unauthorized request", code: 401}

    token = token.replace("Bearer ", "")

    const decode = jwt.verify(token, process.env.JWT_KEY)

    if(!decode) throw {type: "unauthorized", message: "invalid token", code: 401}

    const session = await publicationRepository.getSession(token)

    res.locals.user = session.userId

    next()
}