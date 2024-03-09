import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
const app = express()
dotenv.config()
app.use(bodyParser.json())


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})