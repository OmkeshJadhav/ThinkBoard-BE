import express from "express"
const PORT = 3000

const app = express()

app.get("/", (req, res) => {
    res.status(200).send("You have 6 notes")
})

app.listen(PORT, () => {
    console.log(`App is listening on the PORT ${PORT}`);
})