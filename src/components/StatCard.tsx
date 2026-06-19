"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface AnimatedNumberProps {
  value: string;
  suffix?: string;
}

function AnimatedNumber({ value, suffix = "" }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const startTime = performance.now();
    let rafId = 0;

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * numericValue));
      if (progress < 1) rafId = requestAnimationFrame(animate);
    }
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, numericValue]);

  const prefix = value.startsWith("+") ? "+" : "";

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  const suffix = value.includes("%")
    ? "%"
    : value.includes("+") && !value.startsWith("+")
      ? "+"
      : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center px-3 sm:px-6 py-4 sm:py-5 rounded-2xl border border-border-subtle bg-surface-card/50 hover:bg-surface-hover/50 transition-colors"
    >
      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
        <AnimatedNumber value={value} suffix={suffix} />
      </span>
      <span className="text-xs sm:text-sm text-text-muted mt-1 text-center leading-tight">
        {label}
      </span>
    </motion.div>
  );
}
