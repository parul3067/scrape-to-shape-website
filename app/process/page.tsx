import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "Learn how Scrape to Shape Renovations works — from free consultation to written warranty. A transparent 6-step process with no surprises.",
};

const iconClass = "w-6 h-6";

const STEPS = [
  {
    num: "01",
    title: "Free Consultation",
    desc: "We visit your space, listen to your vision, and assess the scope — no cost, no pressure.",
    detail:
      "An estimator walks the space with you, discusses your goals and timeline, and takes measurements. No fee, no obligation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Quote & Proposal",
    desc: "A detailed written quote with materials, timeline, and milestones. No surprises.",
    detail:
      "You'll receive a fixed-price, itemized quote within a few business days — labour by trade, material specs, permits, and milestone payments. We review it with you line by line.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Design & Planning",
    desc: "Finalize selections, source materials, and obtain all required permits.",
    detail:
      "After contract signing, we lock in material selections, place orders, and handle all permit applications on your behalf. You get a detailed day-by-day schedule.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Build",
    desc: "Our crew executes with care — regular updates and clean job sites daily.",
    detail:
      "Crews arrive on time, set up dust barriers and protective coverings, and clean up at the end of each day. Anything unexpected behind walls is documented and approved in writing before we proceed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Final Walkthrough",
    desc: "We walk through every detail together before we call it done.",
    detail:
      "We review every finish and fixture against the original scope. Anything that doesn't meet your expectations goes on a punch list — addressed before the final invoice.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Warranty & Follow-up",
    desc: "We stand behind our work with a written warranty and post-project follow-up.",
    detail:
      "Every project comes with a written workmanship warranty. We follow up after completion to address any settling or touch-up items — because many of our best clients become referrals.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function ProcessPage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <section className="bg-[#1A1A1A] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-3">
            How We Work
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our 6-Step Process
          </h1>
        </div>
      </section>

      {/* Steps */}
      <div className="bg-[#F7F5F0] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {STEPS.map((step) => (
            <ScrollReveal key={step.num} delay={0.05}>
              <div className="group relative bg-white rounded-2xl p-7 h-full border border-[#1A1A1A]/5 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                {/* Faint background step number */}
                <span
                  aria-hidden="true"
                  className="absolute -top-2 -right-2 font-bold text-[#1A1A1A]/[0.04] leading-none select-none pointer-events-none"
                  style={{ fontSize: "7rem" }}
                >
                  {step.num}
                </span>

                <div className="relative flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#1A1A1A] flex items-center justify-center text-[#C9A84C]">
                      {step.icon}
                    </div>
                    <span className="text-[#C9A84C] font-bold text-xs uppercase tracking-widest">
                      Step {step.num}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-[#1A1A1A]">
                    {step.title}
                  </h2>

                  <p className="text-[#2D2D2D]/70 leading-relaxed text-sm">
                    {step.detail}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* FAQ teaser — commented out
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-4">
              Still Have Questions?
            </h2>
            <p className="text-[#2D2D2D]/60 mb-8">
              Our FAQ page covers common questions about pricing, timelines,
              what to expect during your renovation, and more.
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center border-2 border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] font-semibold px-8 py-4 rounded-full transition-all duration-200"
            >
              Read the FAQ →
            </Link>
          </ScrollReveal>
        </div>
      </section>
      */}

      <CTABanner
        headline="Ready to Get Started?"
        sub="Book your free consultation today and we'll be on-site within 48 hours."
      />
    </div>
  );
}
