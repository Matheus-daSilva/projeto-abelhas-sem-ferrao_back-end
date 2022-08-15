import prisma from "../../src/config/database.js"

export async function findComment(publicationId: number) {
    return await prisma.comment.findFirst({
        where: {publicationId}
    })
}