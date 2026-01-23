import mongoose from "mongoose";

// 1 - Create a schema using new mongoose.Schema
// 2 - Create a model off that schema using mongoose.model("Model Name", schema)

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    }, 
    { 
        timestamps: true 
    }
)

const Note = mongoose.model("Note", noteSchema)

export default Note;