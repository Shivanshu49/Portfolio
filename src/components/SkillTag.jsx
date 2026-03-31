"use client";

import { motion } from "framer-motion";

export default function SkillTag({ label, index }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
      className="inline-flex px-4 py-2 rounded-xl border border-border-subtle bg-surface-card text-sm text-text-secondary hover:text-white hover:border-border-hover hover:bg-surface-hover transition-all duration-200 cursor-default"
    >
      {label}
    </motion.span>
  );
}
