import express from "express"
import { publicationController } from "../controllers/publicationsController.js"
import { tokenValidation } from "../middlewares/tokenValidation.js"

const publicationRoute = express.Router()

publicationRoute.post("/publications", tokenValidation, publicationController.PostPublication)
publicationRoute.get("/publications", tokenValidation, publicationController.GetPublications)

export default publicationRoute