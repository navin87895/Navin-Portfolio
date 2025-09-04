// src/pages/Projects.tsx
import React from "react";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const projects = [
    {
      title: "Driver Hiring Web App",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      desc: "Developed a driver hiring web app using MERN stack. Hands-on experience with ReactJS and REST APIs.",
      github: "https://github.com/navin87895/milhire",
    },
    {
      title: "Advanced E-Voting System",
      tech: ["PHP", "MySQL", "HTML", "CSS"],
      desc: "Created a secure online voting system with authentication and database integration.",
      github: "https://github.com/navin87895"
    },
    {
      title: "Notes Management Website",
      tech: ["MySQL", "HTML", "CSS", "PHP"],
      desc: "Built a website to add, edit, and manage notes efficiently.",
      github: "https://github.com/navin87895/Eduholic",
    },
  ];

  return (
    <section id="projects" className="bg-[#0f0f1a] text-white px-6 py-16">
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-gray-400 text-center font-bold text-lg mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Here are some of the projects I have worked on, showcasing my skills and
        experience:
      </motion.p>

      {/* Projects List */}
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-0 md:grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(168, 85, 247, 0.5)",
              borderColor: "rgb(168, 85, 247)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-purple-300 mb-3">
              {project.tech.join(", ")}
            </p>
            <p className="text-gray-300 mb-3">{project.desc}</p>
            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                View on GitHub
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
