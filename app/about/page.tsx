import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the story behind Scrape to Shape Renovations — a GTA-based home renovation company built on craft, honesty, and results.",
};

const VALUES = [
  {
    icon: "🤝",
    title: "Honesty",
    desc: "We tell you what the project actually costs and how long it will actually take — then we hold ourselves to those commitments.",
  },
  {
    icon: "🏆",
    title: "Craftsmanship",
    desc: "We take pride in the details most homeowners never see — clean lines behind baseboards, properly waterproofed niches, perfectly level tile.",
  },
  {
    icon: "📞",
    title: "Communication",
    desc: "You'll never wonder what's happening on your job site. We proactively update you, answer calls, and flag issues early.",
  },
  {
    icon: "✅",
    title: "Accountability",
    desc: "If something isn't right, we fix it — full stop. Our written warranty backs that promise with real terms.",
  },
  {
    icon: "📋",
    title: "Transparency",
    desc: "Itemised quotes, fixed prices, documented surprises with written approval before we proceed. No ambiguity, ever.",
  },
  {
    icon: "🌿",
    title: "Respect",
    desc: "For your home, your family, your time, and your investment. We treat every job site like we'd want our own home treated.",
  },
];

const TEAM = [
  {
    name: "Mike Andrade",
    role: "Founder & General Contractor",
    initials: "MA",
    bio: "Mike has 18 years of hands-on renovation experience across the GTA. He founded Scrape to Shape with a simple belief: homeowners deserve a contractor who shows up on time, does what they say, and charges what they quote.",
  },
  {
    name: "Lisa Osei",
    role: "Project Manager",
    initials: "LO",
    bio: "Lisa coordinates scheduling, permits, and client communication across all active projects. She keeps every job on track and ensures nothing falls through the cracks.",
  },
  {
    name: "Raj Patel",
    role: "Lead Tile & Flooring Installer",
    initials: "RP",
    bio: "Raj has 14 years of precision tile and flooring installation experience. His attention to detail shows in every grout line.",
  },
  {
    name: "Carlos Mendes",
    role: "Lead Carpenter & Finisher",
    initials: "CM",
    bio: "Carlos handles cabinetry, trim, wainscoting, and finish carpentry. His work transforms raw spaces into polished, magazine-worthy rooms.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <section className="bg-[#1C3A2F] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-3">
            Who We Are
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About Scrape to Shape
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A GTA renovation company built on craft, honesty, and results —
            not promises.
          </p>
        </div>
      </section>

      {/* Company story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Story visual */}
          <ScrollReveal>
            <div className="bg-gradient-to-br from-[#1C3A2F] to-[#2a5243] rounded-3xl p-10 flex flex-col gap-8">
              <div className="text-[#C9A84C] font-bold text-5xl leading-none">&ldquo;</div>
              <p className="text-white/90 text-lg leading-relaxed italic">
                I&apos;ve seen too many homeowners get burned by contractors who
                under-quoted, over-charged, and disappeared when things got
                hard. I started Scrape to Shape to be the company I&apos;d want
                to hire if it was my own home.
              </p>
              <div>
                <p className="text-[#C9A84C] font-bold">Mike Andrade</p>
                <p className="text-white/50 text-sm">
                  Founder, Scrape to Shape Renovations
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Story text */}
          <ScrollReveal delay={0.1}>
            <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3A2F] mb-6">
              Built from the Ground Up
            </h2>
            <div className="space-y-4 text-[#2D2D2D]/70 leading-relaxed">
              <p>
                Scrape to Shape Renovations was founded in the Greater Toronto
                Area with one guiding principle: do the job right, every time.
                Our founder Mike Andrade spent nearly two decades working in
                residential renovation before going out on his own — not because
                he wanted to grow a business, but because he wanted to build
                something he was proud of.
              </p>
              <p>
                The name comes from the construction term for starting from
                scratch — scraping back to the bare bones and building something
                better. That&apos;s what we do, literally and figuratively, on
                every project.
              </p>
              <p>
                We serve the entire GTA — from Toronto proper to Mississauga,
                Brampton, Etobicoke, Scarborough, North York, Vaughan, Richmond
                Hill, Markham, and Oakville. Our crew is experienced in all
                residential renovation trades, and we hold ourselves to the same
                standard on a powder room as on a full-home overhaul.
              </p>
              <p>
                We aren&apos;t the cheapest option in the GTA. We are the most
                dependable.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { num: "18+", label: "Years experience" },
                { num: "200+", label: "Projects completed" },
                { num: "7", label: "Services offered" },
                { num: "10+", label: "GTA cities served" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-[#1C3A2F]">
                    {stat.num}
                  </div>
                  <div className="text-xs text-[#2D2D2D]/50 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-3">
              What Drives Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3A2F]">
              Our Core Values
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUES.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.07}>
                <div className="bg-[#F7F5F0] rounded-2xl p-7 h-full">
                  <span className="text-3xl block mb-4">{value.icon}</span>
                  <h3 className="font-bold text-[#1C3A2F] text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[#2D2D2D]/60 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-3">
              The Crew
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3A2F]">
              The People Behind the Work
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.07}>
                <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
                  {/* Avatar placeholder */}
                  <div className="w-20 h-20 rounded-full bg-[#1C3A2F] flex items-center justify-center text-white font-bold text-2xl mb-4">
                    {member.initials}
                  </div>
                  <h3 className="font-bold text-[#1C3A2F] text-lg">
                    {member.name}
                  </h3>
                  <p className="text-[#C9A84C] text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-[#2D2D2D]/60 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C3A2F] mb-4">
              Proudly Serving the GTA
            </h2>
            <p className="text-[#2D2D2D]/60 mb-8">
              We serve homeowners and investors across the Greater Toronto Area,
              including:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Toronto",
                "Mississauga",
                "Brampton",
                "Etobicoke",
                "Scarborough",
                "North York",
                "Vaughan",
                "Richmond Hill",
                "Markham",
                "Oakville",
              ].map((city) => (
                <span
                  key={city}
                  className="bg-[#1C3A2F]/5 text-[#1C3A2F] px-4 py-2 rounded-full text-sm font-medium border border-[#1C3A2F]/10"
                >
                  {city}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#1C3A2F] hover:bg-[#2a5243] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200"
              >
                Check If We Serve Your Area →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner
        headline="Work With a Crew You Can Trust"
        sub="Schedule your free on-site consultation today."
      />
    </div>
  );
}
