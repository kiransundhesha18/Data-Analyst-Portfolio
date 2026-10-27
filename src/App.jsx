import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('portfolio-theme') || 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.removeAttribute('data-palette');
    try {
      localStorage.setItem('portfolio-theme', theme);
      localStorage.removeItem('portfolio-palette');
    } catch {
      // Storage unavailable in restricted privacy mode
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="portfolio-app-root">
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}