import express from "express"
import { publicationController } from "../controllers/publicationsController.js"
import { schemasValidation } from "../middlewares/schemasMiddleware.js"
import { tokenValidation } from "../middlewares/tokenValidation.js"
import { publicationSchema } from "../schemas/publicationsSchema.js"

const publicationRoute = express.Router()

publicationRoute.post("/publications", tokenValidation, schemasValidation(publicationSchema),publicationController.PostPublication)
publicationRoute.get("/publications", tokenValidation, publicationController.GetPublications)
publicationRoute.delete("/publications/:id", tokenValidation, publicationController.DeletePublication)
publicationRoute.put("/publications/:id", tokenValidation, publicationController.PutPublication)

export default publicationRoute