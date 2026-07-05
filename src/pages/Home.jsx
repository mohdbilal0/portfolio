import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Certifications from "../components/Certifications/Certifications";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Achievements from "../components/Achievements/Achievements";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;