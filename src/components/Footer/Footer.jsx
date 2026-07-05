import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3>Mohammed Bilal</h3>
      <p>Software Developer • AI • Full Stack</p>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </div>

      <span>Built with ❤️ using open-source technologies including React, Node.js, Flask, and other modern development tools. All logos, icons, illustrations, and background assets used in this portfolio are either open source, used under their respective licenses, or AI-generated</span>
    </footer>
  );
}

export default Footer;