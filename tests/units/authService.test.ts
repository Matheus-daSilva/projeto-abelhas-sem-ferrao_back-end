import { jest } from "@jest/globals"
import { faker } from "@faker-js/faker"
import { authService } from "../../src/service/authService";
import { authRepository } from "../../src/repositories/authRepository";

describe("POST /signup", () => {

    beforeEach(() => {
        jest.resetAllMocks();
        jest.clearAllMocks();
    })

    it("should create an user account", async () => {
        const user = {
            username: "jhonas",
            email: "jhonas@gmail.com",
            password: "12345abcde",
            passwordConfirmation: "12345abcde",
            photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fsm.ign.com%2Fign_br%2Fscreenshot%2Fdefault%2Fnaruto-shippuden_f134.png&imgrefurl=https%3A%2F%2Fbr.ign.com%2Fnaruto-shippuden%2F83680%2Ffeature%2Fquiz-de-naruto-qual-versao-do-naruto-voce-seria&tbnid=kppAC1ZK48ZmHM&vet=12ahUKEwjXteH7qbb5AhW2p5UCHfn1AAgQMygDegUIARDmAQ..i&docid=EKwLgOAZYwCZNM&w=1920&h=1080&q=naruto&ved=2ahUKEwjXteH7qbb5AhW2p5UCHfn1AAgQMygDegUIARDmAQ"
        }

        jest.spyOn(authRepository, "findEmail").mockResolvedValueOnce(null)
        jest.spyOn(authRepository, "findUsername").mockResolvedValueOnce(null)
        jest.spyOn(authRepository, "insertUser").mockImplementationOnce(async (): any => {})

        await authService.signUp(user)
        expect(authRepository.insertUser).toBeCalled()
    })
})

