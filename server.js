import express from "express"
const PORT = 3000

const app = express()

app.get("/api/notes", (req, res) => {
    res.status(200).send("You have 6 notes")
})

app.post("/api/notes", (req, res) => {
    res.status(201).send("New Note created successfully.")
})

app.put("/api/notes/:id", (req, res) => {
    res.status(200).send("Note updated successfully")
})

app.delete("/api/notes/:id", (req, res) => {
    res.status(200).send("Note updated successfully")
})

app.listen(PORT, () => {
    console.log(`App is listening on the PORT ${PORT}`);
})