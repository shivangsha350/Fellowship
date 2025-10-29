import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";   // your Home page
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import HeroSection from "./HeroSection";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-16">
  {/* Your page content here */}
</div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
