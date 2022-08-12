import express from "express"
import authRoute from "./authRouter.js"
import commentRoute from "./commentsRouter.js"
import likesRoute from "./likesRouter.js"
import publicationRoute from "./publicationRoute.js"

const router = express.Router()

router.use(authRoute)
router.use(publicationRoute)
router.use(likesRoute)
router.use(commentRoute)

export default router