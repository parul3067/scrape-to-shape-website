# Scrape to Shape Renovations — Website

Marketing website for **Scrape to Shape Renovations**, a full-service home renovation company serving the Greater Toronto Area (GTA). The site is built to build trust with first-time visitors, showcase project quality through before/after work, and convert visitors into quote requests with clear calls to action.

**Tagline:** *From Scrape to Shape — We Build It Right*

**Contact:** [226-899-1190](tel:2268991190) · [info@scrapetoshape.ca](mailto:info@scrapetoshape.ca)

---

## What This Site Does

The website tells the company's transformation story — from demolition to finished space — through photography, process transparency, and educational content. It covers seven renovation services (bathrooms, kitchens, basements, full-house renovations, landscaping, roofing, and flooring), walks visitors through a six-step project process, and provides paths to request a free quote on every page.

Primary goals:

- Establish credibility quickly for GTA homeowners
- Display project work in a filterable before/after gallery
- Drive quote requests via prominent CTAs and a contact form
- Support local SEO with page-level metadata and renovation-focused content

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| UI | [React 19](https://react.dev/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Fonts | Geist Sans & Geist Mono (via `next/font`) |
| Hosting target | Vercel |

---

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start the production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
scrape-to-shape-website/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Header, Footer, metadata)
│   ├── page.tsx            # Home page
│   ├── about/
│   ├── contact/
│   ├── faq/
│   ├── gallery/
│   ├── know-your-house/
│   ├── process/
│   └── services/
├── components/             # Reusable UI components
├── app/globals.css         # Global styles and Tailwind imports
├── next.config.ts          # Next.js config (remote image domains)
└── Scrape-to-Shape-Full-Website-Spec.md  # Full product specification
```

---

## Pages

| Route | File | Purpose |
|---|---|---|
| `/` | `app/page.tsx` | Home — hero, trust signals, services overview, featured projects, process summary, testimonials, CTA |
| `/services` | `app/services/page.tsx` | Detailed breakdown of all seven service categories with timelines and quote CTAs |
| `/gallery` | `app/gallery/page.tsx` | Filterable before/after project gallery by service type |
| `/process` | `app/process/page.tsx` | Full six-step renovation process with expanded descriptions |
| `/about` | `app/about/page.tsx` | Company story, core values, and team profiles |
| `/know-your-house` | `app/know-your-house/page.tsx` | Educational article hub for GTA homeowners |
| `/faq` | `app/faq/page.tsx` | Accordion FAQ organised by category |
| `/contact` | `app/contact/page.tsx` | Quote request form, phone/email links, and service area |

### `app/layout.tsx`

Root layout shared by every page. Sets global metadata (title template, SEO description, Open Graph tags), loads Geist fonts, and wraps all pages with the persistent `Header` and `Footer`. Applies the brand background colour (`#F7F5F0`) and base text colour (`#2D2D2D`).

### `app/page.tsx` (Home)

Composes the full home page from shared components plus page-local sections:

- **TrustSignals** — Three quick trust badges (free consultation, fixed-price quotes, written warranty) shown immediately below the hero.
- **FeaturedProjects** — Asymmetric grid of six project cards with category labels and locations, linking to the full gallery.
- **ProcessSummary** — Condensed pill-style list of the six process steps with a link to the full Process page.

Also renders `Hero`, `ServiceCards`, `ProcessTimeline`, `TestimonialCarousel`, and `CTABanner`.

### `app/services/page.tsx`

One full-width section per service with alternating layout. Each section includes an icon placeholder, tagline, long description, bullet list, typical timeline, and a "Get a Quote" button. Ends with a customised `CTABanner`.

### `app/gallery/page.tsx`

Client-side page with category filter bar (All, Bathroom, Kitchen, Basement, Landscaping, Roofing, Flooring & Tiling, Wainscoting) and a responsive project grid. Each card has a before/after toggle. Currently uses colour placeholders — real project photos are pending.

### `app/process/page.tsx`

Expanded version of the six-step process with detailed paragraphs per step, colour-coded cards, an FAQ teaser section, and a CTA banner.

### `app/about/page.tsx`

Company origin story, six core values (honesty, craftsmanship, communication, accountability, transparency, respect), and team member cards with roles and bios.

### `app/know-your-house/page.tsx`

Article listing hub with category tags. Five starter articles cover quotes, permits, waterproofing, countertops, and flooring. Article detail pages are not yet implemented — cards link to placeholder slugs.

### `app/faq/page.tsx`

Passes structured FAQ data to `FaqAccordion` across five categories: Getting Started, Pricing & Contracts, During the Renovation, Permits & Compliance, and After the Renovation.

### `app/contact/page.tsx`

Client-side quote request form with validation (name, email, message required). Collects city, service type, phone, and project description. Shows a success state on submit (backend integration pending). Also displays phone, email, and a list of GTA cities served.

---

## Components

### `Header.tsx`

Sticky site navigation bar.

- **Transparent on home hero** — Starts with a transparent background over the hero, then transitions to solid forest green (`#1C3A2F`) with shadow after 80px of scroll. Non-home pages always use the solid background.
- **Desktop nav** — Links to all eight pages plus a gold phone CTA button (`tel:2268991190`).
- **Mobile nav** — Hamburger menu opens a slide-down drawer with all links and a call button. Closes automatically when a link is tapped.

### `Footer.tsx`

Four-column site footer on a dark background (`#1A1A1A`):

1. Brand name, tagline, and short description
2. Navigation links (mirrors the header)
3. Service list linking to `/services`
4. Contact details (phone, email, service area) and a list of GTA cities

Includes a copyright bar at the bottom.

### `Hero.tsx`

Full-viewport hero section for the home page.

- Left column: animated headline ("From Scrape to Shape"), subtext, primary "Get a Free Quote" CTA, and micro-trust labels.
- Right column (desktop only): mosaic of three renovation photos with staggered Framer Motion entrance animations.
- Dark forest background with a subtle grain texture overlay.
- Uses `picsum.photos` placeholder images until real photography is supplied.

### `ServiceCards.tsx`

Home page services overview. Exports a `SERVICES` array used elsewhere. Renders eight service rows in a two-column grid, each with a numbered index, SVG icon, name, three bullet differentiators, and a link arrow to `/services`. Rows highlight on hover. Wrapped in `ScrollReveal` for staggered entrance.

Services listed: Bathroom, Kitchen, Legal Basements, Electrical, Plumbing, Landscaping & Sodding, Roofing, and Flooring & Tiling.

### `ProcessTimeline.tsx`

Full process section used on the home page. Exports a `STEPS` array of six steps (Free Consultation → Warranty & Follow-up), each with an icon, number, title, and description.

- **Desktop** — 3×2 grid with divider lines on a dark green background.
- **Mobile** — Vertical timeline with a connecting line and icon nodes.

### `TestimonialCarousel.tsx`

Auto-rotating client testimonial carousel (5-second interval). Displays three testimonials with star ratings, quotes, avatar initials, neighbourhood, and project type. Pauses on hover or focus. Includes previous/next buttons and dot indicators. Uses Framer Motion `AnimatePresence` for slide transitions.

### `CTABanner.tsx`

Reusable full-width call-to-action band before the footer. Accepts optional `headline` and `sub` props (defaults to "Ready to Transform Your Space?"). Contains a "Get a Free Quote" button linking to `/contact` and an inline phone link. Used on the home page, services, process, FAQ, and about pages with customised copy where appropriate.

### `ScrollReveal.tsx`

Shared animation wrapper used across most sections. Fades in and translates up 24px when the element enters the viewport (via Framer Motion `useInView`). Triggers once per element. Respects `prefers-reduced-motion` by skipping the vertical translation. Accepts an optional `delay` prop for staggered sibling animations.

### `FaqAccordion.tsx`

Accordion component for the FAQ page. Accepts a `data` prop — an array of categories, each containing questions and answers.

- One question open at a time per category.
- Smooth height animation on expand/collapse via Framer Motion.
- Chevron icon rotates when open. Answer text remains in the DOM for crawlability.

---

## Brand Colours

| Token | Hex | Usage |
|---|---|---|
| Forest green | `#1C3A2F` | Header, footer accents, primary buttons, dark sections |
| Gold accent | `#C9A84C` | CTAs, highlights, icons, hover states |
| Warm white | `#F7F5F0` | Page background |
| Charcoal | `#2D2D2D` | Body text |
| Dark footer | `#1A1A1A` | Footer background |

---

## Pending / Open Items

See `Scrape-to-Shape-Full-Website-Spec.md` for the full specification. Key items still outstanding:

- Replace placeholder images in Hero, Featured Projects, and Gallery with real before/after photos
- Connect the contact form to a backend (Resend, Formspree, or custom API route)
- Implement individual article pages for Know Your House
- Add before/after drag slider and lightbox to the gallery (spec Phase 3)
- Logo animation on first load (spec Phase 4)
- Client-supplied testimonials, team photos, and final brand assets

---

## Related Documentation

The full functional, design, and content specification lives in [`Scrape-to-Shape-Full-Website-Spec.md`](./Scrape-to-Shape-Full-Website-Spec.md).
