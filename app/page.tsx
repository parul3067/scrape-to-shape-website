import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import HighlightStats from "@/components/HighlightStats";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Scrape to Shape Renovations | Your Trusted Home Renovation Experts",
  description:
    "The GTA's most trusted home renovation company. Bathrooms, kitchens, basements, roofing, flooring, and landscaping. Free consultations, fixed-price quotes, written warranty.",
};

/* ─── Service cards data ─────────────────────────────────────────────────── */
const SERVICE_CARDS = [
  {
    title: "Bathrooms & Kitchens",
    href: "/services",
    image: "https://plus.unsplash.com/premium_photo-1661902468735-eabf780f8ff6?auto=format&fit=crop&w=800&q=80",
    bullets: [
      "Full gut-and-rebuild or targeted refresh",
      "Custom glass showers & soaker tubs",
      "Cabinetry, countertops & backsplash tile",
      "Complete plumbing & electrical included",
    ],
  },
  {
    title: "Basements & Legal Suites",
    href: "/services#basement-finishing",
    image: "https://i.pinimg.com/control1/1200x/2b/aa/90/2baa9056433ededcedefa1fd0e9415e7.jpg",
    bullets: [
      "Legal secondary suites with permits",
      "Egress windows & waterproofing",
      "Framing, drywall, flooring & finishing",
      "Rec rooms, home gyms & home offices",
    ],
  },
  {
    title: "Full-Home, Roofing & Outdoor",
    href: "/services",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    bullets: [
      "Complete interior overhauls, one contract",
      "Shingle, flat roof & eavestrough work",
      "Interlock driveways, patios & sodding",
      "Flooring, tiling & wainscoting throughout",
    ],
  },
];

/* ─── Gallery photos ─────────────────────────────────────────────────────── */
const GALLERY = [
  { seed: "bath-1", alt: "Bathroom renovation", span: "col-span-1 row-span-2" },
  { seed: "kitchen-2", alt: "Kitchen renovation", span: "col-span-1" },
  { seed: "basement-1", alt: "Basement finishing", span: "col-span-1" },
  { seed: "kitchen-1", alt: "Kitchen cabinets", span: "col-span-2" },
  { seed: "floors-1", alt: "Flooring installation", span: "col-span-1" },
  { seed: "roof-1", alt: "Roofing project", span: "col-span-1" },
];

/* ─── Values data ────────────────────────────────────────────────────────── */
const VALUES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Full Transparency",
    body: "Fixed-price quotes, itemized by trade. The price in your contract is the price you pay — no surprises, no verbal agreements.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Timely Delivery",
    body: "We give you a firm phase-by-phase timeline before we start and stick to it. You'll always know what to expect the next day.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "No Hidden Costs",
    body: "Labour, materials, permits, and cleanup — all itemized in writing before we touch a wall. Milestone-based payments, never paid in full upfront.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "Craftsmanship That Lasts",
    body: "We treat your home the way we'd treat our own. Daily cleanup, proper material selection, and a written workmanship warranty on every project.",
  },
];

/* ─── Section 1: Full-Service Experts ───────────────────────────────────── */
function FullServiceSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-bold text-[#1A1A1A] leading-tight" style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}>
              Your Full-Service<br />Renovation Experts
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICE_CARDS.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <div className="flex flex-col rounded-3xl overflow-hidden bg-[#1A1A1A] h-full">
                <div className="relative h-52 overflow-hidden shrink-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-black/20 to-transparent" />
                </div>
                <div className="flex flex-col flex-1 p-7">
                  <h3 className="text-white font-bold text-xl mb-4">
                    {card.title}
                  </h3>
                  <ul className="space-y-2 flex-1">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-white/55">
                        <span className="text-[#C9A84C] shrink-0 mt-0.5">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.25}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200"
            >
              Explore Services <span>→</span>
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] font-semibold px-8 py-4 rounded-full transition-all duration-200"
            >
              See Our Work <span>→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Section 2: Our Story + Gallery ────────────────────────────────────── */
function StorySection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Text */}
          <ScrollReveal>
            <p className="text-[#C9A84C] font-semibold text-xs uppercase tracking-widest mb-4">
              Our Story
            </p>
            <h2 className="font-bold text-[#1A1A1A] leading-tight mb-8" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
              Built on Trust,<br />Driven by Craft
            </h2>
            <div className="space-y-5 text-[#2D2D2D]/70 leading-relaxed">
              <p>
                I started Scrape to Shape because I kept seeing homeowners get burned — vague quotes, surprise invoices, crews that disappeared mid-project. That's not how I work.
              </p>
              <p>
                Every project I take on gets the same treatment: a detailed written quote before anything starts, a dedicated crew that shows up every day, and a final walkthrough we don't close until you're satisfied.
              </p>
              <p>
                My mission isn't just to renovate your home — it's to leave you understanding every decision we made, every material we used, and every dollar you spent. An informed homeowner is a happy homeowner.
              </p>
              <div className="pt-2">
                <p className="font-bold text-[#1A1A1A] text-sm">Parul Verma</p>
                <p className="text-[#2D2D2D]/50 text-xs tracking-wide">Founder & General Contractor</p>
              </div>
            </div>
            <div className="mt-10">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200"
              >
                View All Projects
                <span>→</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Founder photo */}
          <ScrollReveal delay={0.1}>
            <div className="relative rounded-2xl overflow-hidden h-[500px] lg:h-[620px]">
              <Image
                src="/founders.jpg"
                alt="Parul Verma and Ash Bakshi, founders of Scrape to Shape Renovations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

/* ─── Section 3: The Scrape to Shape Way ────────────────────────────────── */
function OurWaySection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] font-semibold text-xs uppercase tracking-widest mb-4">
              How We Work
            </p>
            <h2 className="font-bold text-white leading-tight" style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}>
              The Scrape to Shape Way
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {VALUES.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.08}>
              <div className="flex flex-col gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#C9A84C]">
                  {v.icon}
                </div>
                <h3 className="text-white font-bold text-lg">{v.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{v.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#b8963f] text-white font-semibold px-10 py-4 rounded-full transition-colors duration-200"
            >
              Work With Us
              <span>→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Home page ─────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <HighlightStats />
      <FullServiceSection />
      <StorySection />
      <OurWaySection />
      <div id="testimonials">
        <TestimonialCarousel />
      </div>
      <CTABanner />
    </>
  );
}
