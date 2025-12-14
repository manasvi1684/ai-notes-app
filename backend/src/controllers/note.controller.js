import Note from "../models/Note.model.js";
import { generateSummary } from "../utils/gemini.js";
import mongoose from "mongoose";


/**
 * @desc    Create a new note
 * @route   POST /notes
 */
export const createNote = async (req, res) => {
  try {
    // Destructure title and content from request body
    const { title, content } = req.body;

    // Basic validation
    if (!title || !content) {
      return res.status(400).json({
        message: "Title and content are required"
      });
    }

    // Create new note document
    const note = await Note.create({
      title,
      content
    });

    // Send created note as response
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create note",
      error: error.message
    });
  }
};

/**
 * @desc    Get all notes
 * @route   GET /notes
 */
export const getAllNotes = async (req, res) => {
  try {
    // Fetch all notes sorted by latest first
    const notes = await Note.find().sort({ createdAt: -1 });

    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch notes",
      error: error.message
    });
  }
};

/**
 * @desc    Get a single note by ID
 * @route   GET /notes/:id
 */
export const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find note by MongoDB ID
    const note = await Note.findById(id);

    // If note does not exist
    if (!note) {
      return res.status(404).json({
        message: "Note not found"
      });
    }

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch note",
      error: error.message
    });
  }
};

/**
 * @desc    Update a note
 * @route   PUT /notes/:id
 */
export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid note ID"
      });
    }

    const { title, content } = req.body;

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true, runValidators: true }
    );

    if (!updatedNote) {
      return res.status(404).json({
        message: "Note not found"
      });
    }

    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update note",
      error: error.message
    });
  }
};


/**
 * @desc    Delete a note
 * @route   DELETE /notes/:id
 */
export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({
        message: "Note not found"
      });
    }

    res.status(200).json({
      message: "Note deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete note",
      error: error.message
    });
  }
};

/**
 * @desc    Generate and save AI summary for a note
 * @route   POST /notes/:id/summarize
 */
export const summarizeNote = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid note ID" });
    }

    // Find note
    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    // Generate summary using Gemini
    const summary = await generateSummary(note.content);

    // Save summary to DB
    note.summary = summary;
    await note.save();

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({
      message: "Failed to summarize note",
      error: error.message
    });
  }
};

