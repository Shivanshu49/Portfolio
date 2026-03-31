"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedNumber({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * numericValue));
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
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

export default function StatCard({ value, label }) {
  const suffix = value.includes("%") ? "%" : value.includes("+") && !value.startsWith("+") ? "+" : "";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center px-6 py-5 rounded-2xl border border-border-subtle bg-surface-card/50 hover:bg-surface-hover/50 transition-colors"
    >
      <span className="text-3xl md:text-4xl font-bold text-white">
        <AnimatedNumber value={value} suffix={suffix} />
      </span>
      <span className="text-sm text-text-muted mt-1">{label}</span>
    </motion.div>
  );
}
