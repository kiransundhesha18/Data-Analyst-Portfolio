import { useState } from 'react';
import { ArrowRight, Download, FileText, Database, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('sales');

  const metricTabs = {
    sales: {
      title: 'YoY Revenue & Margin Analysis',
      kpi1: { label: 'Net Revenue', val: '$584,200', change: '+24.6% YoY', isPositive: true },
      kpi2: { label: 'Gross Margin', val: '38.4%', change: '+5.2% Spread', isPositive: true },
      kpi3: { label: 'Stockout Risk', val: '2.4%', change: '-35% Variance', isPositive: true },
      path: 'M 10 90 Q 60 75 110 50 T 210 65 T 310 30 T 410 15',
      areaPath: 'M 10 90 Q 60 75 110 50 T 210 65 T 310 30 T 410 15 L 410 110 L 10 110 Z',
      badge: 'Power BI & DAX Modeling',
    },
    inventory: {
      title: 'Retail Supply Chain & RTO Diagnostics',
      kpi1: { label: 'Peak ROAS', val: '44x', change: 'Marketplace Ads', isPositive: true },
      kpi2: { label: 'Stock Alerts', val: '12 SKUs', change: 'Bhiwandi Hub', isPositive: true },
      kpi3: { label: 'RTO Penalty', val: '1.5x Ship', change: 'SLA Breach Cost', isPositive: false },
      path: 'M 10 30 Q 60 45 110 70 T 210 55 T 310 80 T 410 95',
      areaPath: 'M 10 30 Q 60 45 110 70 T 210 55 T 310 80 T 410 95 L 410 110 L 10 110 Z',
      badge: 'Advanced Excel & Command Center',
    },
    retention: {
      title: 'Cohort Retention & LTV SQL Model',
      kpi1: { label: 'Repeat Buyers', val: '38.4%', change: '+12.1% Cohort', isPositive: true },
      kpi2: { label: 'Avg Order Value', val: '$148.50', change: '+8.4% Lift', isPositive: true },
      kpi3: { label: 'Query Latency', val: '84ms', change: '2.4x Faster', isPositive: true },
      path: 'M 10 80 Q 70 85 130 55 T 230 40 T 330 35 T 410 20',
      areaPath: 'M 10 80 Q 70 85 130 55 T 230 40 T 330 35 T 410 20 L 410 110 L 10 110 Z',
      badge: 'Relational SQL & Aggregations',
    },
  };

  const currentData = metricTabs[activeTab];

  return (
    <section id="home" className="hero-section">
      <div className="glow-orb-top"></div>
      <div className="container hero-container">
        {/* Left / Top: Value Proposition */}
        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="pulse-dot"></span>
            <span>Open to Data Analyst & BI Roles</span>
          </div>

          <h1 className="hero-headline">
            Turning Complex Data Into{' '}
            <span className="gradient-text">Actionable Business Value.</span>
          </h1>

          <p className="hero-description">
            Aspiring Data Analyst skilled in <strong>Power BI</strong>, <strong>Excel</strong>, and <strong>SQL</strong>. 
            I engineer reliable ETL pipelines, architect Star Schema models, and build decision-ready executive dashboards that answer commercial questions.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <span>Explore Projects</span>
              <ArrowRight size={17} />
            </a>
            <a
              href="/resume.pdf"
              download="Kiran_Sundhesha_Data_Analyst.pdf"
              className="btn btn-secondary"
            >
              <Download size={17} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Quick Credential Highlights */}
          <div className="hero-highlights-list">
            <div className="hero-highlight-item">
              <CheckCircle2 size={16} className="highlight-icon" />
              <span>DAX & Star Schema</span>
            </div>
            <div className="hero-highlight-item">
              <CheckCircle2 size={16} className="highlight-icon" />
              <span>Advanced Excel & Modeling</span>
            </div>
            <div className="hero-highlight-item">
              <CheckCircle2 size={16} className="highlight-icon" />
              <span>SQL Queries & Aggregations</span>
            </div>
          </div>
        </div>

        {/* Right / Bottom: Live Data Visualization Card */}
        <div className="hero-visual-wrapper">
          <div className="hero-dashboard-card glass-card">
            {/* Card Topbar */}
            <div className="dashboard-card-header">
              <div className="dashboard-header-title">
                <div className="dashboard-dot-indicator"></div>
                <span>Executive Data Monitor</span>
              </div>
              <span className="badge badge-blue">{currentData.badge}</span>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="dashboard-tabs">
              <button
                className={`dashboard-tab ${activeTab === 'sales' ? 'active' : ''}`}
                onClick={() => setActiveTab('sales')}
              >
                Revenue YoY
              </button>
              <button
                className={`dashboard-tab ${activeTab === 'inventory' ? 'active' : ''}`}
                onClick={() => setActiveTab('inventory')}
              >
                Inventory
              </button>
              <button
                className={`dashboard-tab ${activeTab === 'retention' ? 'active' : ''}`}
                onClick={() => setActiveTab('retention')}
              >
                Retention SQL
              </button>
            </div>

            {/* 3 Metric KPI Cards */}
            <div className="dashboard-kpi-grid">
              <div className="dashboard-kpi-box">
                <span className="kpi-label">{currentData.kpi1.label}</span>
                <span className="kpi-value">{currentData.kpi1.val}</span>
                <span className="kpi-change positive">{currentData.kpi1.change}</span>
              </div>
              <div className="dashboard-kpi-box">
                <span className="kpi-label">{currentData.kpi2.label}</span>
                <span className="kpi-value">{currentData.kpi2.val}</span>
                <span className="kpi-change positive">{currentData.kpi2.change}</span>
              </div>
              <div className="dashboard-kpi-box">
                <span className="kpi-label">{currentData.kpi3.label}</span>
                <span className="kpi-value">{currentData.kpi3.val}</span>
                <span className="kpi-change positive">{currentData.kpi3.change}</span>
              </div>
            </div>

            {/* Live SVG Trend Visualizer */}
            <div className="dashboard-chart-container">
              <div className="chart-header">
                <span className="chart-title">{currentData.title}</span>
                <span className="chart-indicator">Interactive Simulation</span>
              </div>
              <div className="svg-chart-wrapper">
                <svg
                  viewBox="0 0 420 120"
                  className="hero-svg-chart"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Subtle Gridlines */}
                  <line x1="0" y1="30" x2="420" y2="30" stroke="var(--border-subtle)" strokeDasharray="3 3" />
                  <line x1="0" y1="65" x2="420" y2="65" stroke="var(--border-subtle)" strokeDasharray="3 3" />
                  <line x1="0" y1="100" x2="420" y2="100" stroke="var(--border-subtle)" strokeDasharray="3 3" />

                  {/* Gradient Area Fill */}
                  <path d={currentData.areaPath} fill="url(#chartGradient)" />

                  {/* Glowing Stroke Curve */}
                  <path
                    d={currentData.path}
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="animated-chart-line"
                  />
                </svg>
              </div>
              <div className="chart-footer-metrics">
                <span>Jan</span>
                <span>Apr</span>
                <span>Jul</span>
                <span>Oct</span>
                <span>Dec (Target Achieved)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
