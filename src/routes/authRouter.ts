import express from "express"
import { authController } from "../controllers/authController.js"
import { schemasValidation } from "../middlewares/schemasMiddleware.js"
import { signInSchema, signUpSchema } from "../schemas/userSchema.js"


const authRoute = express.Router()

authRoute.post("/signup", schemasValidation(signUpSchema), authController.SignUp)
authRoute.post("/signin", schemasValidation(signInSchema), authController.SignIn)

export default authRoute
