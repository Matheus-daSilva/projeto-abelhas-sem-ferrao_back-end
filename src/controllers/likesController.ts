import { Request, Response } from "express"
import { likesService } from "../service/likesService.js"

async function LikePublication(req: Request, res: Response) {
    const { publicationId } = req.body
    const userId = res.locals.user
    const respo = await likesService.addLike(Number(publicationId), Number(userId))
    return res.status(200).send(respo)
}

export const likesController = {
    LikePublication,
}