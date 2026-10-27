import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <span className="footer-name">Kiran Sundhesha</span>
            <span className="footer-role">Data Analyst • Power BI • SQL • Excel</span>
            <p className="footer-desc">
              Transforming complex data into clear dashboards and actionable insights.
            </p>
          </div>

          <div className="footer-nav">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-socials">
            <a
              href="mailto:kiransundhesha56@gmail.com"
              className="footer-social-icon"
              aria-label="Email"
              title="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/kiransundhesha018"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href="https://github.com/kiransundhesha18"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="GitHub"
              title="GitHub"
            >
              <GithubIcon size={16} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            Designed &amp; built by Kiran Sundhesha &bull; &copy; {new Date().getFullYear()}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
