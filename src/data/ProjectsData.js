export const projectsData = [
  {
    id: 'ipl-franchise-roi',
    title: 'IPL Player Valuation & Auction ROI Analytics',
    category: 'Power BI',
    subtitle: 'Sports Analytics & Player Valuation Dashboard',
    toolTags: ['Power BI', 'DAX Measures', 'Power Query ETL', 'Star Schema'],
    summary:
      'Analyzed IPL player auction data across 10 teams to evaluate player cost vs. on-field performance, uncovering undervalued players and inefficient team salary allocations.',
    problem:
      'In high-stakes sports auctions with budgets exceeding ₹1,100+ Crores, teams frequently overpay for hype while overlooking high-performing value players due to lack of normalized performance metrics.',
    methodology:
      'Built a normalized Star Schema data model in Power BI. Created custom DAX metrics (Cost per Run, Cost per Wicket, and Value Index) and built interactive quadrant scatter charts and team slicers to compare player ROI fairly across batting and bowling roles.',
    impact:
      'Identified 18+ high-value bargain players ("draft steals") and highlighted key areas where franchise budgets were misallocated, providing clear visual evidence for smarter bidding strategies.',
    keyMetrics: [
      { label: 'Auction Spend Analyzed', value: '₹1,192 Cr' },
      { label: 'Custom DAX Measures', value: '14+' },
      { label: 'Value Picks Identified', value: '18+' },
    ],
    highlights: [
      'Interactive ROI quadrants separating batting (price vs. runs) and bowling (price vs. wickets)',
      'Normalized DAX measures isolating specialized player roles for fair valuation',
      'Dynamic team and role slicers with instant KPI scorecard updates'
    ],
    liveLink: 'https://github.com/kiransundhesha18',
    docsLink: 'https://github.com/kiransundhesha18',
    badgeColor: 'amber'
  },
  {
    id: 'powerbi-sales',
    title: 'Sales & Inventory Performance Dashboard',
    category: 'Power BI',
    subtitle: 'Executive Retail & Supply Chain Intelligence',
    toolTags: ['Power BI', 'Power Query', 'DAX', 'Star Schema', 'ETL Pipeline'],
    summary:
      'Built an end-to-end Power BI reporting dashboard tracking sales trends, regional revenue growth, and inventory stockout risks across multi-branch retail operations.',
    problem:
      'Retail branch managers had disconnected spreadsheet reports, making it difficult to detect stock shortages and revenue drops across 12 regional distribution centers in time.',
    methodology:
      'Automated data preparation using Power Query to consolidate 185K+ rows of raw transaction data. Built a Star Schema model with date dimensions and authored DAX formulas for Year-over-Year (YoY) revenue and safety stock thresholds.',
    impact:
      'Provided leadership with real-time visibility into the top 20% margin-driving products and reduced simulated stockout occurrences by 35% through dynamic inventory alerts.',
    keyMetrics: [
      { label: 'YoY Growth Tracked', value: '+24.6%' },
      { label: 'Stockout Risk Reduced', value: '-35%' },
      { label: 'Data Rows Processed', value: '185K+' },
    ],
    highlights: [
      'Interactive drill-through by region, product category, and fiscal quarter',
      'Time-intelligence DAX calculations (SAMEPERIODLASTYEAR, Rolling Margins)',
      'Clean Star Schema model linking Fact Sales to Customer and Product dimensions'
    ],
    liveLink: 'https://github.com/kiransundhesha18',
    docsLink: 'https://github.com/kiransundhesha18',
    badgeColor: 'amber'
  },
  {
    id: 'retail-supply-chain-analytics',
    title: 'Retail Sales & Supply Chain Financial Model',
    category: 'Excel',
    subtitle: 'Financial & Operational Analytics in Advanced Excel',
    toolTags: ['Advanced Excel', 'XLOOKUP', 'PivotTables', 'Nested Formulas', 'What-If Analysis'],
    summary:
      'Developed a comprehensive Excel decision model linking orders, inventory levels, and marketing ad channels to diagnose profit leakage and shipping SLA penalties.',
    problem:
      'E-commerce operations suffered from silent profit erosion caused by Cash on Delivery (COD) returns and delivery delays that incurred high reverse shipping penalty fees.',
    methodology:
      'Engineered a multi-sheet relational workbook using XLOOKUP, INDEX/MATCH, and nested IFS formulas. Built summary PivotTables, dynamic slicers, and a 2-variable What-If Pricing Simulator to test discount scenarios.',
    impact:
      'Identified critical stock reorder thresholds across warehouse SKUs and flagged unprofitable campaign channels, showing managers how to save on reverse logistics fees.',
    keyMetrics: [
      { label: 'Top Ad Channel ROAS', value: '12x–44x' },
      { label: 'Reorder SKUs Flagged', value: '12 Items' },
      { label: 'Data Sheets Modeled', value: '4 Linked' },
    ],
    highlights: [
      'Relational multi-tab architecture connecting Orders, Inventory, and Marketing datasets',
      'Nested conditional logic to audit return rates and delivery SLA breach costs',
      'Executive KPI dashboard with interactive PivotTables and What-If pricing sensitivity table'
    ],
    liveLink: 'https://github.com/kiransundhesha18',
    docsLink: 'https://github.com/kiransundhesha18',
    badgeColor: 'emerald'
  },
  {
    id: 'sql-customer-insights',
    title: 'Customer Retention & Cohort Analysis in SQL',
    category: 'SQL',
    subtitle: 'Relational Database Queries & Repeat Purchase Trends',
    toolTags: ['PostgreSQL / MySQL', 'Multi-Table JOINs', 'Aggregations', 'GROUP BY', 'Subqueries'],
    summary:
      'Queried a multi-table e-commerce database to analyze repeat purchase behavior, customer retention rates, and average order value across monthly cohorts.',
    problem:
      'Marketing teams needed to understand at what point new customers stop reordering and which acquisition channels yielded the highest repeat customer lifetime value.',
    methodology:
      'Wrote optimized SQL queries using multi-table INNER and LEFT JOINs, GROUP BY, HAVING, and CASE WHEN statements. Filtered 120K+ customer transactions to build monthly retention cohorts.',
    impact:
      'Discovered a critical 42% retention drop after 30 days of the first purchase, providing marketing with the exact time window needed for targeted re-engagement offers.',
    keyMetrics: [
      { label: 'Transactions Queried', value: '120K+' },
      { label: 'Repeat Cohort Rate', value: '38.4%' },
      { label: 'Query Performance', value: 'Optimized' },
    ],
    highlights: [
      'Multi-table relational schema joins across Users, Orders, and Product lines',
      'Aggregated cohort metrics by monthly purchase cadence and customer spend tiers',
      'Clean, documented SQL scripts with reusable CTE structures'
    ],
    liveLink: 'https://github.com/kiransundhesha18',
    docsLink: 'https://github.com/kiransundhesha18',
    badgeColor: 'blue'
  },
];