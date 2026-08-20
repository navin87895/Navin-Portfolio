import React from "react";

const TechMarquee: React.FC = () => {
  const techItems = [
    { name: "React.js", color: "text-cyan-400" },
    { name: "Node.js", color: "text-emerald-400" },
    { name: "Express.js", color: "text-gray-300" },
    { name: "MongoDB", color: "text-emerald-500" },
    { name: "TypeScript", color: "text-blue-400" },
    { name: "Tailwind CSS", color: "text-cyan-300" },
    { name: "REST APIs", color: "text-purple-400" },
    { name: "MySQL", color: "text-amber-400" },
    { name: "EmailJS", color: "text-pink-400" },
    { name: "Git & GitHub", color: "text-orange-400" },
  ];

  return (
    <div className="w-full bg-[#06060d] border-y border-purple-500/20 py-4 overflow-hidden relative select-none">
      {/* Gradient Fade Edges */}
      <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#06060d] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#06060d] to-transparent z-10 pointer-events-none" />

      <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
        {[...techItems, ...techItems, ...techItems].map((item, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-3 bg-gray-900/60 border border-gray-800 px-4 py-2 rounded-full backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className={`text-sm font-bold font-mono tracking-wide ${item.color}`}>
              {item.name}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TechMarquee;
