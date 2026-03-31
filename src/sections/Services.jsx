"use client";

import { motion } from "framer-motion";
import { Cpu, SlidersHorizontal, Waypoints, PenLine, CircleDot, SmilePlus } from "lucide-react";
import Badge from "@/components/Badge";
import { services } from "@/data/siteData";

const iconMap = {
  "01": Cpu,
  "02": SlidersHorizontal,
  "03": Waypoints,
  "04": PenLine,
};

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-24">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge icon={<CircleDot size={14} />}>Professional Services</Badge>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-white">Areas of </span>
            <span className="text-text-secondary font-normal">
              Expertise
            </span>
          </h2>
          <p className="mt-4 text-text-muted max-w-xl mx-auto text-[15px]">
            Focused on building scalable systems, efficient APIs, and
            intelligent applications.
          </p>
        </motion.div>

        {/* Service cards — 4 column horizontal scroll/grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.number] || Cpu;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative p-6 rounded-[24px] border border-border-subtle bg-surface-card card-glow hover:border-border-hover transition-all duration-300"
              >
                <div className="relative z-10">
                  {/* Number badge top-right */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="p-3 rounded-2xl bg-white/[0.04] border border-border-subtle">
                      <Icon size={22} className="text-text-secondary" strokeWidth={1.5} />
                    </div>
                    <span className="w-8 h-8 rounded-full border border-border-subtle bg-white/[0.04] flex items-center justify-center text-sm text-text-muted font-medium">
                      {parseInt(service.number)}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-[16px] font-semibold text-white mb-2 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-[13px] text-text-muted leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bottom divider */}
                  <div className="divider mt-6" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 p-5 rounded-[24px] border border-border-subtle bg-surface-card"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <SmilePlus size={18} className="text-text-muted" />
              <p className="text-white font-semibold text-[15px] tracking-tight">
                I am with you in every step
              </p>
            </div>
            <p className="text-[13px] text-text-muted">
              alongside you at each step for a seamless experience
            </p>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-3 justify-center"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-7 py-3.5 rounded-full bg-white/[0.07] border border-border-subtle text-white text-[14px] font-medium hover:bg-white/12 hover:border-border-hover transition-all hover:scale-[1.03]"
          >
            See All Projects
          </a>
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
        </motion.div>
      </div>
    </section>
  );
}
