import { UserData } from "../../src/repositories/authRepository.js"
import { authService } from "../../src/service/authService.js"

export async function createUserFactory(user: UserData) {
    const respo = await authService.signUp(user)
    const respo2 = await authService.signIn({email: user.email, password: user.password})
    return respo2
}