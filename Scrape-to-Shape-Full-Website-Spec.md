# Website Specification — Scrape to Shape Renovations
**Version:** 2.0 — Full Consolidated Spec
**Document type:** Functional, Design & Content Specification
**Prepared for:** Scrape to Shape Renovations
**Service Area:** Greater Toronto Area (GTA)
**Phone:** 226-899-1190
**Reference site:** [Jarvis Contracting](https://www.jarviscontracting.ca/)
**Logo animation reference:** [Dream Construction Studio](https://dreamconstructionstudio.com/residential/)

---

## 1. Purpose & Goals

This document is the single source of truth for the Scrape to Shape Renovations website. It combines all requirements, design decisions, and acceptance criteria into one actionable specification.

**Primary goals:**
- Build trust immediately with first-time visitors in the GTA
- Showcase project quality through a rich before/after gallery
- Convert visitors into quote requests with frictionless CTAs
- Establish brand identity around the "transformation" story (scrape → shape)
- Deliver smooth, modern animations inspired by the reference sites without sacrificing performance

---

## 2. Brand & Identity

| Field | Value |
|---|---|
| Company name | Scrape to Shape Renovations |
| Phone | 226-899-1190 |
| Service area | Greater Toronto Area (GTA) |
| Tagline (suggested) | *"From Scrape to Shape — We Build It Right"* |
| Logo | To be supplied — logo animation style reference: dreamconstructionstudio.com/residential/ |
| Brand palette | To be confirmed — suggest earthy neutrals + bold accent (slate, warm white, charcoal, one strong accent colour) |
| Tone | Confident, local, craftsmanship-first. Not corporate. Not salesy. |

> **Brand direction:** The company name "Scrape to Shape" is a built-in story — demolition to finished space, raw to refined, before to after. The entire visual identity should lean into this transformation arc: before/after photography, process-forward storytelling, and motion that mimics reveal/uncover.

---

## 3. Site Structure (Information Architecture)

### 3.1 Pages

| # | Page | Purpose |
|---|---|---|
| 1 | **Home** | Hero, services overview, trust signals, featured projects, process summary, testimonials, CTA |
| 2 | **Services** | Full breakdown of all 7 service categories with descriptions and photos |
| 3 | **Gallery / Projects** | Filterable before/after gallery by project type |
| 4 | **Process** | Step-by-step walkthrough from first call to final walkthrough |
| 5 | **About** | Company story, values, team, why GTA homeowners choose us |
| 6 | **Know Your House** | Educational content — home renovation literacy for GTA homeowners |
| 7 | **FAQ** | Answers to the most common renovation questions |
| 8 | **Contact** | Quote request form, phone, email, service area map |

### 3.2 Navigation Rules
- **Spec:** All primary pages reachable from the main nav in 1 click. Quote request CTA reachable from any page in 1 click.
- **Acceptance:** Nav and sticky footer both expose all pages. Phone number (226-899-1190) is visible in the header on every page as a `tel:` link. On mobile, the nav collapses to a hamburger menu that opens a full-screen overlay.

---

## 4. Services Offered

The site must present all 7 services with equal visual weight. Each service has its own card on the Services page and its own gallery category.

| # | Service | Gallery Category |
|---|---|---|
| 1 | Bathroom Renovation | Bathroom |
| 2 | Kitchen Renovation | Kitchen |
| 3 | Basement Finishing | Basement |
| 4 | Full House Renovation | Full House |
| 5 | Landscaping & Sodding | Landscaping |
| 6 | Roofing | Roofing |
| 7 | Flooring & Tiling | Tiling / Flooring |

> **Gallery bonus category:** Wainscoting (appears as a cross-cutting visual feature across multiple service types)

---

## 5. Core Page Specifications

### 5.1 Home Page

#### Hero Section
- **Spec:** Full-width hero with an autoplay muted video or high-quality image of a completed GTA renovation. Headline communicates the core promise. One primary CTA: "Get a Free Quote". Phone number visible in header.
- **Acceptance:** Loads under 2 seconds on mobile (LCP ≤ 2.5s). CTA visible without scrolling on a 375px viewport. Logo animation plays once on load (reference: dreamconstructionstudio.com/residential/).

#### Trust Signals (within first two screens)
- **Spec:** Display years in business, licensed & insured badge, GTA service area coverage, and a count of completed projects.
- **Acceptance:** A first-time GTA visitor can answer "is this a legit local company?" within 5 seconds of landing. Signals appear above the fold or immediately after the hero on mobile.

#### Service Cards Overview
- **Spec:** 7 service cards, each with a photo, service name, 2–3 differentiator bullets, and a "Learn More" link to the Services page/section.
- **Acceptance:** Entire card is clickable. Cards display in a 3- or 4-column grid on desktop, 2-column on tablet, single-column on mobile with no overlap.

#### Featured Projects (Before/After Preview)
- **Spec:** 3 featured project cards linking to the full gallery. Each shows a before/after teaser image, project type tag, and location (e.g., "Kitchen — Mississauga").
- **Acceptance:** Before/after slider is touch-friendly; tapping a card opens the full gallery filtered to that project type.

#### Process Summary Strip
- **Spec:** A condensed 4–5 step process (icons + one-line labels) linking to the full Process page.
- **Acceptance:** Renders horizontally on desktop, vertically on mobile. No broken alignment at any breakpoint.

#### Testimonials
- **Spec:** 3–5 real client quotes, each with name, neighbourhood (e.g., "— Sarah K., Etobicoke"), and project type. Displayed in a rotating carousel.
- **Acceptance:** Auto-rotates every 5s, pauses on hover/focus, swipeable on mobile. No layout shift between slides. Links to Google/Houzz review profile if available.

#### Home Page CTA Banner
- **Spec:** A full-width band before the footer with a short headline ("Ready to transform your space?") and two buttons: "Get a Free Quote" and "View Our Work".
- **Acceptance:** Visible and functional on all screen sizes.

---

### 5.2 Services Page

- **Spec:** One full-width section per service, alternating image-left/text-right layout. Each section includes: service name, 3–5 benefit bullets, a gallery preview strip (3 images), and a quote CTA.
- **Services to cover:** Bathroom, Kitchen, Basement, Full House Renovation, Landscaping & Sodding, Roofing, Flooring & Tiling.
- **Acceptance:** Each service is anchor-linked from the nav dropdown and the home page service cards. Clicking "View Gallery" jumps to the gallery filtered to that service type.

---

### 5.3 Gallery / Projects Page

- **Spec:** Filterable grid gallery by service type: Bathroom · Kitchen · Basement · Landscaping · Roofing · Tiling/Flooring · Wainscoting · All. Each project card shows a before/after slider or toggle. Clicking opens a lightbox with the full project story (type, location, scope summary).
- **Acceptance:**
  - Images lazy-load below the fold (no blocking of initial render)
  - Before/after slider is touch-draggable on mobile
  - Lightbox opens without navigating away from the page
  - Filter transitions animate smoothly (fade/reflow, not a hard page reload)
  - Gallery works without JavaScript as a static grid fallback

---

### 5.4 Process Page

Modelled after Jarvis Contracting's process section — clear, reassuring, step-by-step.

**Recommended steps:**

| Step | Name | Description |
|---|---|---|
| 1 | Free Consultation | We visit your space, listen to your vision, and assess the scope |
| 2 | Quote & Proposal | Detailed written quote with materials, timeline, and milestones |
| 3 | Design & Planning | Finalise selections, source materials, obtain required permits |
| 4 | Build | Our crew executes — you get regular updates and site access |
| 5 | Final Walkthrough | We walk through every detail together before we call it done |
| 6 | Warranty & Follow-up | We stand behind our work with a written warranty |

- **Spec:** Each step has an icon, step number, title, and 2–3 sentence description. Steps animate in on scroll.
- **Acceptance:** Horizontal timeline on desktop (≥1024px), vertical stacked cards on mobile. Each step is readable without the animation (accessibility fallback).

---

### 5.5 About Page

- **Spec:** Company story section (origin, values, what makes us different in the GTA market), team section (photos + names + roles), and a values/differentiators list.
- **Suggested differentiators:** Licensed & insured · GTA-local · Transparent pricing · No-subcontractor-surprises policy · Clean job sites · Bilingual team (if applicable)
- **Acceptance:** Page feels human and local — not a generic contractor boilerplate. At least one photo of the actual team or owner.

---

### 5.6 Know Your House (Educational Content Hub)

This is a trust-building and SEO content section unique to this site — educating GTA homeowners about renovation topics.

- **Spec:** A blog/article hub with categorised articles. Initial suggested articles:
  - "How to Prepare Your Home for a Basement Renovation in Ontario"
  - "Understanding Building Permits in the GTA — What You Need to Know"
  - "Kitchen vs. Bathroom Renovation: Which Adds More Value in Toronto?"
  - "Signs Your Roof Needs Replacing Before Winter"
  - "What to Expect During a Full House Renovation: A Week-by-Week Guide"
- **Acceptance:** Articles are individually shareable URLs. Category filter works on mobile. Each article ends with a quote request CTA.

---

### 5.7 FAQ Page

- **Spec:** Accordion-style FAQ, organised by category. Minimum 3 questions per category.

**Suggested categories & questions:**

**Getting Started**
- How do I get a quote?
- How long does a renovation typically take?
- Do you serve my neighbourhood? (with GTA area list)

**Pricing & Contracts**
- How is your pricing structured?
- Do I need to pay a deposit?
- What's included in the written quote?

**During the Renovation**
- Will your crew be on-site every day?
- How do you handle unexpected issues (e.g., water damage found behind walls)?
- How do you keep the work area clean?

**Permits & Compliance**
- Do I need a permit for my renovation?
- Who is responsible for pulling the permits?

**After the Renovation**
- What warranty do you offer?
- What if I'm not happy with something?

- **Acceptance:** Each accordion item expands/collapses with a smooth animation. Only one item open at a time (or optionally multi-open). Page is crawlable — all answer text is in the HTML (not hidden via `display:none`).

---

### 5.8 Contact Page

- **Spec:** Quote request form, phone number as `tel:` link, email as `mailto:` link, embedded Google Map showing GTA service area, and a list of neighbourhoods/cities served.
- **Form fields:** Name · Phone · Email · Service type (dropdown) · Project description (textarea) · Preferred contact method · How did you hear about us?
- **GTA cities to list:** Toronto · Mississauga · Brampton · Etobicoke · Scarborough · North York · Vaughan · Richmond Hill · Markham · Oakville · Burlington · Hamilton (if applicable)
- **Acceptance:** Form submits via a backend endpoint or service (e.g., Formspree, EmailJS, or custom API). Confirmation message shown on submission. Form is fully keyboard-navigable. Phone and email links work on mobile tap.

---

## 6. Page & Scroll Transitions

Smooth, intentional motion that reinforces the "transformation" brand story without feeling heavy or slowing the site down.

### 6.1 Page Transition (Route Change)
- **Spec:** Outgoing page fades out and scales down slightly (opacity 1→0, scale 1→0.98) over ~200ms. Incoming page fades in and scales up (0.98→1) over ~300ms. Optional: a brief solid-colour overlay "wipe" (~200ms) plays between transitions.
- **Acceptance:** No flash of blank or unstyled content. Total transition under 600ms. Works consistently across Chrome, Safari, Firefox, and mobile browsers.
- **Implementation:**
  - React/Next.js: Framer Motion `AnimatePresence` with `mode="wait"`
  - Static HTML: View Transitions API (`document.startViewTransition`)

### 6.2 Logo Animation (On Load)
- **Spec:** Logo animates in on first page load — reference style: [dreamconstructionstudio.com/residential/](https://dreamconstructionstudio.com/residential/). Animation plays once then resolves to the static logo in the header. Does not replay on subsequent page navigations.
- **Acceptance:** Animation completes in under 1.5s. Does not block interactivity (LCP unaffected). Skipped entirely when `prefers-reduced-motion` is set.

### 6.3 Scroll-Reveal Animations
- **Spec:** As each section enters the viewport, it fades in and translates up ~24px over 400–600ms. Sibling elements (e.g., service cards, gallery items) stagger in with 80–100ms delay between each.
- **Acceptance:** Triggers once per element on first scroll into view — does not re-trigger on scroll-back. Reduced to fade-only (no transform) when `prefers-reduced-motion` is set.

### 6.4 Hover & Touch Micro-interactions
- **Spec:** Gallery images scale to 1.05 and slightly darken on hover over 300ms ease. Buttons shift colour or show an underline-grow effect. Service cards lift with a subtle box-shadow on hover.
- **Acceptance:** All hover effects have equivalent touch/focus states. No interaction is hover-only — accessible via keyboard and touch.

### 6.5 Sticky / Transparent Header
- **Spec:** Header starts transparent over the hero image (white logo/text), then transitions to a solid background with shadow once the user scrolls past ~80px.
- **Acceptance:** Transition is smooth — no jump in logo size or position. Text remains legible in both states. Header stays accessible at both extremes.

### 6.6 Before/After Gallery Slider
- **Spec:** Drag-handle slider (touch and mouse) revealing before and after states of each project image. Defaults to 50/50 split on load.
- **Acceptance:** Smooth at 60fps. Touch-draggable on iOS and Android. Keyboard-accessible (arrow keys move the handle). Works without JavaScript as a static side-by-side fallback.

### 6.7 Image Loading / Skeleton States
- **Spec:** Gallery and card images reserve their aspect-ratio space and show a low-opacity shimmer placeholder until loaded, then fade to the real image.
- **Acceptance:** Zero Cumulative Layout Shift (CLS) as images load. Skeleton background matches the brand palette.

---

## 7. Performance & Accessibility

| Requirement | Target | How to Verify |
|---|---|---|
| Lighthouse Performance (mobile) | ≥ 85 | Chrome DevTools, throttled mobile profile |
| Largest Contentful Paint | ≤ 2.5s | WebPageTest / Lighthouse |
| Cumulative Layout Shift | ≤ 0.1 | Lighthouse CLS audit |
| `prefers-reduced-motion` | All animations fall back to fade-only | OS accessibility settings → Reduce Motion ON |
| Keyboard navigation | All interactive elements reachable via Tab | Manual keyboard walkthrough |
| Colour contrast | WCAG AA (4.5:1 for body text) | Chrome a11y audit |
| Image alt text | All images have descriptive alt text | Lighthouse accessibility audit |
| Mobile responsiveness | No horizontal scroll at 375px | Chrome DevTools device emulator |
| `tel:` and `mailto:` links | All phone/email entries are tappable links | Manual test on iOS + Android |

---

## 8. Technical Stack (Recommended)

| Layer | Recommendation | Notes |
|---|---|---|
| Framework | Next.js (App Router) | SSG/SSR for SEO; easy image optimisation |
| Styling | Tailwind CSS | Utility-first, fast iteration |
| Animations | Framer Motion | Page transitions, scroll-reveal, micro-interactions |
| CMS (optional) | Sanity or Contentful | For Know Your House articles and gallery management |
| Forms | Resend + custom API route | Or Formspree for a no-backend option |
| Images | Next.js `<Image>` + Cloudinary | Automatic WebP, lazy load, responsive sizing |
| Hosting | Vercel | Native Next.js support, free tier adequate for launch |
| Analytics | Vercel Analytics + Google Search Console | Track organic GTA traffic |

---

## 9. SEO & Local Search

- **Spec:** Each page has a unique `<title>` and `<meta description>` optimised for GTA renovation keywords.
- **Target keywords (examples):** "home renovation GTA", "kitchen renovation Toronto", "basement finishing Mississauga", "roofing contractor Brampton"
- **Spec:** `LocalBusiness` schema markup on the Contact page with NAP (Name, Address, Phone) and service area.
- **Spec:** Google Business Profile link and review count displayed on the Contact page.
- **Acceptance:** Site is indexable (no `noindex` on production), sitemap.xml generated, robots.txt configured correctly.

---

## 10. Build Order

| Phase | Scope |
|---|---|
| **Phase 1 — Structure & Content** | IA, nav, all page shells, static content, hero, services, contact form |
| **Phase 2 — Responsive Polish** | Mobile/tablet layouts for all pages, header behaviour, footer |
| **Phase 3 — Gallery & Portfolio** | Before/after slider, filterable gallery, lightbox, lazy loading |
| **Phase 4 — Motion Layer** | Logo animation, page transitions, scroll-reveal, hover states |
| **Phase 5 — Know Your House / FAQ** | Article templates, accordion FAQ, CMS integration (if used) |
| **Phase 6 — QA & Launch** | Lighthouse audits, accessibility review, cross-browser testing, SEO setup |

---

## 11. Open Items (Pending from Client)

- [ ] Confirm final tagline / brand messaging
- [ ] Confirm brand colour palette and typography
- [ ] Supply logo (vector format preferred) for animation
- [ ] Supply before/after project photos for all 7 service categories
- [ ] Confirm list of GTA neighbourhoods/cities to highlight
- [ ] Provide 3–5 real client testimonials (name, neighbourhood, project type)
- [ ] Confirm domain name
- [ ] Confirm if bilingual content (French/other) is required
- [ ] Confirm Google Business Profile URL for review integration
- [ ] Confirm warranty terms for Process and FAQ pages

---

*Spec v2.0 — Consolidated from scrape-to-shape-website-spec.md and Requirements.md. Authored for Scrape to Shape Renovations, GTA.*
