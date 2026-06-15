import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Scrape to Shape Renovations offers 7 complete home renovation services across the GTA: bathrooms, kitchens, basements, full-home renovations, landscaping, roofing, and flooring.",
};

const SERVICES = [
  {
    name: "Bathroom Renovation",
    icon: "🚿",
    tagline: "Your sanctuary, rebuilt.",
    description:
      "Your bathroom should be a retreat — not a source of stress. We handle everything from complete gut-and-rebuilds to targeted upgrades. Our team manages tile installation, plumbing rough-in and finish work, vanity and fixture selection, custom shower systems, soaker tub installs, and all waterproofing. We work with you to choose materials that balance aesthetics, longevity, and your budget.",
    bullets: [
      "Full gut and rebuild or targeted refresh",
      "Tile flooring and shower/tub surrounds",
      "Vanity, fixtures, and hardware supply and install",
      "Custom glass shower enclosures",
      "Soaker tubs and freestanding baths",
      "Heated floor systems",
      "Complete plumbing rough-in and finish",
      "Proper waterproofing and vapour barriers",
    ],
    timeline: "2–3 weeks typical",
    color: "from-blue-50 to-blue-100",
  },
  {
    name: "Kitchen Renovation",
    icon: "🍳",
    tagline: "The heart of your home, transformed.",
    description:
      "A kitchen renovation is one of the highest-ROI upgrades you can make. We handle cabinetry fabrication and installation, countertop templating and install, backsplash tile work, appliance integration, pot lighting and electrical upgrades, and full plumbing — all coordinated under one contract with one point of contact for you.",
    bullets: [
      "Custom and semi-custom cabinetry",
      "Quartz, granite, and butcher-block countertops",
      "Backsplash tile and grout work",
      "Open-concept wall removal (with structural assessment)",
      "Full electrical and plumbing upgrades",
      "Pot lighting, under-cabinet lighting",
      "Appliance cut-outs and hook-ups",
      "Island and pantry additions",
    ],
    timeline: "4–6 weeks typical",
    color: "from-orange-50 to-orange-100",
  },
  {
    name: "Basement Finishing",
    icon: "🏠",
    tagline: "Unlock the space beneath your feet.",
    description:
      "An unfinished basement is untapped equity. Whether you want a second suite to generate rental income, a rec room for the family, a home gym, or a home office — we design and build it to code. We handle egress windows, waterproofing, framing, insulation, drywall, flooring, and all permit applications.",
    bullets: [
      "Legal secondary suites (with permits)",
      "Rec rooms, home theatres, gyms, offices",
      "Egress window cut-out and installation",
      "Interior and exterior waterproofing options",
      "Spray foam and batt insulation",
      "Full framing, drywall, and taping",
      "Bathroom rough-in and finishing",
      "Permit application and inspection management",
    ],
    timeline: "6–10 weeks typical",
    color: "from-purple-50 to-purple-100",
  },
  {
    name: "Full House Renovation",
    icon: "🔨",
    tagline: "When one room isn't enough.",
    description:
      "Buying a fixer-upper or renovating a rental property? We manage full-home transformations from top to bottom — structural modifications, kitchen, bathrooms, flooring, trim work, painting, and everything in between. One contract, one crew, one project manager keeping you informed throughout.",
    bullets: [
      "Complete interior overhauls",
      "Structural modifications and load-bearing wall removal",
      "New floor plans and open-concept conversions",
      "Multi-bathroom and multi-kitchen projects",
      "Painting, trim, moulding, and wainscoting",
      "All flooring types throughout",
      "End-to-end project management",
      "Single point of contact, single contract",
    ],
    timeline: "8–20 weeks depending on scope",
    color: "from-green-50 to-green-100",
  },
  {
    name: "Landscaping & Sodding",
    icon: "🌿",
    tagline: "Curb appeal that turns heads.",
    description:
      "First impressions start outside. Our landscaping team handles sod installation, grading and drainage, interlock driveways and patios, retaining walls, garden bed preparation, and more. We work with Ontario's soil conditions and climate to ensure your outdoor investment lasts.",
    bullets: [
      "Sod supply and installation",
      "Grading and lot levelling",
      "Interlock driveways, walkways, and patios",
      "Retaining walls (natural stone and block)",
      "Drainage solutions and French drains",
      "Mulch beds and planting",
      "Fencing and privacy screens",
      "Spring and fall clean-up",
    ],
    timeline: "1–3 weeks depending on scope",
    color: "from-emerald-50 to-emerald-100",
  },
  {
    name: "Roofing",
    icon: "🏗️",
    tagline: "Protection starts at the top.",
    description:
      "Your roof is your home's first line of defence. We install, repair, and replace asphalt shingles, flat roof systems, and metal roofing. Our work includes proper ventilation, ice and water shield installation, flashing around chimneys and vents, and fascia, soffit, and eavestrough work.",
    bullets: [
      "Asphalt shingle replacement (all grades)",
      "Flat roof systems (TPO, modified bitumen)",
      "Ice and water shield membrane installation",
      "Proper attic ventilation",
      "Chimney and vent flashing",
      "Fascia and soffit replacement",
      "Eavestrough installation and guards",
      "Emergency repair service",
    ],
    timeline: "1–5 days for most roof replacements",
    color: "from-red-50 to-red-100",
  },
  {
    name: "Flooring & Tiling",
    icon: "🪵",
    tagline: "The foundation of every beautiful room.",
    description:
      "Floors tie a room together. We supply and install hardwood, engineered hardwood, luxury vinyl plank, laminate, porcelain, and ceramic tile. Our tile work extends to feature walls, wainscoting, backsplashes, and fireplace surrounds — anywhere you want a clean, durable, striking surface.",
    bullets: [
      "Solid and engineered hardwood (glue-down, nail-down, floating)",
      "Luxury vinyl plank (LVP) and laminate",
      "Porcelain and ceramic floor and wall tile",
      "Large-format tile (24×24 and up)",
      "Heated floor system installation",
      "Wainscoting and feature walls",
      "Shower tile, tub surrounds, backsplashes",
      "Subfloor levelling and preparation",
    ],
    timeline: "Varies by area and material",
    color: "from-amber-50 to-amber-100",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <section className="bg-[#1C3A2F] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Seven complete renovation services, all under one roof. One crew,
            one contract, one company you can trust across the GTA.
          </p>
        </div>
      </section>

      {/* Services */}
      <div className="bg-[#F7F5F0]">
        {SERVICES.map((service, index) => (
          <section
            key={service.name}
            id={service.name.toLowerCase().replace(/\s+/g, "-")}
            className={`py-20 px-4 sm:px-6 lg:px-8 ${
              index % 2 === 0 ? "bg-[#F7F5F0]" : "bg-white"
            }`}
          >
            <div className="max-w-6xl mx-auto">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual / icon */}
                <ScrollReveal delay={0}>
                  <div
                    className={`bg-gradient-to-br ${service.color} rounded-3xl h-64 lg:h-80 flex flex-col items-center justify-center gap-4`}
                  >
                    <span className="text-7xl">{service.icon}</span>
                    <span className="text-[#1C3A2F] font-semibold text-lg">
                      {service.name}
                    </span>
                  </div>
                </ScrollReveal>

                {/* Content */}
                <ScrollReveal delay={0.1}>
                  <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-2">
                    Service {index + 1} of {SERVICES.length}
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3A2F] mb-2">
                    {service.name}
                  </h2>
                  <p className="text-lg text-[#C9A84C] italic mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-[#2D2D2D]/70 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-sm text-[#2D2D2D]/80"
                      >
                        <span className="text-[#C9A84C] mt-0.5 shrink-0">✓</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-3 text-sm text-[#2D2D2D]/60 mb-6">
                    <span className="text-[#C9A84C]">⏱</span>
                    <span>
                      <strong className="text-[#2D2D2D]">Typical timeline:</strong>{" "}
                      {service.timeline}
                    </span>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-[#1C3A2F] hover:bg-[#2a5243] text-white font-semibold px-6 py-3 rounded-full transition-all duration-200"
                  >
                    Get a Quote for {service.name} →
                  </Link>
                </ScrollReveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CTABanner
        headline="Not Sure Which Service You Need?"
        sub="Call us or send a message — we'll help you figure out the right scope and budget for your project."
      />
    </div>
  );
}
