import axios from "axios";

const api = axios.create({
  baseURL: "https://ai-notes-app-4thb.onrender.com",
  headers: {
    "Content-Type": "application/json"
  }
});

/* =======================
   Notes API functions
   ======================= */

// Get all notes
export const getNotes = async () => {
  const response = await api.get("/notes");
  return response.data;
};

// Create a new note
export const createNote = async (data: {
  title: string;
  content: string;
}) => {
  const response = await api.post("/notes", data);
  return response.data;
};

// Update a note
export const updateNote = async (
  id: string,
  data: { title: string; content: string }
) => {
  const response = await api.put(`/notes/${id}`, data);
  return response.data;
};

// Delete a note
export const deleteNote = async (id: string) => {
  const response = await api.delete(`/notes/${id}`);
  return response.data;
};

// Summarize a note using AI
export const summarizeNote = async (id: string) => {
  const response = await api.post(`/notes/${id}/summarize`);
  return response.data;
};

export default api;
