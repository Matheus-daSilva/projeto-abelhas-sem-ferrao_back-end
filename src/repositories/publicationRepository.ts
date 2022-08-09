import { Publication } from "@prisma/client"
import prisma from "../config/database.js"

export type PublicationData = Omit<Publication, "id" | "createdAt">

async function getSession(token: string) {
    return await prisma.session.findFirst({
        where: {token}
    })
}

async function insertPublication() {

}

export const publicationRepository = {
    getSession,
    insertPublication,
}