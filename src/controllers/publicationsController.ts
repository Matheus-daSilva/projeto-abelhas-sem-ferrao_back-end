import { Request, Response } from "express"
import { publicationService } from "../service/publicationService.js"

async function PostPublication(req: Request, res: Response) {
    const { body } = req
    const userLocals = res.locals.user
    const body2 = {...body, userId: userLocals}
    await publicationService.postPublication(body2)
    return res.status(201).send("created")
}

export const publicationController = {
    PostPublication,
}