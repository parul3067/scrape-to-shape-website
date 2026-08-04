import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "Learn how Scrape to Shape Renovations works — from free consultation to written warranty. A transparent 6-step process with no surprises.",
};

const STEPS = [
  {
    num: 1,
    icon: "💬",
    title: "Free Consultation",
    desc: "We visit your space, listen to your vision, and assess the scope — no pressure, no cost.",
    detail:
      "We start every project with an in-person, no-obligation site visit. One of our experienced estimators will walk through the space with you, ask questions about your goals, lifestyle, and timeline, and take measurements. We want to understand what you actually want — not just what you think you can afford — before we talk numbers. There is no charge for this visit, and there is absolutely no pressure to proceed.",
    color: "bg-blue-50",
    accent: "border-blue-300",
  },
  {
    num: 2,
    icon: "📋",
    title: "Quote & Proposal",
    desc: "A detailed written quote with materials, timeline, and milestones. No surprises.",
    detail:
      "Within a few business days of your consultation, we'll send you a written, itemized quote. You'll see labour broken out by trade, material allowances with specific product specs, permit fees, and a project timeline with payment milestones. We use fixed-price contracts — not time-and-materials — so the number in your quote is the number you pay, barring scope changes you initiate or discoveries of hidden damage that couldn't be anticipated. We review the quote with you line-by-line so you understand every dollar.",
    color: "bg-green-50",
    accent: "border-green-300",
  },
  {
    num: 3,
    icon: "✏️",
    title: "Design & Planning",
    desc: "Finalise selections, source materials, and obtain all required permits.",
    detail:
      "Once you've signed the contract and paid your deposit, we move into planning. This involves finalising your material selections (tile, fixtures, cabinetry, flooring — whatever applies to your project), placing orders to ensure materials arrive on time, and applying for any required permits. We handle all permit applications on your behalf, track their status, and schedule required inspections. You'll receive a detailed schedule so you know exactly when crews arrive and what phase of work is happening each day.",
    color: "bg-purple-50",
    accent: "border-purple-300",
  },
  {
    num: 4,
    icon: "🔨",
    title: "Build",
    desc: "Our crew executes with care — you get regular updates and clean job sites daily.",
    detail:
      "When the build phase starts, our crews show up on time and get to work. We set up protective coverings over floors and furniture, install dust barriers where necessary, and establish a clean material staging area. You'll receive regular progress updates — photos, daily texts, or however you prefer to stay informed. Our project manager is reachable throughout the build. We clean up at the end of every work day, and we keep you informed of any schedule adjustments ahead of time. If we encounter anything unexpected behind walls or under floors, we document it, photograph it, discuss your options, and get written approval before proceeding — no surprise invoices.",
    color: "bg-orange-50",
    accent: "border-orange-300",
  },
  {
    num: 5,
    icon: "✅",
    title: "Final Walkthrough",
    desc: "We walk through every detail together before we call it done.",
    detail:
      "Before we consider a project complete, we schedule a final walkthrough with you. We go through every finish, every fixture, every transition, and every detail on the original scope list. Anything that doesn't meet your expectations gets added to a punch list, and we come back to address each item before issuing your final invoice. Your satisfaction isn't a nice-to-have — it's the only definition of done we accept.",
    color: "bg-teal-50",
    accent: "border-teal-300",
  },
  {
    num: 6,
    icon: "🛡️",
    title: "Warranty & Follow-up",
    desc: "We stand behind our work with a written warranty and post-project follow-up.",
    detail:
      "Every Scrape to Shape project comes with a written workmanship warranty. The duration varies by project type — ask us for specifics on your scope. Beyond the warranty, we do a post-project follow-up call to see how you're enjoying the space and address any minor settling or touch-up items. We want to be your renovation company for life — not just for this project. Many of our best clients are repeat customers and referrals, and that's the highest compliment we can receive.",
    color: "bg-yellow-50",
    accent: "border-yellow-300",
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
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          {STEPS.map((step) => (
            <ScrollReveal key={step.num} delay={0.05}>
              <div
                className={`${step.color} border-l-4 ${step.accent} rounded-2xl p-8 sm:p-10`}
              >
                <div className="flex items-start gap-6">
                  {/* Badge */}
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#1A1A1A] flex flex-col items-center justify-center text-white">
                    <span className="text-2xl leading-none">{step.icon}</span>
                    <span className="text-[10px] font-bold mt-0.5 opacity-70">
                      Step {step.num}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                      {step.title}
                    </h2>
                    <p className="text-[#C9A84C] font-medium italic text-base mb-4">
                      &ldquo;{step.desc}&rdquo;
                    </p>
                    <p className="text-[#2D2D2D]/70 leading-relaxed text-base">
                      {step.detail}
                    </p>
                  </div>
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
