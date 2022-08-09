import prisma from "../config/database.js";
import { User } from "@prisma/client";
import { type } from "os";
import { Session } from "inspector";

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

async function createAccess(token: string, userId: number) {
    return await prisma.session.create({
        data: {token, userId}
    })
}

export const authRepository = {
    findEmail,
    findUsername,
    insertUser,
    createAccess,
}