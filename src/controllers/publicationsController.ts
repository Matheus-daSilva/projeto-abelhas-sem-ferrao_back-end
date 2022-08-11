import { Request, Response } from "express"
import { publicationService } from "../service/publicationService.js"

async function PostPublication(req: Request, res: Response) {
    const { body } = req
    const userLocals = res.locals.user
    const body2 = {...body, userId: userLocals}
    await publicationService.postPublication(body2)
    return res.status(201).send("created")
}

async function GetPublications(req: Request, res: Response) {
    const respo = await publicationService.getPublications()
    return res.status(200).send(respo)
}

async function DeletePublication(req: Request, res: Response) {
    const { id } = req.params
    const userId = res.locals.user
    const respo = await publicationService.deletePublication(Number(id), Number(userId))
    return res.status(200).send(respo)
}

export const publicationController = {
    PostPublication,
    GetPublications,
    DeletePublication,
}