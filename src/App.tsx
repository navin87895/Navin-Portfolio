import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Workflow from "./components/Workflow";
import TechMarquee from "./components/TechMarquee";
import ParticleBackground from "./components/ParticleBackground";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <div className="bg-[#080811] min-h-screen text-white font-['Plus_Jakarta_Sans',sans-serif] selection:bg-purple-600 selection:text-white relative bg-grid-pattern">
      {/* Dynamic Animated Particle Canvas Background */}
      <ParticleBackground />

      <Navbar />

      {/* Hero Section */}
      <section id="landing" className="scroll-mt-24">
        <Landing />
      </section>

      {/* Infinite Tech Marquee Banner */}
      <TechMarquee />

      {/* Services Section */}
      <section id="services" className="scroll-mt-24">
        <Services />
      </section>

      {/* 4-Step Engineering Process */}
      <section id="workflow" className="scroll-mt-24">
        <Workflow />
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-24">
        <Skills />
      </section>

      {/* Experience Section */}
      <section id="experience" className="scroll-mt-24">
        <Experience />
      </section>

      {/* Projects Showcase Section */}
      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="scroll-mt-24">
        <Achievements />
      </section>

      {/* Education Section */}
      <section id="education" className="scroll-mt-24">
        <Education />
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default App;
