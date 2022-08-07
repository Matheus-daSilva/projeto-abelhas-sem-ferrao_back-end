import express from "express"
import app from "../app"
import authRoute from "./authRouter.js"

const router = express.Router()

app.use(authRoute)

export default router