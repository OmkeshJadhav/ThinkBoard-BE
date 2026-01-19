export const getAllNotes = (req, res) => {
    res.status(200).send("You have successfully fetched all the notes.")
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