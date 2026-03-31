"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function ComparisonRow({ good, bad, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {/* Good side */}
      <div className="group p-6 rounded-2xl border border-border-subtle bg-surface-card hover:border-positive/20 transition-all duration-300">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-9 h-9 rounded-full bg-positive/10 border border-positive/20 flex items-center justify-center">
            <Check size={16} className="text-positive" />
          </div>
          <div>
            <h4 className="text-base font-semibold text-white mb-1">
              {good.title}
            </h4>
            <p className="text-sm text-text-muted leading-relaxed">
              {good.description}
            </p>
          </div>
        </div>
      </div>

      {/* Bad side */}
      <div className="group p-6 rounded-2xl border border-border-subtle bg-surface-card hover:border-negative/20 transition-all duration-300">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-9 h-9 rounded-full bg-negative/10 border border-negative/20 flex items-center justify-center">
            <X size={16} className="text-negative" />
          </div>
          <div>
            <h4 className="text-base font-semibold text-white mb-1">
              {bad.title}
            </h4>
            <p className="text-sm text-text-muted leading-relaxed">
              {bad.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
