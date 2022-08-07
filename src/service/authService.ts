import bcrypt from "bcrypt"
import { authRepository, UserData } from "../repositories/authRepository.js";


async function signUp(body: UserData) {
    const email = await authRepository.findEmail(body.email)
    const username = await authRepository.findUsername(body.username)

    if (email || username) throw {type: "conflict", message: "this user has already exist", code: 409}

    if (body.password !== body.passwordConfirmation) throw {type: "invalid_input", message: "invalid password confirmation", number: 422}

    const passwordHashed = bcrypt.hashSync(body.password, 10)

    return await authRepository.insertUser({
        username: body.username,
        email: body.email,
        password: passwordHashed,
        photo: body.photo,
        admin: body.admin
    })
}

export const authService = {
    signUp,
}