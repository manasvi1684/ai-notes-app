import express from "express";

// Import controller functions
import {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
  summarizeNote
} from "../controllers/note.controller.js";

// Create router instance
const router = express.Router();

/**
 * @route   POST /notes
 * @desc    Create a new note
 */
router.post("/", createNote);

/**
 * @route   GET /notes
 * @desc    Get all notes
 */
router.get("/", getAllNotes);

/**
 * @route   GET /notes/:id
 * @desc    Get a single note by ID
 */


router.post("/:id/summarize", summarizeNote);


router.get("/:id", getNoteById);

/**
 * @route   PUT /notes/:id
 * @desc    Update a note
 */
router.put("/:id", updateNote);

/**
 * @route   DELETE /notes/:id
 * @desc    Delete a note
 */
router.delete("/:id", deleteNote);

// Export router
export default router;
