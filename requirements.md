## Project Overview

Build a marketing website for Northbound Data, LLC — an analytics consulting firm specializing in data management, dbt, data quality, and BI ecosystem optimization.

## Tech Stack

- **Plain HTML + CSS** — No frameworks, no build step
- Shared CSS file (`styles.css`) used across all pages
- Google Fonts for typography (only external dependency)
- Vanilla JavaScript only if needed for interactions (mobile nav toggle, scroll animations)
- **Hosting target:** Free static hosting (GitHub Pages, Netlify, Cloudflare Pages, or Vercel)

Keep it simple. This should be a folder of `.html` files, a `styles.css` file, and any minimal JS in a `scripts.js` file if needed.

---

## Target Persona

Data leaders (VPs/Directors of Analytics, Heads of Data, Analytics Engineers) at mid-market companies ($50M–$500M revenue) who are frustrated with:

- Metrics that don't match across tools
- dbt projects that have become unmaintainable
- Ad-hoc queries sprawling across their BI tools
- Lack of trust in their data

They're technical enough to appreciate specifics but busy enough to want clear outcomes.

---

## Tone & Voice

- Confident and direct — no fluff or buzzwords
- Understated expertise (show, don't tell)
- Slightly opinionated — we have a point of view on how analytics should work
- Professional but human — not corporate-speak

---

## Design Direction

- Clean, minimal, lots of whitespace
- Dark mode aesthetic (deep navy/charcoal background with light text) OR sophisticated light theme — dealer's choice but make it feel premium
- Subtle data/analytics visual motifs (think: node graphs, flow diagrams, or abstract grid patterns) — tasteful, not cheesy
- Typography-forward — let the words breathe
- No stock photos of people pointing at dashboards
- Consistent navigation and footer across all pages

---

## Site Structure

### 1. Home Page (`index.html`)

- Hero with clear value prop and CTA
- Problem statement — articulate the pain points (metrics don't match, dbt is a mess, no one trusts the data)
- Brief services overview with links to detail pages
- "How We Work" snapshot
- Featured case study teaser or client outcomes
- CTA to schedule a conversation

### 2. Services Page (`services.html`)

- Overview of our engagement philosophy
- Core engagements:
  - **Analytics Health Assessment** — Recommended starting point. Comprehensive audit of analytics ecosystem. 2–3 weeks.
  - **Analytics Foundation Engagement** — Full rebuild of analytics foundation. 10–20 weeks.
  - **dbt Greenfield Build** — For organizations starting fresh. 8–16 weeks.
- Each with description, key deliverables, and typical timeline
- CTA to discuss scope and fit

### 3. Specialized Services Page (`specialized.html`)

- Targeted sprints and add-ons:
  - Metric Alignment Sprint
  - Query Ecosystem Migration
  - Semantic Layer Development
  - Data Quality & Testing Overhaul
  - Data Profiling & Documentation
- Brief descriptions of each
- Note that these can be standalone or bundled with core engagements

### 4. Retainers Page (`retainers.html`)

- Ongoing support model explanation
- Tier overview (no prices, just positioning):
  - 10 hours/month — Maintenance & questions
  - 20 hours/month — Active development & support
  - 40 hours/month — Embedded team member
  - Custom — Tailored to your needs
- What's included in retainer support
- CTA to discuss ongoing needs

### 5. Case Studies Page (`case-studies.html`)

- 3 placeholder case studies with realistic but fictional examples
- Each case study follows the structure:
  - Client profile (industry, size, anonymized)
  - The problem (specific pain points)
  - Our approach (what we did)
  - The outcome (measurable results where possible)
- Design as cards/previews that link to individual case study pages (or expand in place)
- Pull quotes or key metrics highlighted visually

Create individual case study pages if the design warrants it:
- `case-study-1.html`
- `case-study-2.html`
- `case-study-3.html`

Use realistic industries: fintech, e-commerce, B2B SaaS, healthcare tech, etc.

### 6. Insights Page (`insights.html`)

- Clean list or grid layout of articles
- 3–4 placeholder posts with titles and short descriptions:
  - "5 Signs Your dbt Project Needs an Intervention"
  - "Why Your Metrics Don't Match (And How to Fix It)"
  - "The Case for a Semantic Layer"
  - "What to Expect from an Analytics Health Assessment"
- Individual article page template with good typography for long-form reading
- Subtle CTA at the end of each article

Create individual article pages:
- `insights/dbt-intervention.html`
- `insights/metrics-dont-match.html`
- `insights/semantic-layer.html`
- `insights/health-assessment.html`

### 7. About Page (`about.html`)

- Who we are / founder background (use placeholder content — "Your Name" etc.)
- Our philosophy on analytics done right
- Tools and platforms we work with: Snowflake, BigQuery, Databricks, Redshift, dbt Cloud, dbt Core
- What it's like to work with us

### 8. Contact Page (`contact.html`)

- Simple contact form (can be non-functional or use Formspree/Netlify Forms placeholder)
- Email address placeholder
- Calendly embed placeholder
- "What to expect" from the first conversation

---

## File Structure

```
/
├── index.html
├── services.html
├── specialized.html
├── retainers.html
├── case-studies.html
├── case-study-1.html
├── case-study-2.html
├── case-study-3.html
├── insights.html
├── insights/
│   ├── dbt-intervention.html
│   ├── metrics-dont-match.html
│   ├── semantic-layer.html
│   └── health-assessment.html
├── about.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── scripts.js (if needed)
└── images/ (if any)
```

---

## Technical Requirements

- Fully responsive (mobile-first)
- Persistent navigation header and footer on all pages
- Mobile hamburger menu
- Subtle animations on scroll (fade-in, etc.) — keep it tasteful, use CSS animations or minimal vanilla JS
- Accessible: proper contrast ratios, semantic HTML, alt text, focus states
- Fast-loading: minimal dependencies, optimized for static hosting
- No pricing anywhere on the site

---

## Content Notes

- **Do not include pricing anywhere on the site** — all pricing discussions happen in conversation
- Write compelling copy — don't just transcribe service descriptions
- Emphasize outcomes and deliverables over process
- Case studies should feel real and specific, even if fictional
- Insights posts should demonstrate the opinionated point of view mentioned in the tone section
- CTAs should be "Schedule a Conversation" or "Let's Talk" — not pushy sales language

---

## Placeholder Content

Use these placeholders where personal information is needed:

- **Founder name:** [Your Name]
- **Email:** [you@northbounddata.com]
- **Calendly:** [calendly.com/northbounddata]
- **Company:** Northbound Data, LLC

---

## Reference Information

### Service Deliverables (for reference when writing copy)

**Analytics Health Assessment:**
- dbt project audit & health score
- BI query inventory & analysis
- Metric discrepancy assessment
- Test coverage gap analysis
- Executive summary presentation
- Technical findings report
- Prioritized remediation roadmap
- Effort estimates for each phase

**Analytics Foundation Engagement:**
- Restructured dbt project
- Migrated & governed BI queries
- Unified metric definitions
- Comprehensive test coverage
- Data documentation & dictionary
- Semantic layer (if applicable)
- Team training & enablement
- 30-day post-engagement support

**dbt Greenfield Build:**
- Complete dbt project architecture
- Source & staging layer
- Core business logic models
- Mart models for key domains
- Testing & documentation
- CI/CD pipeline setup
- Team onboarding & training
- Architecture documentation

### Engagement Terms (for About or FAQ content if needed)

- We work with your existing tools—Snowflake, BigQuery, Databricks, Redshift, dbt Cloud or Core
- All work product and code becomes your property upon final payment
- Retainer hours do not roll over; 3-month minimum commitment