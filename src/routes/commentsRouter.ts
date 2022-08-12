import express from "express"
import { commentsController } from "../controllers/commentsController.js"
import { tokenValidation } from "../middlewares/tokenValidation.js"

const commentRoute = express.Router()

commentRoute.post("/comment", tokenValidation, commentsController.PostComment)
commentRoute.delete("/comment/:id", tokenValidation, commentsController.DeleteComment)

export default commentRoute