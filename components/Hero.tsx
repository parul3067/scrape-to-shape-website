"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function Hero() {
  return (
    <section
      className="relative h-[100dvh] overflow-hidden"
      aria-label="Hero section"
    >
      {/* Full-screen background image */}
      <Image
        src="https://localpractice.wordpress.com/wp-content/uploads/2014/07/edw_builders_coty_2013_entire_house_framing_2.jpg"
        alt="House framing construction"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0D0D0D]/65" />

      {/* Grain texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.04,
        }}
      />

      {/* Text content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-20 xl:px-28 pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.2 }}
          className="font-bold text-white leading-[0.92] tracking-tight mb-8"
          style={{ fontSize: "clamp(2.75rem, 7vw, 6rem)" }}
        >
          From
          <br />
          <span className="text-[#C9A84C]">Scrape</span>
          <br />
          to Shape
        </motion.h1>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <button
          onClick={() =>
            document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
          }
          aria-label="Scroll to next section"
          className="text-white/40 hover:text-white/70 transition-colors duration-200"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
