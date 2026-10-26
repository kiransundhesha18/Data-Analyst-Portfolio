import { skillsData, quickStats } from '../data/SkillData';
import { BarChart3, FileSpreadsheet, Database, TrendingUp, Cpu, Award, CheckCircle, Clock } from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'BarChart3':
        return <BarChart3 className="skill-icon text-amber" size={24} />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="skill-icon text-emerald" size={24} />;
      case 'Database':
        return <Database className="skill-icon text-blue" size={24} />;
      case 'TrendingUp':
        return <TrendingUp className="skill-icon text-purple" size={24} />;
      default:
        return <Cpu className="skill-icon" size={24} />;
    }
  };

  const getBadgeClass = (variant) => {
    switch (variant) {
      case 'amber':
        return 'badge-amber';
      case 'emerald':
        return 'badge-emerald';
      case 'blue':
        return 'badge-blue';
      case 'purple':
        return 'badge-purple';
      default:
        return 'badge-blue';
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Award size={14} />
            <span>Technical & Analytical Toolkit</span>
          </div>
          <h2 className="section-title">End-to-End Analytics Capabilities</h2>
          <p className="section-subtitle">
            A comprehensive matrix of technical tools, data manipulation frameworks, 
            and analytical methodologies used to solve complex commercial challenges.
          </p>
        </div>

        {/* Quick Quantitative Stats Row */}
        <div className="skills-stats-grid">
          {(quickStats || []).map((stat, idx) => (
            <div key={idx} className="stat-card glass-card">
              <span className="stat-number gradient-text">{stat.value}</span>
              <span className="stat-title">{stat.label}</span>
              <span className="stat-helper">{stat.helper}</span>
            </div>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-matrix-grid">
          {(skillsData || []).map((category) => (
            <div key={category.id} className="skill-card glass-card">
              <div className="skill-card-top">
                <div className="skill-icon-box">
                  {getCategoryIcon(category.icon)}
                </div>
                <div className="skill-meta">
                  <span className={`badge ${getBadgeClass(category.badgeVariant)}`}>
                    {category.level}
                  </span>
                </div>
              </div>

              <h3 className="skill-category-title">{category.category}</h3>
              <p className="skill-category-desc">{category.description}</p>

              <div className="skill-items-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item-row">
                    <div className="skill-name-wrap">
                      {skill.status === 'In Progress' ? (
                        <Clock size={15} className="status-icon in-progress" />
                      ) : (
                        <CheckCircle size={15} className="status-icon completed" />
                      )}
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    {skill.status === 'In Progress' && (
                      <span className="skill-status-tag">Active Focus</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
