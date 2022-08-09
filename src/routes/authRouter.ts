import express from "express"
import { authController } from "../controllers/authController.js"
import { signInMiddleware, signUpMiddleware } from "../middlewares/authMiddleware.js"

const authRoute = express.Router()

authRoute.post("/signup", signUpMiddleware, authController.SignUp)
authRoute.post("/signin", signInMiddleware, authController.SignIn)

export default authRoute
