import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import ScrollDown from "./ScrollDown";

export const SERVICES = [
  {
    name: "Bathroom Renovation",
    href: "/services#bathroom-renovation",
    bullets: [
      "Full gut and rebuild",
      "Tile, vanity, fixtures",
      "Custom showers & soaker tubs",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h18M3 12V8.5A3.5 3.5 0 016.5 5H8M3 12v3.5A2.5 2.5 0 005.5 18h13a2.5 2.5 0 002.5-2.5V12M7 18v2M17 18v2" />
      </svg>
    ),
  },
  {
    name: "Kitchen Renovation",
    href: "/services#kitchen-renovation",
    bullets: [
      "Cabinetry & countertops",
      "Open-concept conversions",
      "Full electrical & plumbing",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth={1.5} />
        <circle cx="9" cy="9" r="2" strokeWidth={1.5} />
        <circle cx="15" cy="9" r="2" strokeWidth={1.5} />
        <path d="M8 16h8" strokeWidth={1.5} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Legal Basements",
    href: "/services#basement-finishing",
    bullets: [
      "Legal suites & rec rooms",
      "Egress windows & permits",
      "Full waterproofing options",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1V10" />
        <path d="M5 17h14" strokeWidth={1.5} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Electrical",
    href: "/services",
    bullets: [
      "ESA Certification",
      "Panel upgrades & rewiring",
      "EV charger installation",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 3L4 14h8l-1 7 9-11h-8l1-7z" />
      </svg>
    ),
  },
  {
    name: "Plumbing",
    href: "/services",
    bullets: [
      "Plumbing rough-in",
      "Fixture installation",
      "Drain & sewer services",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c0 0-7 7.5-7 12a7 7 0 0014 0c0-4.5-7-12-7-12z" />
      </svg>
    ),
  },
  {
    name: "Landscaping & Sodding",
    href: "/services#landscaping-&-sodding",
    bullets: [
      "Sod installation & grading",
      "Interlock & patios",
      "Drainage solutions",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C8 8 6 11 6 14a6 6 0 0012 0c0-3-2-6-6-12z" />
        <path d="M12 20v2" strokeWidth={1.5} strokeLinecap="round" />
        <path d="M9 17l-2 2M15 17l2 2" strokeWidth={1.5} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Roofing",
    href: "/services#roofing",
    bullets: [
      "Shingle replacement",
      "Flat roof systems",
      "Fascia, soffit & eavestroughs",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10.5L12 3l9 7.5M6 8.5V20a1 1 0 001 1h10a1 1 0 001-1V8.5" />
      </svg>
    ),
  },
  {
    name: "Flooring & Tiling",
    href: "/services#flooring-&-tiling",
    bullets: [
      "Hardwood, LVP, laminate",
      "Porcelain & ceramic tile",
      "Wainscoting & feature walls",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" aria-hidden="true">
        <rect x="3" y="3" width="8" height="8" rx="1" strokeWidth={1.5} />
        <rect x="13" y="3" width="8" height="8" rx="1" strokeWidth={1.5} />
        <rect x="3" y="13" width="8" height="8" rx="1" strokeWidth={1.5} />
        <rect x="13" y="13" width="8" height="8" rx="1" strokeWidth={1.5} />
      </svg>
    ),
  },
];

export default function ServiceCards() {
  return (
    <section className="h-[90dvh] relative flex flex-col overflow-hidden py-8 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto w-full flex flex-col">
        <ScrollReveal className="mb-8 shrink-0">
          <h2
            className="font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
          >
            Full-Service Home Renovations
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 h-[58dvh]" style={{ gridTemplateRows: "repeat(2, 1fr)" }}>
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.name} delay={index * 0.07} className="min-h-0 h-full">
              <Link
                href={service.href}
                aria-label={`Learn more about ${service.name}`}
                className="group flex flex-col gap-4 h-full rounded-2xl border border-white/10 bg-white/[0.06] hover:bg-white/[0.11] p-7 transition-all duration-300 ease-out cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[#C9A84C]">{service.icon}</span>
                  <span className="text-[#C9A84C]/40 font-mono text-xs font-semibold tracking-widest">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-white font-bold text-lg leading-snug group-hover:text-[#C9A84C] transition-colors duration-200">
                    {service.name}
                  </h3>
                  <ul className="space-y-1.5">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-white/50">
                        <svg viewBox="0 0 6 6" className="w-1.5 h-1.5 shrink-0 mt-[5px] text-[#C9A84C]/50" fill="currentColor" aria-hidden="true">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-6 shrink-0">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/50 hover:text-[#C9A84C] font-semibold text-sm transition-colors duration-200 group"
          >
            See all services in detail
            <span className="group-hover:translate-x-1 transition-transform duration-200">&#8594;</span>
          </Link>
        </ScrollReveal>
      </div>
      <ScrollDown targetId="featured-projects" light />
    </section>
  );
}
