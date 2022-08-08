import express from "express"
import authRoute from "./authRouter.js"

const router = express.Router()

router.use(authRoute)

export default router