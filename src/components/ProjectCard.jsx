"use client";

import { motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";

export default function ProjectCard({ title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="group relative p-7 rounded-3xl border border-border-subtle bg-surface-card card-glow hover:border-border-hover transition-all duration-300"
    >
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 rounded-xl bg-white/5 border border-border-subtle">
            <LayoutGrid
              size={20}
              className="text-text-secondary group-hover:text-white transition-colors"
            />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-white">
            {title}
          </h3>
        </div>

        <p className="text-sm text-text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
