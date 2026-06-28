import Link from "next/link";

interface CTABannerProps {
  headline?: string;
  sub?: string;
}

export default function CTABanner({
  headline = "Ready to Transform Your Space?",
  sub = "Get a free, no-obligation quote from the GTA's most trusted renovation crew.",
}: CTABannerProps) {
  return (
    <section id="cta" className="h-[100dvh] relative overflow-hidden bg-[#1C3A2F] flex items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#C9A84C] font-semibold text-xs uppercase tracking-[0.25em] mb-4">
          Let&apos;s Build Something
        </p>
        <h2
          className="font-bold text-white leading-tight mb-5"
          style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
        >
          {headline}
        </h2>
        <p className="text-white/50 text-lg mb-10 max-w-lg leading-relaxed">{sub}</p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#b8963f] active:translate-y-px text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors duration-200 shadow-lg"
          >
            Get a Free Quote
          </Link>
          <a
            href="tel:2268991190"
            className="text-white/50 hover:text-[#C9A84C] text-sm font-medium transition-colors duration-200"
          >
            Or call us at{" "}
            <span className="text-[#C9A84C] font-semibold">226-899-1190</span>
          </a>
        </div>
      </div>
    </section>
  );
}
