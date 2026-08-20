import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import { ArrowUp, Code2 } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080810] text-white py-12 border-t border-gray-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Logo / Name */}
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-purple-600/20 border border-purple-500/30">
            <Code2 className="w-4 h-4 text-purple-400" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Navin<span className="text-purple-400">.dev</span>
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5 text-gray-400">
          <a
            href="https://linkedin.com/in/navin-kumar-b92434231"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="p-2 rounded-xl bg-gray-900 border border-gray-800 hover:text-purple-400 hover:border-purple-500/50 transition"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/navin87895"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="p-2 rounded-xl bg-gray-900 border border-gray-800 hover:text-purple-400 hover:border-purple-500/50 transition"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="mailto:navin87895@gmail.com"
            title="Email"
            className="p-2 rounded-xl bg-gray-900 border border-gray-800 hover:text-purple-400 hover:border-purple-500/50 transition"
          >
            <FaEnvelope className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright & Scroll To Top */}
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span>© {new Date().getFullYear()} Navin Kumar. All rights reserved.</span>
          <Link
            to="landing"
            smooth={true}
            duration={600}
            offset={-80}
            title="Scroll to top"
            className="cursor-pointer p-2 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-400 hover:text-white hover:bg-purple-600 transition"
          >
            <ArrowUp className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
