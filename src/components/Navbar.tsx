import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { to: "landing", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "experience", label: "Experience" },
    { to: "projects", label: "Projects" },
    { to: "achievements", label: "Achievements" },
    { to: "education", label: "Education" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f0f1a] text-white px-6 py-4 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
          <span className="text-purple-400">&lt;</span>
          <span className="text-white"> Navin </span>
          <span className="text-purple-400">/&gt;</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm sm:text-base md:text-lg mx-auto">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={600}
              offset={-70}
              spy={true}
              activeClass="text-purple-400"
              className="cursor-pointer hover:text-purple-400"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* GitHub / LinkedIn buttons */}
        <div className="hidden md:flex space-x-2 sm:space-x-4">
          <a
            href="https://github.com/navin87895"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base border border-purple-500 rounded-full hover:bg-purple-600 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/navin-kumar-b92434231"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base border border-purple-500 rounded-full hover:bg-purple-600 transition"
          >
            LinkedIn
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FiX size={28} className="text-white" />
            ) : (
              <FiMenu size={28} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 flex flex-col items-center bg-gray-900 rounded-lg py-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={600}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer hover:text-purple-400 text-lg font-semibold"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex space-x-4 pt-2">
            <a
              href="https://github.com/navin87895"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-sm border border-purple-500 rounded-full hover:bg-purple-600 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/navin-kumar-b92434231"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-sm border border-purple-500 rounded-full hover:bg-purple-600 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
