import express, {json} from "express"
import "express-async-errors"
import cors from "cors"
import router from "./routes/router.js"
import { errorHandler } from "./middlewares/errorHandlerMiddleware.js"

const app = express()
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    app.use(cors())
    next()
});
app.use(json())
app.use(router)
app.use(errorHandler)

export default app