import ScrollReveal from "./ScrollReveal";

export const STEPS = [
  {
    num: 1,
    icon: "💬",
    title: "Free Consultation",
    desc: "We visit your space, listen to your vision, and assess the scope — no pressure, no cost.",
  },
  {
    num: 2,
    icon: "📋",
    title: "Quote & Proposal",
    desc: "A detailed written quote with materials, timeline, and milestones. No surprises.",
  },
  {
    num: 3,
    icon: "✏️",
    title: "Design & Planning",
    desc: "Finalise selections, source materials, and obtain all required permits.",
  },
  {
    num: 4,
    icon: "🔨",
    title: "Build",
    desc: "Our crew executes with care — you get regular updates and clean job sites daily.",
  },
  {
    num: 5,
    icon: "✅",
    title: "Final Walkthrough",
    desc: "We walk through every detail together before we call it done.",
  },
  {
    num: 6,
    icon: "🛡️",
    title: "Warranty & Follow-up",
    desc: "We stand behind our work with a written warranty and post-project follow-up.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1C3A2F]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Proven Process
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            From the first call to the final walkthrough, we keep you informed
            every step of the way.
          </p>
        </ScrollReveal>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:flex items-start gap-0 relative">
          {/* Connecting line */}
          <div
            className="absolute top-10 left-[calc(100%/12)] right-[calc(100%/12)] h-0.5 bg-[#C9A84C]/30"
            aria-hidden="true"
          />

          {STEPS.map((step, index) => (
            <ScrollReveal
              key={step.num}
              delay={index * 0.1}
              className="flex-1 flex flex-col items-center text-center px-3 relative"
            >
              {/* Number badge */}
              <div className="w-20 h-20 rounded-full bg-[#C9A84C] flex flex-col items-center justify-center mb-4 relative z-10 shadow-lg">
                <span className="text-2xl leading-none">{step.icon}</span>
                <span className="text-xs font-bold text-[#1C3A2F] mt-0.5">
                  Step {step.num}
                </span>
              </div>

              <h3 className="text-white font-bold text-base mb-2">
                {step.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {step.desc}
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden flex flex-col gap-0 relative">
          {/* Vertical line */}
          <div
            className="absolute left-9 top-10 bottom-10 w-0.5 bg-[#C9A84C]/30"
            aria-hidden="true"
          />

          {STEPS.map((step, index) => (
            <ScrollReveal
              key={step.num}
              delay={index * 0.1}
              className="flex gap-5 items-start pb-10 last:pb-0"
            >
              {/* Badge */}
              <div className="w-[72px] h-[72px] shrink-0 rounded-full bg-[#C9A84C] flex flex-col items-center justify-center relative z-10 shadow-lg">
                <span className="text-xl leading-none">{step.icon}</span>
                <span className="text-[10px] font-bold text-[#1C3A2F] mt-0.5">
                  Step {step.num}
                </span>
              </div>

              <div className="pt-3">
                <h3 className="text-white font-bold text-base mb-1.5">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
