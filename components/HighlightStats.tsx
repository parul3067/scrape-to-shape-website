"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const STATS = [
  { target: 10, suffix: "+", label: "Years of Experience" },
  { target: 100, suffix: "+", label: "Projects Completed" },
];

function BigCountTile({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = 1 - Math.pow(1 - step / steps, 3);
      setCount(Math.max(0, Math.round(progress * target)));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <span
        className="font-bold text-[#C9A84C] tabular-nums leading-none"
        style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)" }}
      >
        {count}
        {count === target ? suffix : ""}
      </span>
      <span className="mt-2 text-white/70 text-[11px] font-semibold uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

export default function HighlightStats() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A] border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="font-bold text-white leading-tight text-lg sm:text-xl">
            A Decade of Craft & Hundreds of Homes Transformed
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {STATS.map((s) => (
            <BigCountTile key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
