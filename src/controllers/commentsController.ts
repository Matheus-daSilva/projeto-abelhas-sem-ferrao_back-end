import { Request, Response } from "express"
import { commentsService } from "../service/commentsService.js"

async function PostComment(req: Request, res: Response) {
    const { body } = req
    const userId = res.locals.user
    const respo = await commentsService.postComment({...body, userId: userId})
    return res.status(201).send(respo)
}

async function DeleteComment(req: Request, res: Response) {
    const { id } = req.params
    const userId = res.locals.user
    const respo = await commentsService.deleteComment(Number(id), Number(userId))
    return res.status(200).send(respo)
}

export const commentsController = {
    PostComment,
    DeleteComment,
}