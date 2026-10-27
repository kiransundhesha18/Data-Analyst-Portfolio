import { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Check, Database, BarChart2, FileSpreadsheet } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Power BI':
        return <BarChart2 size={16} className="text-amber" />;
      case 'Excel':
        return <FileSpreadsheet size={16} className="text-emerald" />;
      case 'SQL':
        return <Database size={16} className="text-blue" />;
      default:
        return <BarChart2 size={16} />;
    }
  };

  const getCategoryBadgeClass = (category) => {
    switch (category) {
      case 'Power BI':
        return 'badge-amber';
      case 'Excel':
        return 'badge-emerald';
      case 'SQL':
        return 'badge-blue';
      default:
        return 'badge-blue';
    }
  };

  return (
    <article className="project-card">
      {/* Card Header */}
      <div className="project-card-header">
        <div className={`project-category-badge ${getCategoryBadgeClass(project.category)}`}>
          {getCategoryIcon(project.category)}
          <span>{project.category}</span>
        </div>

        <div className="project-tools-wrap">
          {(project.toolTags || []).slice(0, 3).map((tool) => (
            <span key={tool} className="tool-chip">
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Project Title & Subtitle */}
      <h3 className="project-title">{project.title}</h3>
      <p className="project-summary">{project.summary || project.problem}</p>

      {/* Key Metrics / Highlights */}
      {project.keyMetrics && project.keyMetrics.length > 0 && (
        <div className="project-metrics-grid">
          {project.keyMetrics.map((metric, idx) => (
            <div key={idx} className="project-metric-box">
              <span className="metric-box-val">{metric.value}</span>
              <span className="metric-box-lbl">{metric.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Expandable Project Details */}
      {expanded && (
        <div className="project-expanded-panel">
          <div className="expanded-block">
            <h4 className="expanded-title">Business Problem</h4>
            <p className="expanded-text">{project.problem}</p>
          </div>

          <div className="expanded-block">
            <h4 className="expanded-title">My Analytical Approach</h4>
            <p className="expanded-text">{project.methodology}</p>
          </div>

          <div className="expanded-block">
            <h4 className="expanded-title">Key Insights & Takeaways</h4>
            <p className="expanded-text">{project.impact}</p>
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div className="expanded-block">
              <h4 className="expanded-title">Technical Highlights</h4>
              <ul className="expanded-list">
                {project.highlights.map((h, idx) => (
                  <li key={idx} className="expanded-item">
                    <Check size={14} className="check-bullet" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Card Action Buttons */}
      <div className="project-card-actions">
        <a
          href={project.liveLink || 'https://github.com/kiransundhesha18'}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary project-action-btn"
        >
          <GithubIcon size={16} />
          <span>View on GitHub</span>
          <ExternalLink size={14} />
        </a>

        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="btn btn-secondary project-toggle-btn"
          aria-expanded={expanded}
        >
          <span>{expanded ? 'Less Details' : 'Details'}</span>
          {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        </button>
      </div>
    </article>
  );
}