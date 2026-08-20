import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, Github, Sparkles } from "lucide-react";

interface Project {
  title: string;
  category: "Freelance & MERN" | "Web Apps" | "PHP & Database";
  tech: string[];
  desc: string;
  github?: string;
  live?: string;
  featured?: boolean;
}

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const projects: Project[] = [
    {
      title: "Driver Hiring Web App (Milhire)",
      category: "Freelance & MERN",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API"],
      desc: "Comprehensive driver hiring and management web application built using the MERN stack. Features real-time driver listings, hiring requests, user authentication, and responsive UI.",
      github: "https://github.com/navin87895/milhire",
      featured: true,
    },
    {
      title: "Advanced E-Voting System",
      category: "PHP & Database",
      tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
      desc: "Secure online e-voting platform equipped with encrypted user authentication, real-time voter verification, and database auditing to prevent duplicate voting.",
      github: "https://github.com/navin87895",
    },
    {
      title: "Notes Management Platform (Eduholic)",
      category: "Web Apps",
      tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      desc: "Efficient notes management portal for students and professionals to organize, edit, upload, and search educational notes and study materials seamlessly.",
      github: "https://github.com/navin87895/Eduholic",
    },
    {
      title: "Freelance Portfolio & Client Web Solutions",
      category: "Freelance & MERN",
      tech: ["React.js", "Tailwind CSS", "EmailJS", "Framer Motion", "Vite"],
      desc: "Custom high-converting landing pages and client web templates built with interactive animations, glassmorphism design, fast performance, and integrated email messaging.",
      github: "https://github.com/navin87895/Navin-Portfolio",
      featured: true,
    },
  ];

  const categories = ["All", "Freelance & MERN", "Web Apps", "PHP & Database"];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="bg-[#0f0f1a] text-white px-6 py-20 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/30 uppercase tracking-wider">
            Portfolio & Client Work
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Here are some of the full-stack web applications and client solutions I have developed.
          </p>
        </motion.div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-gray-900/60 backdrop-blur-xl p-4 rounded-2xl border border-gray-800">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === category
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/40"
                    : "bg-gray-800/80 text-gray-400 hover:text-white hover:bg-gray-700/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search tech or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-800/90 border border-gray-700/80 text-white placeholder-gray-400 text-xs sm:text-sm rounded-xl pl-9 pr-4 py-2 focus:outline-none focus:border-purple-500 transition"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{
                  y: -5,
                  borderColor: "rgba(168, 85, 247, 0.6)",
                  boxShadow: "0px 0px 25px rgba(168, 85, 247, 0.2)",
                }}
                className="bg-gray-900/60 backdrop-blur-xl p-7 rounded-2xl border border-gray-800 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-bold tracking-wider text-purple-300 uppercase px-3 py-1 rounded-full bg-purple-900/40 border border-purple-700/50">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2.5 py-1 rounded-full">
                        <Sparkles className="w-3 h-3" /> Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-gray-800 text-purple-300 border border-gray-700/60 px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-800/80">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-purple-400 transition"
                    >
                      <Github className="w-4 h-4" /> Code Repository
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-purple-300 transition ml-auto"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            No projects found matching your search query.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
