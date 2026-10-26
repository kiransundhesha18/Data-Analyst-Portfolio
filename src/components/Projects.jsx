import { useState } from 'react';
import { projectsData } from '../data/ProjectsData';
import ProjectCard from './ProjectCard';
import { Filter, Layers } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Power BI', 'Excel', 'SQL'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Layers size={14} />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="section-title">
            Data Modeling & Business Solutions
          </h2>
          <p className="section-subtitle">
            Demonstrating end-to-end competencies from raw data transformation and statistical modeling 
            to interactive executive visualization and actionable commercial outcomes.
          </p>

          {/* Category Filter Tabs */}
          <div className="projects-filter-bar">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? projectsData.length
                  : projectsData.filter((p) => p.category === cat).length;
              return (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`filter-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                >
                  <span>{cat}</span>
                  <span className="filter-count">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="glass-card" style={{ padding: '2.5rem', textAlign: 'center', gridColumn: '1 / -1' }}>
              <p style={{ color: 'var(--text-secondary)' }}>No projects found for the selected category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
