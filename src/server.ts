import app from "./app.js"
import dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT || 6000

app.listen(port, () => console.log(`The server is running on port ${port}`))