import { useState } from 'react';
import { Download, FileText, CheckCircle2, Copy, Check, GraduationCap } from 'lucide-react';

export default function Resume() {
  const [copied, setCopied] = useState(false);

  const handleCopySummary = async () => {
    const summary = `Kiran Sundhesha - Data Analyst | Business Intelligence Specialist
Location: Ahmedabad, Gujarat, India (Open to Remote)
Email: kiransundhesha56@gmail.com
LinkedIn: https://www.linkedin.com/in/kiransundhesha018
GitHub: https://github.com/kiransundhesha18
Education: MCA - Master of Computer Applications (Completed 2026) | BCA - Bachelor of Computer Applications (Completed 2024)

Professional Summary:
Detail-oriented, commercially focused Entry-Level Data Analyst with strong expertise in Power BI, Advanced Microsoft Excel, and Data ETL Pipelines. Experienced in transforming unorganized transactional data into normalized star-schema models, writing robust DAX measures, and designing high-impact executive dashboards that uncover revenue opportunities and optimize operational efficiency. Ready to contribute on Day 1.

Technical Skills:
• Business Intelligence: Power BI, DAX Expressions (Time Intelligence, RANKX), Star Schema Modeling, Power Query ETL, Executive Dashboards.
• Spreadsheet Modeling: Microsoft Excel, Power Query Data Merging (No-VLOOKUP Pipelines), Excel Data Model (Power Pivot), Advanced PivotTables & Synchronized Slicers, Financial Margin Modeling.
• Core Analytics: KPI Formulation, Variance Analysis, Supply Chain Metrics, Customer Cohort Diagnostics, Exploratory Data Analysis (EDA).

Featured Case Studies & Projects:
1. FMCG Retail Channel Profitability & Margin Analysis (Advanced Excel & Power Query ETL)
2. Quick-Commerce Operations & SLA Performance Dashboard (Power BI & Advanced DAX)

Status: Open to Full-time & Remote Data Analyst roles (Immediate Joiner)`;

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
                <p className="resume-role">Data Analyst | Business Intelligence Specialist</p>
                <div className="resume-tags">
                  <span className="resume-tag">PDF Format</span>
                  <span className="resume-tag">MCA & BCA Graduate</span>
                  <span className="resume-tag">Power BI • Excel (Power Pivot) • ETL</span>
                  <span className="resume-tag">Ready to Contribute Day 1</span>
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
                <h4 className="highlight-box-title">Education</h4>
              </div>
              <p className="highlight-box-desc">
                <strong>MCA</strong> - Master of Computer Applications (2026)<br />
                <strong>BCA</strong> - Bachelor of Computer Applications (2024)
              </p>
            </div>

            <div className="resume-highlight-box">
              <div className="highlight-box-header">
                <CheckCircle2 size={18} className="text-accent" />
                <h4 className="highlight-box-title">Technical Skills</h4>
              </div>
              <p className="highlight-box-desc">
                Power BI (DAX, Time Intelligence, RANKX, Star Schema), Advanced Excel (Power Pivot Data Model, Power Query ETL, Slicers, Financial Margin Modeling).
              </p>
            </div>

            <div className="resume-highlight-box">
              <div className="highlight-box-header">
                <CheckCircle2 size={18} className="text-accent" />
                <h4 className="highlight-box-title">Core Analytics</h4>
              </div>
              <p className="highlight-box-desc">
                KPI Formulation, Variance Analysis, Supply Chain Metrics, Customer Cohort Diagnostics, Exploratory Data Analysis (EDA).
              </p>
            </div>

            <div className="resume-highlight-box">
              <div className="highlight-box-header">
                <CheckCircle2 size={18} className="text-accent" />
                <h4 className="highlight-box-title">Location & Availability</h4>
              </div>
              <p className="highlight-box-desc">
                Ahmedabad, Gujarat, India (Open to Remote). Immediate joiner ready to contribute as an Entry-Level Data Analyst / BI Specialist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
