import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <div>
      <Navbar />

      {/* Sections */}
      <section id="landing" className="scroll-mt-24">
        <Landing />
      </section>

      <section id="skills" className="scroll-mt-24">
        <Skills />
      </section>

      <section id="experience" className="scroll-mt-24">
        <Experience />
      </section>

      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>

      {/* Achievements comes before Education now */}
      <section id="achievements" className="scroll-mt-24">
        <Achievements />
      </section>

      <section id="education" className="scroll-mt-24">
        <Education />
      </section>

      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default App;
