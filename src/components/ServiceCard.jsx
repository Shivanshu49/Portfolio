"use client";

import { motion } from "framer-motion";
import { Cpu, Server, Globe, Database } from "lucide-react";

const iconMap = {
  "01": Cpu,
  "02": Server,
  "03": Globe,
  "04": Database,
};

export default function ServiceCard({ number, title, description, index }) {
  const Icon = iconMap[number] || Server;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative p-7 rounded-3xl border border-border-subtle bg-surface-card card-glow hover:border-border-hover transition-all duration-300"
    >
      <div className="relative z-10">
        {/* Top row: icon + number */}
        <div className="flex items-start justify-between mb-6">
          <div className="p-3 rounded-2xl bg-white/5 border border-border-subtle group-hover:bg-white/10 transition-colors">
            <Icon size={22} className="text-text-secondary" />
          </div>
          <span className="text-4xl font-bold text-white/[0.07] group-hover:text-white/[0.12] transition-colors">
            {number}
          </span>
        </div>

        {/* Divider */}
        <div className="divider mb-5" />

        {/* Content */}
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
