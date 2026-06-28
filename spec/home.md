# Home Page Spec

## Sections (in order)

1. **Hero** — Full-screen landing section
2. **Services** — 8 service tiles in a 4×2 grid
3. **Featured Projects** — Asymmetric photo gallery grid
4. **Process Summary** — "How We Work" step pills in a single row
5. **Process Timeline** — Detailed process breakdown
6. **Testimonials** — Carousel of client reviews
7. **CTA Banner** — Final call-to-action

---

## Hero

- **Heading:** "From Scrape to Shape" (reduced size: `clamp(2rem, 4.5vw, 3.75rem)`)
- **CTA Button:** "Get a Free Quote" → `/contact`
- **Trust Signals (3-column grid below CTA):**
  - Free Consultation — No-cost, no-pressure site visit.
  - Fixed-Price Quotes — Know the cost before we start.
  - Written Warranty — Workmanship backed in writing.
- **Scroll Icon:** Single bouncing chevron at bottom center → scrolls to Services

---

## Services

- **Section ID:** `services`
- **Heading:** "Full-Service Home Renovations"
- **Subheading:** "From a single bathroom to a full-home overhaul — every trade, on time and on budget."
- **Layout:** 4 tiles per row × 2 rows (8 tiles total); 2 columns on mobile
- **Hover effect:** `scale-105` with smooth `300ms` transition
- **Services list:**
  1. Bathroom Renovation
  2. Kitchen Renovation
  3. Legal Basements
  4. Electrical
  5. Plumbing
  6. Landscaping & Sodding
  7. Roofing
  8. Flooring & Tiling
- Each tile shows: icon, name, 3 bullet points

---

## Featured Projects

- **Section ID:** `featured-projects`
- **Heading:** "Featured Projects"
- **Layout:** Asymmetric 3-column grid (alternating span-2 / span-1)
- **Projects:**
  - Kitchen — Etobicoke
  - Bathroom — North York
  - Basement Suite — Mississauga
  - Backyard — Brampton
  - Roof — Vaughan
  - Hardwood Floors — Markham
- **CTA:** "View Full Gallery" → `/gallery`

---

## Process Summary

- **Section ID:** `process-summary`
- **Heading:** "How We Work"
- **Steps (single row, no wrap):**
  1. Free Consultation
  2. Quote & Proposal
  3. Design & Planning
  4. Build
  5. Final Walkthrough
  6. Warranty
- **CTA:** "See the full process" → `/process`

---

## Colours

| Token | Hex |
|---|---|
| Green (primary) | `#1C3A2F` |
| Gold (accent) | `#C9A84C` |
| Background | `#F7F5F0` |
| Text | `#2D2D2D` |
| Hero bg | `#0d1f17` |
