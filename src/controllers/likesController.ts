import { Request, Response } from "express"
import { likesService } from "../service/likesService.js"

async function LikePublication(req: Request, res: Response) {
    const { publicationId, userId } = req.body
    const respo = await likesService.addLike(Number(publicationId), Number(userId))
    return res.status(200).send(respo)
}

async function FindLike(req: Request, res: Response) {
    const { publicationId, userId } = req.body
    const respo = await likesService.findLike(Number(publicationId), Number(userId))
    return res.status(200).send(respo)
}

export const likesController = {
    LikePublication,
    FindLike,
}