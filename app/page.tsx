import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import ProcessTimeline from "@/components/ProcessTimeline";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scrape to Shape Renovations | GTA Home Renovation Experts",
  description:
    "The GTA's most trusted home renovation company. Bathrooms, kitchens, basements, roofing, flooring, and landscaping. Free consultations, fixed-price quotes, written warranty.",
};

/* ─── Trust signals ────────────────────────────────────────────────────────── */
function TrustSignals() {
  const signals = [
    { icon: "📞", title: "Free Consultation", desc: "No-cost, no-pressure site visit and assessment." },
    { icon: "📋", title: "Fixed-Price Quotes", desc: "No hourly surprises — you know the number before we start." },
    { icon: "🛡️", title: "Written Warranty", desc: "We stand behind every project with a workmanship warranty." },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#1C3A2F]/10">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {signals.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 0.08} className="flex flex-col items-center text-center gap-3">
            <span className="text-3xl">{s.icon}</span>
            <h3 className="font-bold text-[#1C3A2F] text-base">{s.title}</h3>
            <p className="text-[#2D2D2D]/60 text-sm leading-relaxed">{s.desc}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

/* ─── Featured projects (placeholder cards) ────────────────────────────────── */
function FeaturedProjects() {
  const projects = [
    { label: "Kitchen — Etobicoke", category: "Kitchen", color: "bg-orange-200" },
    { label: "Bathroom — North York", category: "Bathroom", color: "bg-blue-200" },
    { label: "Basement Suite — Mississauga", category: "Basement", color: "bg-purple-200" },
    { label: "Backyard — Brampton", category: "Landscaping", color: "bg-green-200" },
    { label: "Roof — Vaughan", category: "Roofing", color: "bg-red-200" },
    { label: "Hardwood Floors — Markham", category: "Flooring", color: "bg-amber-200" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3A2F] mb-4">
            Featured Projects
          </h2>
          <p className="text-[#2D2D2D]/70 max-w-xl mx-auto">
            A glimpse at recent renovations across the GTA.
          </p>
        </ScrollReveal>

        {/* TODO: replace with real photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {projects.map((project, i) => (
            <ScrollReveal key={project.label} delay={i * 0.07}>
              <div
                className={`${project.color} rounded-2xl h-56 flex flex-col justify-end p-5 relative overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="relative z-10 text-xs font-semibold uppercase tracking-wider text-white/70">
                  {project.category}
                </span>
                <span className="relative z-10 text-white font-bold text-base mt-0.5">
                  {project.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center bg-[#1C3A2F] hover:bg-[#2a5243] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
          >
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Process summary (abbreviated) ───────────────────────────────────────── */
function ProcessSummary() {
  const steps = ["Free Consultation", "Quote & Proposal", "Design & Planning", "Build", "Final Walkthrough", "Warranty"];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-10">
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-2">
            Simple &amp; Transparent
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C3A2F]">
            How We Work
          </h2>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-3">
          {steps.map((step, i) => (
            <ScrollReveal key={step} delay={i * 0.07}>
              <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-sm border border-[#1C3A2F]/10">
                <span className="w-6 h-6 rounded-full bg-[#C9A84C] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="text-[#1C3A2F] font-medium text-sm">{step}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-8">
          <Link
            href="/process"
            className="text-[#1C3A2F] hover:text-[#C9A84C] font-semibold text-sm flex items-center justify-center gap-1 transition-colors duration-200"
          >
            See the full process →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Home page ────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <ServiceCards />
      <FeaturedProjects />
      <ProcessSummary />
      <ProcessTimeline />
      <TestimonialCarousel />
      <CTABanner />
    </>
  );
}
