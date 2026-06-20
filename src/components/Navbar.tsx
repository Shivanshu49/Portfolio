"use client";

import { useState, useEffect, useRef, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X, FileText, Download, ChevronDown } from "lucide-react";
import { personalInfo } from "@/data/siteData";
import { scrollToSection } from "@/lib/scroll";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "TechStack", href: "#tech-stack" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the resume dropdown on outside click or Escape.
  useEffect(() => {
    if (!resumeOpen) return;
    const handlePointer = (e: globalThis.MouseEvent) => {
      if (resumeRef.current && !resumeRef.current.contains(e.target as Node)) {
        setResumeOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setResumeOpen(false);
    };
    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [resumeOpen]);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    scrollToSection(href);
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
          aria-label="Back to top"
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

          {/* Resume — view or download */}
          <div ref={resumeRef} className="relative">
            <button
              type="button"
              onClick={() => setResumeOpen((open) => !open)}
              aria-haspopup="menu"
              aria-expanded={resumeOpen}
              className="flex items-center gap-1 px-3.5 py-1.5 text-[13px] text-text-muted hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              Resume
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${
                  resumeOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {resumeOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.18 }}
                  role="menu"
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 rounded-2xl glass-strong p-1.5 flex flex-col gap-0.5"
                >
                  <a
                    href={personalInfo.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setResumeOpen(false)}
                    role="menuitem"
                    className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-text-secondary hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                  >
                    <FileText size={15} />
                    View Resume
                  </a>
                  <a
                    href={personalInfo.resume}
                    download
                    onClick={() => setResumeOpen(false)}
                    role="menuitem"
                    className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-text-secondary hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                  >
                    <Download size={15} />
                    Download
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
            aria-expanded={mobileOpen}
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
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-text-secondary hover:text-white hover:bg-white/5 rounded-xl transition-colors"
              >
                <FileText size={16} />
                View Resume
              </a>
              <a
                href={personalInfo.resume}
                download
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-text-secondary hover:text-white hover:bg-white/5 rounded-xl transition-colors"
              >
                <Download size={16} />
                Download Resume
              </a>
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
