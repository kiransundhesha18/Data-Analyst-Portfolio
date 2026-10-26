export const projectsData = [
  {
    id: 'ipl-franchise-roi',
    title: 'IPL Franchise Valuation & Player ROI Analytics',
    category: 'Power BI',
    subtitle: 'Interactive "Moneyball" Sports Analytics & Capital Allocation Dashboard',
    toolTags: ['Power BI', 'DAX Measures', 'Power Query ETL', 'Star Schema', 'Sports Analytics'],
    problem:
      'During the IPL auction, franchises spend massive budgets (totaling upwards of ₹1,192 Crores across the league). However, high auction prices do not guarantee high performance, leading to salary cap inefficiencies and misaligned player valuations.',
    methodology:
      'Engineered a role-isolated semantic model in Power BI using Power Query ETL for data hygiene. Built custom DAX measures (Cost_Per_Run_₹, Cost_Per_Wicket_₹) to establish equitable baseline comparisons, and designed interactive franchise tile slicers, dynamic KPI scorecards, and dual-pillar ROI scatter quadrants.',
    impact:
      'Pinpointed high-impact "Draft Steals" (undervalued bargains providing high output at low cost) and exposed costly investments consuming cap space with minimal output, delivering actionable data to audit franchise bidding strategies.',
    keyMetrics: [
      { label: 'League Spend Modeled', value: '₹1,192 Cr' },
      { label: 'DAX Measures Built', value: '14+ Custom' },
      { label: 'Draft Steals Found', value: '18+ Bargains' },
    ],
    highlights: [
      'Dual-Pillar ROI Quadrants separating Batting (Price vs Runs) and Bowling (Price vs Wickets)',
      'Custom DAX isolating player roles to eliminate skewed multi-skill valuation bias',
      'Dynamic KPI scorecard ribbon responsive to franchise and player-role slicers'
    ],
    liveLink: 'https://github.com/kiransundhesha18',
    docsLink: 'https://github.com/kiransundhesha18',
    badgeColor: 'amber'
  },
  {
    id: 'powerbi-sales',
    title: 'Sales & Inventory Performance Dashboard',
    category: 'Power BI',
    subtitle: 'Executive Business Intelligence & Supply Chain Analytics',
    toolTags: ['Power BI', 'Power Query', 'DAX', 'Star Schema', 'ETL Pipeline'],
    problem:
      'Regional distribution hubs experienced unpredictable revenue variance and frequent inventory stockout risks across key product categories, costing ~12% in missed quarterly orders.',
    methodology:
      'Engineered an automated ETL workflow in Power Query consolidating 12 regional CSV sources, architected a normalized star-schema data model with 1-to-many relationships, and developed custom DAX measures for Year-over-Year revenue growth, rolling 30-day margins, and reorder threshold alerts.',
    impact:
      'Identified top 20% margin-driving SKUs and highlighted 3 chronic regional delivery bottlenecks, enabling actionable inventory rebalancing that decreased simulated stockout risk by 35%.',
    keyMetrics: [
      { label: 'YoY Growth Tracked', value: '+24.6%' },
      { label: 'Stockout Risk Drop', value: '-35%' },
      { label: 'Data Rows Processed', value: '185K+' },
    ],
    highlights: [
      'Interactive drill-through by Region, Category, and Quarter',
      'Dynamic DAX KPIs (CALCULATE, SAMEPERIODLASTYEAR, DIVIDE)',
      'Clean Star Schema model with unified Date and Dim tables'
    ],
    liveLink: 'https://github.com/kiransundhesha18',
    docsLink: 'https://github.com/kiransundhesha18',
    badgeColor: 'amber'
  },
  {
    id: 'retail-supply-chain-analytics',
    title: 'Enterprise Retail, Supply Chain & Marketing Analytics Suite',
    category: 'Excel',
    subtitle: 'Commercial Analytics, Profit Leakage Diagnostics & Executive Command Center',
    toolTags: ['Advanced Excel', 'XLOOKUP Modeling', 'Nested IF / IFS', 'PivotTables & Slicers', 'What-If Simulator', 'Supply Chain Analytics'],
    problem:
      'Omnichannel retail operations faced acute profit erosion driven by Return-to-Origin (RTO) charges on Cash on Delivery (COD) orders and delivery SLA breaches, which imposed a 1.5x return shipping penalty that flipped gross margins into net operational losses. Furthermore, unmonitored Days on Hand (DOH) risked stockouts, while multi-channel ad spend lacked granular CAC attribution.',
    methodology:
      'Engineered an end-to-end relational Excel architecture linking SKUS, ORDERS, INVENTORY, and MARKETING datasets using XLOOKUP key relationships. Built nested IF and IFS gatekeeping logic to audit customer returns, reverse shipping penalties, and automated inventory health statuses. Designed a locked Executive Command Center dashboard with top-level KPI cards, summary PivotTables, and a 2-variable What-If Pricing Simulator for C-suite scenario analysis.',
    impact:
      'Diagnosed negative contribution margins (e.g., -₹210 per order) on SLA-breached COD returns due to reverse logistics fees, flagged 7 critical reorders and 5 lead-time risks among 25 catalog SKUs at the Bhiwandi fulfillment hub, and identified high-efficiency marketing campaigns delivering up to 12x–44x ROAS to steer Q4 budget reallocation.',
    keyMetrics: [
      { label: 'Peak Channel ROAS', value: '12x–44x' },
      { label: 'Stock Risks Flagged', value: '12 SKUs' },
      { label: 'RTO SLA Penalty', value: '-₹210/ord' },
    ],
    highlights: [
      'Relational multi-sheet architecture using XLOOKUP across SKUS, ORDERS, INVENTORY, and MARKETING',
      'Nested IF & IFS conditional formulas calculating COD return rates, 1.5x reverse logistics penalties, and SLA breach costs',
      'Automated Days on Hand (DOH) & lead-time triggers auditing Bhiwandi fulfillment hub inventory (7 critical, 5 lead-time alerts)',
      'Multi-channel digital ad efficiency analysis (Meta Ads, Google Search, Amazon) isolating high-ROAS acquisition campaigns',
      'Lock-screen Executive Command Center dashboard with summary PivotTables, KPI cards, and a 2-variable What-If Pricing Simulator'
    ],
    liveLink: 'https://github.com/kiransundhesha18',
    docsLink: 'https://github.com/kiransundhesha18',
    badgeColor: 'emerald'
  },
  {
    id: 'sql-customer-insights',
    title: 'Customer Transaction & Retention Analysis',
    category: 'SQL',
    subtitle: 'Relational Database Queries & Cohort Purchasing Behavior',
    toolTags: ['PostgreSQL / MySQL', 'Aggregations', 'GROUP BY', 'Multi-Table JOINs', 'Subqueries'],
    problem:
      'Analyzing multi-thousand-row purchase logs to identify repeat customer purchasing cycles, customer lifetime value (CLV) patterns, and average order volume (AOV) baselines for commercial expansion.',
    methodology:
      'Wrote optimized SQL queries utilizing WHERE, CASE WHEN, and HAVING clauses; computed baseline metrics with SUM, AVG, and COUNT; and engineered multi-table INNER and LEFT JOINs connecting Customers, Orders, and Product line tables.',
    impact:
      'Uncovered a 42% retention cliff between first-time and second-time buyers within 30 days, creating the empirical foundation for a targeted customer re-engagement campaign.',
    keyMetrics: [
      { label: 'Transactions Queried', value: '120K+' },
      { label: 'Query Speedup', value: '2.4x' },
      { label: 'Repeat Cohort Identified', value: '38.4%' },
    ],
    highlights: [
      'Multi-table relational schema JOINs with clean foreign key integrity',
      'Aggregated cohort metrics by purchase frequency and monthly spend',
      'Documented and tested query performance benchmarks'
    ],
    liveLink: 'https://github.com/kiransundhesha18',
    docsLink: 'https://github.com/kiransundhesha18',
    badgeColor: 'blue'
  },
];