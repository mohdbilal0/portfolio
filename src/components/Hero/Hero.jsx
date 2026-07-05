import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Button from "../Common/Button";
import heroAvatar from "../../assets/avatar/avatar.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="badge">🚀 Available for Work</p>

        <h1>
          Mohammed <span>Bilal</span>
        </h1>

        <h2>Aspiring Software Developer</h2>

        <p className="hero-desc">
          Hi, I'm Mohammed Bilal. I'm currently pursuing MCA and specialize in Web Development, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and LangChain. I enjoy building AI-powered web applications that solve real-world problems through clean design, scalable architecture, and modern technologies.
        </p>

        <div className="hero-buttons">
          <Button href="#projects">View Projects</Button>
          <Button href="#contact" variant="outline">
            Contact Me
          </Button>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/mohdbilal0" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mohammed-bilal-6922a2318/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="mailto:Mohammedbilal2022005@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="tech-chip chip-1">Python</div>
        <div className="tech-chip chip-2">React</div>
        <div className="tech-chip chip-3">Java</div>
        <div className="tech-chip chip-4">AI</div>
        <div className="tech-chip chip-5">LLM</div>
        <div className="tech-chip chip-6">DSA</div>
        <div className="tech-chip chip-7">SQL</div>

        <img src={heroAvatar} alt="Mohammed Bilal" className="hero-avatar-img" />
      </motion.div>
    </section>
  );
}

export default Hero;