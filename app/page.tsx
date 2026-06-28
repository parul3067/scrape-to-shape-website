import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import ProcessTimeline from "@/components/ProcessTimeline";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollDown from "@/components/ScrollDown";

export const metadata: Metadata = {
  title: "Scrape to Shape Renovations | GTA Home Renovation Experts",
  description:
    "The GTA's most trusted home renovation company. Bathrooms, kitchens, basements, roofing, flooring, and landscaping. Free consultations, fixed-price quotes, written warranty.",
};

/* ─── Featured projects ─────────────────────────────────────────────────────── */
const PROJECTS = [
  { label: "Kitchen — Etobicoke", category: "Kitchen", seed: "kitchen-etobicoke" },
  { label: "Bathroom — North York", category: "Bathroom", seed: "bath-northyork" },
  { label: "Basement Suite — Mississauga", category: "Basement", seed: "basement-missisauga" },
  { label: "Backyard — Brampton", category: "Landscaping", seed: "backyard-brampton" },
  { label: "Roof — Vaughan", category: "Roofing", seed: "roof-vaughan" },
  { label: "Hardwood Floors — Markham", category: "Flooring", seed: "floors-markham" },
];

function FeaturedProjects() {
  return (
    <section id="featured-projects" className="h-[100dvh] relative overflow-hidden py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="mb-5">
          <h2
            className="font-bold text-[#1C3A2F] leading-tight"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            Featured Projects
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <ScrollReveal delay={0.05} className="sm:col-span-2">
            <ProjectCard project={PROJECTS[0]} height="h-[22dvh]" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <ProjectCard project={PROJECTS[1]} height="h-[22dvh]" />
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <ProjectCard project={PROJECTS[2]} height="h-[18dvh]" />
          </ScrollReveal>
          <ScrollReveal delay={0.16} className="sm:col-span-2">
            <ProjectCard project={PROJECTS[3]} height="h-[18dvh]" />
          </ScrollReveal>

          <ScrollReveal delay={0.18} className="sm:col-span-2">
            <ProjectCard project={PROJECTS[4]} height="h-[15dvh]" />
          </ScrollReveal>
          <ScrollReveal delay={0.22}>
            <ProjectCard project={PROJECTS[5]} height="h-[15dvh]" />
          </ScrollReveal>
        </div>
      </div>
      <ScrollDown targetId="process-timeline" />
    </section>
  );
}

function ProjectCard({
  project,
  height,
}: {
  project: (typeof PROJECTS)[number];
  height: string;
}) {
  return (
    <div
      className={`relative ${height} rounded-2xl overflow-hidden group cursor-pointer`}
    >
      <Image
        src={`https://picsum.photos/seed/${project.seed}/800/600`}
        alt={project.label}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 p-5">
        <span className="block text-xs font-semibold uppercase tracking-widest text-white/60 mb-1">
          {project.category}
        </span>
        <span className="block text-white font-bold text-sm">{project.label}</span>
      </div>
    </div>
  );
}

/* ─── Home page ────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <div id="services">
        <ServiceCards />
      </div>
      <FeaturedProjects />
      <div id="process-timeline">
        <ProcessTimeline />
      </div>
      <TestimonialCarousel />
      <CTABanner />
    </>
  );
}
