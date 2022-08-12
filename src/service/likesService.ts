import { likesRepository } from "../repositories/likesRepository.js"

async function checkLike(publicationId: number, userId: number) {
    return await likesRepository.getLike(publicationId, userId)
}

async function deleteLike(id: number) {
    return await likesRepository.deleteLike(id)
}

async function addLike(publicationId: number, userId: number) {
    const respo = await likesRepository.findUser(userId)
    const respo2 = await checkLike(publicationId, userId)

    if(respo2) {
        return await deleteLike(Number(respo2.id))
    }
    else {
        return await likesRepository.insetLike({
            publicationId,
            userId,
            username: respo.username
        })
    }
}

export const likesService = {
    addLike,
}