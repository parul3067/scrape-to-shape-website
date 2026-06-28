import ScrollReveal from "./ScrollReveal";
import ScrollDown from "./ScrollDown";

export const STEPS = [
  {
    num: 1,
    title: "Free Consultation",
    desc: "We visit your space, listen to your vision, and assess the scope — no pressure, no cost.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    num: 2,
    title: "Quote & Proposal",
    desc: "A detailed written quote with materials, timeline, and milestones. No surprises.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6M9 16h4M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    num: 3,
    title: "Design & Planning",
    desc: "Finalise selections, source materials, and obtain all required permits.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    num: 4,
    title: "Build",
    desc: "Our crew executes with care — you get regular updates and clean job sites daily.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.654-4.654m5.292-5.292l1.09-1.09A2.5 2.5 0 1118.5 7.5l-1.09 1.09m-5.292 5.292l-1.09-1.09" />
      </svg>
    ),
  },
  {
    num: 5,
    title: "Final Walkthrough",
    desc: "We walk through every detail together before we call it done.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: 6,
    title: "Warranty & Follow-up",
    desc: "We stand behind our work with a written warranty and post-project follow-up.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75l2.25 2.25 4.5-4.5m-7.5-3A8.25 8.25 0 0112 3.75c2.477 0 4.714.995 6.34 2.607M3.75 12A8.25 8.25 0 0112 3.75c2.477 0 4.714.995 6.34 2.607M3.75 12c0 .996.177 1.953.502 2.84m15.996-2.84a8.213 8.213 0 01-.502 2.84M12 20.25a8.214 8.214 0 01-5.84-2.41m11.678 0A8.214 8.214 0 0112 20.25" />
      </svg>
    ),
  },
];

export default function ProcessTimeline() {
  return (
    <section className="h-[80dvh] relative flex flex-col overflow-hidden py-8 px-4 sm:px-6 lg:px-8 bg-[#1C3A2F]">
      <div className="max-w-7xl mx-auto w-full flex flex-col">
        <ScrollReveal className="mb-8 shrink-0">
          <h2
            className="font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
          >
            How We Work
          </h2>
        </ScrollReveal>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 gap-5 h-[52dvh]"
          style={{ gridTemplateRows: "repeat(2, 1fr)" }}
        >
          {STEPS.map((step, index) => (
            <ScrollReveal key={step.num} delay={index * 0.07} className="min-h-0 h-full">
              <div className="group flex flex-col gap-4 h-full rounded-2xl border border-white/10 bg-white/[0.06] hover:bg-white/[0.11] p-7 transition-all duration-300 ease-out">
                <div className="flex items-center justify-between">
                  <span className="text-[#C9A84C]">{step.icon}</span>
                  <span className="text-[#C9A84C]/40 font-mono text-xs font-semibold tracking-widest">
                    {String(step.num).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-white font-bold text-lg leading-snug group-hover:text-[#C9A84C] transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <ScrollDown targetId="testimonials" light />
    </section>
  );
}
