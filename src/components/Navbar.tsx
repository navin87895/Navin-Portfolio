import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f0f1a] text-white px-6 py-4 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
          <span className="text-purple-400">&lt;</span>
          <span className="text-white"> Navin </span>
          <span className="text-purple-400">/&gt;</span>
        </h1>

        {/* Center Menu */}
        <div className="hidden md:flex space-x-6 text-sm sm:text-base md:text-lg mx-auto">
          <Link
            to="landing"
            smooth={true}
            duration={600}
            offset={-70}
            spy={true}
            activeClass="text-purple-400"
            className="cursor-pointer hover:text-purple-400"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={600}
            offset={-70}
            spy={true}
            activeClass="text-purple-400"
            className="cursor-pointer hover:text-purple-400"
          >
            Skills
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={600}
            offset={-70}
            spy={true}
            activeClass="text-purple-400"
            className="cursor-pointer hover:text-purple-400"
          >
            Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={600}
            offset={-70}
            spy={true}
            activeClass="text-purple-400"
            className="cursor-pointer hover:text-purple-400"
          >
            Projects
          </Link>
          <Link
            to="achievements"
            smooth={true}
            duration={600}
            offset={-70}
            spy={true}
            activeClass="text-purple-400"
            className="cursor-pointer hover:text-purple-400"
          >
            Achievements
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={600}
            offset={-70}
            spy={true}
            activeClass="text-purple-400"
            className="cursor-pointer hover:text-purple-400"
          >
            Education
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-70}
            spy={true}
            activeClass="text-purple-400"
            className="cursor-pointer hover:text-purple-400"
          >
            Contact
          </Link>
        </div>

        {/* Right Buttons */}
        <div className="flex space-x-2 sm:space-x-4">
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
      </div>
    </nav>
  );
};

export default Navbar;
