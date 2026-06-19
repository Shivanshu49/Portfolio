"use client";

import { motion } from "framer-motion";
import { CircleDot } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import Badge from "@/components/Badge";
import StatCard from "@/components/StatCard";
import ProjectCard from "@/components/ProjectCard";
import { projectStats, projects, personalInfo } from "@/data/siteData";
import { scrollToSection } from "@/lib/scroll";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative px-6 py-24 section-glow">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="max-w-2xl"
        >
          <Badge icon={<CircleDot size={14} />}>Featured Work</Badge>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            <span className="text-white">Selected </span>
            <span className="font-serif italic font-normal text-text-secondary">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-text-muted text-[15px] leading-relaxed">
            Every project here is live in production — built end-to-end, deployed,
            and linked straight to the real thing.
          </p>
        </motion.div>

        {/* Stats + CTAs */}
        <div className="mt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="grid grid-cols-3 gap-3 w-full lg:max-w-md">
            {projectStats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white/[0.07] border border-border-subtle text-white text-[14px] font-medium hover:bg-white/12 hover:border-border-hover transition-all hover:scale-[1.03] inline-flex items-center gap-2"
            >
              <GithubIcon size={16} />
              View All on GitHub
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
              className="px-6 py-3 rounded-full bg-white text-black text-[14px] font-medium hover:bg-white/90 transition-all hover:scale-[1.03]"
            >
              Contact Now
            </a>
          </motion.div>
        </div>

        {/* Featured project */}
        {featured && (
          <div className="mt-10">
            <ProjectCard project={featured} index={0} />
          </div>
        )}

        {/* Remaining projects */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {rest.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
