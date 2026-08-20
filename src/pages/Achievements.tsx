import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";
import React from "react";
import { ExternalLink } from "lucide-react";

const Achievements: React.FC = () => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.15, duration: 0.5, ease: easeOut },
    }),
  };

  const achievements = [
    {
      img: "/aws.png",
      title: "AWS Academy Cloud Foundations",
      org: "Amazon Web Services",
      period: "Jul 2022 - Sept 2022",
      link: "https://drive.google.com/file/d/1fMAFQGPVD73UyRVIykriLtr5SZWJ9D-_/view",
      badge: "AWS Certified",
    },
    {
      img: "/aws.png",
      title: "AWS Academy Machine Learning Foundations",
      org: "Amazon Web Services",
      period: "Jul 2022 - Sept 2022",
      link: "https://drive.google.com/file/d/1e36tQPvDvMRcHEvhj-UsteLRC95umFDv/view",
      badge: "Machine Learning",
    },
    {
      img: "/celonis.png",
      title: "Mining & Automation Foundations",
      org: "Celonis Foundation",
      period: "Sept 2023 - Nov 2023",
      link: "https://www.credly.com/badges/d715e49a-3310-4744-a6b2-9eb4996adf93/print",
      badge: "Credly Badge",
    },
  ];

  return (
    <section id="achievements" className="bg-[#0b0b14] text-white px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/30 uppercase tracking-wider">
            Certifications & Milestones
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4">
            Achievements
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Verified certifications and accomplishments reflecting my continuous learning in cloud infrastructure and automated workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((ach, index) => (
            <motion.div
              key={ach.title}
              className="bg-gray-900/60 backdrop-blur-xl p-6 rounded-2xl border border-gray-800 flex flex-col justify-between hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/15 transition group"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <img
                    src={ach.img}
                    alt={ach.title}
                    className="w-12 h-12 object-contain rounded-xl bg-white p-2 border border-gray-700 shrink-0"
                  />
                  <span className="text-[10px] font-bold text-purple-300 px-2.5 py-1 rounded-full bg-purple-900/40 border border-purple-700/50">
                    {ach.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition mb-2">
                  {ach.title}
                </h3>
                <p className="text-xs font-semibold text-purple-400 mb-1">{ach.org}</p>
                <p className="text-xs text-gray-400 mb-6">{ach.period}</p>
              </div>

              <a
                href={ach.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-purple-950/40 hover:bg-purple-600 border border-purple-500/40 text-purple-200 hover:text-white rounded-xl text-xs font-semibold transition"
              >
                <span>View Certificate</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
