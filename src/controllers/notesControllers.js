import Note from "../models/Note.js"

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find()
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error in getAllNotes controller", error)
        res.status(500).json({messgae: "Internal Server Error"})
    }
}

export const createNewNote = (req, res) => {
    res.status(201).json({message: "New Note created successfully."})
}

export const updateNote = (req, res) => {
    res.status(200).json({message: "Note updated successfully"})
}

export const deleteNote = (req, res) => {
    res.status(200).json({message: "Note deleted successfully"})
}