"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const STATS = [
  { target: 10, suffix: "+", label: "Years of Experience", duration: 6000 },
  { target: 100, suffix: "+", label: "Projects Completed", duration: 6000 },
];

function CountUpTile({
  target,
  suffix,
  label,
  duration,
}: {
  target: number;
  suffix: string;
  label: string;
  duration: number;
}) {
  const [count, setCount] = useState(1);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const steps = target;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = 1 - Math.pow(1 - step / steps, 3);
      setCount(Math.max(1, Math.round(progress * target)));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div
      ref={ref}
      className="bg-[#1A1A1A] rounded-xl px-6 py-5 flex flex-col items-center text-center flex-1"
    >
      <span className="text-4xl font-bold text-[#C9A84C] tabular-nums leading-none">
        {count}
        {count === target ? suffix : ""}
      </span>
      <span className="mt-2 text-white/60 text-[11px] font-semibold uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <div className="flex gap-4 mt-6">
      {STATS.map((s) => (
        <CountUpTile key={s.label} {...s} />
      ))}
    </div>
  );
}
