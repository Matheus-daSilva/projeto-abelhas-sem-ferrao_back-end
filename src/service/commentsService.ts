import { CommentData, commentsRepository } from "../repositories/commentsRepository.js"


async function postComment(body: CommentData) {
    const respo = await commentsRepository.insertComment(body)
    return respo
}

async function deleteComment(id: number, userId: number) {
    const respo = await commentsRepository.findComment(id)

    if (respo.userId !== userId) {
        throw {type: "unauthorized", message: "unauthorized request", code: 401}
    } else {
        return await commentsRepository.deleteComment(id)
    }

}

export const commentsService = {
    postComment,
    deleteComment,
}