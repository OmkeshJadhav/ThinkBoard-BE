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

export const createNewNote = async (req, res) => {
    try {
        const {title, content} = req.body
        const newNote = new Note({title: title, content: content})

        const savedNewNote = await newNote.save()
        res.status(201).json(savedNewNote)
    } catch (error) {
        console.error("Error in getAllNotes controller", error)
        res.status(500).json({messgae: "Internal Server Error"})
    }
}

export const updateNote = (req, res) => {
    res.status(200).json({message: "Note updated successfully"})
}

export const deleteNote = (req, res) => {
    res.status(200).json({message: "Note deleted successfully"})
}