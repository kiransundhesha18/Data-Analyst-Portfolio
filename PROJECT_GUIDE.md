# Kiran Sundhesha — Data Analyst Portfolio: Complete Project Guide
**Stack:** React 19, Vite 8, Lucide React, Vanilla Modern CSS3  
**Target Roles:** Entry-Level Data Analyst, BI Analyst, Business Analyst, Associate Data Engineer  

---

## 1. WHERE Everything Lives (Project Map)

```
d:\data-Portfolio\
├── public/                       # Static files served at the root URL
│   ├── Resume.pdf                # Resume PDF file downloaded by visitors
│   └── resume.pdf                # Lowercase copy for Linux server URL compatibility
│
├── src/                          # Application source code
│   ├── components/               # All visual modular blocks (sections)
│   │   ├── Navbar.jsx            # Header, brand name, navigation anchors, theme switcher
│   │   ├── Hero.jsx              # Hero banner, value proposition, SVG trend charts
│   │   ├── Projects.jsx          # Projects grid container with category filter buttons
│   │   ├── ProjectCard.jsx       # Individual case study card (CAR structure: Context, Action, Result)
│   │   ├── InteractiveDemo.jsx   # Live embedded IPL Moneyball player ROI dashboard simulator
│   │   ├── Skills.jsx            # Categorized skills matrix with proficiency tags
│   │   ├── About.jsx             # Candidate bio, profile card, and 3 analytical pillars
│   │   ├── Resume.jsx            # Credentials card, download button & recruiter summary copy
│   │   ├── Contact.jsx           # Email copy button, LinkedIn card, GitHub card, contact form
│   │   ├── Footer.jsx            # Social buttons, navigation links, copyright, back-to-top
│   │   └── Icons.jsx             # Branded SVG icons (LinkedIn, GitHub)
│   │
│   ├── data/                     # Content data files (Data-driven architecture)
│   │   ├── ProjectsData.js       # All projects, problem statements, KPIs, tags, and links
│   │   └── SkillData.js          # All skill categories, technical items, and mastery badges
│   │
│   ├── App.css                   # Custom styles, card layouts, animations, responsive media queries
│   ├── App.jsx                   # Main layout container and dark/light theme state manager
│   ├── index.css                 # Global design system, CSS variables, resets, and typography
│   └── main.jsx                  # Application entry point mounting React into index.html
│
├── index.html                    # HTML wrapper, Google Fonts (Plus Jakarta Sans & JetBrains Mono)
├── package.json                  # Project dependencies and npm scripts
└── PROJECT_GUIDE.html            # Printable version of this entire guide (Save as PDF)
```

---

## 2. WHY These Choices Were Made

1. **Why Vite instead of Create React App?**
   - Create React App is deprecated and slow. Vite starts the local server in under 300ms using native ES modules and updates in real-time with Hot Module Replacement (HMR).
2. **Why Separate Data (`src/data/`) from UI Components?**
   - When you want to add a new project or change a metric, you shouldn't have to navigate through complex HTML/JSX tags. Editing `ProjectsData.js` automatically renders your new project with zero risk of breaking CSS or layout.
3. **Why Vanilla CSS Custom Properties instead of Tailwind?**
   - Pure CSS variables give precise control over glassmorphism (`backdrop-filter`), smooth dark/light transitions, and custom gradients without installing hundreds of megabytes of utility classes.
4. **Why Include an Interactive Demo (`InteractiveDemo.jsx`)?**
   - Recruiters spend an average of 10–20 seconds reviewing a portfolio. A live, working data tool inside the page proves you understand data filtering, KPI scorecards, and user-centric dashboard design immediately.

---

## 3. WHAT Each Component Does

| Component | Purpose & Visual Elements | Key Handlers & Features |
| :--- | :--- | :--- |
| **Navbar.jsx** | Brand logo, navigation links, CTA, Dark/Light mode toggle. | Tracks scroll position for background blur; manages mobile drawer. |
| **Hero.jsx** | Headline, value proposition, resume button, metric tabs. | Tab state switches between Sales, Inventory, and SQL Retention charts. |
| **Projects.jsx** | Filter tabs (`All`, `Power BI`, `Excel`, `SQL`). | Filters `projectsData` dynamically based on the active category pill. |
| **ProjectCard.jsx** | Problem, Methodology, Business Impact, Metrics ribbon. | Renders quantified metrics (+24.6%, ₹1,192 Cr, etc.) and tool tags. |
| **InteractiveDemo.jsx** | IPL Franchise Valuation & Player ROI Dashboard. | Franchise filter, player role selector, Scatter quadrant, table & DAX tabs. |
| **Skills.jsx** | Power BI, Excel, SQL, Business Analytics. | Renders category boxes with color-coded mastery status badges. |
| **About.jsx** | Candidate avatar monogram, location, placement status. | Details 3 analytical pillars: Data Hygiene, Data Modeling, Storytelling. |
| **Resume.jsx** | Resume download trigger and recruiter summary card. | 1-click clipboard copy of recruiter summary snippet. |
| **Contact.jsx** | Direct email card, LinkedIn card, GitHub card, quick form. | 1-click email copy; generates pre-filled `mailto:` client redirect. |
| **Footer.jsx** | Brand statement, social icon links, back-to-top button. | Smooth scrolling back to top of the page. |

---

## 4. STEP-BY-STEP: How to Change Everything Yourself

### Step 1: Change Your Email, LinkedIn, or GitHub
- **In `src/components/Contact.jsx`**:
  - Line 10: Change `const emailAddress = 'kiransundhesha56@gmail.com';` to your desired email.
  - Line 76: Change the LinkedIn link (`https://www.linkedin.com/in/kiransundhesha018`).
  - Line 93: Change the GitHub link (`https://github.com/kiransundhesha18`).
- **In `src/components/Footer.jsx`**:
  - Line 41: Change `href="mailto:kiransundhesha56@gmail.com"`.
  - Line 48: Change `href="https://www.linkedin.com/in/kiransundhesha018"`.

---

### Step 2: Add or Edit a Portfolio Project
Open **`src/data/ProjectsData.js`**. Each project is an object inside the `projectsData` array:

```javascript
{
  id: 'unique-project-slug',
  title: 'Project Title',
  category: 'Power BI', // Options: 'Power BI' | 'Excel' | 'SQL'
  subtitle: 'Brief One-Line Summary of the Solution',
  toolTags: ['Tool 1', 'Tool 2', 'Tool 3'],
  problem: 'Describe the commercial challenge or business problem.',
  methodology: 'Describe your data cleaning, modeling, formulas, or queries.',
  impact: 'Quantifiable result (e.g. reduced costs by 15%, identified 10 bottlenecks).',
  keyMetrics: [
    { label: 'Metric Name', value: 'Result Value' },
    { label: 'Metric Name 2', value: 'Result Value 2' }
  ],
  highlights: [
    'Key feature or technique 1',
    'Key feature or technique 2'
  ],
  liveLink: 'https://github.com/your-username/repository',
  docsLink: 'https://github.com/your-username/repository',
  badgeColor: 'amber' // Options: 'amber', 'emerald', 'blue', 'purple'
}
```

---

### Step 3: Update Technical Skills
Open **`src/data/SkillData.js`**. You will see 4 skill categories:
1. `power-bi` (Power BI & BI Architecture)
2. `excel` (Advanced Microsoft Excel)
3. `sql` (SQL & Relational Databases)
4. `analytics-core` (Business Analytics & Storytelling)

To add a skill, append an item to the `skills` array:
```javascript
{ name: 'Power Automate Dashboard Alerts', status: 'Proficient' }
```
Supported status badges: `'Mastered'`, `'Proficient'`, `'In Progress'`, `'Learning'`.

---

### Step 4: Replace Your Resume PDF
1. Save your completed resume as a PDF.
2. Rename it to `resume.pdf` (and also save a copy as `Resume.pdf`).
3. Place it into `d:\data-Portfolio\public\`.
4. The website's download buttons will immediately deliver your new PDF!

---

### Step 5: Adjust Themes and Colors
Open **`src/index.css`**:
- `--accent-blue`: Main accent color (links, primary buttons).
- `--accent-emerald`: Status pill, positive growth metrics.
- `--accent-amber`: Power BI badge color.
- `--accent-purple`: Analytics badge color.
- `--bg-primary`: Dark theme page background.
- `[data-theme="light"]`: Light mode color overrides.

---

## 5. How to Generate/Print the PDF of this Guide
A formatted, printer-ready HTML version of this guide has been created at:
👉 **`d:\data-Portfolio\PROJECT_GUIDE.html`**

To save it as a clean PDF:
1. Double-click `PROJECT_GUIDE.html` (or open it in Chrome / Edge).
2. Click the blue **"📄 Save as PDF / Print"** button in the top corner.
3. Choose **Save as PDF** as destination, ensure **Background graphics** is checked, and click **Save**.
