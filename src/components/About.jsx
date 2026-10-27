import { MapPin, GraduationCap, CheckCircle2, HeartHandshake, Sparkles, Compass } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Background</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A look into my journey, analytical approach, and what drives my work.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Personal Narrative */}
          <div className="about-story-card">
            <h3 className="about-greeting">
              Hi, I&apos;m Kiran — a data analyst driven by curiosity and clarity.
            </h3>

            <p className="about-paragraph">
              My interest in data analytics started from a straightforward question: why do business 
              trends happen, and how can we use numbers to make better decisions? Through intensive 
              coursework and practical portfolio projects, I have developed strong, practical skills 
              in <strong>Power BI</strong>, <strong>SQL</strong>, and <strong>Excel</strong>.
            </p>

            <p className="about-paragraph">
              To me, a great dashboard is much more than colorful charts. It should answer practical 
              business questions, pinpoint the root causes of variance, and give decision-makers 
              confidence in their numbers. I take pride in data hygiene, clean Star Schema modeling, 
              and clear, uncluttered visual storytelling.
            </p>

            <div className="about-values-grid">
              <div className="about-val-box">
                <Compass size={20} className="val-icon text-accent" />
                <div>
                  <h4 className="val-title">Curious & Investigative</h4>
                  <p className="val-desc">Digging beneath top-level numbers to find what actually drives variance.</p>
                </div>
              </div>

              <div className="about-val-box">
                <Sparkles size={20} className="val-icon text-accent" />
                <div>
                  <h4 className="val-title">Detail-Oriented</h4>
                  <p className="val-desc">Ensuring clean joins, thorough null checks, and honest visual axes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Facts & Highlights */}
          <div className="about-sidebar">
            <div className="about-fact-card">
              <h4 className="fact-card-title">Quick Facts</h4>

              <div className="fact-list">
                <div className="fact-item">
                  <div className="fact-icon-wrap">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="fact-label">Location</span>
                    <span className="fact-val">India (Open to Remote & On-site)</span>
                  </div>
                </div>

                <div className="fact-item">
                  <div className="fact-icon-wrap">
                    <GraduationCap size={16} />
                  </div>
                  <div>
                    <span className="fact-label">Education</span>
                    <span className="fact-val">MCA (2026) • BCA (2024)</span>
                  </div>
                </div>

                <div className="fact-item">
                  <div className="fact-icon-wrap">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <span className="fact-label">Status</span>
                    <span className="fact-val">Ready for immediate opportunities</span>
                  </div>
                </div>

                <div className="fact-item">
                  <div className="fact-icon-wrap">
                    <HeartHandshake size={16} />
                  </div>
                  <div>
                    <span className="fact-label">Open To</span>
                    <span className="fact-val">Entry-Level Data Analyst / BI Analyst</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-quote-box">
              <p className="quote-body">
                &ldquo;Data is only as valuable as the decisions it empowers.&rdquo;
              </p>
              <span className="quote-author">— Core Philosophy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
