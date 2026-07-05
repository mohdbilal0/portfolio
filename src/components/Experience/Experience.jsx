import SectionTitle from "../Common/SectionTitle";
import "./Experience.css";

function Experience() {
  return (
    <section className="section" id="experience">

      <SectionTitle
        subtitle="My Journey"
        title="Experience & Education"
      />

      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-card">
            <span>2026 - Present</span>

            <h3>Master of Computer Applications (MCA)</h3>

            <p>
              Currently pursuing MCA at JSS Science and Technology University, while focusing on Full Stack
              Development, Artificial Intelligence and Cloud technologies.
            </p>
          </div>
        </div>

        

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-card">
            <span>2025</span>

            <h3>BCA Graduation</h3>

            <p>
              Graduated from JSS Science and Technology University, with strong foundation in Programming,
              Databases, Networking and Software Engineering.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-card">
            <span>2022</span>

            <h3>Pre Univesity</h3>

            <p>
              Completed PUC from Marimallappa's Pre University College, with Physics, Chemistry, Mathematics, Biology as the Foundation.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-card">
            <span>2020</span>

            <h3>SSLC</h3>

            <p>
              Completed SSLC from Marimallappa's School.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Experience;