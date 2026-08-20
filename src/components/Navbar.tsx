import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { to: "landing", label: "About" },
    { to: "services", label: "Services" },
    { to: "skills", label: "Skills" },
    { to: "experience", label: "Experience" },
    { to: "projects", label: "Projects" },
    { to: "achievements", label: "Achievements" },
    { to: "education", label: "Education" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f0f1a]/80 backdrop-blur-md border-b border-purple-500/20 text-white px-6 py-4 shadow-xl z-50 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
          <span className="text-purple-400">&lt;</span>
          <span className="text-white"> Navin </span>
          <span className="text-purple-400">/&gt;</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm sm:text-base md:text-base mx-auto">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={600}
              offset={-70}
              spy={true}
              activeClass="text-purple-400 font-semibold"
              className="cursor-pointer text-gray-300 hover:text-purple-400 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* GitHub / LinkedIn buttons */}
        <div className="hidden md:flex space-x-2 sm:space-x-3">
          <a
            href="https://github.com/navin87895"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold border border-purple-500/50 bg-purple-950/30 text-purple-300 rounded-full hover:bg-purple-600 hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/navin-kumar-b92434231"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold border border-purple-500/50 bg-purple-950/30 text-purple-300 rounded-full hover:bg-purple-600 hover:text-white transition"
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
        <div className="md:hidden mt-4 space-y-3 flex flex-col items-center bg-gray-900/95 backdrop-blur-xl border border-gray-800 rounded-2xl py-5 shadow-2xl">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={600}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-gray-200 hover:text-purple-400 text-base font-semibold"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex space-x-3 pt-2">
            <a
              href="https://github.com/navin87895"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 text-xs border border-purple-500/50 rounded-full hover:bg-purple-600 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/navin-kumar-b92434231"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 text-xs border border-purple-500/50 rounded-full hover:bg-purple-600 transition"
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
