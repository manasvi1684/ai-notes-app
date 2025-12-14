import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import noteRoutes from "./routes/note.routes.js";

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.status(200).json({ message: "Notes API is running" });
});

// Routes
app.use("/notes", noteRoutes);

export default app;
