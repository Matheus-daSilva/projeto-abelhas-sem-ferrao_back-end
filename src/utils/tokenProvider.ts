import jwt from "jsonwebtoken"

export default async function tokenProvider(email: string) {
    const secretKey = process.env.JWT_KEY
    const token = jwt.sign(email, secretKey)
    return token
}
