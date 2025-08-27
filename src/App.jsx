import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <h1 className="text-center mt-20 text-2xl font-bold">
        Welcome to Adore Fellowship
      </h1>
    </div>
  );
}

export default App;
