import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        MB
      </a>

      <nav className={open ? "nav-links active" : "nav-links"}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#achievements" onClick={closeMenu}>Achievements</a>
        <a href="#certifications" onClick={closeMenu}>Certifications</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a href="https://drive.google.com/file/d/1zkPn3fEqVBUJQmXxMY28SzfvzFou_DXl/view?usp=drive_link" onClick={closeMenu}>Cv</a>
      </nav>

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </button>
    </header>
  );
}

export default Navbar;