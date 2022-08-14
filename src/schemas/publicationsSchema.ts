import joi from "joi"

export const publicationSchema = joi.object({
    url: joi.string(),
    description: joi.string().required()
})