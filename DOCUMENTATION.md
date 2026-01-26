# Northbound Data Website Documentation

## Overview

This is a static marketing website for Northbound Data, LLC — an analytics consulting firm specializing in dbt, data quality, and BI ecosystem optimization. The website is built with plain HTML, CSS, and minimal JavaScript, designed for deployment on GitHub Pages.

## Tech Stack

- **HTML5** — Semantic markup for all pages
- **CSS3** — Custom design system with CSS variables
- **JavaScript** — Vanilla JS for mobile navigation and scroll animations
- **Google Fonts** — Inter typeface for typography
- **No build step required** — Files are ready to deploy as-is

## File Structure

```
/
├── index.html              # Home page
├── services.html           # Core engagements
├── specialized.html        # Specialized services
├── retainers.html          # Ongoing support tiers
├── case-studies.html       # Case studies overview
├── case-study-1.html       # Fintech case study
├── case-study-2.html       # E-commerce case study
├── case-study-3.html       # B2B SaaS case study
├── insights.html           # Insights/blog overview
├── insights/
│   ├── dbt-intervention.html
│   ├── metrics-dont-match.html
│   ├── semantic-layer.html
│   └── health-assessment.html
├── about.html              # About page
├── contact.html            # Contact page
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── scripts.js          # JavaScript functionality
└── images/                 # Image assets (empty - using CSS gradients)
```

## Design System

### Colors (CSS Variables)

The site uses a dark mode aesthetic defined in `css/styles.css`:

```css
--color-bg-primary: #0d1117      /* Deep navy background */
--color-bg-secondary: #161b22    /* Card backgrounds */
--color-text-primary: #f0f6fc    /* Primary text */
--color-text-secondary: #8b949e  /* Secondary text */
--color-teal: #3fb9a6            /* Primary accent/CTA */
--color-accent: #58a6ff          /* Secondary accent */
```

### Typography

- **Font**: Inter (Google Fonts)
- **Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Scale**: From 0.75rem to 3.75rem

### Spacing

Consistent spacing scale using CSS variables:
- `--space-1` to `--space-32` (0.25rem to 8rem)

### Components

The CSS includes pre-built components:
- Navigation (desktop & mobile)
- Buttons (primary, secondary, large variants)
- Cards (standard, service, case study variants)
- Form elements
- Section headers
- Quote/testimonial blocks
- Footer

## Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints at 640px, 768px, and 1024px
- Hamburger menu for mobile navigation

### Accessibility
- Skip link for keyboard navigation
- Semantic HTML structure
- ARIA labels on interactive elements
- Focus states for all interactive elements
- High contrast text/background ratios

### Animations
- Fade-in animations on scroll using Intersection Observer
- Smooth transitions on interactive elements
- Mobile nav slide animation

## Deployment to GitHub Pages

### Option 1: Deploy from main branch

1. Push all files to your GitHub repository
2. Go to Settings > Pages
3. Under "Source", select "Deploy from a branch"
4. Select "main" branch and "/ (root)" folder
5. Click Save
6. Site will be available at `https://yourusername.github.io/repository-name/`

### Option 2: Using GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      - uses: actions/deploy-pages@v4
```

## Customization Guide

### Updating Placeholder Content

Replace these placeholders throughout the site:
- `[Your Name]` — Founder name
- `you@northbounddata.com` — Contact email
- `https://calendly.com/northbounddata` — Calendly link
- `https://formspree.io/f/your-form-id` — Form endpoint

### Adding New Pages

1. Copy an existing page as a template
2. Update the `<title>` and `<meta description>`
3. Update the main content
4. Ensure navigation links are correct
5. Add `fade-in` class to animated elements

### Modifying Styles

All styles are in `css/styles.css`:
- CSS variables are at the top — change these to update colors, fonts, spacing globally
- Component styles are organized by section with clear comments
- Add new component styles at the bottom

### Updating JavaScript

`js/scripts.js` handles:
- Mobile navigation toggle
- Scroll animations (Intersection Observer)
- Active nav link highlighting

To add new functionality:
- Initialize in the `DOMContentLoaded` event listener
- Keep functions modular and well-commented

## Local Development

To view the site locally:

```bash
# Python 3
python3 -m http.server 8080

# Then open http://localhost:8080 in your browser
```

Or simply open `index.html` directly in a browser (some features like fonts may not load correctly without a server).

## Browser Support

The site uses modern CSS and JavaScript but includes fallbacks for:
- Flexbox and Grid layout
- CSS variables
- Intersection Observer

Tested and works in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The site is optimized for fast loading:
- No build step or dependencies
- Single CSS file (~1400 lines, minifies to ~25KB)
- Single JS file (~100 lines, minifies to ~3KB)
- Google Fonts loaded with `display=swap`
- No images — visual elements use CSS gradients
- No external frameworks or libraries

## Contact Form

The contact form uses a placeholder action pointing to Formspree:
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```

To enable the form:
1. Create a free account at formspree.io
2. Create a new form and get your form ID
3. Replace `your-form-id` in contact.html

Alternatively, use Netlify Forms if deploying to Netlify:
```html
<form name="contact" method="POST" data-netlify="true">
```

## Maintenance

### Regular Updates
- Update copyright year in all footers annually
- Review and update case study content as needed
- Add new insights/blog posts following the template
- Keep testimonials and stats current

### Adding Insights Posts
1. Copy `insights/dbt-intervention.html` as template
2. Update metadata, title, and content
3. Update navigation links (previous/next)
4. Add card to `insights.html` grid
