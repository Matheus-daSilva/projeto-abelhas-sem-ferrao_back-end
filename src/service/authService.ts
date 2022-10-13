import bcrypt from "bcrypt"
import { authRepository, UserData } from "../repositories/authRepository.js"
import { userRepository } from "../repositories/userRepository.js";
import tokenProvider from "../utils/tokenProvider.js"

interface Login{
    email: string;
    password: string;
}


async function signUp(body: UserData) {
    const email = await userRepository.findEmail(body.email)
    const username = await userRepository.findUsername(body.username)

    if (email || username) throw {type: "conflict", message: "this user has already exist", code: 409}

    if (body.password !== body.passwordConfirmation) throw {type: "invalid_input", message: "invalid password confirmation", code: 422}

    const passwordHashed = bcrypt.hashSync(body.password, 10)

    return await authRepository.insertUser({
        username: body.username,
        email: body.email,
        password: passwordHashed
    })
}

async function signIn(body: Login) {
    const respo = await userRepository.findEmail(body.email)

    if(!respo) throw {type: "not_found", message: "this user dos not exist", code: 404}

    if(!bcrypt.compareSync(body.password, respo.password)) throw {type: "unauthorized", message: "unauthorized request", code: 401}

    const token = await tokenProvider(body.email)
    const userId = Number(respo.id)

    await authRepository.createAccess(token, userId)

    return {token, userId}
}

export const authService = {
    signUp,
    signIn,
}