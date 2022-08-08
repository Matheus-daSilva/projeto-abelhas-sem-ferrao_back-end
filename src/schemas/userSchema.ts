import joi from "joi"

export const signUpSchema = joi.object({
    email: joi.string().email().required(),
    username: joi.string().required(),
    photo: joi.string().required(),
    admin: joi.boolean(),
    password: joi.string().min(10).required(),
    passwordConfirmation: joi.ref("password")
})