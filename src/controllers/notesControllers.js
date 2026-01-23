import Note from "../models/Note.js"

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find()
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error in getAllNotes controller", error)
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
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,
            { title, content },
            {
                new: true,            // gives updated response
                runValidators: true,  // validates schema
            }
        )
        res.status(200).json(updatedNote)
    } catch (error) {
        console.error("Error in updateNote controller", error)
        res.status(500).json({ messgae: "Internal Server Error" })
    }
}

export const deleteNote = async (req, res) => {
    try {
        const deleteNote = await Note.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteNote)
    } catch (error) {
        console.error("Error in deleteNote controller", error)
        res.status(500).json({ messgae: "Internal Server Error"})
    }
}