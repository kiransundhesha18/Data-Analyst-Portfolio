import fmcgDashboardImg from '../assets/fmcg-dashboard.png';

export const projectsData = [
  {
    id: 'fmcg-margin-analysis',
    title: 'FMCG Retail Channel Profitability & Margin Analysis',
    category: 'Excel',
    subtitle: 'Retail Channel Profitability & Margin Analysis',
    image: fmcgDashboardImg,
    toolTags: ['Advanced Excel', 'Power Query (ETL)', 'Excel Data Model'],
    summary:
      'Evaluated the true net profitability of traditional Kirana stores versus Modern Trade supermarkets across Tier-1 Indian cities by calculating logistics, trade margins, and promotional discounts.',
    problem:
      'Evaluated the true net profitability of traditional Kirana stores versus Modern Trade supermarkets across Tier-1 Indian cities by calculating logistics, trade margins, and promotional discounts.',
    methodology:
      'Engineered an automated data pipeline using Power Query to merge raw sales, cost, and discount datasets. Bypassed volatile lookup formulas by building a relational Data Model. Developed an interactive executive dashboard with synchronized slicers for regional and product category filtering.',
    impact:
      'Discovered that despite generating higher gross revenue, Modern Trade channels operate at a negative net margin due to aggressive promotional discounts compared to highly profitable traditional Kirana stores.',
    keyMetrics: [
      { label: 'Primary Tool', value: 'Excel' },
      { label: 'Data Pipeline', value: 'Power Query' },
      { label: 'Data Model', value: 'Relational' },
    ],
    highlights: [
      'Engineered an automated data pipeline using Power Query to merge raw sales, cost, and discount datasets.',
      'Bypassed volatile lookup formulas by building a relational Data Model.',
      'Developed an interactive executive dashboard with synchronized slicers for regional and product category filtering.',
      'Discovered that despite generating higher gross revenue, Modern Trade channels operate at a negative net margin due to aggressive promotional discounts compared to highly profitable traditional Kirana stores.'
    ],
    liveLink: 'https://github.com/kiransundhesha18/fmcg-margin-analysis',
    docsLink: 'https://github.com/kiransundhesha18/fmcg-margin-analysis',
    badgeColor: 'emerald'
  }
];