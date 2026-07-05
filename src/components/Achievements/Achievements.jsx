import SectionTitle from "../Common/SectionTitle";
import "./Achievements.css";

function Achievements() {
  return (
    <section className="section" id="achievements">
      <SectionTitle subtitle="Highlights" title="Achievements" />

      <div className="achievement-grid">
        <div className="achievement-card">
          <h3>5+</h3>
          <p>Projects Built</p>
        </div>

        <div className="achievement-card">
          <h3>8+</h3>
          <p>Technologies Learned</p>
        </div>

        <div className="achievement-card">
          <h3>3+</h3>
          <p>Academic Projects</p>
        </div>

        <div className="achievement-card">
          <h3>30+</h3>
          <p>DSA Problems Practiced</p>
        </div>
      </div>
    </section>
  );
}

export default Achievements;