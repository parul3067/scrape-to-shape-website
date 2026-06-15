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
    <section className="bg-[#1C3A2F] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-3">
          Let&apos;s Build Something
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          {headline}
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">{sub}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#C9A84C] hover:bg-[#b8963f] text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center border-2 border-white/40 hover:border-[#C9A84C] hover:text-[#C9A84C] text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200"
          >
            View Our Work
          </Link>
        </div>

        <p className="mt-8 text-white/40 text-sm">
          Or call us directly:{" "}
          <a
            href="tel:2268991190"
            className="text-[#C9A84C] hover:underline font-medium"
          >
            226-899-1190
          </a>
        </p>
      </div>
    </section>
  );
}
