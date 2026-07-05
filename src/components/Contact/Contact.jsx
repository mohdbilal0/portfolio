import "./Contact.css";

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-title">
        <p>Get In Touch</p>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-card">
        <h3>Let's build something together</h3>
        <p>
          I am open to software developer, web developer and internship
          opportunities.
        </p>

        <div className="contact-links">
          <a href="mailto:Mohammedbilal2022005@gmail.com">Email Me</a>
          <a href="https://github.com/mohdbilal0" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/mohammed-bilal-6922a2318/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;