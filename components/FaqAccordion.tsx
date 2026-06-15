"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqCategory {
  category: string;
  questions: FaqItem[];
}

interface FaqAccordionProps {
  data: FaqCategory[];
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#1C3A2F]/10 last:border-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className="font-semibold text-[#1C3A2F] group-hover:text-[#C9A84C] transition-colors duration-200 text-base leading-snug">
          {item.q}
        </span>
        <span
          className={`shrink-0 w-6 h-6 rounded-full border-2 border-[#1C3A2F]/30 group-hover:border-[#C9A84C] flex items-center justify-center text-[#1C3A2F] group-hover:text-[#C9A84C] transition-all duration-200 mt-0.5 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[#2D2D2D]/70 text-base leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CategoryBlock({ block }: { block: FaqCategory }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <div className="mb-10 last:mb-0">
      <h3 className="text-xl font-bold text-[#1C3A2F] mb-4 pb-3 border-b-2 border-[#C9A84C]">
        {block.category}
      </h3>
      <div>
        {block.questions.map((item, i) => (
          <AccordionItem
            key={i}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default function FaqAccordion({ data }: FaqAccordionProps) {
  return (
    <div className="max-w-3xl mx-auto">
      {data.map((block) => (
        <CategoryBlock key={block.category} block={block} />
      ))}
    </div>
  );
}
