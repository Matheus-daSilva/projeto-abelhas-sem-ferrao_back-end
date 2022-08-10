import express from "express"
import authRoute from "./authRouter.js"
import publicationRoute from "./publicationRoute.js"

const router = express.Router()

router.use(authRoute)
router.use(publicationRoute)

export default router