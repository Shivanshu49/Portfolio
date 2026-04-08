"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { personalInfo } from "@/data/siteData";

const navLinks = [
  { label: "TechStack", href: "#tech-stack" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "#profile" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-[860px] transition-all duration-500 ${
        scrolled ? "top-4" : "top-6"
      }`}
    >
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between px-3 py-2.5 rounded-full glass-strong">
        {/* Left — Name */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="px-4 py-1.5 text-[15px] font-bold text-white hover:text-white/80 transition-colors tracking-tight"
        >
          {personalInfo.name}
        </a>

        {/* Center — Links */}
        <div className="flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3.5 py-1.5 text-[13px] text-text-muted hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right — Book a Call */}
        <a
          href={personalInfo.bookCallLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 text-[14px] font-medium bg-white/[0.07] hover:bg-white/12 text-white rounded-full transition-all hover:scale-[1.03] border border-border-subtle"
        >
          <Sparkles size={14} />
          Book a Call
        </a>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-4 py-3 rounded-full glass-strong">
          <span className="text-sm font-bold text-white tracking-tight">
            {personalInfo.name}
          </span>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-2xl glass-strong p-3 flex flex-col gap-1"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2.5 text-sm text-text-secondary hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="divider my-1" />
              <a
                href={personalInfo.bookCallLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium bg-white/10 hover:bg-white/15 text-white rounded-xl transition-all"
              >
                <Sparkles size={14} />
                Book a Call
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
