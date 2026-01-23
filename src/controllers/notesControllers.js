import Note from "../models/Note.js"
import mongoose from "mongoose";

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find()
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error in getAllNotes controller", error)
        res.status(500).json({ messgae: "Internal Server Error" })
    }
}

export const getNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id)
        console.log(note);
        res.status(200).json(note)
    } catch (error) {
        console.error("Error in getNoteById controller", error)
        res.status(500).json({ messgae: "Internal Server Error" })
    }
}

export const createNewNote = async (req, res) => {
    try {
        const { title, content } = req.body
        const newNote = new Note({ title: title, content: content })

        const savedNewNote = await newNote.save()
        res.status(201).json(savedNewNote)
    } catch (error) {
        console.error("Error in createNewNote controller", error)
        res.status(500).json({ messgae: "Internal Server Error" })
    }
}

export const updateNote = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid note ID" });
        }

        const { title, content } = req.body;

        const updatedNote = await Note.findByIdAndUpdate(req.params.id,
            { title, content },
            {
                new: true,            // gives updated response
                runValidators: true,  // validates schema
            }
        )

        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" })
        }

        res.status(200).json(updatedNote)
    } catch (error) {
        console.error("Error in updateNote controller", error)
        res.status(500).json({ messgae: "Internal Server Error" })
    }
}

export const deleteNote = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid note ID" });
        }

        const deleteNote = await Note.findByIdAndDelete(req.params.id)

        if (!deleteNote) {
            return res.status(404).json({ message: "Note not found" })
        }

        res.status(200).json({ message: "Note deleted successfully!!" })
    } catch (error) {
        console.error("Error in deleteNote controller", error)

        res.status(500).json({ messgae: "Internal Server Error" })
    }
}