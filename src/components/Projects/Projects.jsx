import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import FadeIn from "../Common/FadeIn";

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-title">
        <p>My Work</p>
        <h2>Projects</h2>
      </div>
      <FadeIn delay={0.2}>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
      </FadeIn>
    </section>
  );
}

export default Projects;