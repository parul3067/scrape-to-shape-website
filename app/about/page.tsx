import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";
import StatsCounter from "@/components/StatsCounter";

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
    name: "Parul Verma",
    role: "Founder & General Contractor",
    initials: "PV",
    bio: "Parul has 10+ years of hands-on renovation experience across the GTA. He founded Scrape to Shape with a simple belief: homeowners deserve a contractor who shows up on time, does what they say, and charges what they quote.",
  },
  {
    name: "Ash Bakshi",
    role: "Project Designer",
    initials: "AB",
    bio: "Ash brings each renovation to life with a keen eye for space, material, and detail. She works closely with homeowners to translate their vision into designs that are both beautiful and buildable.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <section className="bg-[#1A1A1A] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-3">
            Who We Are
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About Scrape to Shape
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A renovation company built on craft, honesty, and results —
            not promises.
          </p>
        </div>
      </section>

      {/* Company story */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Story visual */}
          <ScrollReveal className="h-full">
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-3xl p-8 flex flex-col gap-6 h-full">
              <div className="text-[#C9A84C] font-bold text-5xl leading-none">&ldquo;</div>
              <p className="text-white/90 text-base leading-relaxed italic">
                I&apos;ve seen too many homeowners get burned by contractors who
                under-quoted, over-charged, and disappeared when things got
                hard. I started Scrape to Shape to be the company I&apos;d want
                to hire if it was my own home.
              </p>
              <div className="mt-auto">
                <p className="text-[#C9A84C] font-bold">Parul Verma</p>
                <p className="text-white/50 text-sm">
                  Founder, Scrape to Shape Renovations
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Story text */}
          <ScrollReveal delay={0.1}>
            <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-2">
              Our Story
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-4">
              Built from the Ground Up
            </h2>
            <div className="space-y-3 text-[#2D2D2D]/70 text-sm leading-relaxed">
              <p>
                After a decade of hands-on renovation work, Parul noticed
                the same pattern: homeowners finished projects without
                understanding what was done, why certain materials were chosen,
                or what to watch for down the road. Contractors worked
                <em> around</em> people instead of <em>with</em> them.
              </p>
              <p>
                Scrape to Shape was built to be different. Every project comes
                with real conversations — about your home&apos;s structure,
                the trade-offs in materials, and the things only a trained eye
                would catch. We don&apos;t just renovate. We leave you knowing
                your home better than before we arrived.
              </p>
            </div>
            <StatsCounter />
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
              Our Core Values
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUES.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.07}>
                <div className="bg-[#F7F5F0] rounded-2xl p-7 h-full">
                  <span className="text-3xl block mb-4">{value.icon}</span>
                  <h3 className="font-bold text-[#1A1A1A] text-lg mb-2">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
              The People Behind the Work
            </h2>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center items-stretch gap-8">
            {TEAM.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.07} className="h-full">
                <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm w-64 min-h-[300px]">
                  {/* Avatar placeholder */}
                  <div className="w-20 h-20 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white font-bold text-2xl mb-4">
                    {member.initials}
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] text-lg">
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

      <CTABanner
        headline="Work With a Crew You Can Trust"
        sub="Schedule your free on-site consultation today."
      />
    </div>
  );
}
