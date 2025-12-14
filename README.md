# AI-Powered Notes Application

A modern, full-stack notes application that leverages Google's Gemini AI to automatically summarize your thoughts. Built with a premium, responsive UI using React and Tailwind CSS v4.

##  Features

- **Smart Summarization**: One-click AI summarization of your notes using Google Gemini 2.5 Flash.
- **Modern UI**: Polished, responsive interface built with Tailwind CSS v4 using a glassmorphism and gradient aesthetic.
- **Full CRUD**: Create, Read, Update (Inline Edit), and Delete notes.
- **Real-time Feedback**: Loading states, interactive hover effects, and error handling.

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 (via Vite 7)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose)
- **AI Integration**: Google Generative AI SDK (`@google/generative-ai`)

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18+)
- MongoDB (running locally or Atlas URI)
- Google Gemini API Key

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Notes_application
```

### 2. Backend Setup
Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:
```env
PORT=5001
MONGODB_URI=mongodb://localhost:27017/notes_db
GEMINI_API_KEY=your_gemini_api_key_here
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
Navigate to the frontend directory and install dependencies:
```bash
cd ../frontend
# We use --force to handle some peer dependency mismatches with alpha versions if necessary,
# but a standard install should work if versions were resolved correctly.
npm install
```

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 📝 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/notes` | Fetch all notes |
| POST | `/notes` | Create a new note |
| GET | `/notes/:id` | Get a specific note |
| PUT | `/notes/:id` | Update a note |
| DELETE | `/notes/:id` | Delete a note |
| POST | `/notes/:id/summarize` | Generate AI summary |

##  Design System

The application uses a custom Tailwind v4 configuration:
- **Primary Color**: Indigo (`indigo-600`) to Purple (`purple-600`) gradients.
- **Cards**: White with soft shadows (`shadow-sm` -> `shadow-xl`) and border accents.
- **Typography**: Clean sans-serif hierarchy.
