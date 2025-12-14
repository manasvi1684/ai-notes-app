import mongoose from "mongoose";

/**
 * NoteSchema defines the structure of a Note document in MongoDB.
 * Each note represents a single user-created note.
 */
const NoteSchema = new mongoose.Schema(
  {
    // Title of the note
    title: {
      type: String,
      required: true,
      trim: true
    },

    // Main content of the note
    content: {
      type: String,
      required: true
    },

    // AI-generated summary (optional)
    summary: {
      type: String,
      default: ""
    }
  },
  {
    // Automatically adds createdAt and updatedAt fields
    timestamps: true
  }
);

// Export the Note model
export default mongoose.model("Note", NoteSchema);
