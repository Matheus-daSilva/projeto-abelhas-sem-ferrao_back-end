import joi from "joi"

export const publicationSchema = joi.object({
    description: joi.string().required()
})