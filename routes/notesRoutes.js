import express from "express"
import { createNewNote, getAllNotes, updateNote } from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/", getAllNotes)

router.post("/", createNewNote)

router.put("/:id", updateNote)

router.delete("/:id", (req, res) => {
    res.status(200).json({message: "Note deleted successfully"})
})

export default router;