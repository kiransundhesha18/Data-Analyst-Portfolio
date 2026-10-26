import { BarChart2, ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <div className="footer-logo">
              <BarChart2 size={22} className="text-blue" />
              <span className="footer-brand-name">KIRAN SUNDHESHA</span>
            </div>
            <p className="footer-tagline">
              Data Analyst transforming complex transactional datasets into clean models, 
              interactive executive dashboards, and strategic business clarity.
            </p>
          </div>

          <div className="footer-links-group">
            <span className="footer-heading">Navigation</span>
            <div className="footer-links">
              <a href="#projects">Featured Projects</a>
              <a href="#skills">Technical Skills</a>
              <a href="#about">About Kiran</a>
              <a href="#resume">Download Resume</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-social-group">
            <span className="footer-heading">Connect</span>
            <div className="footer-social-icons">
              <a
                href="mailto:kiransundhesha56@gmail.com"
                className="footer-social-btn"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/kiransundhesha018"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="https://github.com/kiransundhesha18"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copy">
            &copy; {currentYear} Kiran Sundhesha. All rights reserved. Built with React & Vite.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
