import express from "express"
import { authController } from "../controllers/authController.js"

const authRoute = express.Router()

authRoute.post("/signup", authController.SignUp)

export default authRoute
