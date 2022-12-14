import joi from "joi"

export const signUpSchema = joi.object({
    email: joi.string().email().required(),
    username: joi.string().required(),
    admin: joi.boolean(),
    password: joi.string().min(8).required(),
    passwordConfirmation: joi.ref("password")
})

export const signInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).required()
})