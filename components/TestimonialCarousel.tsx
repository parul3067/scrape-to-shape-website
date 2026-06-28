"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollDown from "./ScrollDown";

const TESTIMONIALS = [
  {
    name: "Sandra M.",
    neighbourhood: "Etobicoke",
    project: "Kitchen Renovation",
    quote:
      "We had our entire kitchen gutted and rebuilt by Scrape to Shape and couldn't be happier. They finished on schedule, the quote was exactly what we paid, and the craftsmanship is stunning. We get compliments every time someone visits.",
  },
  {
    name: "David & Priya K.",
    neighbourhood: "Mississauga",
    project: "Basement Finishing",
    quote:
      "Our basement was a blank concrete box — now it's a legal suite that pays part of our mortgage. The team handled permits, waterproofing, framing, and finishing without us having to worry about a thing. Highly recommend!",
  },
  {
    name: "James T.",
    neighbourhood: "North York",
    project: "Bathroom Renovation",
    quote:
      "I've hired contractors before who left me with headaches and cost overruns. Scrape to Shape was completely different — professional, clean, and honest. My main bathroom looks like something out of a magazine. Will definitely use them again.",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = TESTIMONIALS.length;

  const next = () => setCurrent((c) => (c + 1) % total);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  useEffect(() => {
    if (!paused) {
      timerRef.current = setInterval(next, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, current]);

  return (
    <section id="testimonials" className="h-[100dvh] relative overflow-hidden flex items-center px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-8">
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-3">
            Happy Clients
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3A2F]">
            What Our Customers Say
          </h2>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Card */}
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white rounded-2xl shadow-md p-6 sm:p-8"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-[#C9A84C] text-xl">
                      ★
                    </span>
                  ))}
                </div>

                <blockquote className="text-[#2D2D2D] text-lg sm:text-xl leading-relaxed italic mb-8">
                  &ldquo;{TESTIMONIALS[current].quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-[#1C3A2F] flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {TESTIMONIALS[current].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#1C3A2F]">
                      {TESTIMONIALS[current].name}
                    </p>
                    <p className="text-sm text-[#2D2D2D]/60">
                      {TESTIMONIALS[current].neighbourhood} &middot;{" "}
                      {TESTIMONIALS[current].project}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Prev / Next buttons */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-[#1C3A2F]/20 hover:border-[#C9A84C] hover:bg-[#C9A84C] hover:text-white flex items-center justify-center text-[#1C3A2F] transition-all duration-200"
            >
              ←
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonials">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    i === current
                      ? "bg-[#C9A84C] w-6"
                      : "bg-[#1C3A2F]/20 hover:bg-[#1C3A2F]/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-[#1C3A2F]/20 hover:border-[#C9A84C] hover:bg-[#C9A84C] hover:text-white flex items-center justify-center text-[#1C3A2F] transition-all duration-200"
            >
              →
            </button>
          </div>
        </div>
      </div>
      <ScrollDown targetId="cta" />
    </section>
  );
}
