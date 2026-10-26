import { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Check, Database, BarChart, FileSpreadsheet, TrendingUp } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  // Icon for category
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Power BI':
        return <BarChart size={18} className="text-amber" />;
      case 'Excel':
        return <FileSpreadsheet size={18} className="text-emerald" />;
      case 'SQL':
        return <Database size={18} className="text-blue" />;
      default:
        return <TrendingUp size={18} />;
    }
  };

  const getBadgeClass = (color) => {
    switch (color) {
      case 'amber':
        return 'badge-amber';
      case 'emerald':
        return 'badge-emerald';
      case 'blue':
        return 'badge-blue';
      default:
        return 'badge-blue';
    }
  };

  return (
    <article className="project-card glass-card">
      {/* Top Header: Category & Tags */}
      <div className="project-card-header">
        <div className="project-category-wrapper">
          {getCategoryIcon(project.category)}
          <span className="project-category-name">{project.category} Project</span>
        </div>
        <div className="project-tags-wrap">
          {(project.toolTags || []).slice(0, 3).map((tag) => (
            <span key={tag} className={`badge ${getBadgeClass(project.badgeColor)}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Title & Subtitle */}
      <div className="project-card-title-area">
        <h3 className="project-title">{project.title}</h3>
        {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
      </div>

      {/* Quantified Business KPI Badges */}
      {project.keyMetrics && (
        <div className="project-metrics-row">
          {project.keyMetrics.map((metric, idx) => (
            <div key={idx} className="project-metric-pill">
              <span className="metric-pill-val">{metric.value}</span>
              <span className="metric-pill-lbl">{metric.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Structured Problem & Impact */}
      <div className="project-narrative-sections">
        <div className="narrative-block">
          <div className="narrative-label">
            <span className="narrative-indicator problem-dot"></span>
            <span>Business Problem</span>
          </div>
          <p className="narrative-text">{project.problem}</p>
        </div>

        <div className="narrative-block">
          <div className="narrative-label">
            <span className="narrative-indicator method-dot"></span>
            <span>Methodology & Architecture</span>
          </div>
          <p className="narrative-text">{project.methodology}</p>
        </div>

        <div className="narrative-block impact-block">
          <div className="narrative-label">
            <span className="narrative-indicator impact-dot"></span>
            <span>Key Business Impact</span>
          </div>
          <p className="narrative-text narrative-highlight">{project.impact}</p>
        </div>
      </div>

      {/* Expandable Technical Highlights */}
      {expanded && project.highlights && (
        <div className="project-deep-dive">
          <h4 className="deep-dive-title">Technical Execution Details:</h4>
          <ul className="deep-dive-list">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="deep-dive-item">
                <Check size={14} className="deep-dive-check" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Footer Actions */}
      <div className="project-card-footer">
        <a
          href={project.liveLink || 'https://github.com/kiransundhesha18'}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary project-action-btn"
        >
          <GithubIcon size={16} />
          <span>View Source & Files</span>
          <ExternalLink size={14} />
        </a>

        {project.highlights && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="btn btn-ghost project-toggle-btn"
            aria-expanded={expanded}
          >
            <span>{expanded ? 'Less Details' : 'Tech Details'}</span>
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        )}
      </div>
    </article>
  );
}