import express, {json} from "express"
import "express-async-errors"
import cors from "cors"
import router from "./routes/router.js"
import { errorHandler } from "./middlewares/errorHandlerMiddleware.js"

const app = express()
app.use(json())
app.use(cors())
app.use(router)
app.use(errorHandler)

export default app