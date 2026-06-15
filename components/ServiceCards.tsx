import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export const SERVICES = [
  {
    name: "Bathroom Renovation",
    icon: "🚿",
    color: "bg-blue-100",
    bullets: [
      "Full gut and rebuild",
      "Tile, vanity, fixtures",
      "Custom showers & soaker tubs",
    ],
  },
  {
    name: "Kitchen Renovation",
    icon: "🍳",
    color: "bg-orange-100",
    bullets: [
      "Cabinetry & countertops",
      "Open-concept conversions",
      "Full electrical & plumbing",
    ],
  },
  {
    name: "Basement Finishing",
    icon: "🏠",
    color: "bg-purple-100",
    bullets: [
      "Legal suites & rec rooms",
      "Egress windows & permits",
      "Full waterproofing options",
    ],
  },
  {
    name: "Full House Renovation",
    icon: "🔨",
    color: "bg-green-100",
    bullets: [
      "Complete interior overhauls",
      "Structural & cosmetic",
      "Managed end-to-end",
    ],
  },
  {
    name: "Landscaping & Sodding",
    icon: "🌿",
    color: "bg-emerald-100",
    bullets: [
      "Sod installation & grading",
      "Interlock & patios",
      "Drainage solutions",
    ],
  },
  {
    name: "Roofing",
    icon: "🏗️",
    color: "bg-red-100",
    bullets: [
      "Shingle replacement",
      "Flat roof systems",
      "Fascia, soffit & eavestroughs",
    ],
  },
  {
    name: "Flooring & Tiling",
    icon: "🪵",
    color: "bg-amber-100",
    bullets: [
      "Hardwood, LVP, laminate",
      "Porcelain & ceramic tile",
      "Wainscoting & feature walls",
    ],
  },
];

export default function ServiceCards() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3A2F] mb-4">
            Full-Service Home Renovations
          </h2>
          <p className="text-[#2D2D2D]/70 max-w-2xl mx-auto text-lg">
            From a single bathroom to a full-home overhaul, our crew handles
            every trade — on time, on budget, and built to last.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.name} delay={index * 0.07}>
              <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full border border-transparent hover:border-[#C9A84C]/20">
                {/* Icon placeholder */}
                <div
                  className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                  aria-hidden="true"
                >
                  {service.icon}
                </div>

                <h3 className="text-[#1C3A2F] font-bold text-lg mb-3 group-hover:text-[#C9A84C] transition-colors duration-200">
                  {service.name}
                </h3>

                <ul className="space-y-1.5 flex-1 mb-5">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-[#2D2D2D]/70"
                    >
                      <span className="text-[#C9A84C] mt-0.5 shrink-0">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/services"
                  className="mt-auto text-[#1C3A2F] hover:text-[#C9A84C] font-semibold text-sm flex items-center gap-1 group/link transition-colors duration-200"
                >
                  Learn More
                  <span className="group-hover/link:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
