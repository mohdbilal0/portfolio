import skills from "../../data/skills.json";
import "./Skills.css";
import SectionTitle from "../Common/SectionTitle";
import FadeIn from "../Common/FadeIn";

function Skills() {
  return (
    <section className="section" id="skills">
      <SectionTitle subtitle="My Tech Stack" title="Skills" />
      <FadeIn>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.id}>
            <div className="skill-icon">
              <img src={skill.image} alt={skill.name} />
            </div>

            <span className="skill-category">{skill.category}</span>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>

            <div className="skill-bar">
              <span style={{ width: `${skill.level}%` }}></span>
            </div>
          </div>
        ))}
      </div>
      </FadeIn>
    </section>
  );
}

export default Skills;