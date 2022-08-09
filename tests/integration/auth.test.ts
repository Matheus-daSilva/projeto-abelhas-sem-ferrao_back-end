import prisma from "../../src/config/database"
import supertest from "supertest"
import app from "../../src/app"

const user = {
    username: "jhonas",
    email: "jhonas@gmail.com",
    password: "12345abcde",
    passwordConfirmation: "12345abcde",
    photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fsm.ign.com%2Fign_br%2Fscreenshot%2Fdefault%2Fnaruto-shippuden_f134.png&imgrefurl=https%3A%2F%2Fbr.ign.com%2Fnaruto-shippuden%2F83680%2Ffeature%2Fquiz-de-naruto-qual-versao-do-naruto-voce-seria&tbnid=kppAC1ZK48ZmHM&vet=12ahUKEwjXteH7qbb5AhW2p5UCHfn1AAgQMygDegUIARDmAQ..i&docid=EKwLgOAZYwCZNM&w=1920&h=1080&q=naruto&ved=2ahUKEwjXteH7qbb5AhW2p5UCHfn1AAgQMygDegUIARDmAQ"
}

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users;`
})

describe("POST /signup", () => {

    it("should create an user", async () => {
        const respo = await supertest(app).post("/signup").send(user)
        expect(respo.statusCode).toBe(201)   
     })

    it("trying to create an user that has already exist", async () => {
        const respo = await supertest(app).post("/signup").send(user)
        expect(respo.statusCode).toBe(201)

        const respo2 = await supertest(app).post("/signup").send(user)
        expect(respo2.statusCode).toBe(409)
    })

    it("trying to create an user with a divergent passwordConfimation", async () => {
        const user2 = {...user, passwordConfirmation: "12345"}

        const respo = await supertest(app).post("/signup").send(user2)
        expect(respo.statusCode).toBe(422)
    })
})