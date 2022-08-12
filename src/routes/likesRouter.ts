import express from "express"
import { likesController } from "../controllers/likesController.js"
import { tokenValidation } from "../middlewares/tokenValidation.js"

const likesRoute = express.Router()

likesRoute.post("/likes", tokenValidation, likesController.LikePublication)

export default likesRoute