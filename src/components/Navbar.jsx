import React, { useState, useEffect } from "react";
import { ChevronDown, Moon, Sun, Menu, X } from "lucide-react";

const Navbar = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [fellowOpen, setFellowOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Apply theme to <html>
  const applyTheme = (mode) => {
    const html = document.documentElement;
    if (mode === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <nav className="w-full shadow bg-white dark:bg-gray-900 px-4 sm:px-6 py-3 flex items-center justify-between transition-colors relative">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.naiZpijxE5jAhs6tBd30cAHaCd?pid=Api&P=0&h=220"
          alt="Adore Fellowship Logo"
          className="h-8 sm:h-10 w-auto"
        />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-6 font-semibold text-gray-800 dark:text-gray-100">
        <a href="/" className="text-orange-500">
          Home
        </a>

        {/* About Us Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setAboutOpen(true)}
          onMouseLeave={() => setAboutOpen(false)}
        >
          <button className="flex items-center">
            About Us <ChevronDown size={16} className="ml-1" />
          </button>
          {aboutOpen && (
            <div className="absolute top-10 left-0 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 w-52">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Our Story</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Team</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Impact</a>
            </div>
          )}
        </div>

        {/* Become a Fellow Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setFellowOpen(true)}
          onMouseLeave={() => setFellowOpen(false)}
        >
          <button className="flex items-center text-orange-500">
            Become a Fellow <ChevronDown size={16} className="ml-1" />
          </button>
          {fellowOpen && (
            <div className="absolute top-10 left-0 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 w-60">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Eligibility & Offerings</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Selection Process</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Why Bhumi Fellowship</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Meet our Fellows</a>
            </div>
          )}
        </div>

        {/* FAQ Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setFaqOpen(true)}
          onMouseLeave={() => setFaqOpen(false)}
        >
          <button className="flex items-center">
            FAQ <ChevronDown size={16} className="ml-1" />
          </button>
          {faqOpen && (
            <div className="absolute top-10 left-0 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 w-44">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">General</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Application</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Fellowship Life</a>
            </div>
          )}
        </div>

        <a href="#">Refer</a>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        <button className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-5 py-2 rounded-full shadow-md text-sm sm:text-base">
          Apply Now
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md py-4 px-6 space-y-4 font-semibold text-gray-800 dark:text-gray-100 md:hidden z-50">
          <a href="/" className="block text-orange-500">Home</a>

          {/* Collapsible About Us */}
          <div>
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex justify-between w-full"
            >
              About Us <ChevronDown size={16} />
            </button>
            {aboutOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <a href="#" className="block">Our Story</a>
                <a href="#" className="block">Team</a>
                <a href="#" className="block">Impact</a>
              </div>
            )}
          </div>

          {/* Collapsible Fellow */}
          <div>
            <button
              onClick={() => setFellowOpen(!fellowOpen)}
              className="flex justify-between w-full text-orange-500"
            >
              Become a Fellow <ChevronDown size={16} />
            </button>
            {fellowOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <a href="#" className="block">Eligibility & Offerings</a>
                <a href="#" className="block">Selection Process</a>
                <a href="#" className="block">Why Bhumi Fellowship</a>
                <a href="#" className="block">Meet our Fellows</a>
              </div>
            )}
          </div>

          {/* Collapsible FAQ */}
          <div>
            <button
              onClick={() => setFaqOpen(!faqOpen)}
              className="flex justify-between w-full"
            >
              FAQ <ChevronDown size={16} />
            </button>
            {faqOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <a href="#" className="block">General</a>
                <a href="#" className="block">Application</a>
                <a href="#" className="block">Fellowship Life</a>
              </div>
            )}
          </div>

          <a href="#">Refer</a>

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full shadow-md">
            Apply Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
