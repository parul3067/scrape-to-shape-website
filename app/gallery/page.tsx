"use client";

import { motion } from "framer-motion";
import CTABanner from "@/components/CTABanner";

const CATEGORIES = [
  "Kitchen",
  "Bathroom",
  "Basement",
  "Flooring",
  "Tiling",
  "Plumbing",
  "Electrical",
  "Landscaping",
  "Roofing",
  "Wainscotting",
];

export default function GalleryPage() {
  return (
    <div className="pt-16 min-h-screen bg-[#F7F5F0]">
      {/* Page header */}
      <section className="bg-[#1A1A1A] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-3">
            Project Gallery
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Work Speaks for Itself
          </h1>
        </div>
      </section>

      {/* Category tiles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.05, ease: "easeOut" }}
              className="group bg-[#1A1A1A] rounded-2xl overflow-hidden aspect-square flex flex-col items-center justify-center cursor-pointer hover:bg-[#2A2A2A] transition-colors duration-300"
            >
              <p className="text-[#C9A84C] font-bold text-base text-center px-4">
                {cat}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <CTABanner
        headline="Want Something Like This in Your Home?"
        sub="Tell us about your project and we'll show you what's possible — free consultation, no obligation."
      />
    </div>
  );
}
