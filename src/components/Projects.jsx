import { useState } from 'react';
import { projectsData } from '../data/ProjectsData';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Power BI', 'Excel', 'SQL'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Hands-on data analytics projects showcasing business intelligence dashboards, 
            relational database queries, and spreadsheet decision models.
          </p>

          {/* Category Filter Tabs */}
          <div className="filter-tabs-row">
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
                  className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                >
                  <span>{cat}</span>
                  <span className="filter-badge">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
