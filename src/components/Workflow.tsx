import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, LayoutGrid, Code, Rocket } from "lucide-react";

const Workflow: React.FC = () => {
  const steps = [
    {
      num: "01",
      icon: <Lightbulb className="w-6 h-6 text-purple-400" />,
      title: "Discovery & Planning",
      desc: "Deep-dive into client requirements, defining target audience, project architecture, and tech stack selection for optimal scalability.",
    },
    {
      num: "02",
      icon: <LayoutGrid className="w-6 h-6 text-pink-400" />,
      title: "UI/UX & System Design",
      desc: "Crafting modern, responsive user interfaces with glassmorphism aesthetics and structuring database schemas for lightning-fast performance.",
    },
    {
      num: "03",
      icon: <Code className="w-6 h-6 text-indigo-400" />,
      title: "Full-Stack Development",
      desc: "Writing clean, modular MERN stack code, integrating robust REST APIs, securing authentication, and conducting thorough cross-device testing.",
    },
    {
      num: "04",
      icon: <Rocket className="w-6 h-6 text-emerald-400" />,
      title: "Deployment & Support",
      desc: "Deploying production-ready applications to Vercel/Netlify/AWS with SSL, CI/CD pipelines, and providing post-launch support & documentation.",
    },
  ];

  return (
    <section id="workflow" className="bg-[#080811] text-white px-4 sm:px-6 lg:px-8 py-24 relative overflow-hidden">
      {/* Glow Ambient Blob */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/30 uppercase tracking-wider">
            Development Lifecycle
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4">
            How I Bring Ideas To Life
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            A structured 4-step engineering process designed to deliver exceptional client web applications on time and with zero compromise on quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{
                y: -6,
                borderColor: "rgba(168, 85, 247, 0.6)",
                boxShadow: "0px 0px 25px rgba(168, 85, 247, 0.2)",
              }}
              className="bg-gray-900/60 backdrop-blur-xl p-7 rounded-2xl border border-gray-800 flex flex-col justify-between transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-gray-800/80 border border-gray-700/50 group-hover:bg-purple-950/40 group-hover:border-purple-500/40 transition">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-extrabold text-gray-700/60 group-hover:text-purple-400/40 font-mono transition">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs text-purple-400 font-semibold">
                <span>Step {step.num}</span>
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
