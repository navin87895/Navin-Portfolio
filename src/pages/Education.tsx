import React from "react";
import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";

const Education: React.FC = () => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.15, duration: 0.5, ease: easeOut },
    }),
  };

  const educationList = [
    {
      img: "/galgotias.png",
      title: "Galgotias University",
      period: "B.Tech CSE (2021 - 2025)",
      desc: "Graduated with a Bachelor’s degree in Computer Science & Engineering, mastering computer science fundamentals, data structures, algorithms, and full-stack software development.",
      badge: "Bachelor of Technology",
    },
    {
      img: "/mrjdi.png",
      title: "MRJDI College",
      period: "12th Science (2018 - 2020)",
      desc: "Completed Higher Secondary Education focusing on Physics, Chemistry, and Mathematics (PCM).",
      badge: "Senior Secondary",
    },
    {
      img: "/stpaul.png",
      title: "St. Paul Sr. Sec. School",
      period: "10th (2016 - 2018)",
      desc: "Completed Secondary Education with strong academic performance.",
      badge: "Secondary School",
    },
  ];

  return (
    <section id="education" className="bg-[#0b0b14] text-white px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/30 uppercase tracking-wider">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4">
            Education
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            My academic foundation in Computer Science and Engineering.
          </p>
        </motion.div>

        <div className="space-y-6">
          {educationList.map((edu, index) => (
            <motion.div
              key={edu.title}
              className="bg-gray-900/60 backdrop-blur-xl p-6 sm:p-7 rounded-2xl border border-gray-800 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/15 transition group"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <img
                src={edu.img}
                alt={edu.title}
                className="w-14 h-14 object-contain rounded-full bg-white p-2 border border-gray-700 shrink-0"
              />
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition">
                    {edu.title}
                  </h3>
                  <span className="text-[10px] font-bold text-purple-300 px-3 py-1 rounded-full bg-purple-900/40 border border-purple-700/50">
                    {edu.badge}
                  </span>
                </div>
                <p className="text-xs font-semibold text-purple-400 mb-2">{edu.period}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{edu.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
