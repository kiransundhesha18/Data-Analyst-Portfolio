import { BarChart2, Database, FileSpreadsheet, TrendingUp, Check } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      id: 'power-bi',
      title: 'Power BI & BI Modeling',
      icon: <BarChart2 size={24} className="skill-cat-icon icon-amber" />,
      tag: 'Primary Tool',
      description: 'Building end-to-end business intelligence dashboards and scalable Star Schema data models.',
      skills: [
        'DAX Measures (CALCULATE, RELATED, Time-Intelligence)',
        'Star Schema & Relational Data Modeling',
        'Power Query & Automated ETL Transformations',
        'Executive KPI Dashboards & Interactive Slicers',
        'Drill-through & Detailed Report Views',
      ],
    },
    {
      id: 'sql',
      title: 'SQL & Relational Databases',
      icon: <Database size={24} className="skill-cat-icon icon-blue" />,
      tag: 'Core Proficiency',
      description: 'Querying, joining, and filtering multi-table databases to extract actionable numbers.',
      skills: [
        'Multi-Table JOINs (INNER, LEFT, RIGHT)',
        'Aggregations (SUM, AVG, COUNT, MIN/MAX)',
        'GROUP BY & HAVING Clauses',
        'Subqueries, Filtering & CASE WHEN Logic',
        'PostgreSQL & MySQL Querying',
      ],
    },
    {
      id: 'excel',
      title: 'Advanced Microsoft Excel',
      icon: <FileSpreadsheet size={24} className="skill-cat-icon icon-emerald" />,
      tag: 'Core Proficiency',
      description: 'Transforming spreadsheets into dynamic financial models and automated reporting sheets.',
      skills: [
        'XLOOKUP, INDEX/MATCH & Modern Formulas',
        'Dynamic PivotTables & Pivot Charts',
        'Nested IF / IFS & Error Handling',
        'What-If Scenario & Sensitivity Modeling',
        'Data Cleaning & Validation Rules',
      ],
    },
    {
      id: 'analytics',
      title: 'Business Analytics & Methods',
      icon: <TrendingUp size={24} className="skill-cat-icon icon-purple" />,
      tag: 'Mindset',
      description: 'Translating quantitative numbers into clear takeaways that solve practical business problems.',
      skills: [
        'Exploratory Data Analysis (EDA)',
        'Data Hygiene & Anomaly Detection',
        'KPI Formulation & Variance Tracking',
        'Actionable Executive Summaries',
        'Root Cause & Cohort Retention Analysis',
      ],
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Toolkit</span>
          <h2 className="section-title">Skills & Capabilities</h2>
          <p className="section-subtitle">
            The core tools, query languages, and analytical methodologies I use to turn raw data into insights.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.id} className="skill-card">
              <div className="skill-card-top">
                <div className="skill-icon-box">{cat.icon}</div>
                <span className="skill-badge">{cat.tag}</span>
              </div>

              <h3 className="skill-title">{cat.title}</h3>
              <p className="skill-description">{cat.description}</p>

              <div className="skill-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <Check size={14} className="skill-check" />
                    <span>{skill}</span>
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
