import { Publication } from "@prisma/client"
import prisma from "../config/database.js"

export type PublicationData = Omit<Publication, "id" | "createdAt">

async function getSession(token: string) {
    return await prisma.session.findFirst({
        where: {token}
    })
}

async function getById(id: number) {
    return await prisma.publication.findUnique({
        where: {id}
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

async function deletePublication(id: number) {
    return await prisma.publication.delete({
        where: {id}
    })
}

async function updatePublication(id: number, description: string) {
    return await prisma.publication.update({
        where: {id},
        data: {description: description}
    })
}

export const publicationRepository = {
    getSession,
    getById,
    insertPublication,
    getAllPublications,
    deletePublication,
    updatePublication,
}