import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about working with Scrape to Shape Renovations — pricing, timelines, permits, what to expect during a renovation, and our warranty.",
};

const FAQ_DATA = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I get a quote?",
        a: "Call us at 226-899-1190 or fill out the form on our Contact page. We'll schedule a free on-site consultation within 48 hours. There's no charge for the visit and no obligation to proceed.",
      },
      {
        q: "How long does a renovation typically take?",
        a: "It depends on scope — a bathroom takes 2–3 weeks, a full kitchen 4–6 weeks, a basement 6–10 weeks. We'll give you a firm timeline in your quote, broken down by phase, so you know what to expect before we start.",
      },
      {
        q: "Do you serve my neighbourhood?",
        a: "We serve all of the GTA including Toronto, Mississauga, Brampton, Etobicoke, Scarborough, North York, Vaughan, Richmond Hill, Markham, and Oakville. Not sure if your area is covered? Call us at 226-899-1190 and we'll confirm.",
      },
    ],
  },
  {
    category: "Pricing & Contracts",
    questions: [
      {
        q: "How is your pricing structured?",
        a: "We provide fixed-price quotes so you know exactly what you're paying. No hourly surprises. The price in your signed contract is the price you pay, unless you add scope or we uncover genuinely hidden damage (which we'll always document, photograph, and get written approval before addressing).",
      },
      {
        q: "Do I need to pay a deposit?",
        a: "Yes — a deposit is required to secure your start date and order materials. The deposit amount is specified in your contract and is proportional to the project size. The balance is paid in milestones tied to project phases, never upfront in full.",
      },
      {
        q: "What's included in the written quote?",
        a: "Labour, materials, permit fees, and cleanup. We itemize everything so you can see exactly where your money goes. Our quotes break down costs by trade and phase so you can compare fairly with other contractors.",
      },
    ],
  },
  {
    category: "During the Renovation",
    questions: [
      {
        q: "Will your crew be on-site every day?",
        a: "Yes, for active phases of the project. We'll let you know in advance about any scheduled gaps (e.g., waiting for an inspection before proceeding, material delivery windows). You'll always know what to expect the following day.",
      },
      {
        q: "How do you handle unexpected issues?",
        a: "We document and photograph any surprises (e.g., water damage behind walls, out-of-plumb framing, knob-and-tube wiring), discuss your options with you clearly, and get written approval before proceeding. No verbal agreements, no surprise invoices.",
      },
      {
        q: "How do you keep the work area clean?",
        a: "We lay protective coverings over floors and furniture, contain dust where possible using barriers and negative air pressure where required, and clean up at the end of each work day. We treat your home with the same respect we'd expect for our own.",
      },
    ],
  },
  {
    category: "After the Renovation",
    questions: [
      {
        q: "What warranty do you offer?",
        a: "All our projects come with a written warranty covering workmanship. Duration varies by project type — ask us for details during your consultation. Material warranties are passed through from manufacturers in addition to our workmanship coverage.",
      },
      {
        q: "What if I'm not happy with something?",
        a: "Contact us and we'll come back to make it right. Your satisfaction is the only definition of done we accept. We do a formal final walkthrough before closing out any project, and we follow up after completion to make sure you're happy with how everything has settled.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <section className="bg-[#1C3A2F] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-3">
            Common Questions
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Answers to what GTA homeowners ask us most often — about pricing,
            timelines, the renovation process, and our warranty.
          </p>
        </div>
      </section>

      {/* FAQ content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <FaqAccordion data={FAQ_DATA} />
          </ScrollReveal>
        </div>
      </section>

      {/* Still have a question? */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C3A2F] mb-4">
              Don&apos;t See Your Question?
            </h2>
            <p className="text-[#2D2D2D]/60 mb-8">
              Call us directly or send us a message — we&apos;re happy to
              answer any renovation question, even if you&apos;re not ready to
              hire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2268991190"
                className="inline-flex items-center justify-center bg-[#1C3A2F] hover:bg-[#2a5243] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200"
              >
                Call 226-899-1190
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-[#1C3A2F] hover:bg-[#1C3A2F] hover:text-white text-[#1C3A2F] font-semibold px-8 py-4 rounded-full transition-all duration-200"
              >
                Send a Message
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner
        headline="Ready to Start Your Project?"
        sub="Book a free consultation and get a fixed-price quote within days."
      />
    </div>
  );
}
