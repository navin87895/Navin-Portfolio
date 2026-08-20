import React, { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-scroll";
import { Briefcase, Code, Sparkles, CheckCircle2, ArrowDown, ExternalLink } from "lucide-react";
import profilePic from "../assets/profile.jpg";
import TerminalWidget from "../components/TerminalWidget";

const Landing: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth Parallax Transform Layers
  const orb1Y = useTransform(scrollYProgress, [0, 1], ["0px", "160px"]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["0px", "-140px"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0px", "40px"]);

  const stats = [
    { icon: <Code className="w-5 h-5 text-purple-400" />, count: "15+", label: "Projects Completed" },
    { icon: <Briefcase className="w-5 h-5 text-pink-400" />, count: "2+", label: "Years Tech Exp." },
    { icon: <Sparkles className="w-5 h-5 text-indigo-400" />, count: "Full-Stack", label: "MERN Specialist" },
    { icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />, count: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section
      ref={containerRef}
      id="landing"
      className="bg-[#0b0b14] text-white px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-32 sm:pb-24 relative overflow-hidden flex flex-col justify-between min-h-[90vh]"
    >
      {/* Background Parallax Orbs */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute top-10 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute bottom-10 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-pink-600/15 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Intro Text & Buttons */}
          <motion.div
            style={{ y: contentY }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Live Availability Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold shadow-inner">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Freelance Projects & Full-Time Roles</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Hi, I am <br />
              <span className="bg-gradient-to-r from-white via-purple-300 to-pink-400 bg-clip-text text-transparent">
                Navin Kumar
              </span>
            </h1>

            {/* Typewriter Skill Subtitle */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-200">
              I am a{" "}
              <span className="text-purple-400 border-b-2 border-purple-500/50 pb-0.5">
                <Typewriter
                  words={[
                    "Freelance Web Developer",
                    "Full-Stack MERN Engineer",
                    "UI/UX Architect",
                    "Problem Solver",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1200}
                />
              </span>
            </h3>

            {/* Bio Description */}
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Passionate Full-Stack Developer specializing in modern MERN web applications, high-performance REST APIs, and responsive custom web solutions for global clients.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="contact"
                smooth={true}
                duration={600}
                offset={-80}
                className="px-7 py-3.5 text-sm sm:text-base font-bold rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 cursor-pointer transition transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Hire Me for Freelance</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
              <a
                href="/Navin-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 text-sm sm:text-base font-bold rounded-full border border-purple-500/40 bg-purple-950/30 hover:bg-purple-900/50 text-purple-200 transition"
              >
                Check Resume 📄
              </a>
            </div>
          </motion.div>

          {/* Right Column: Avatar & Interactive IDE Terminal Widget */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center lg:items-end gap-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            {/* Glowing Profile Avatar */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
              <img
                src={profilePic}
                alt="Navin Kumar"
                className="relative rounded-full w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 object-cover border-4 border-purple-400/80 shadow-2xl transition transform group-hover:scale-105"
              />
            </div>

            {/* IDE Terminal Component */}
            <TerminalWidget />
          </motion.div>
        </div>

        {/* Symmetric Quick Stats Bar */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, borderColor: "rgba(168, 85, 247, 0.6)" }}
              className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 p-4 sm:p-5 rounded-2xl flex items-center gap-3.5 hover:shadow-lg hover:shadow-purple-500/10 transition"
            >
              <div className="p-3 rounded-xl bg-gray-800/80 border border-gray-700/50 shrink-0">
                {stat.icon}
              </div>
              <div className="min-w-0">
                <h4 className="text-base sm:text-xl font-bold text-white truncate">{stat.count}</h4>
                <p className="text-xs sm:text-sm text-gray-400 truncate">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated Down Arrow Scroll Guide */}
      <div className="flex justify-center mt-12 relative z-10">
        <Link
          to="services"
          smooth={true}
          duration={600}
          offset={-80}
          aria-label="Scroll to Services"
          className="cursor-pointer p-2.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-400 hover:text-white hover:bg-purple-600 transition animate-bounce"
        >
          <ArrowDown className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default Landing;
