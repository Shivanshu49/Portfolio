"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Badge from "@/components/Badge";
import { personalInfo } from "@/data/siteData";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-16 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent-glow/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <Badge icon={<span className="w-2 h-2 rounded-full bg-accent-green inline-block" />}>
              {personalInfo.role}
            </Badge>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
              className="mt-6"
            >
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1] tracking-[-0.03em]">
                {personalInfo.name}
              </span>
              <motion.span
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.2 }}
                className="inline-flex align-middle ml-3"
              >
                <ArrowUpRight
                  size={36}
                  className="text-text-muted"
                  strokeWidth={1.5}
                />
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              className="mt-6 text-[15px] md:text-base text-text-muted max-w-md leading-relaxed"
            >
              {personalInfo.tagline}
              <br />
              {personalInfo.subtitle}
            </motion.p>

            {/* CTA buttons — Contact Now first (primary), View Projects second */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 py-3.5 rounded-full bg-white text-black text-[14px] font-medium hover:bg-white/90 transition-all hover:scale-[1.03]"
              >
                Contact Now
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 py-3.5 rounded-full bg-white/[0.07] border border-border-subtle text-white text-[14px] font-medium hover:bg-white/12 transition-all hover:scale-[1.03]"
              >
                View Projects
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
              className="mt-10 flex gap-10"
            >
              {personalInfo.stats.map((stat) => (
                <div key={stat.label}>
                  <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <p className="text-sm text-text-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full max-w-sm ml-auto aspect-[3/4] rounded-[40px] overflow-hidden border border-border-subtle">
              <Image
                src="/profile.png"
                alt="Shivanshu Dixit"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 0px, 384px"
              />
              {/* Subtle overlay for brand cohesion */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={28} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
