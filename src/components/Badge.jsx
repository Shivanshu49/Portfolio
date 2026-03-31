"use client";

import { motion } from "framer-motion";

export default function Badge({ children, icon, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-subtle bg-surface-card text-sm text-text-secondary ${className}`}
    >
      {icon && <span className="text-text-muted">{icon}</span>}
      {children}
    </motion.div>
  );
}
