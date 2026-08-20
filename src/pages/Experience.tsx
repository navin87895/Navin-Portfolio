import React from "react";
import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";
import { Briefcase, Code, Terminal } from "lucide-react";

const Experience: React.FC = () => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.6, ease: easeOut },
    }),
  };

  const experiences = [
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: "Freelance Full-Stack Developer",
      company: "Self-Employed / Independent",
      period: "2024 - Present",
      desc: "Delivered custom web applications, responsive websites, MERN stack solutions, and REST API integrations for freelance clients. Managed full software development lifecycles from concept to deployment.",
      skills: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS, API Integration, EmailJS",
      badge: "Freelance Work",
    },
    {
      img: "/logos/xietus.png",
      icon: <Terminal className="w-8 h-8 text-pink-400" />,
      title: "Software Developer Intern",
      company: "Xietus Lab",
      period: "Sep 2025 - March 2026",
      desc: "Developed and maintained dynamic web applications using front-end and back-end technologies, integrating databases and APIs, debugging scalable solutions, and writing clean code.",
      skills: "React.js, Node.js, Express.js, Web Infrastructure, Software Testing & Debugging",
      badge: "Internship",
    },
    {
      img: "/logos/lgm.png",
      icon: <Briefcase className="w-8 h-8 text-indigo-400" />,
      title: "Web Developer Intern",
      company: "LetsGrowMore",
      period: "Aug 2024 - Sept 2024",
      desc: "Worked on frontend web development tasks, gained hands-on experience with ReactJS hooks, lifecycle methods, and developed responsive UI features.",
      skills: "ReactJS, JavaScript, CSS3, HTML5, Git",
      badge: "Internship",
    },
  ];

  return (
    <section id="experience" className="bg-[#0f0f1a] text-white px-6 py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/30 uppercase tracking-wider">
            Career & Freelance Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            Work Experience
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className="bg-gray-900/60 backdrop-blur-xl p-7 rounded-2xl border border-gray-800 flex flex-col md:flex-row items-start gap-6 shadow-xl transition"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{
                borderColor: "rgba(168, 85, 247, 0.6)",
                boxShadow: "0px 0px 25px rgba(168, 85, 247, 0.2)",
              }}
            >
              {exp.img ? (
                <img
                  src={exp.img}
                  alt={exp.title}
                  className="w-14 h-14 object-contain rounded-xl bg-white/90 p-2 shrink-0 border border-gray-700"
                />
              ) : (
                <div className="p-3.5 rounded-xl bg-purple-950/60 border border-purple-500/40 shrink-0">
                  {exp.icon}
                </div>
              )}

              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <span className="text-xs font-bold text-purple-300 px-3 py-1 rounded-full bg-purple-900/40 border border-purple-700/50">
                    {exp.badge}
                  </span>
                </div>

                <p className="text-sm font-semibold text-purple-400">{exp.company} • <span className="text-gray-400 font-normal">{exp.period}</span></p>

                <p className="mt-3 text-gray-300 text-sm leading-relaxed">{exp.desc}</p>

                <div className="mt-4 pt-3 border-t border-gray-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-gray-400">Tech Stack:</span>
                  <span className="text-xs text-purple-300 font-medium">{exp.skills}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
