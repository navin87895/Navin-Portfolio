import React from "react";
import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";

const Education: React.FC = () => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.6, ease: easeOut },
    }),
  };

  const educationList = [
    {
      img: "/galgotias.png",
      title: "Galgotias University",
      period: "B.Tech CSE (2021 - 2025)",
      desc: "Pursued a Bachelor’s degree in Computer Science Engineering, building strong foundations in software development, problem-solving, and full-stack projects.",
    },
    {
      img: "/mrjdi.png",
      title: "MRJDI College",
      period: "12th Science (2018 - 2020)",
      desc: "Completed Higher Secondary Education with focus on Science and Mathematics.",
    },
    {
      img: "/stpaul.png",
      title: "St. Paul Sr. Sec. School",
      period: "10th (2016 - 2018)",
      desc: "Completed Secondary Education with a strong academic foundation.",
    },
  ];

  return (
    <section id="education" className="bg-[#0f0f1a] text-white px-6 py-16">
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-gray-400 text-center font-bold text-lg mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        My education has been a journey of self-discovery and growth. The
        details are as follows:
      </motion.p>

      {/* Education List */}
      <div className="max-w-4xl mx-auto space-y-8">
        {educationList.map((edu, index) => (
          <motion.div
            key={edu.title}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg flex items-center gap-6 border border-gray-700"
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
            <img
              src={edu.img}
              alt={edu.title}
              className="w-16 h-16 object-contain rounded-full bg-white p-2"
            />
            <div>
              <h3 className="text-2xl font-semibold">{edu.title}</h3>
              <p className="text-gray-400">{edu.period}</p>
              <p className="mt-2 text-gray-300">{edu.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
