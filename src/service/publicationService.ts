import { PublicationData, publicationRepository } from "../repositories/publicationRepository.js"

async function postPublication(body: PublicationData) {

    if (!body.description || !body.userId) throw {type: "unprocessable_entity", message: "we can not process this publication", code: 422}

    return await publicationRepository.insertPublication(body)
}

async function getPublications(){
    const respo = await publicationRepository.getAllPublications()
    return respo
}

export const publicationService = {
    postPublication,
    getPublications,
}