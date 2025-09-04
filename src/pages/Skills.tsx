// src/pages/Skills.tsx
import { motion } from "framer-motion";
import React, { useState } from "react";

const Skills: React.FC = () => {
  const skillLogos: Record<string, string> = {
    "React Js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    Redux:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    JavaScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    Bootstrap:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    "Tailwind CSS":
      "https://balticanebula.com/content/images/2023/06/plus-tailwind.jpg",

    "Node Js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Express Js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    MySQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    MongoDB:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",

    "C++":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    Python:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    GitHub:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "VS Code":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    Postman: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    Linux:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    Windows:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
    Jira: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    Netlify: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
    Vercel:
      "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
  };

  const categories: Record<string, string[]> = {
    Frontend: [
      "React Js",
      "Redux",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Tailwind CSS",
    ],
    Backend: ["Node Js", "Express Js", "MySQL", "MongoDB"],
    Others: [
      "C++",
      "Python",
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Linux",
      "Windows",
      "Jira",
      "Netlify",
      "Vercel",
    ],
  };

  const renderSkills = (skills: string[]) =>
    skills.map((skill, index) => (
      <motion.li
        key={skill}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.05, duration: 0.3 }}
        whileHover={{
          scale: 1.08,
          boxShadow: "0px 0px 15px rgba(168, 85, 247, 0.5)",
          borderColor: "rgb(168, 85, 247)",
        }}
        className="flex items-center gap-2 bg-[#1c1c2b] text-gray-200 py-2 px-3 rounded-lg border border-gray-700 shadow-sm transition duration-300"
      >
        <img
          src={skillLogos[skill]}
          alt={`${skill} logo`}
          className="w-6 h-6 object-contain"
        />
        <span className="text-sm font-medium">{skill}</span>
      </motion.li>
    ));

  // Small reusable card with tilt effect
  const TiltCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const { left, top, width, height } =
        e.currentTarget.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      const rotateX = (y / height - 0.5) * 20; // max 20deg tilt
      const rotateY = (x / width - 0.5) * -20;

      setRotate({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
      setRotate({ x: 0, y: 0 });
    };

    return (
      <motion.div
        style={{ perspective: 1000 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          style={{
            rotateX: rotate.x,
            rotateY: rotate.y,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="bg-[#121224] p-6 rounded-2xl border border-gray-700 shadow-lg hover:border-purple-400 hover:shadow-purple-500/20"
        >
          {children}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="bg-[#0f0f1a] text-white px-6 py-16">
      <motion.h2
        className="text-4xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <motion.p
        className="text-center text-gray-400 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Here are some of my skills on which I have been working on for the past
        year.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Object.entries(categories).map(([category, skills]) => (
          <TiltCard key={category}>
            <h3 className="text-lg font-semibold mb-6 text-gray-100 text-center">
              {category}
            </h3>
            <ul className="grid grid-cols-2 gap-3">{renderSkills(skills)}</ul>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};

export default Skills;
