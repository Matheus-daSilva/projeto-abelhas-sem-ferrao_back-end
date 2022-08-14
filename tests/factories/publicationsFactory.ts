import prisma from "../../src/config/database.js"
import { publicationRepository } from "../../src/repositories/publicationRepository.js"

export async function postPublications(token: string) {

    const respo = await prisma.session.findFirst({
        where: {token}
    })

    const publication = {
        description: "vídeo do youtube",
        url: "https://youtube.com.br",
        userId: respo.userId
      }

    return await publicationRepository.insertPublication(publication)
}