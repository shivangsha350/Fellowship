import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Dropdown Component for Desktop
  const Dropdown = ({ keyName, width, links, label }) => {
    const toggleDropdown = () => {
      setOpenDropdown(openDropdown === keyName ? null : keyName);
    };

    return (
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center transition-colors duration-200 hover:text-blue-500"
        >
          {label} <ChevronDown size={16} className="ml-1" />
        </button>

        {openDropdown === keyName && (
          <div
            className={`absolute top-10 left-0 bg-white shadow-lg rounded-md py-2 ${width} animate-dropdown`}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 bg-white shadow px-4 sm:px-6 py-3 flex items-center justify-between transition-colors"
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.naiZpijxE5jAhs6tBd30cAHaCd?pid=Api&P=0&h=220"
          alt="Adore Fellowship Logo"
          className="h-8 sm:h-10 w-auto object-contain"
        />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-6 font-semibold text-gray-800">
        <a href="/" className={pathname === "/" ? "text-blue-500" : ""}>
          Home
        </a>

        <Dropdown
          keyName="about"
          label="About Us"
          width="w-52"
          links={[
            { href: "/about/story", label: "About ADORE" },
            { href: "/about/team", label: "Our Program" },
          ]}
        />

        {/* ✅ Desktop “Become a Fellow” button as link */}
        <a
          href="https://bit.ly/ADORE-FELLOWSHIP"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-400 hover:bg-blue-600 text-white px-4 sm:px-5 py-2 rounded-full shadow-md text-sm sm:text-base"
        >
          Become a Fellow
        </a>
      </div>

      {/* Right side (Mobile Menu Icon) */}
      <div className="flex items-center space-x-2 sm:space-x-4 md:hidden">
        <button
          className="p-2 rounded hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-50">
          <div className="flex flex-col space-y-1 p-4 font-semibold text-gray-800">
            <a href="/" className={pathname === "/" ? "text-blue-500" : ""}>
              Home
            </a>

            {/* Mobile Dropdown */}
            <div>
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === "about" ? null : "about")
                }
                className="flex items-center justify-between py-2 w-full"
              >
                About Us <ChevronDown size={16} />
              </button>
              {openDropdown === "about" && (
                <div className="pl-4 flex flex-col space-y-1">
                  <a
                    href="/about/story"
                    className="py-1 hover:text-blue-500 transition-colors"
                  >
                    About ADORE
                  </a>
                  <a
                    href="/about/team"
                    className="py-1 hover:text-blue-500 transition-colors"
                  >
                    Our Program
                  </a>
                </div>
              )}
            </div>

            {/* ✅ Mobile “Become a Fellow” button */}
            <a
              href="https://bit.ly/ADORE-FELLOWSHIP"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-md mt-2 text-center"
            >
              Become a Fellow
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
