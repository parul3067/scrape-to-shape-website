import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background gradient — TODO: replace with real hero image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #0d2018 0%, #1C3A2F 40%, #1A1A1A 100%)",
        }}
      />

      {/* Texture overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,168,76,0.08) 40px, rgba(201,168,76,0.08) 80px)",
        }}
      />

      {/* Dark overlay for extra depth */}
      <div className="absolute inset-0 z-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <p className="text-[#C9A84C] font-semibold text-sm sm:text-base uppercase tracking-widest mb-4">
          Greater Toronto Area
        </p>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          From{" "}
          <span className="text-[#C9A84C]">Scrape</span>{" "}
          to{" "}
          <span className="text-[#C9A84C]">Shape</span>
        </h1>

        <p className="text-xl sm:text-2xl text-white/80 font-light mb-4">
          GTA&apos;s trusted home renovation experts
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#C9A84C] hover:bg-[#b8963f] text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center border-2 border-white/60 hover:border-[#C9A84C] hover:text-[#C9A84C] text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200"
          >
            View Our Work
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-14 flex flex-wrap justify-center gap-6 text-white/50 text-sm">
          <span className="flex items-center gap-2">
            <span className="text-[#C9A84C]">✓</span> Free Consultations
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#C9A84C]">✓</span> Fixed-Price Quotes
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#C9A84C]">✓</span> Written Warranty
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#C9A84C]">✓</span> GTA-Wide Service
          </span>
        </div>
      </div>

      {/* Scroll-down arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-white/50 text-xs uppercase tracking-widest">
          Scroll
        </span>
        <svg
          className="w-5 h-5 text-[#C9A84C]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
