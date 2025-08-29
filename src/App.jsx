import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./HeroSection";

function App() {
  return (
    
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Navbar */}
      <Navbar />
       
       <HeroSection />
     
    </div>
  );
}

export default App;
