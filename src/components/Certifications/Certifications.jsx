import certifications from "../../data/certifications.json";
import "./Certifications.css";
import FadeIn from "../Common/FadeIn";

function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="section-title">
        <p>Achievements</p>
        <h2>Certifications</h2>
      </div>
        <FadeIn delay={0.4}>
      <div className="cert-grid">
        {certifications.map((cert) => (
          <div className="cert-card" key={cert.id}>
            <img
            src={`${import.meta.env.BASE_URL}${cert.image.replace(/^\//, "")}`}
            alt={cert.title}
            />

            <div className="cert-body">
              <h3>{cert.title}</h3>

              <p>
                <strong>Issued By:</strong> {cert.issuedBy}
              </p>

              <p>
                <strong>Date:</strong> {cert.issueDate}
              </p>

              <p>{cert.description}</p>

              <a
                href={cert.credentialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-btn"
              >
                View Certificate →
              </a>
            </div>
          </div>
        ))}
      </div>
      </FadeIn>
    </section>
  );
}

export default Certifications;