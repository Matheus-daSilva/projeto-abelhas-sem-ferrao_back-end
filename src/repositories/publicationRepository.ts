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

async function getAllPublications() {
    return await prisma.publication.findMany({
        select: {
            id: true,
            url: true,
            userId: true,
            description: true,
            likes: {select: {
                id: true,
                userId: true,
                username: true,
                publicationId: true
            }},
            comments: {select: {
                id: true,
                userId: true,
                comment: true,
                username: true
            }}
        }
    })
}

export const publicationRepository = {
    getSession,
    insertPublication,
    getAllPublications,
}