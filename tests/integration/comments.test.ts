import prisma from "../../src/config/database.js"
import supertest from "supertest"
import app from "../../src/app.js"
import { createUserFactory } from "../factories/userFactory.js"
import { postPublications } from "../factories/publicationsFactory.js"
import { findComment } from "../factories/commentFactory.js"

const user = {
    username: "ana",
    email: "ana@gmail.com",
    password: "12345abcde",
    passwordConfirmation: "12345abcde",
    photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fsm.ign.com%2Fign_br%2Fscreenshot%2Fdefault%2Fnaruto-shippuden_f134.png&imgrefurl=https%3A%2F%2Fbr.ign.com%2Fnaruto-shippuden%2F83680%2Ffeature%2Fquiz-de-naruto-qual-versao-do-naruto-voce-seria&tbnid=kppAC1ZK48ZmHM&vet=12ahUKEwjXteH7qbb5AhW2p5UCHfn1AAgQMygDegUIARDmAQ..i&docid=EKwLgOAZYwCZNM&w=1920&h=1080&q=naruto&ved=2ahUKEwjXteH7qbb5AhW2p5UCHfn1AAgQMygDegUIARDmAQ"
}

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users CASCADE;`
    await prisma.$executeRaw`TRUNCATE TABLE publications CASCADE;`
    await prisma.$executeRaw`TRUNCATE TABLE comments;`
})

describe(" /comment", () => {

    it("should insert a comment", async () => {
        const respo = await createUserFactory(user)
        const respo2 = await postPublications(respo)

        const respo3 = await supertest(app).post("/comment").set('Authorization', `Bearer ${respo}`).send({
            publicationId: respo2.id,
            comment: "testando a rota"
        })
        expect(respo3.statusCode).toBe(201)
    })

    it("should delete a comment", async () => {
        const respo = await createUserFactory(user)
        const respo2 = await postPublications(respo)

        const respo3 = await supertest(app).post("/comment").set('Authorization', `Bearer ${respo}`).send({
            publicationId: respo2.id,
            comment: "testando a rota"
        })
        expect(respo3.statusCode).toBe(201)

        const respo4 = await findComment(respo2.id)

        const respo5 = await supertest(app).delete(`/comment/${respo4.id}`).set('Authorization', `Bearer ${respo}`)
        expect(respo5.statusCode).toBe(200)
    })
} )