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
    "Frontend Technologies": [
      "React Js",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    "Backend & Databases": ["Node Js", "Express Js", "MongoDB", "MySQL"],
    "Tools & Platforms": [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Linux",
      "C++",
      "Python",
      "Vercel",
      "Netlify",
    ],
  };

  const renderSkills = (skills: string[]) =>
    skills.map((skill, index) => (
      <motion.li
        key={skill}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.04, duration: 0.3 }}
        whileHover={{
          scale: 1.05,
          borderColor: "rgba(168, 85, 247, 0.8)",
          boxShadow: "0px 0px 15px rgba(168, 85, 247, 0.3)",
        }}
        className="flex items-center gap-2.5 bg-gray-900/80 text-gray-200 py-2.5 px-3 rounded-xl border border-gray-700/60 shadow-sm transition duration-300"
      >
        <img
          src={skillLogos[skill]}
          alt={`${skill} logo`}
          className="w-5 h-5 object-contain shrink-0"
        />
        <span className="text-xs sm:text-sm font-semibold truncate">{skill}</span>
      </motion.li>
    ));

  // Small reusable card with 3D tilt effect
  const TiltCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      const rotateX = (y / height - 0.5) * 14;
      const rotateY = (x / width - 0.5) * -14;

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
          className="bg-gray-900/60 backdrop-blur-xl p-6 rounded-2xl border border-gray-800 shadow-xl hover:border-purple-500/50 hover:shadow-purple-500/20 h-full flex flex-col justify-between"
        >
          {children}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="bg-[#0b0b14] text-white px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/30 uppercase tracking-wider">
            Technical Proficiency
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4">
            Skills & Tech Stack
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Here are the core programming languages, frameworks, databases, and developer tools I utilize daily to build full-stack web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(categories).map(([category, skills]) => (
            <TiltCard key={category}>
              <div>
                <h3 className="text-lg font-bold mb-6 text-white text-center border-b border-gray-800 pb-3">
                  {category}
                </h3>
                <ul className="grid grid-cols-2 gap-3">{renderSkills(skills)}</ul>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
