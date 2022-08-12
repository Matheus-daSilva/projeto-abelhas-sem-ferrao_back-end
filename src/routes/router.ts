import express from "express"
import authRoute from "./authRouter.js"
import likesRoute from "./likesRouter.js"
import publicationRoute from "./publicationRoute.js"

const router = express.Router()

router.use(authRoute)
router.use(publicationRoute)
router.use(likesRoute)

export default router