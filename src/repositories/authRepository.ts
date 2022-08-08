import prisma from "../config/database.js";
import { User } from "@prisma/client";

export interface UserData {
    username: string;
    email: string;
    password: string;
    passwordConfirmation?: string
    photo: string;
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
 
async function insertUser(infos: UserData) {
    return await prisma.user.create({
        data: infos
    })
}

export const authRepository = {
    findEmail,
    findUsername,
    insertUser
}