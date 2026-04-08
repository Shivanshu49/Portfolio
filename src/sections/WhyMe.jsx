"use client";

import { motion } from "framer-motion";
import { CircleDot } from "lucide-react";
import Badge from "@/components/Badge";
import { comparisons } from "@/data/siteData";

function CheckIcon() {
  return (
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  );
}

function XMarkIcon() {
  return (
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </div>
  );
}

export default function WhyMe() {
  return (
    <section id="why-me" className="relative px-6 py-24">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="text-center mb-14"
        >
          <Badge icon={<CircleDot size={14} />}>Why choose me</Badge>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-white">Why me as </span>
            <span className="text-text-secondary font-normal">
              Your Developer
            </span>
          </h2>
          <p className="mt-4 text-text-muted max-w-2xl mx-auto text-[15px]">
            Building scalable, high-performance systems with clean architecture
            and real-world impact.
          </p>
        </motion.div>

        {/* Comparison rows — each row is ONE card with two halves */}
        <div className="flex flex-col gap-5">
          {comparisons.map((comp, i) => (
            <motion.div
              key={comp.good.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.1 }}
              className="rounded-[24px] border border-border-subtle bg-surface-card/80 backdrop-blur-md overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Good side */}
                <div className="p-7 md:border-r border-border-subtle">
                  <CheckIcon />
                  <h4 className="text-lg font-semibold text-white mt-5 mb-2 tracking-tight">
                    {comp.good.title}
                  </h4>
                  <p className="text-[14px] text-text-muted leading-relaxed">
                    {comp.good.description}
                  </p>
                </div>

                {/* Bad side */}
                <div className="p-7 border-t md:border-t-0 border-border-subtle">
                  <XMarkIcon />
                  <h4 className="text-lg font-semibold text-white mt-5 mb-2 tracking-tight">
                    {comp.bad.title}
                  </h4>
                  <p className="text-[14px] text-text-muted leading-relaxed">
                    {comp.bad.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
