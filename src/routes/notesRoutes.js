import express from "express"
import { createNewNote, deleteNote, getAllNotes, updateNote } from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/", getAllNotes)

router.post("/", createNewNote)

router.put("/:id", updateNote)

router.delete("/:id", deleteNote)

export default router;