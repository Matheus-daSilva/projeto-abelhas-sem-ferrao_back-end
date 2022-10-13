import { PublicationData, publicationRepository } from "../repositories/publicationRepository.js"
import { userRepository } from "../repositories/userRepository.js"

async function postPublication(body: PublicationData) {

    if (!body.description || !body.userId) throw {type: "unprocessable_entity", message: "we can not process this publication", code: 422}

    return await publicationRepository.insertPublication(body)
}

async function getPublications(){
    const publications = await publicationRepository.getAllPublications()
    const respo = []

    for (let publication of publications) {
        try {
            const user = await userRepository.findUser(publication.userId)
            respo.push({...publication, username: user.username})
        } catch {
            respo.push({...publication, username: "Undefined"})
        }
    }

    return respo
}

async function deletePublication(id: number, userId: number){
    const respo = await publicationRepository.getById(id)

    if (!respo) {
        throw {type: "unprocessable_entity", message: "this publication does not exist", code: 422}
    }
    else if (respo.userId === userId) {
        return await publicationRepository.deletePublication(id)
    }
    else {
        throw {type: "unauthorized", message: "unauthorized request", code: 401}
    }
}

async function putPublication(id: number, userId: number, description: string) {
    const respo = await publicationRepository.getById(id)

    if (!respo) {
        throw {type: "unprocessable_entity", message: "this publication does not exist", code: 422}
    }
    else if (respo.userId === userId) {
        return await publicationRepository.updatePublication(id, description)
    }
    else {
        throw {type: "unauthorized", message: "unauthorized request", code: 401}
    }
}

export const publicationService = {
    postPublication,
    getPublications,
    deletePublication,
    putPublication,
}