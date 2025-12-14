import { useState } from "react";
import CreateNote from "./components/CreateNote";
import NotesList from "./components/NotesList";
import LandingPage from "./components/LandingPage";

const App = () => {
  const [refreshKey, setRefreshKey] = useState(0);
  const [showLanding, setShowLanding] = useState(true);

  const refreshNotes = () => {
    setRefreshKey((prev) => prev + 1);
  };

  const enterApp = () => {
    setShowLanding(false);
  };

  if (showLanding) {
    return <LandingPage onEnter={enterApp} />;
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </span>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-indigo-600">
                AI Notes App
              </h1>
            </div>
            {/* Navigation or User Profile placeholder could go here */}
          </div>
        </div>
      </header>

      <CreateNote onNoteCreated={refreshNotes} />
      <NotesList refreshKey={refreshKey} />
    </div>
  );
};

export default App;
