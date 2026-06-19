"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Lock, Check } from "lucide-react";
import StackIcon from "tech-stack-icons";
import { GithubIcon } from "@/components/SocialIcons";
import type { Project, TechBadge } from "@/data/siteData";
import { INVERT_ICONS } from "@/data/icons";

function hexToRgba(hex: string, alpha: number): string {
  let h = hex.replace("#", "");
  if (h.length === 3) {
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) {
    return `rgba(59, 130, 246, ${alpha})`; // fall back to brand blue
  }
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function iconClass(icon: string, base: string): string {
  return INVERT_ICONS.has(icon) ? `${base} brightness-0 invert` : base;
}

function TechChip({ tech }: { tech: TechBadge }) {
  if (tech.icon) {
    return (
      <span className="inline-flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 rounded-lg bg-white/[0.04] border border-border-subtle text-[12px] font-medium text-text-secondary">
        <StackIcon name={tech.icon} className={iconClass(tech.icon, "w-4 h-4")} />
        {tech.name}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white/[0.04] border border-border-subtle text-[12px] font-medium text-text-secondary">
      {tech.name}
    </span>
  );
}

function BrowserPreview({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const primaryIcon = project.tech.find((t) => t.icon)?.icon;
  return (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open the ${project.title} live site in a new tab`}
      className={`relative block w-full overflow-hidden rounded-xl border border-border-subtle bg-surface ${
        featured ? "aspect-[16/9]" : "aspect-[16/10]"
      }`}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-3 h-9 border-b border-border-subtle bg-white/[0.02]">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        </span>
        <span className="ml-2 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/40 border border-border-subtle text-[12px] text-text-secondary truncate max-w-[78%]">
          <Lock size={11} className="shrink-0 text-text-muted" />
          <span className="truncate">{project.domain}</span>
        </span>
      </div>

      {/* Body — live screenshot that zooms + reveals a CTA on hover */}
      <div className="relative h-[calc(100%-2.25rem)] overflow-hidden">
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={`Screenshot of the ${project.title} live site`}
              fill
              sizes={
                featured
                  ? "(max-width: 1024px) 90vw, 560px"
                  : "(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 420px"
              }
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
            {/* Hover veil + "Open live site" CTA */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black text-[12px] font-semibold translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                Open live site
                <ArrowUpRight size={14} />
              </span>
            </div>
          </>
        ) : (
          /* Fallback: accent gradient + primary tech tile */
          <div
            className="relative flex items-center justify-center h-full"
            style={{
              background: `radial-gradient(120% 120% at 50% 0%, ${hexToRgba(
                project.accent,
                0.18,
              )} 0%, transparent 62%)`,
            }}
          >
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:24px_24px]" />
            <span className="absolute font-serif leading-none text-white/[0.05] select-none text-[clamp(5rem,14vw,9rem)]">
              {project.title.charAt(0)}
            </span>
            {primaryIcon && (
              <div
                className={`relative z-10 rounded-2xl border border-border-subtle bg-black/40 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 ${
                  featured ? "p-5" : "p-4"
                }`}
                style={{
                  boxShadow: `0 10px 50px ${hexToRgba(project.accent, 0.3)}`,
                }}
              >
                <StackIcon
                  name={primaryIcon}
                  className={iconClass(
                    primaryIcon,
                    featured ? "w-12 h-12" : "w-9 h-9",
                  )}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </a>
  );
}

function CardLinks({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-3">
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white text-black text-[13px] font-semibold hover:bg-white/90 transition-colors"
      >
        Live demo
        <ArrowUpRight size={15} />
      </a>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white/[0.06] border border-border-subtle text-white text-[13px] font-medium hover:bg-white/[0.12] hover:border-border-hover transition-colors"
      >
        <GithubIcon size={15} />
        Code
      </a>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const glow = (
    <div
      className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{
        background: `radial-gradient(60% 60% at 50% 0%, ${hexToRgba(
          project.accent,
          0.16,
        )} 0%, transparent 70%)`,
      }}
    />
  );

  if (project.featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 90, damping: 20 }}
        className="group relative rounded-[24px] border border-border-subtle bg-surface-card/70 backdrop-blur-md p-5 sm:p-7 hover:border-border-hover transition-colors duration-500 overflow-hidden"
      >
        {glow}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-9 items-center">
          <BrowserPreview project={project} featured />

          <div>
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider"
              style={{
                color: project.accent,
                background: hexToRgba(project.accent, 0.1),
                border: `1px solid ${hexToRgba(project.accent, 0.25)}`,
              }}
            >
              Featured project
            </span>

            <h3 className="mt-4 text-2xl md:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="mt-1 text-sm font-medium" style={{ color: project.accent }}>
              {project.tagline}
            </p>

            <p className="mt-4 text-[14px] text-text-muted leading-relaxed">
              {project.description}
            </p>

            <ul className="mt-5 grid sm:grid-cols-2 gap-x-5 gap-y-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-[13px] text-text-secondary"
                >
                  <Check
                    size={15}
                    className="mt-0.5 shrink-0"
                    style={{ color: project.accent }}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <TechChip key={t.name} tech={t} />
              ))}
            </div>

            <div className="mt-6">
              <CardLinks project={project} />
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 90, damping: 20, delay: index * 0.08 }}
      className="group relative flex flex-col rounded-[24px] border border-border-subtle bg-surface-card/70 backdrop-blur-md p-5 hover:border-border-hover hover:-translate-y-1 transition-all duration-500 overflow-hidden"
    >
      {glow}
      <div className="relative z-10 flex flex-col h-full">
        <BrowserPreview project={project} />

        <h3 className="mt-5 text-xl font-bold text-white tracking-tight">
          {project.title}
        </h3>
        <p className="mt-1 text-[13px] font-medium" style={{ color: project.accent }}>
          {project.tagline}
        </p>

        <p className="mt-3 text-[13px] text-text-muted leading-relaxed">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <TechChip key={t.name} tech={t} />
          ))}
        </div>

        <div className="mt-auto pt-5 border-t border-border-subtle">
          <CardLinks project={project} />
        </div>
      </div>
    </motion.article>
  );
}
