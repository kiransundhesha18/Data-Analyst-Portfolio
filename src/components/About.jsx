import { User, MapPin, Briefcase, GraduationCap, Target, Layers, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-pill">
            <User size={14} />
            <span>Candidate Profile</span>
          </div>
          <h2 className="section-title">About Kiran Sundhesha</h2>
          <p className="section-subtitle">
            A committed, detail-oriented analyst combining structured statistical fundamentals 
            with modern business intelligence tooling.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Candidate Info Card */}
          <div className="about-profile-card glass-card">
            <div className="avatar-monogram-wrapper">
              <div className="avatar-monogram">KS</div>
              <div className="avatar-status-badge">
                <span className="pulse-dot"></span>
              </div>
            </div>

            <h3 className="profile-name">Kiran Sundhesha</h3>
            <p className="profile-role">Aspiring Data Analyst</p>

            <div className="profile-meta-list">
              <div className="profile-meta-item">
                <MapPin size={16} className="text-blue" />
                <span>India • Open to Remote & On-site</span>
              </div>
              <div className="profile-meta-item">
                <Briefcase size={16} className="text-emerald" />
                <span>Available for Immediate Placement</span>
              </div>
              <div className="profile-meta-item">
                <GraduationCap size={16} className="text-purple" />
                <span>Comprehensive Data Analytics Graduate</span>
              </div>
            </div>

            <div className="profile-tags-group">
              <span className="badge badge-blue">Power BI</span>
              <span className="badge badge-emerald">Advanced Excel</span>
              <span className="badge badge-blue">SQL / MySQL</span>
              <span className="badge badge-purple">DAX & Star Schema</span>
              <span className="badge badge-amber">ETL Pipelines</span>
            </div>
          </div>

          {/* Right Column: Narrative & Analytical Pillars */}
          <div className="about-narrative-col">
            <div className="narrative-content-card glass-card">
              <h3 className="narrative-heading">
                Analytical Mindset Driven by Practical Business Impact
              </h3>
              <p className="narrative-paragraph">
                Having completed dedicated, intensive coursework in Data Analytics, I have spent hundreds of hours 
                working with raw transactional datasets, architecting clean data models, and generating decision-ready 
                dashboards.
              </p>
              <p className="narrative-paragraph">
                I believe that <strong>data is only as valuable as the decisions it empowers</strong>. My focus is not 
                simply generating charts, but rigorously verifying data hygiene, identifying the root causes of variance, 
                and presenting concise takeaways that leadership can act upon immediately.
              </p>

              {/* Three Strategic Pillars */}
              <div className="pillars-grid">
                <div className="pillar-item">
                  <div className="pillar-icon-box">
                    <ShieldCheck size={20} className="text-emerald" />
                  </div>
                  <div>
                    <h4 className="pillar-title">Data Hygiene & Quality</h4>
                    <p className="pillar-desc">
                      Ensuring zero ambiguity: systematically cleaning anomalies, missing records, and formatting inconsistencies in Power Query and SQL.
                    </p>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon-box">
                    <Layers size={20} className="text-blue" />
                  </div>
                  <div>
                    <h4 className="pillar-title">Scalable Data Modeling</h4>
                    <p className="pillar-desc">
                      Building normalized star schemas with proper dimension/fact relationships to guarantee fast, bug-free DAX measures.
                    </p>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon-box">
                    <Target size={20} className="text-amber" />
                  </div>
                  <div>
                    <h4 className="pillar-title">Commercial Storytelling</h4>
                    <p className="pillar-desc">
                      Structuring dashboards with intuitive visual hierarchy, uncluttered layouts, and executive summaries that drive ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
