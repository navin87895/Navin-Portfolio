import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f1a] text-white py-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-4">
        {/* Name */}
        <h2 className="text-lg font-bold text-purple-400">Navin Kumar</h2>

        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://linkedin.com/in/navin-kumar-b92434231"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/navin87895"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:navin87895@gmail.com"
            className="hover:text-purple-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-white">
          © {new Date().getFullYear()} Navin Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
