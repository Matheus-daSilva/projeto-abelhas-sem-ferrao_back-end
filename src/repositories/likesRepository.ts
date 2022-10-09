import { Like } from "@prisma/client"
import prisma from "../config/database.js"

export type LikeData = Omit<Like, "id" | "createdAt">

async function getLike(publicationId: number, userId: number) {
    return await prisma.like.findFirst({
        where: {
            publicationId: publicationId,
            userId: userId
        }
    })
}

async function deleteLike(id: number) {
    return await prisma.like.delete({
        where: {id}
    })
}

async function insetLike(data: LikeData) {
    return await prisma.like.create({
        data: data
    })
}

export const likesRepository = {
    getLike,
    deleteLike,
    insetLike,
}