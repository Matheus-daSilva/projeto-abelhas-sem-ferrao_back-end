import { Publication } from "@prisma/client"
import prisma from "../config/database.js"

export type PublicationData = Omit<Publication, "id" | "createdAt">

async function getSession(token: string) {
    return await prisma.session.findFirst({
        where: {token}
    })
}

async function insertPublication(body: PublicationData) {
    return await prisma.publication.create({
        data: body
    })
}

export const publicationRepository = {
    getSession,
    insertPublication,
}