"use client";

import { motion } from "framer-motion";
import { CircleDot, LayoutGrid, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import Badge from "@/components/Badge";
import StatCard from "@/components/StatCard";
import { projectStats, projects, projectCategories } from "@/data/siteData";

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Outer container card matching Framer */}
        <div className="rounded-[32px] border border-border-subtle bg-surface-card/70 backdrop-blur-md p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left — Heading, stats, CTAs */}
            <div>
              <Badge icon={<CircleDot size={14} />}>Featured Work</Badge>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="mt-6 text-3xl sm:text-4xl md:text-[44px] font-bold text-white leading-tight tracking-tight"
              >
                Projects & Achievements
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-4 text-text-muted max-w-md leading-relaxed text-[15px]"
              >
                Building real-world applications with MERN stack, AI integration,
                and modern web technologies.
              </motion.p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8">
                {projectStats.map((stat) => (
                  <StatCard
                    key={stat.label}
                    value={stat.value}
                    label={stat.label}
                  />
                ))}
              </div>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                className="flex flex-wrap gap-3 mt-8"
              >
                <a
                  href="https://github.com/Shivanshu49"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-full bg-white/[0.07] border border-border-subtle text-white text-[14px] font-medium hover:bg-white/12 hover:border-border-hover transition-all hover:scale-[1.03] inline-flex items-center gap-2"
                >
                  <GithubIcon size={16} />
                  View All on GitHub
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

            {/* Right — Project category cards */}
            <div className="flex flex-col gap-4">
              {projectCategories.map((proj, i) => (
                <motion.div
                  key={proj.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.1 }}
                  className="group p-6 rounded-[20px] border border-border-subtle bg-surface-card/80 backdrop-blur-md hover:border-border-hover transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-white/[0.04] border border-border-subtle">
                      <LayoutGrid size={18} className="text-text-secondary" />
                    </div>
                    <h3 className="text-[16px] font-bold text-white tracking-tight">
                      {proj.title}
                    </h3>
                  </div>

                  <div className="divider mb-4" />

                  <p className="text-[13px] text-text-muted leading-relaxed">
                    {proj.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative p-6 rounded-[24px] border border-border-subtle bg-surface-card/80 backdrop-blur-md card-glow hover:border-border-hover transition-all duration-300"
              >
                <div className="relative z-10">
                  {/* Title */}
                  <h4 className="text-lg font-bold text-white tracking-tight mb-2">
                    {project.title}
                  </h4>

                  {/* Description */}
                  <p className="text-[13px] text-text-muted leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-medium text-text-secondary bg-white/[0.04] border border-border-subtle rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="divider mb-4" />

                  {/* Links */}
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-white transition-colors"
                    >
                      <GithubIcon size={14} />
                      Source Code
                    </a>
                    {project.live && (
                      <>
                        <span className="w-px h-3.5 bg-border-subtle" />
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-accent-blue hover:text-white transition-colors"
                        >
                          <ExternalLink size={12} />
                          Live Demo
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
