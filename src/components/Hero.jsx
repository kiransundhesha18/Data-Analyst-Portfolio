import { ArrowRight, Download, Mail, MapPin, Sparkles, FolderGit2, Award, Briefcase } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Main Personal Intro */}
        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="pulse-dot"></span>
            <span>Available for Data Analyst Roles</span>
          </div>

          <h1 className="hero-headline">
            Hi, I&apos;m <span className="highlight-name">Kiran Sundhesha</span>
          </h1>

          <p className="hero-tagline">
            Aspiring Data Analyst <span className="tagline-dot">•</span> Power BI <span className="tagline-dot">•</span> SQL <span className="tagline-dot">•</span> Advanced Excel
          </p>

          <p className="hero-description">
            I turn messy, complex datasets into clear, interactive dashboards and actionable insights. 
            Passionate about Star Schema data modeling, automated reporting, and helping teams make 
            confident decisions through data.
          </p>

          {/* Quick Skill Tags */}
          <div className="hero-skills-row">
            <span className="hero-skill-chip">Power BI & DAX</span>
            <span className="hero-skill-chip">SQL (PostgreSQL/MySQL)</span>
            <span className="hero-skill-chip">Advanced Excel & PivotTables</span>
            <span className="hero-skill-chip">Power Query ETL</span>
            <span className="hero-skill-chip">Data Modeling</span>
          </div>

          {/* Call to Actions */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="/Resume.pdf"
              download="Kiran_Sundhesha_Data_Analyst.pdf"
              className="btn btn-secondary"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
            <a href="#contact" className="btn btn-outline">
              <Mail size={16} />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links & Location */}
          <div className="hero-footer-meta">
            <div className="hero-social-links">
              <a
                href="https://github.com/kiransundhesha18"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/kiransundhesha018"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="mailto:kiransundhesha56@gmail.com"
                className="social-icon-btn"
                aria-label="Email Kiran"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>

            <div className="hero-location-badge">
              <MapPin size={15} />
              <span>India • Open to Remote & On-site</span>
            </div>
          </div>
        </div>

        {/* Right: Personal Snapshot Card */}
        <div className="hero-card-column">
          <div className="personal-card">
            <div className="personal-card-header">
              <div className="personal-avatar">
                <span>KS</span>
                <span className="avatar-online-dot"></span>
              </div>
              <div>
                <h2 className="personal-card-name">Kiran Sundhesha</h2>
                <p className="personal-card-sub">Data Analyst Portfolio</p>
              </div>
            </div>

            <div className="personal-highlights-list">
              <div className="personal-highlight-row">
                <div className="highlight-icon-wrap icon-amber">
                  <FolderGit2 size={16} />
                </div>
                <div>
                  <span className="highlight-title">4 Portfolio Projects</span>
                  <span className="highlight-desc">Power BI, SQL queries & Excel modeling</span>
                </div>
              </div>

              <div className="personal-highlight-row">
                <div className="highlight-icon-wrap icon-emerald">
                  <Award size={16} />
                </div>
                <div>
                  <span className="highlight-title">Certified Analyst</span>
                  <span className="highlight-desc">Hands-on BI & SQL coursework</span>
                </div>
              </div>

              <div className="personal-highlight-row">
                <div className="highlight-icon-wrap icon-blue">
                  <Briefcase size={16} />
                </div>
                <div>
                  <span className="highlight-title">Ready for Hiring</span>
                  <span className="highlight-desc">Immediate joiner for full-time roles</span>
                </div>
              </div>
            </div>

            <div className="personal-card-quote">
              <p>&ldquo;Data is only as valuable as the decisions it empowers.&rdquo;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
