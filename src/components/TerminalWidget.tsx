import React, { useState } from "react";
import { Play, Copy, Check, Terminal as TerminalIcon } from "lucide-react";
import { Link } from "react-scroll";

const TerminalWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"config" | "action">("config");
  const [copied, setCopied] = useState(false);
  const [executed, setExecuted] = useState(false);

  const configCode = `// navin.config.ts
export const developer = {
  name: "Navin Kumar",
  role: "Full-Stack & Freelance Developer",
  location: "India 🇮🇳",
  status: "🟢 Available for Freelance Projects",
  specialities: [
    "MERN Web Applications",
    "REST API Integration",
    "Sleek UI/UX Web Design"
  ],
  hireable: true
};`;

  const actionCode = `// hireMe.ts
import { developer } from "./navin.config";

export async function initProject(clientRequest) {
  if (developer.hireable) {
    return await developer.buildAwesomeWebApp({
      quality: "100%",
      speed: "Fast",
      stack: "React + Node + Express + MongoDB"
    });
  }
}`;

  const handleCopy = () => {
    const textToCopy = activeTab === "config" ? configCode : actionCode;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setExecuted(true);
    setTimeout(() => setExecuted(false), 2500);
  };

  return (
    <div className="w-full max-w-lg bg-[#121224]/90 backdrop-blur-2xl rounded-2xl border border-purple-500/30 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
      {/* IDE Header Bar */}
      <div className="bg-[#0a0a14] px-4 py-3 border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          <div className="flex items-center gap-1.5 ml-3 text-gray-400 font-sans text-xs">
            <TerminalIcon className="w-3.5 h-3.5 text-purple-400" />
            <span>developer-terminal</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            title="Copy Code"
            className="p-1.5 rounded-lg bg-gray-800/80 text-gray-400 hover:text-white hover:bg-gray-700 transition"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={handleRun}
            title="Run Code"
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-sans text-xs font-semibold transition"
          >
            <Play className="w-3 h-3 fill-current" />
            Run
          </button>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="bg-[#0e0e1b] px-3 pt-2 border-b border-gray-800 flex gap-2">
        <button
          onClick={() => setActiveTab("config")}
          className={`px-3 py-1.5 rounded-t-lg text-xs font-sans transition-all ${
            activeTab === "config"
              ? "bg-[#121224] text-purple-300 border-t-2 border-purple-500 font-semibold"
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          navin.config.ts
        </button>
        <button
          onClick={() => setActiveTab("action")}
          className={`px-3 py-1.5 rounded-t-lg text-xs font-sans transition-all ${
            activeTab === "action"
              ? "bg-[#121224] text-purple-300 border-t-2 border-purple-500 font-semibold"
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          hireMe.ts
        </button>
      </div>

      {/* Code Area */}
      <div className="p-4 overflow-x-auto text-gray-300 leading-relaxed min-h-[220px]">
        {activeTab === "config" ? (
          <pre className="space-y-1">
            <span className="text-gray-500">// navin.config.ts</span>
            <br />
            <span className="text-purple-400">export const</span>{" "}
            <span className="text-yellow-300">developer</span> = &#123;
            <br />
            &nbsp;&nbsp;<span className="text-cyan-300">name</span>:{" "}
            <span className="text-emerald-300">"Navin Kumar"</span>,
            <br />
            &nbsp;&nbsp;<span className="text-cyan-300">role</span>:{" "}
            <span className="text-emerald-300">"Full-Stack & Freelance Developer"</span>,
            <br />
            &nbsp;&nbsp;<span className="text-cyan-300">status</span>:{" "}
            <span className="text-emerald-300">"🟢 Available for Hire"</span>,
            <br />
            &nbsp;&nbsp;<span className="text-cyan-300">specialities</span>: [
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-300">"MERN Web Applications"</span>,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-300">"REST API Integration"</span>,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-300">"Custom Freelance Projects"</span>
            <br />
            &nbsp;&nbsp;],
            <br />
            &nbsp;&nbsp;<span className="text-cyan-300">hireable</span>:{" "}
            <span className="text-purple-400">true</span>
            <br />
            &#125;;
          </pre>
        ) : (
          <pre className="space-y-1">
            <span className="text-gray-500">// hireMe.ts</span>
            <br />
            <span className="text-purple-400">import</span> &#123; developer &#125;{" "}
            <span className="text-purple-400">from</span>{" "}
            <span className="text-emerald-300">"./navin.config"</span>;
            <br />
            <br />
            <span className="text-purple-400">export async function</span>{" "}
            <span className="text-yellow-300">initProject</span>(clientRequest) &#123;
            <br />
            &nbsp;&nbsp;<span className="text-purple-400">if</span> (developer.hireable) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return await</span> developer.buildAwesomeWebApp(&#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-300">quality</span>: <span className="text-emerald-300">"100%"</span>,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-300">delivery</span>: <span className="text-emerald-300">"On Time"</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;);
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &#125;
          </pre>
        )}

        {/* Execution Output Box */}
        {executed && (
          <div className="mt-4 p-3 bg-emerald-950/60 border border-emerald-500/50 rounded-xl text-emerald-300 font-sans text-xs flex items-center justify-between animate-fade-in">
            <span>🚀 Process Execution Success! Let's build your project.</span>
            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-70}
              className="text-xs font-bold underline cursor-pointer hover:text-white"
            >
              Contact Me
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalWidget;
