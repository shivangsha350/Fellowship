import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null); // 'about', 'fellow', 'faq' or null
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

  const Dropdown = ({ keyName, width, links, label }) => {
    const toggleDropdown = () => {
      setOpenDropdown(openDropdown === keyName ? null : keyName);
    };

    return (
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center transition-colors duration-200 hover:text-orange-500"
        >
          {label} <ChevronDown size={16} className="ml-1" />
        </button>

        {openDropdown === keyName && (
          <div
            className={`absolute top-10 left-0 bg-white shadow-lg rounded-md py-2 ${width} 
            transform transition-all duration-300 ease-out opacity-0 scale-95 animate-dropdown`}
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
      className="w-full shadow bg-orange-30 px-4 sm:px-6 py-3 flex items-center justify-between transition-colors relative"
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.naiZpijxE5jAhs6tBd30cAHaCd?pid=Api&P=0&h=220"
          alt="Adore Fellowship Logo"
          className="h-8 sm:h-10 w-auto"
        />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-6 font-semibold text-gray-800">
        <a href="/" className={pathname === "/" ? "text-orange-500" : ""}>
          Home
        </a>

        <Dropdown
          keyName="about"
          label="About Us"
          width="w-52"
          links={[
            { href: "/about/story", label: "Our Story" },
            { href: "/about/team", label: "Team" },
            { href: "/about/impact", label: "Impact" },
          ]}
        />

        <Dropdown
          keyName="fellow"
          label="Become a Fellow"
          width="w-60"
          links={[
            { href: "/fellow/eligibility", label: "Eligibility & Offerings" },
            { href: "/fellow/selection", label: "Selection Process" },
            { href: "/fellow/why", label: "Why Bhumi Fellowship" },
            { href: "/fellow/list", label: "Meet our Fellows" },
          ]}
        />

        <Dropdown
          keyName="faq"
          label="FAQ"
          width="w-44"
          links={[
            { href: "/faq/general", label: "General" },
            { href: "/faq/application", label: "Application" },
            { href: "/faq/life", label: "Fellowship Life" },
          ]}
        />

        <a href="/refer" className={pathname === "/refer" ? "text-orange-500" : ""}>
          Refer
        </a>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        <button className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-5 py-2 rounded-full shadow-md text-sm sm:text-base">
          Apply Now
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-50">
          <div className="flex flex-col space-y-1 p-4 font-semibold text-gray-800">
            <a href="/" className={pathname === "/" ? "text-orange-500" : ""}>
              Home
            </a>

            {/* Mobile Dropdowns */}
            {["about", "fellow", "faq"].map((key) => {
              let links = [];
              let label = "";
              if (key === "about") {
                label = "About Us";
                links = [
                  { href: "/about/story", label: "Our Story" },
                  { href: "/about/team", label: "Team" },
                  { href: "/about/impact", label: "Impact" },
                ];
              } else if (key === "fellow") {
                label = "Become a Fellow";
                links = [
                  { href: "/fellow/eligibility", label: "Eligibility & Offerings" },
                  { href: "/fellow/selection", label: "Selection Process" },
                  { href: "/fellow/why", label: "Why Bhumi Fellowship" },
                  { href: "/fellow/list", label: "Meet our Fellows" },
                ];
              } else if (key === "faq") {
                label = "FAQ";
                links = [
                  { href: "/faq/general", label: "General" },
                  { href: "/faq/application", label: "Application" },
                  { href: "/faq/life", label: "Fellowship Life" },
                ];
              }

              return (
                <div key={key}>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === key ? null : key)
                    }
                    className="flex items-center w-full justify-between py-2"
                  >
                    {label} <ChevronDown size={16} />
                  </button>
                  {openDropdown === key && (
                    <div className="pl-4 flex flex-col space-y-1">
                      {links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className="py-1 hover:text-orange-500"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <a href="/refer" className={pathname === "/refer" ? "text-orange-500" : ""}>
              Refer
            </a>
          </div>
        </div>
      )}


      
    </nav>
  );
};

export default Navbar;
