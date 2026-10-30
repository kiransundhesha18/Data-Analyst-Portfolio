export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {project.image && (
        <img
          src={project.image}
          alt={project.title || "FMCG Profitability Dashboard in Excel"}
          className="project-image"
        />
      )}
      <div className="project-content">
        <h3>{project.title}</h3>
        <p className="tech-stack">
          <strong>Tech Stack:</strong> {(project.toolTags || []).join(', ')}
        </p>
        <div className="project-description">
          <p>
            <strong>The Objective:</strong> {project.problem || project.summary}
          </p>
          <p>
            <strong>Key Engineering:</strong>
          </p>
          <ul>
            {(project.highlights || []).map((highlight, idx) => (
              <li key={idx}>{highlight}</li>
            ))}
          </ul>
          <p>
            <strong>Core Business Insight:</strong> {project.impact}
          </p>
        </div>
        <div className="project-links">
          <a
            href={project.liveLink || 'https://github.com/kiransundhesha18/fmcg-margin-analysis'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Project Files & Data Pipeline
          </a>
        </div>
      </div>
    </div>
  );
}