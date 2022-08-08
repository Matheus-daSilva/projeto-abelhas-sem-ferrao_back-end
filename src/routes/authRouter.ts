import express from "express"
import { authController } from "../controllers/authController.js"
import { signUpMiddleware } from "../middlewares/authMiddleware.js"

const authRoute = express.Router()

authRoute.post("/signup", signUpMiddleware, authController.SignUp)

export default authRoute
