import { CommentData, commentsRepository } from "../repositories/commentsRepository.js"
import { userRepository } from "../repositories/userRepository.js"

interface CommentInfos {
    userId: number,
    publicationId: number,
    comment: string
}


async function postComment(body: CommentInfos) {
    const respo = await userRepository.findUser(body.userId)

    const respo2 = await commentsRepository.insertComment({...body, username: respo.username})
    return respo2
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