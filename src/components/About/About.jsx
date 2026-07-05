import SectionTitle from "../Common/SectionTitle";
import "./About.css";
import heroAvatar from "../../assets/avatar/self.jpeg"

function About() {
  return (
    <section className="section about-section" id="about">
      <SectionTitle subtitle="Who I Am" title="About Me" />

      <div className="about-wrapper">
        <div className="about-image-card">
          <div className="about-icon"><img src={heroAvatar} alt="Mohammed Bilal" className="hero-avatar-img" /></div>
        </div>

        <div className="about-content">
          <h3>Aspiring Software Developer passionate about creating practical and impactful digital solutions.</h3>

          <p>
            I am Mohammed Bilal, a Computer Applications graduate currently
            pursuing MCA. I have strong foundations in data structures, web
            development, database management, and AI-based academic projects.
          </p>

          <p>
            I enjoy building full-stack applications, AI tools, Android apps,
            and modern responsive websites using Python, Java, React, Flask,
            PHP, and MySQL.
          </p>

          <div className="about-highlights">
            <div>
              <h4>Full Stack</h4>
              <span>Frontend + Backend</span>
            </div>

            <div>
              <h4>AI Projects</h4>
              <span>ML + LLM Safety</span>
            </div>

            <div>
              <h4>MCA</h4>
              <span>Currently Pursuing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;