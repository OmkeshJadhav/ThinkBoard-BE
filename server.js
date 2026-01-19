import express from "express"
import notesRoutes from "notesRoutes.js"
const PORT = 3000

const app = express()

app.use("/api/notes", notesRoutes)

app.listen(PORT, () => {
    console.log(`App is listening on the PORT ${PORT}`);
})