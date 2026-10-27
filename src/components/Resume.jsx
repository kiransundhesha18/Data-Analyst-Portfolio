import { useState } from 'react';
import { Download, FileText, CheckCircle2, Copy, Check, GraduationCap } from 'lucide-react';

export default function Resume() {
  const [copied, setCopied] = useState(false);

  const handleCopySummary = async () => {
    const summary = `Kiran Sundhesha - Aspiring Data Analyst
Education: MCA - Master of Computer Applications (2026) | BCA (2024)
Core Skills: Power BI, Advanced Excel, SQL, DAX, Power Query ETL, Star Schema Modeling
Projects: IPL Player Auction & Valuation Analytics, Retail Sales & Supply Chain Analytics, Customer Retention in SQL
Status: Open to Full-time & Remote Data Analyst roles (Immediate Joiner)
Email: kiransundhesha56@gmail.com
GitHub: https://github.com/kiransundhesha18
LinkedIn: https://www.linkedin.com/in/kiransundhesha018`;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(summary);
      } else {
        const temp = document.createElement('textarea');
        temp.value = summary;
        temp.style.position = 'fixed';
        temp.style.opacity = '0';
        document.body.appendChild(temp);
        temp.focus();
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Credentials</span>
          <h2 className="section-title">Resume & Background</h2>
          <p className="section-subtitle">
            Download my resume or grab a quick qualifications summary for recruiting.
          </p>
        </div>

        <div className="resume-card-wrapper">
          {/* Main Action Banner */}
          <div className="resume-banner">
            <div className="resume-banner-info">
              <div className="resume-file-icon">
                <FileText size={28} />
              </div>
              <div>
                <h3 className="resume-name">Kiran Sundhesha</h3>
                <p className="resume-role">Data Analyst Resume • MCA & BCA Graduate</p>
                <div className="resume-tags">
                  <span className="resume-tag">PDF Format</span>
                  <span className="resume-tag">MCA & BCA</span>
                  <span className="resume-tag">Power BI • SQL • Excel</span>
                  <span className="resume-tag">Immediate Joiner</span>
                </div>
              </div>
            </div>

            <div className="resume-banner-actions">
              <a
                href={`${import.meta.env.BASE_URL}Resume.pdf`}
                download="Kiran_Sundhesha_Data_Analyst.pdf"
                className="btn btn-primary"
              >
                <Download size={16} />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                type="button"
                onClick={handleCopySummary}
                className="btn btn-secondary"
                title="Copy recruiter summary to clipboard"
              >
                {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                <span>{copied ? 'Summary Copied!' : 'Copy Summary'}</span>
              </button>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="resume-highlights-grid">
            <div className="resume-highlight-box">
              <div className="highlight-box-header">
                <GraduationCap size={18} className="text-accent" />
                <h4 className="highlight-box-title">Education & Degrees</h4>
              </div>
              <p className="highlight-box-desc">
                <strong>MCA</strong> - Master of Computer Applications (2026)<br />
                <strong>BCA</strong> - Bachelor of Computer Applications (2024)
              </p>
            </div>

            <div className="resume-highlight-box">
              <div className="highlight-box-header">
                <CheckCircle2 size={18} className="text-accent" />
                <h4 className="highlight-box-title">Technical Toolkit</h4>
              </div>
              <p className="highlight-box-desc">
                Power BI (DAX, Star Schema), Advanced Excel (PivotTables, Dynamic Formulas), 
                SQL (Multi-Table JOINs, Aggregations), Power Query ETL.
              </p>
            </div>

            <div className="resume-highlight-box">
              <div className="highlight-box-header">
                <CheckCircle2 size={18} className="text-accent" />
                <h4 className="highlight-box-title">Analytical Strengths</h4>
              </div>
              <p className="highlight-box-desc">
                Data cleaning, anomaly detection, cohort retention, supply chain metrics, 
                and executive dashboard storytelling.
              </p>
            </div>

            <div className="resume-highlight-box">
              <div className="highlight-box-header">
                <CheckCircle2 size={18} className="text-accent" />
                <h4 className="highlight-box-title">Role Availability</h4>
              </div>
              <p className="highlight-box-desc">
                Open to entry-level / associate Data Analyst or BI Analyst roles. 
                Flexible with remote, hybrid, or on-site opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
