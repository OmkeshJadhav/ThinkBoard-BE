import express from "express"
import notesRoutes from "../src/routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import { configDotenv } from "dotenv"

configDotenv()

const PORT = process.env.PORT

const app = express()

connectDB()

// Middleware - Added for POST request - Helps to access req.body
app.use(express.json())

// Simple custom middleware
// app.use((req, res, next) => {
//     console.log(`Request method is ${req.method} and Request URL is ${req.url}`)
//     next()
// })

app.use("/api/notes", notesRoutes)

app.listen(PORT, () => {
    console.log(`App is listening on the PORT ${PORT}`);
})