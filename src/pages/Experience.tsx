// src/pages/Experience.tsx
import { motion, Variants } from "framer-motion";
import React from "react";

const Experience: React.FC = () => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const experiences = [
    {
      img: "/logos/xietus.png",
      title: "Software Developer Intern - Xietus Lab",
      period: "Sep 2025 - Present",
      desc: "Developed and maintained dynamic web applications using front-end and back-end technologies, integrating databases and APIs, debugging scalable solutions, and writing clean, well-documented code to ensure performance, reliability, and collaboration.",
      skills:
        "React.js, Node.js, Express.js, Software Construction, Web Infrastructure, Software Testing & Debugging",
    },
    {
      img: "/logos/lgm.png",
      title: "Web Developer Intern - LetsGrowMore",
      period: "Aug 2024 - Sept 2024",
      desc: "Worked on web development projects, gained hands-on experience with ReactJS, hooks, lifecycle methods, and developed responsive UI features.",
      skills: "ReactJS, JavaScript, CSS, HTML, Git",
    },
  ];

  return (
    <section id="experience" className="bg-[#0f0f1a] text-white px-6 py-16">
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      {/* Experience Cards */}
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg flex items-start gap-6 border border-gray-700"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(168, 85, 247, 0.5)",
              borderColor: "rgb(168, 85, 247)", // purple-500 glow
            }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
          >
            <img
              src={exp.img}
              alt={exp.title}
              className="w-16 h-16 object-contain rounded-md bg-white p-2"
            />
            <div>
              <h3 className="text-2xl font-semibold">{exp.title}</h3>
              <p className="text-gray-400">{exp.period}</p>
              <p className="mt-3 text-gray-300">{exp.desc}</p>
              <p className="mt-3 text-sm text-purple-300">
                Skills: {exp.skills}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
