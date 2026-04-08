"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  CircleDot,
} from "lucide-react";
import { XIcon, InstagramIcon, LinkedinIcon, GithubIcon, EmailIcon } from "@/components/SocialIcons";
import Badge from "@/components/Badge";
import { personalInfo, contactServices, footerLinks } from "@/data/siteData";

export default function Contact() {
  return (
    <>
      {/* Contact CTA section */}
      <section id="contact" className="relative px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="relative z-10 max-w-7xl mx-auto rounded-[40px] border border-border-subtle bg-surface-card/70 backdrop-blur-md card-glow overflow-hidden"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 md:p-12">
            {/* Left — Content */}
            <div>
              <Badge icon={<CircleDot size={14} />}>Let&apos;s Connect</Badge>

              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Let&apos;s Build
                <br />
                Something{" "}
                <span className="text-text-secondary font-normal">
                  Together
                </span>
              </h2>

              <div className="divider my-8" />

              {/* Services list */}
              {contactServices.map((service, i) => (
                <div key={service.title}>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {service.description}
                  </p>
                  {i < contactServices.length - 1 && (
                    <div className="divider my-6" />
                  )}
                </div>
              ))}

              {/* Email CTA */}
              <div className="mt-6 p-4 rounded-xl bg-white/[0.03] border border-border-subtle">
                <p className="text-xs text-text-muted uppercase tracking-wider mb-1 font-semibold">Reach out via email</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-accent-blue hover:text-white transition-colors text-sm font-medium"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-full bg-white/10 border border-border-subtle text-white text-sm font-medium hover:bg-white/15 hover:border-border-hover transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <GithubIcon size={16} />
                  View GitHub
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="px-7 py-3.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all hover:scale-105"
                >
                  Get In Touch
                </a>
              </div>
            </div>

            {/* Right — Profile image */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden border border-border-subtle relative">
                <Image
                  src="/profile.png"
                  alt="Shivanshu Dixit"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 0px, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Top row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
            <h3 className="text-lg font-bold text-white">
              {personalInfo.name}
            </h3>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-white transition-colors"
                aria-label="Twitter / X"
              >
                <XIcon size={20} />
              </a>
              <a
                href={personalInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 text-text-muted hover:text-white transition-colors"
                aria-label="Email"
              >
                <EmailIcon size={20} />
              </a>
            </div>
          </div>

          <div className="divider" />

          {/* Bottom links */}
          <div className="flex flex-wrap gap-6 mt-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(link.href)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-sm text-accent-blue hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="mt-8 text-xs text-text-muted">
            © {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
