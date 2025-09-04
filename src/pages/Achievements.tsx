import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";
import React from "react";

const Achievements: React.FC = () => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.6, ease: easeOut },
    }),
  };

  const achievements = [
    {
      img: "/aws.png",
      title: "AWS Academy Cloud Foundations",
      org: "Amazon Web Services",
      period: "Jul 2022 - Sept 2022",
      link: "https://drive.google.com/file/d/1fMAFQGPVD73UyRVIykriLtr5SZWJ9D-_/view",
    },
    {
      img: "/aws.png",
      title: "AWS Academy Machine Learning Foundations",
      org: "Amazon Web Services",
      period: "Jul 2022 - Sept 2022",
      link: "https://drive.google.com/file/d/1e36tQPvDvMRcHEvhj-UsteLRC95umFDv/view",
    },
    {
      img: "/celonis.png",
      title: "Mining & Automation Foundations",
      org: "Celonis Foundation",
      period: "Sept 2023 - Nov 2023",
      link: "https://www.credly.com/badges/d715e49a-3310-4744-a6b2-9eb4996adf93/print",
    },
  ];

  return (
    <section id="achievements" className="bg-[#0f0f1a] text-white px-6 py-16">
      <motion.h2
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Achievements
      </motion.h2>

      <motion.p
        className="text-gray-400 text-center font-bold text-lg mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        These certifications and accomplishments highlight my skills and
        dedication to continuous learning.
      </motion.p>

      <div className="max-w-4xl mx-auto space-y-8">
        {achievements.map((ach, index) => (
          <motion.div
            key={ach.title}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-6 border border-gray-700"
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
              src={ach.img}
              alt={ach.title}
              className="w-16 h-16 object-contain rounded-lg bg-white p-2"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">{ach.title}</h3>
              <p className="text-gray-400 mb-2">
                {ach.org} | {ach.period}
              </p>
              <a
                href={ach.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition"
              >
                View Certificate
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
