# Production-Ready Website Upgrade — Todo

## Phase 1: Global Infrastructure

- [x] 1.1 — Update copyright year `&copy; 2024` → `&copy; 2025` in all 16 HTML files
- [x] 1.2 — Add Lucide Icons CDN `<script>` to `<head>` of all 16 HTML files + `lucide.createIcons()` call after `scripts.js` (use `../` paths for insight article pages)
- [x] 1.3a — Replace 7 inline SVGs in `index.html` with Lucide `<i>` tags (4 warning icons + 3 service icons)
- [x] 1.3b — Replace 6 inline SVGs in `specialized.html` with Lucide `<i>` tags
- [x] 1.3c — Add CSS sizing rule for Lucide icons inside `.card__icon` and `.problem__icon`

## Phase 2: CSS & JS Enhancements

- [x] 2.1 — Add `initNavShadow()` to `scripts.js` + `.nav--scrolled` CSS rule
- [x] 2.2 — Add enhanced card hover effects (`translateY(-2px)` + shadow) for `.card`, `.service-card`, `.tier`
- [x] 2.3 — Add process timeline connector line at desktop breakpoint (CSS `::before` pseudo-element)

## Phase 3: Homepage New Sections

- [x] 3.1 — Add technology trust bar between hero and stats (dbt, Snowflake, Looker, BigQuery, Fivetran, Databricks) + CSS
- [x] 3.2 — Add animated stat counter JS (`initStatCounters()`) + `data-target`/`data-suffix` attributes on `.stat__value` elements
- [x] 3.3 — Add "Why Northbound Data" section after Services Overview, before How We Work (3-card grid with Lucide icons)

## Phase 4: Stock Photography

- [x] 4.1 — Download 5 Unsplash stock photos to `/images/`
- [x] 4.2 — Add hero background image CSS (semi-transparent white gradient over photo)
- [x] 4.3 — Add imagery to case study cards (img elements + CSS opacity styling)

## Verification

- [x] Confirm all changes render correctly
