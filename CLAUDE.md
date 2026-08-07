# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build (also type-checks)
npm run lint     # ESLint
```

No test suite is configured. Verify UI changes by running the dev server.

## Architecture

Next.js 16 App Router site. All routes live under `app/` as `page.tsx` files. The root `app/layout.tsx` renders the persistent `Header` and wraps every page in `<main>`. There is no `Footer` in the root layout — it is intentionally absent (was removed; do not add it back without confirming).

**Component model:** Shared UI lives in `components/`. Most sections are server components; pages that need browser state (`gallery/page.tsx`, `contact/page.tsx`) are marked `"use client"`. `ScrollReveal.tsx` is a thin Framer Motion wrapper used site-wide for entrance animations — import it instead of writing one-off motion code.

**Animations:** Framer Motion throughout. Spring physics default is `stiffness: 100, damping: 20`. Entry animations use `opacity 0→1` + `y: 24→0`. Use `AnimatePresence` for mount/unmount transitions (see `TestimonialCarousel.tsx`). Always respect `prefers-reduced-motion` — disable y-translation but keep opacity fade (see `ScrollReveal.tsx` for the pattern).

**Images:** Remote images from `picsum.photos` (placeholders) and `localpractice.wordpress.com` are whitelisted in `next.config.ts`. Add any new hostname there before using `next/image` with it. Do not use `<img>` tags — use `next/image` with `fill` for responsive containers.

**Styling:** Tailwind CSS v4 via PostCSS. Brand tokens are defined as CSS custom properties in `app/globals.css` and extended into Tailwind via `@theme inline` — use `bg-scrape-green`, `text-scrape-gold`, etc. rather than raw hex values inline. Dark mode is intentionally suppressed to preserve brand colors.

## Design System Rules

The full design spec lives in `.stitch/DESIGN.md`. Key constraints:

- **Colors:** Forest green `#1C3A2F`, gold `#C9A84C`, warm white `#F7F5F0`, charcoal `#2D2D2D`, dark `#1A1A1A`. No pure black `#000000`.
- **Fonts:** Geist Sans / Geist Mono only. No Inter, Arial, or serif fonts.
- **Layout:** Asymmetric grids. `min-h-[100dvh]` not `h-screen` (iOS Safari bug). Hero is always left-text / right-image split — never centered.
- **Icons:** SVG only. No emojis in UI.
- **CTAs:** Maximum one primary button per section. Primary = gold fill, pill shape (`rounded-full`).
- **Cards:** `rounded-2xl`, shadow tinted toward Forest Ink. No equal-column 3-up card grids.

**Banned patterns:** centered heroes, `h-screen`, emoji icons, Inter/Arial fonts, `#000000`, neon glows, dual primary CTAs, AI copywriting clichés ("Elevate", "Seamless", "Unleash").

## Pending Work

Key items not yet implemented (see `Scrape-to-Shape-Full-Website-Spec.md` for the full spec):

- Replace `picsum.photos` placeholders with real before/after photos
- Wire the contact form to a backend (Resend / Formspree / API route)
- Individual article pages under `/know-your-house/[slug]`
- Before/after drag-slider and lightbox in the gallery
