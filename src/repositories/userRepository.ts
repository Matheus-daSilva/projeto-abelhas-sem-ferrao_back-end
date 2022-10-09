import prisma from "../config/database.js"

async function findUser(id: number) {
    return prisma.user.findUnique({
        where: {id}
    })
}

async function findEmail(email: string) {
    return await prisma.user.findUnique({
        where: {email}
    })
}

async function findUsername(username: string) {
    return await prisma.user.findUnique({
        where: {username}
    })
}

export const userRepository = {
    findUser,
    findEmail,
    findUsername,
}