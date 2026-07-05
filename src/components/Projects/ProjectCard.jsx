function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img
      src={project.image}
      alt={project.title}
      />

      <div className="project-body">
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;