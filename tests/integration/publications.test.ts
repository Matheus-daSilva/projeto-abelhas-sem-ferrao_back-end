import prisma from "../../src/config/database.js"
import supertest from "supertest"
import app from "../../src/app.js"
import { createUserFactory } from "../factories/userFactory.js"

const publication = {
    description: "vídeo do youtube"
  }

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
})

describe("POST /publication", () => {

    it("should post a publication", async () => {
        const respo = await createUserFactory(user)

        const respo2 = await supertest(app).post("/publications").set('Authorization', `Bearer ${respo}`).send(publication)
        expect(respo2.statusCode).toBe(201)
    })

    it("should create a publication with an url", async () => {
        const respo = await createUserFactory(user)

        const respo2 = await supertest(app).post("/publications").set('Authorization', `Bearer ${respo}`).send({...publication, url: "https://youtube.com"})
        expect(respo2.statusCode).toBe(201)
    })

    it("should not create a publication with a wrong schema", async () => {
        const respo = await createUserFactory(user)

        const respo2 = await supertest(app).post("/publications").set('Authorization', `Bearer ${respo}`).send({...publication, publication: 1})
        expect(respo2.statusCode).toBe(422)
    })
})