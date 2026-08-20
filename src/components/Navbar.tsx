import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";
import { Code2, ArrowUpRight, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { to: "landing", label: "About" },
    { to: "services", label: "Services" },
    { to: "workflow", label: "Process" },
    { to: "skills", label: "Skills" },
    { to: "experience", label: "Experience" },
    { to: "projects", label: "Projects" },
    { to: "achievements", label: "Achievements" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080811]/90 backdrop-blur-2xl border-b border-purple-500/20 py-3 shadow-2xl shadow-purple-950/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="landing"
          smooth={true}
          duration={600}
          offset={-80}
          className="cursor-pointer group flex items-center gap-2.5"
        >
          <div className="p-2 rounded-xl bg-purple-600/10 border border-purple-500/30 group-hover:border-purple-500/80 transition duration-300">
            <Code2 className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition transform" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white font-mono">
            Navin<span className="text-purple-400">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation Bar */}
        <div className="hidden lg:flex items-center gap-1 bg-gray-900/60 border border-gray-800/80 backdrop-blur-xl px-4 py-1.5 rounded-full shadow-inner">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={600}
              offset={-80}
              spy={true}
              activeClass="!text-white !bg-purple-600/30 !border-purple-500/50"
              className="cursor-pointer text-xs font-semibold text-gray-300 hover:text-white px-3.5 py-1.5 rounded-full border border-transparent transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/navin87895"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-purple-200 bg-purple-950/40 border border-purple-500/40 rounded-full hover:bg-purple-600 hover:text-white transition shadow-md"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-600/30 transition transform hover:-translate-y-0.5 flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-200 hover:text-white focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-[#080811]/95 backdrop-blur-2xl border-b border-gray-800 shadow-2xl">
          <div className="flex flex-col space-y-2 max-w-md mx-auto">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={600}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-gray-200 hover:text-purple-400 px-4 py-2.5 rounded-xl hover:bg-purple-950/30 text-sm font-semibold transition"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-3 border-t border-gray-800">
              <a
                href="https://github.com/navin87895"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 text-xs font-bold text-purple-300 bg-purple-950/40 border border-purple-500/40 rounded-xl"
              >
                GitHub
              </a>
              <Link
                to="contact"
                smooth={true}
                duration={600}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="flex-1 text-center py-2 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
