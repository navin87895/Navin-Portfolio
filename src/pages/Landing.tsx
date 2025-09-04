import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profilePic from "../assets/profile.jpg";

const Landing: React.FC = () => {
  return (
    <section
      id="landing"
      className="bg-[#0f0f1a] text-white px-4 sm:px-6 md:px-12 pt-28 pb-16"
    >
      <div className="flex flex-col-reverse md:flex-row items-center max-w-7xl mx-auto gap-12 lg:gap-20">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-4 flex-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Hi, I am
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Navin Kumar
          </h1>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
            I am a{" "}
            <span className="text-purple-500">
              <Typewriter
                words={["Full-Stack Developer", "Programmer", "Web Enthusiast"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={60}
                delaySpeed={1200}
              />
            </span>
          </h3>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            I am a B.Tech graduate with a strong foundation in computer science
            and hands-on experience in full-stack web development. I enjoy
            tackling complex challenges, solving problems, and continuously
            enhancing my technical skills. I’m passionate about building
            impactful projects and contributing effectively to innovative teams.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            <a
              href="/Navin-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-base rounded-full bg-purple-600 hover:bg-purple-700 transition"
            >
              Check Resume
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end flex-1 mb-6 md:mb-0">
          <img
            src={profilePic}
            alt="Navin Kumar"
            className="rounded-full w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover border-4 border-purple-500 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
