import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, BarChart2, Download, Send } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Close mobile menu on Escape key press for accessibility
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Resume', href: '#resume' },
  ];

  return (
    <header
      className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <div className="container navbar-container">
        {/* Brand Logo & Title */}
        <a href="#home" className="navbar-brand">
          <div className="brand-icon-wrapper">
            <BarChart2 className="brand-icon" size={20} />
          </div>
          <div className="brand-text">
            <span className="brand-name">KIRAN SUNDHESHA</span>
            <span className="brand-title">Data Analyst</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-desktop-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-contact-btn">
            <Send size={15} />
            <span>Contact</span>
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle dark/light theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Action Controls */}
        <div className="navbar-mobile-actions">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-links">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '0.75rem' }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Send size={16} /> Let's Connect
              </a>
              <a
                href="/Resume.pdf"
                download="Kiran_Sundhesha_Data_Analyst.pdf"
                className="btn btn-secondary"
                style={{ width: '100%', marginTop: '0.5rem' }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Download size={16} /> Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
