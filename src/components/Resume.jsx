import { useState } from 'react';
import { Download, FileText, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';

export default function Resume() {
  const [copied, setCopied] = useState(false);

  const handleCopySummary = async () => {
    const summary = `Kiran Sundhesha - Entry-Level Data Analyst
Core Competencies: Power BI, Advanced Excel, SQL, DAX, Power Query ETL, Star Schema Modeling
Projects: IPL Franchise Valuation ROI, Enterprise Retail & Supply Chain Suite, Customer Retention SQL Analysis
Ready for immediate opportunities.`;
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
    <section id="resume" className="resume-section">
      <div className="container">
        <div className="section-header">
          <div className="section-pill">
            <FileText size={14} />
            <span>Credentials & Resume</span>
          </div>
          <h2 className="section-title">Ready for Your Analytics Team</h2>
          <p className="section-subtitle">
            Download my comprehensive resume detailing coursework, technical competencies, 
            and hands-on portfolio case studies.
          </p>
        </div>

        <div className="resume-card-container">
          <div className="resume-showcase-card glass-card">
            <div className="resume-card-left">
              <div className="resume-icon-badge">
                <FileText size={32} className="text-blue" />
              </div>
              <div className="resume-info-text">
                <h3 className="resume-candidate-name">Kiran Sundhesha</h3>
                <p className="resume-role-sub">Data Analyst & BI Specialist</p>
                <div className="resume-pills-row">
                  <span className="badge badge-blue">PDF Document</span>
                  <span className="badge badge-emerald">Updated October 2026</span>
                  <span className="badge badge-purple">ATS-Optimized</span>
                </div>
              </div>
            </div>

            <div className="resume-actions-group">
              <a
                href="/Resume.pdf"
                download="Kiran_Sundhesha_Data_Analyst_Resume.pdf"
                className="btn btn-primary resume-download-btn"
              >
                <Download size={18} />
                <span>Download Resume (PDF)</span>
              </a>
              <button
                type="button"
                onClick={handleCopySummary}
                className="btn btn-secondary"
                title="Copy quick summary for recruiters"
              >
                {copied ? <Check size={18} className="text-emerald" /> : <Copy size={18} />}
                <span>{copied ? 'Summary Copied!' : 'Copy Summary'}</span>
              </button>
            </div>
          </div>

          {/* Quick Overview Grid */}
          <div className="resume-quick-overview-grid">
            <div className="overview-mini-card glass-card">
              <h4 className="overview-title">
                <CheckCircle2 size={16} className="text-blue" />
                <span>Core Technical Stack</span>
              </h4>
              <p className="overview-text">
                Power BI (DAX, Modeling), Microsoft Excel (PivotTables, Advanced Formulas), SQL (JOINs, Aggregations, GROUP BY), Power Query ETL.
              </p>
            </div>

            <div className="overview-mini-card glass-card">
              <h4 className="overview-title">
                <CheckCircle2 size={16} className="text-emerald" />
                <span>Business Readiness</span>
              </h4>
              <p className="overview-text">
                Trained to identify revenue variance, calculate unit economics, quantify inventory holding costs, and communicate insights to leadership.
              </p>
            </div>

            <div className="overview-mini-card glass-card">
              <h4 className="overview-title">
                <CheckCircle2 size={16} className="text-purple" />
                <span>Availability & Terms</span>
              </h4>
              <p className="overview-text">
                Available immediately for full-time entry-level Data Analyst, BI Analyst, or Associate positions. Open to both remote and on-site opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
