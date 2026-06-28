"use client";
import { motion } from "framer-motion";

export default function ScrollDown({
  targetId,
  light = false,
}: {
  targetId: string;
  light?: boolean;
}) {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
      <button
        onClick={() =>
          document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Scroll to next section"
        className={`${
          light
            ? "text-white/30 hover:text-white/60"
            : "text-[#1C3A2F]/25 hover:text-[#C9A84C]"
        } transition-colors duration-200`}
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
    </div>
  );
}
