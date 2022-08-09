import { Request, Response } from "express"
import { publicationService } from "../service/publicationService.js"

async function PostPublication(req: Request, res: Response) {
    const { body } = req
    await publicationService.postPublication(body)
    return res.status(201).send("created")
}

export const publicationControllet = {
    PostPublication,
}