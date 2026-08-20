import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Server, Layout, Wrench } from "lucide-react";

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax layers
  const bgOrbY = useTransform(scrollYProgress, [0, 1], ["-100px", "100px"]);
  const headerY = useTransform(scrollYProgress, [0, 1], ["-30px", "20px"]);

  const services = [
    {
      icon: <Code2 className="w-10 h-10 text-purple-400" />,
      title: "Full-Stack Web Apps",
      desc: "Custom web applications built from scratch using the MERN stack (MongoDB, Express, React, Node.js) with scalable architecture.",
      badge: "Freelance Speciality",
    },
    {
      icon: <Layout className="w-10 h-10 text-pink-400" />,
      title: "Modern UI/UX Web Design",
      desc: "Pixel-perfect, responsive web designs built with React, Tailwind CSS, and Framer Motion for high performance & sleek user experience.",
      badge: "Frontend Focus",
    },
    {
      icon: <Server className="w-10 h-10 text-indigo-400" />,
      title: "REST APIs & Backend Integration",
      desc: "Robust backend APIs, database modeling, secure authentication, and seamless third-party service integration (EmailJS, Payment Gateways, etc.).",
      badge: "Backend & Cloud",
    },
    {
      icon: <Wrench className="w-10 h-10 text-cyan-400" />,
      title: "Web Maintenance & Optimization",
      desc: "Fixing complex bugs, upgrading legacy web codebases, improving page load speeds, and enhancing SEO & responsiveness.",
      badge: "Support & Debugging",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-[#0f0f1a] text-white px-6 py-20 relative overflow-hidden"
    >
      {/* Background Parallax Light Orbs */}
      <motion.div
        style={{ y: bgOrbY }}
        className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"
      />
      <motion.div
        style={{ y: bgOrbY }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          style={{ y: headerY }}
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/30 tracking-wider uppercase">
            Freelance & Client Services
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4">
            What I Can Build For You
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            I help clients and businesses turn ideas into production-ready web solutions with clean code and modern aesthetics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 0px 25px rgba(168, 85, 247, 0.25)",
                borderColor: "rgba(168, 85, 247, 0.6)",
              }}
              className="bg-gray-900/60 backdrop-blur-xl p-8 rounded-2xl border border-gray-800 flex flex-col justify-between transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-gray-800/80 border border-gray-700/50 group-hover:bg-purple-950/40 group-hover:border-purple-500/40 transition">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-semibold tracking-wider text-purple-300 uppercase px-2.5 py-1 rounded-full bg-purple-900/40 border border-purple-700/50">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                <span>Available for Hire</span>
                <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
