import { Comment } from "@prisma/client"
import prisma from "../config/database.js"

export type CommentData = Omit<Comment, "id" | "createdAt">

async function insertComment(infos: CommentData) {
    return await prisma.comment.create({
        data: infos
    })
}

async function findComment(id: number) {
    return await prisma.comment.findUnique({
        where: {id}
    })
}

async function deleteComment(id: number) {
    return await prisma.comment.delete({
        where: {id}
    })
}

export const commentsRepository = {
    insertComment,
    findComment,
    deleteComment,
}