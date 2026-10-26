import { useState, useMemo } from 'react';
import { 
  Trophy, 
  DollarSign, 
  Target, 
  TrendingUp, 
  BarChart3, 
  Sparkles, 
  Sliders, 
  Search, 
  Filter, 
  Award, 
  AlertTriangle, 
  CheckCircle2, 
  Flame, 
  Layers,
  ArrowRight
} from 'lucide-react';

export default function InteractiveDemo() {
  const [selectedFranchise, setSelectedFranchise] = useState('All');
  const [selectedRole, setSelectedRole] = useState('All');
  const [viewMode, setViewMode] = useState('quadrant'); // 'quadrant' | 'table' | 'dax'
  const [roiMetric, setRoiMetric] = useState('batting'); // 'batting' | 'bowling'
  const [searchQuery, setSearchQuery] = useState('');

  // Authentic IPL dataset modeled on the 2024 season auction and performance
  const playersDataset = useMemo(() => [
    {
      id: 1,
      name: 'Travis Head',
      franchise: 'SRH',
      role: 'Batter',
      priceCr: 6.80,
      runs: 567,
      wickets: 0,
      costPerRun: '₹1.20L',
      costPerWicket: null,
      classification: 'Draft Steal',
      quadrant: 'steal', // low price, high output
      highlight: 'Strike rate of 191.5; exceptional capital efficiency.',
    },
    {
      id: 2,
      name: 'Shashank Singh',
      franchise: 'PBKS',
      role: 'Batter',
      priceCr: 0.20,
      runs: 354,
      wickets: 0,
      costPerRun: '₹5,650',
      costPerWicket: null,
      classification: 'Mega Steal',
      quadrant: 'steal',
      highlight: 'Lowest cost-per-run across the entire tournament at base price ₹20L.',
    },
    {
      id: 3,
      name: 'Virat Kohli',
      franchise: 'RCB',
      role: 'Batter',
      priceCr: 15.00,
      runs: 741,
      wickets: 0,
      costPerRun: '₹2.02L',
      costPerWicket: null,
      classification: 'Marquee Output',
      quadrant: 'marquee', // high price, high output
      highlight: 'Orange Cap winner; justified premium valuation with 741 runs.',
    },
    {
      id: 4,
      name: 'Heinrich Klaasen',
      franchise: 'SRH',
      role: 'Wicketkeeper',
      priceCr: 5.25,
      runs: 479,
      wickets: 0,
      costPerRun: '₹1.10L',
      costPerWicket: null,
      classification: 'Draft Steal',
      quadrant: 'steal',
      highlight: 'Elite middle-overs power hitter at mid-tier auction bracket.',
    },
    {
      id: 5,
      name: 'Ruturaj Gaikwad',
      franchise: 'CSK',
      role: 'Batter',
      priceCr: 6.00,
      runs: 583,
      wickets: 0,
      costPerRun: '₹1.03L',
      costPerWicket: null,
      classification: 'Draft Steal',
      quadrant: 'steal',
      highlight: 'Top run scorer for CSK; captained while maintaining high ROI.',
    },
    {
      id: 6,
      name: 'Shivam Dube',
      franchise: 'CSK',
      role: 'All-rounder',
      priceCr: 4.00,
      runs: 396,
      wickets: 1,
      costPerRun: '₹1.01L',
      costPerWicket: '₹4.00 Cr',
      classification: 'Draft Steal',
      quadrant: 'steal',
      highlight: 'Key spin-demolisher; provided batting output equal to ₹12Cr players.',
    },
    {
      id: 7,
      name: 'Sunil Narine',
      franchise: 'KKR',
      role: 'All-rounder',
      priceCr: 6.00,
      runs: 488,
      wickets: 17,
      costPerRun: '₹1.23L',
      costPerWicket: '₹35.3L',
      classification: 'Tournament MVP',
      quadrant: 'steal',
      highlight: 'Dual-skill mastery: 488 runs + 17 wickets on a ₹6Cr price tag.',
    },
    {
      id: 8,
      name: 'Varun Chakaravarthy',
      franchise: 'KKR',
      role: 'Bowler',
      priceCr: 8.00,
      runs: 5,
      wickets: 21,
      costPerRun: null,
      costPerWicket: '₹38.1L',
      classification: 'High ROI Bowler',
      quadrant: 'marquee',
      highlight: '21 wickets at crucial economy; anchor of KKR championship campaign.',
    },
    {
      id: 9,
      name: 'Jasprit Bumrah',
      franchise: 'MI',
      role: 'Bowler',
      priceCr: 12.00,
      runs: 12,
      wickets: 20,
      costPerRun: null,
      costPerWicket: '₹60.0L',
      classification: 'Elite Return',
      quadrant: 'marquee',
      highlight: 'Economy under 6.50 RPO with 20 wickets; unparalleled control.',
    },
    {
      id: 10,
      name: 'Harshal Patel',
      franchise: 'PBKS',
      role: 'Bowler',
      priceCr: 11.75,
      runs: 34,
      wickets: 24,
      costPerRun: null,
      costPerWicket: '₹48.9L',
      classification: 'Purple Cap Value',
      quadrant: 'marquee',
      highlight: 'Purple Cap winner; high volume of death-over wickets.',
    },
    {
      id: 11,
      name: 'Matheesha Pathirana',
      franchise: 'CSK',
      role: 'Bowler',
      priceCr: 0.20,
      runs: 0,
      wickets: 13,
      costPerRun: null,
      costPerWicket: '₹1.54L',
      classification: 'Mega Steal',
      quadrant: 'steal',
      highlight: '₹20L auction cost delivering 13 death-over wickets at elite strike rate.',
    },
    {
      id: 12,
      name: 'Mitchell Starc',
      franchise: 'KKR',
      role: 'Bowler',
      priceCr: 24.75,
      runs: 16,
      wickets: 17,
      costPerRun: null,
      costPerWicket: '₹1.45 Cr',
      classification: 'Costly Investment',
      quadrant: 'inefficient', // high price, moderate regular-season wickets
      highlight: 'Record auction buy; clutch in playoffs but highest cost-per-wicket.',
    },
    {
      id: 13,
      name: 'Glenn Maxwell',
      franchise: 'RCB',
      role: 'All-rounder',
      priceCr: 11.00,
      runs: 52,
      wickets: 6,
      costPerRun: '₹21.1L',
      costPerWicket: '₹1.83 Cr',
      classification: 'Cap Drain',
      quadrant: 'inefficient',
      highlight: '52 runs scored at ₹21.1 Lakhs per run; major salary cap drain.',
    },
    {
      id: 14,
      name: 'Rohit Sharma',
      franchise: 'MI',
      role: 'Batter',
      priceCr: 16.00,
      runs: 417,
      wickets: 0,
      costPerRun: '₹3.84L',
      costPerWicket: null,
      classification: 'Moderate ROI',
      quadrant: 'marquee',
      highlight: 'Solid run count but high monetary cost per boundary scored.',
    },
    {
      id: 15,
      name: 'Yash Dayal',
      franchise: 'RCB',
      role: 'Bowler',
      priceCr: 5.00,
      runs: 2,
      wickets: 15,
      costPerRun: null,
      costPerWicket: '₹33.3L',
      classification: 'Draft Steal',
      quadrant: 'steal',
      highlight: 'Defended critical playoffs qualification over with disciplined bowling.',
    },
  ], []);

  // Filtered dataset
  const filteredPlayers = useMemo(() => {
    return playersDataset.filter((p) => {
      const matchFranchise = selectedFranchise === 'All' || p.franchise === selectedFranchise;
      const matchRole = selectedRole === 'All' || p.role === selectedRole;
      const matchSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.franchise.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.classification.toLowerCase().includes(searchQuery.toLowerCase());
      return matchFranchise && matchRole && matchSearch;
    });
  }, [playersDataset, selectedFranchise, selectedRole, searchQuery]);

  // Aggregated KPIs
  const summaryKPIs = useMemo(() => {
    const totalSpend = filteredPlayers.reduce((acc, p) => acc + p.priceCr, 0);
    const totalRuns = filteredPlayers.reduce((acc, p) => acc + p.runs, 0);
    const totalWickets = filteredPlayers.reduce((acc, p) => acc + p.wickets, 0);
    const draftStealsCount = filteredPlayers.filter((p) =>
      p.classification.includes('Steal') || p.classification.includes('MVP')
    ).length;

    // Averages
    const avgCostPerRun = totalRuns > 0 ? (totalSpend * 10000000) / totalRuns : 0;
    const avgCostPerWicket = totalWickets > 0 ? (totalSpend * 10000000) / totalWickets : 0;

    return {
      totalSpend: totalSpend.toFixed(2),
      totalRuns: totalRuns.toLocaleString(),
      totalWickets,
      draftStealsCount,
      avgCostPerRunFormatted: avgCostPerRun > 0 ? `₹${Math.round(avgCostPerRun).toLocaleString()}` : 'N/A',
      avgCostPerWicketFormatted:
        avgCostPerWicket > 0 ? `₹${(avgCostPerWicket / 100000).toFixed(1)} Lakhs` : 'N/A',
    };
  }, [filteredPlayers]);

  const franchises = ['All', 'KKR', 'CSK', 'SRH', 'MI', 'RCB', 'PBKS'];
  const roles = ['All', 'Batter', 'Bowler', 'All-rounder', 'Wicketkeeper'];

  return (
    <section id="interactive-demo" className="interactive-demo-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Trophy size={14} className="text-amber" />
            <span>Power BI Flagship Case Study</span>
          </div>
          <h2 className="section-title">
            IPL Franchise Valuation & Player ROI Analytics
          </h2>
          <p className="section-subtitle">
            A &ldquo;Moneyball&rdquo;-style sports analytics dashboard built to evaluate financial efficiency 
            across ₹1,192+ Crores of IPL auction spend. Built with custom DAX measures isolating player roles 
            to expose cap drains and identify undervalued draft steals.
          </p>
        </div>

        {/* Dashboard Frame Window */}
        <div className="demo-dashboard-window glass-card">
          {/* Top Control Bar: Franchise & Role Slicers */}
          <div className="demo-toolbar">
            <div className="demo-filter-group">
              <span className="demo-filter-label">
                <Sliders size={15} />
                <span>Franchise Slicer:</span>
              </span>
              <div className="demo-pill-options">
                {franchises.map((f) => (
                  <button
                    type="button"
                    key={f}
                    onClick={() => setSelectedFranchise(f)}
                    className={`demo-slicer-btn ${selectedFranchise === f ? 'active' : ''}`}
                  >
                    {f === 'All' ? 'All Franchises' : f}
                  </button>
                ))}
              </div>
            </div>

            <div className="demo-filter-group">
              <span className="demo-filter-label">
                <Filter size={15} />
                <span>Player Role:</span>
              </span>
              <div className="demo-pill-options">
                {roles.map((r) => (
                  <button
                    type="button"
                    key={r}
                    onClick={() => setSelectedRole(r)}
                    className={`demo-slicer-btn ${selectedRole === r ? 'active' : ''}`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic Scorecard Metric Ribbon */}
          <div className="demo-kpi-row">
            <div className="demo-kpi-card">
              <div className="demo-kpi-header">
                <span className="demo-kpi-title">Selected Spend</span>
                <DollarSign size={18} className="text-blue" />
              </div>
              <div className="demo-kpi-value">₹{summaryKPIs.totalSpend} Cr</div>
              <div className="demo-kpi-context">
                <span>Auction Cap Allocation</span>
              </div>
            </div>

            <div className="demo-kpi-card">
              <div className="demo-kpi-header">
                <span className="demo-kpi-title">Batting Output</span>
                <Flame size={18} className="text-amber" />
              </div>
              <div className="demo-kpi-value">{summaryKPIs.totalRuns}</div>
              <div className="demo-kpi-context positive">
                <span>Avg: {summaryKPIs.avgCostPerRunFormatted}/run</span>
              </div>
            </div>

            <div className="demo-kpi-card">
              <div className="demo-kpi-header">
                <span className="demo-kpi-title">Bowling Output</span>
                <Target size={18} className="text-emerald" />
              </div>
              <div className="demo-kpi-value">{summaryKPIs.totalWickets} Wkts</div>
              <div className="demo-kpi-context positive">
                <span>Avg: {summaryKPIs.avgCostPerWicketFormatted}/wkt</span>
              </div>
            </div>

            <div className="demo-kpi-card">
              <div className="demo-kpi-header">
                <span className="demo-kpi-title">Draft Steals</span>
                <Award size={18} className="text-purple" />
              </div>
              <div className="demo-kpi-value">{summaryKPIs.draftStealsCount} Players</div>
              <div className="demo-kpi-context positive">
                <span>High Output, Low Price</span>
              </div>
            </div>
          </div>

          {/* View Mode Tabs (ROI Quadrant, Performance Matrix Table, DAX Architecture) */}
          <div className="ipl-view-tabs-bar">
            <div className="ipl-view-tabs">
              <button
                type="button"
                className={`ipl-tab-btn ${viewMode === 'quadrant' ? 'active' : ''}`}
                onClick={() => setViewMode('quadrant')}
              >
                <BarChart3 size={15} />
                <span>Dual-Pillar ROI Quadrant</span>
              </button>
              <button
                type="button"
                className={`ipl-tab-btn ${viewMode === 'table' ? 'active' : ''}`}
                onClick={() => setViewMode('table')}
              >
                <Layers size={15} />
                <span>Player Valuation Matrix ({filteredPlayers.length})</span>
              </button>
              <button
                type="button"
                className={`ipl-tab-btn ${viewMode === 'dax' ? 'active' : ''}`}
                onClick={() => setViewMode('dax')}
              >
                <Sparkles size={15} />
                <span>Power BI DAX Architecture</span>
              </button>
            </div>

            {viewMode === 'quadrant' && (
              <div className="roi-metric-switch">
                <button
                  type="button"
                  className={`roi-sub-btn ${roiMetric === 'batting' ? 'active' : ''}`}
                  onClick={() => setRoiMetric('batting')}
                >
                  🏏 Batting ROI (Price vs Runs)
                </button>
                <button
                  type="button"
                  className={`roi-sub-btn ${roiMetric === 'bowling' ? 'active' : ''}`}
                  onClick={() => setRoiMetric('bowling')}
                >
                  🎯 Bowling ROI (Price vs Wickets)
                </button>
              </div>
            )}
          </div>

          {/* VIEW 1: DUAL-PILLAR ROI QUADRANT VIEW */}
          {viewMode === 'quadrant' && (
            <div className="ipl-quadrant-container">
              <div className="quadrant-legend-bar">
                <span className="legend-tag draft-steal-tag">
                  🟢 <strong>Draft Steals</strong>: High output, low cost (Moneyball bargains)
                </span>
                <span className="legend-tag marquee-tag">
                  🟡 <strong>Marquee Investments</strong>: High output, high cost (Justified)
                </span>
                <span className="legend-tag inefficient-tag">
                  🔴 <strong>Cap Drains</strong>: Low output, high price (Inefficiencies)
                </span>
              </div>

              <div className="quadrant-cards-grid">
                {filteredPlayers
                  .filter((p) => {
                    if (roiMetric === 'batting') return p.runs > 0;
                    return p.wickets > 0;
                  })
                  .map((player) => (
                    <div
                      key={player.id}
                      className={`ipl-player-card ${
                        player.quadrant === 'steal'
                          ? 'card-steal'
                          : player.quadrant === 'inefficient'
                          ? 'card-inefficient'
                          : 'card-marquee'
                      }`}
                    >
                      <div className="player-card-top">
                        <div>
                          <div className="player-name-row">
                            <span className="player-name">{player.name}</span>
                            <span className="player-team-pill">{player.franchise}</span>
                          </div>
                          <span className="player-role-sub">{player.role}</span>
                        </div>
                        <span
                          className={`badge ${
                            player.quadrant === 'steal'
                              ? 'badge-emerald'
                              : player.quadrant === 'inefficient'
                              ? 'badge-amber'
                              : 'badge-blue'
                          }`}
                        >
                          {player.classification}
                        </span>
                      </div>

                      <div className="player-stats-row">
                        <div className="stat-unit">
                          <span className="stat-unit-lbl">Auction Price</span>
                          <span className="stat-unit-val">₹{player.priceCr} Cr</span>
                        </div>
                        {roiMetric === 'batting' ? (
                          <>
                            <div className="stat-unit">
                              <span className="stat-unit-lbl">Total Runs</span>
                              <span className="stat-unit-val font-accent">{player.runs}</span>
                            </div>
                            <div className="stat-unit">
                              <span className="stat-unit-lbl">Cost / Run</span>
                              <span className="stat-unit-val">{player.costPerRun || 'N/A'}</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="stat-unit">
                              <span className="stat-unit-lbl">Wickets</span>
                              <span className="stat-unit-val font-accent">{player.wickets}</span>
                            </div>
                            <div className="stat-unit">
                              <span className="stat-unit-lbl">Cost / Wicket</span>
                              <span className="stat-unit-val">{player.costPerWicket || 'N/A'}</span>
                            </div>
                          </>
                        )}
                      </div>

                      <p className="player-analysis-note">{player.highlight}</p>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* VIEW 2: PERFORMANCE MATRIX TABLE VIEW */}
          {viewMode === 'table' && (
            <div className="ipl-table-container">
              <div className="table-search-bar">
                <Search size={16} className="text-muted" />
                <input
                  type="text"
                  placeholder="Filter by player, franchise (e.g. KKR, CSK, SRH), or classification..."
                  aria-label="Filter players by name, franchise, or classification"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="table-search-input"
                />
              </div>

              <div className="table-responsive-wrapper">
                <table className="ipl-matrix-table">
                  <thead>
                    <tr>
                      <th>Player</th>
                      <th>Franchise</th>
                      <th>Role</th>
                      <th>Auction Price</th>
                      <th>Runs</th>
                      <th>Wickets</th>
                      <th>Cost per Unit (DAX)</th>
                      <th>ROI Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPlayers.length > 0 ? (
                      filteredPlayers.map((player) => (
                        <tr key={player.id}>
                          <td className="font-semibold">{player.name}</td>
                          <td>
                            <span className="team-pill">{player.franchise}</span>
                          </td>
                          <td>{player.role}</td>
                          <td className="font-mono">₹{player.priceCr} Cr</td>
                          <td className="font-mono">{player.runs}</td>
                          <td className="font-mono">{player.wickets}</td>
                          <td className="font-mono text-cyan">
                            {player.costPerRun
                              ? `${player.costPerRun} / run`
                              : `${player.costPerWicket} / wkt`}
                          </td>
                          <td>
                            <span
                              className={`badge ${
                                player.quadrant === 'steal'
                                  ? 'badge-emerald'
                                  : player.quadrant === 'inefficient'
                                  ? 'badge-amber'
                                  : 'badge-blue'
                              }`}
                            >
                              {player.classification}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={8} style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
                          No players match the current search or filter criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* VIEW 3: DAX DATA ARCHITECTURE VIEW */}
          {viewMode === 'dax' && (
            <div className="ipl-dax-architecture-layout">
              <div className="dax-code-column">
                <div className="dax-card-box">
                  <div className="dax-header">
                    <span className="dax-title">Custom DAX Measure: Cost_Per_Run_₹</span>
                    <span className="badge badge-amber">Batters & All-rounders</span>
                  </div>
                  <pre className="dax-code-block">
{`-- Evaluates true monetary cost of batting output
Cost_Per_Run_₹ = 
DIVIDE(
    SELECTEDVALUE(DimAuction[Auction_Price_INR]),
    SUM(FactBatting[Total_Runs]),
    BLANK()
)`}
                  </pre>
                  <p className="dax-desc">
                    Isolates batting output to prevent bowlers from skewing the valuation model. Identifies undervalued high-strike-rate run scorers.
                  </p>
                </div>

                <div className="dax-card-box">
                  <div className="dax-header">
                    <span className="dax-title">Custom DAX Measure: Cost_Per_Wicket_₹</span>
                    <span className="badge badge-emerald">Bowlers & All-rounders</span>
                  </div>
                  <pre className="dax-code-block">
{`-- Normalizes bowling efficiency independent of batting
Cost_Per_Wicket_₹ = 
DIVIDE(
    SELECTEDVALUE(DimAuction[Auction_Price_INR]),
    SUM(FactBowling[Total_Wickets]),
    BLANK()
)`}
                  </pre>
                  <p className="dax-desc">
                    Calculates the exact capital cost required to acquire each wicket, exposing expensive retention deals versus low-cost impact bowlers.
                  </p>
                </div>
              </div>

              <div className="dax-methodology-column">
                <div className="methodology-card">
                  <h4 className="methodology-title">
                    <CheckCircle2 size={18} className="text-emerald" />
                    <span>Role-Isolated Semantic Architecture</span>
                  </h4>
                  <p className="methodology-text">
                    Evaluating a pure bowler based on runs scored creates skewed, invalid analytics. 
                    The Power BI star schema separates <code>FactBatting</code> and <code>FactBowling</code>, 
                    bridged by <code>DimPlayer</code> and <code>DimFranchise</code> with 1-to-many relationships.
                  </p>
                </div>

                <div className="methodology-card">
                  <h4 className="methodology-title">
                    <AlertTriangle size={18} className="text-amber" />
                    <span>Business Takeaway for Scouting & Management</span>
                  </h4>
                  <p className="methodology-text">
                    By tracking <strong>₹1,192+ Crores</strong> in auction capital allocation, management 
                    can identify structural bidding inefficiencies, avoid bidding wars on high-variance players, 
                    and reallocate budget toward high-probability draft steals in future mini & mega auctions.
                  </p>
                </div>

                <div className="methodology-card tech-stack-summary">
                  <h4 className="methodology-title">
                    <Layers size={18} className="text-blue" />
                    <span>Project Technical Stack</span>
                  </h4>
                  <div className="tech-pills-row">
                    <span className="badge badge-amber">Microsoft Power BI Desktop</span>
                    <span className="badge badge-blue">Power Query ETL</span>
                    <span className="badge badge-purple">DAX Semantic Measures</span>
                    <span className="badge badge-emerald">Star Schema Modeling</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
