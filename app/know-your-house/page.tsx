import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Know Your House",
  description:
    "Practical renovation and home ownership guides from Scrape to Shape Renovations — helping GTA homeowners make smarter decisions.",
};

const ARTICLES = [
  {
    slug: "how-to-read-a-renovation-quote",
    category: "Contracts & Budgeting",
    title: "How to Read a Renovation Quote (And Spot Red Flags)",
    excerpt:
      "Not all renovation quotes are created equal. Learn what should always be included in a written quote, how to compare apples to apples across contractors, and the warning signs that signal a contractor might not deliver.",
    readTime: "6 min read",
    icon: "📋",
    color: "bg-green-50",
  },
  {
    slug: "permit-basics-ontario",
    category: "Permits & Regulations",
    title: "Permit Basics for Ontario Homeowners: What Needs One and Why",
    excerpt:
      "Many renovations in Ontario require a building permit — and skipping one can cost you dearly at resale. We break down which projects typically need permits in the GTA, how the process works, and why pulling permits protects you.",
    readTime: "8 min read",
    icon: "📜",
    color: "bg-blue-50",
  },
  {
    slug: "basement-waterproofing-guide",
    category: "Basements",
    title: "Interior vs. Exterior Waterproofing: Which Does Your Basement Need?",
    excerpt:
      "Wet basement? You have options — but they're not all equal in every situation. This guide explains the difference between interior drainage systems, exterior waterproofing membranes, and crack injection, and when each makes sense.",
    readTime: "7 min read",
    icon: "💧",
    color: "bg-indigo-50",
  },
  {
    slug: "choosing-kitchen-countertop",
    category: "Kitchens",
    title: "Quartz vs. Granite vs. Butcher Block: Choosing the Right Countertop",
    excerpt:
      "The countertop you choose affects the look, maintenance, and resale value of your kitchen for years. We walk through the real pros and cons of the three most popular options for GTA homeowners — with honest maintenance truths included.",
    readTime: "5 min read",
    icon: "🍳",
    color: "bg-orange-50",
  },
  {
    slug: "flooring-comparison-guide",
    category: "Flooring",
    title: "Hardwood vs. LVP vs. Laminate: The Honest Comparison GTA Homeowners Need",
    excerpt:
      "Each flooring type has fans and critics — usually because people are comparing them in the wrong context. This guide covers durability, water resistance, cost, installation, and resale value so you can choose the right product for each room.",
    readTime: "9 min read",
    icon: "🪵",
    color: "bg-amber-50",
  },
];

const CATEGORIES = [
  "Contracts & Budgeting",
  "Permits & Regulations",
  "Basements",
  "Kitchens",
  "Flooring",
];

export default function KnowYourHousePage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <section className="bg-[#1C3A2F] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-3">
            Homeowner Education
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Know Your House
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Practical guides to help GTA homeowners understand their homes,
            ask better questions, and make smarter renovation decisions.
          </p>
        </div>
      </section>

      <div className="bg-[#F7F5F0] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
                  <h2 className="font-bold text-[#1C3A2F] text-base mb-4">
                    Topics
                  </h2>
                  <ul className="space-y-2">
                    {CATEGORIES.map((cat) => (
                      <li key={cat}>
                        <a
                          href="#"
                          className="block text-sm text-[#2D2D2D]/60 hover:text-[#C9A84C] transition-colors duration-200 py-1"
                        >
                          {cat}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-[#1C3A2F]/10">
                    <p className="text-sm text-[#2D2D2D]/60 mb-3">
                      Have a question not covered here?
                    </p>
                    <Link
                      href="/contact"
                      className="block text-center bg-[#1C3A2F] hover:bg-[#2a5243] text-white text-sm font-semibold py-3 px-4 rounded-full transition-colors duration-200"
                    >
                      Ask Us Directly
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </aside>

            {/* Article list */}
            <div className="lg:col-span-3 flex flex-col gap-8">
              {ARTICLES.map((article, i) => (
                <ScrollReveal key={article.slug} delay={i * 0.08}>
                  <article
                    className={`${article.color} rounded-2xl p-8 hover:shadow-md transition-shadow duration-300`}
                  >
                    <div className="flex items-start gap-5">
                      <div className="text-4xl shrink-0">{article.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">
                            {article.category}
                          </span>
                          <span className="text-xs text-[#2D2D2D]/40">
                            {article.readTime}
                          </span>
                        </div>

                        <h2 className="text-xl font-bold text-[#1C3A2F] mb-3 leading-snug">
                          {article.title}
                        </h2>

                        <p className="text-[#2D2D2D]/60 text-sm leading-relaxed mb-5">
                          {article.excerpt}
                        </p>

                        {/* Placeholder link — full article pages to be added */}
                        <span className="inline-flex items-center gap-1 text-[#1C3A2F] hover:text-[#C9A84C] font-semibold text-sm transition-colors duration-200 cursor-pointer">
                          Read article
                          <span>→</span>
                        </span>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}

              {/* More coming soon */}
              <ScrollReveal>
                <div className="bg-white border-2 border-dashed border-[#1C3A2F]/20 rounded-2xl p-8 text-center">
                  <span className="text-3xl block mb-3">✍️</span>
                  <h3 className="font-bold text-[#1C3A2F] text-lg mb-2">
                    More Articles Coming Soon
                  </h3>
                  <p className="text-[#2D2D2D]/50 text-sm">
                    We add new guides regularly. Topics planned: roof
                    ventilation, HVAC considerations during renos, choosing a
                    tile installer, and more.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
