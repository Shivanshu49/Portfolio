"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { XIcon, InstagramIcon, LinkedinIcon, GithubIcon, EmailIcon } from "@/components/SocialIcons";
import Badge from "@/components/Badge";
import SkillTag from "@/components/SkillTag";
import { personalInfo, skills, education } from "@/data/siteData";

export default function Profile() {
  return (
    <section id="profile" className="relative px-6 py-24 section-glow">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Large heading — matching Framer serif italic style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="text-center mb-16"
        >
          <Badge icon={<span className="w-2 h-2 rounded-full bg-accent-blue inline-block" />}>
            Backend developer
          </Badge>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-white">Shivanshu,</span>{" "}
            <span className="font-serif italic text-text-secondary font-normal">
              Backend Developer
            </span>
          </h2>
          <p className="mt-4 text-text-muted max-w-2xl mx-auto">
            Passionate developer focused on building scalable web applications
            and exploring AI-driven solutions.
          </p>
        </motion.div>

        {/* Two-column card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left — Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            className="rounded-[32px] border border-border-subtle bg-surface-card/80 backdrop-blur-md p-8 flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-surface to-surface-elevated mb-6 border border-border-subtle">
              <Image
                src="/profile.png"
                alt="Shivanshu Dixit"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Available badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-border-subtle">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                <span className="text-xs text-text-secondary">
                  {personalInfo.availableStatus}
                </span>
              </div>
            </div>

            {/* Name & role */}
            <h3 className="text-xl font-semibold text-white">
              Hello I am{" "}
              <span className="font-bold">{personalInfo.name}</span>
            </h3>
            <p className="text-sm text-text-muted mt-1">
              Backend Developer & AI Enthusiast
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-5 pt-5 border-t border-border-subtle">
              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-border-subtle hover:border-border-hover hover:bg-surface-hover text-text-muted hover:text-white transition-all"
                aria-label="Twitter / X"
              >
                <XIcon size={18} />
              </a>
              <span className="w-px h-5 bg-border-subtle" />
              <a
                href={personalInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-border-subtle hover:border-border-hover hover:bg-surface-hover text-text-muted hover:text-white transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <span className="w-px h-5 bg-border-subtle" />
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-border-subtle hover:border-border-hover hover:bg-surface-hover text-text-muted hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <span className="w-px h-5 bg-border-subtle" />
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-border-subtle hover:border-border-hover hover:bg-surface-hover text-text-muted hover:text-white transition-all"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <span className="w-px h-5 bg-border-subtle" />
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl border border-border-subtle hover:border-border-hover hover:bg-surface-hover text-text-muted hover:text-white transition-all"
                aria-label="Email"
              >
                <EmailIcon size={18} />
              </a>
            </div>

            {/* Connect button */}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 border border-border-subtle text-white text-sm font-medium hover:bg-white/15 transition-all"
            >
              Contact Now
            </motion.a>
          </motion.div>

          {/* Right — Bio, skills, education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Bio */}
            <div className="rounded-[32px] border border-border-subtle bg-surface-card/80 backdrop-blur-md p-8">
              <p className="text-text-secondary leading-relaxed text-[15px]">
                {personalInfo.bio}
              </p>

              {/* Divider */}
              <div className="divider my-6" />

              {/* Skill tags */}
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <SkillTag key={skill} label={skill} index={i} />
                ))}
              </div>
            </div>

            {/* Education timeline */}
            <div className="rounded-[32px] border border-border-subtle bg-surface-card/80 backdrop-blur-md p-8">
              {education.map((edu, i) => (
                <div key={edu.title}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h4 className="text-base font-semibold text-white">
                        {edu.title}
                      </h4>
                    </div>
                    <span className="text-sm text-text-muted whitespace-nowrap">
                      {edu.type}
                    </span>
                    <span className="text-sm text-text-muted whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  {i < education.length - 1 && (
                    <div className="divider my-5" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
