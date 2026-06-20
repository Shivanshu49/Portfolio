import type { StackIconName } from "./icons";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

export interface SocialLinks {
  twitter: string;
  instagram: string;
  linkedin: string;
  github: string;
  medium: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  subtitle: string;
  bio: string;
  availableStatus: string;
  location: string;
  email: string;
  stats: Stat[];
  social: SocialLinks;
  bookCallLink: string;
  /** Path to the résumé PDF in /public (served at the site root). */
  resume: string;
}

export interface Education {
  title: string;
  type: string;
  period: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
}

export interface ComparisonItem {
  title: string;
  description: string;
}

export interface Comparison {
  good: ComparisonItem;
  bad: ComparisonItem;
}

/** A single tech chip on a project card. `icon` is a tech-stack-icons name;
 *  omit it to render the tech as a plain text chip (e.g. Razorpay, OCR). */
export interface TechBadge {
  name: string;
  icon?: StackIconName;
}

export interface Project {
  title: string;
  tagline: string;
  description: string;
  tech: TechBadge[];
  features: string[];
  github: string;
  live: string;
  /** Domain shown in the card's browser-frame URL bar. */
  domain: string;
  /** Screenshot shown in the card's browser frame (in /public). */
  image?: string;
  /** Hex accent that tints this card's preview gradient and hover glow. */
  accent: string;
  featured?: boolean;
}

export interface ContactService {
  title: string;
  description: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

// ─────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────

export const personalInfo: PersonalInfo = {
  name: "Shivanshu Dixit",
  role: "Full Stack Developer",
  tagline: "Full Stack Developer | AI Builder",
  subtitle:
    "I build scalable web applications, backend systems, and AI-powered tools that solve real-world problems. \nFocused on creating impactful products using React, FastAPI, and modern AI technologies.",
  bio: "I am a Full Stack Developer passionate about building scalable web applications and AI-powered systems.\n\nI specialize in modern technologies like React, Next.js, FastAPI, and MongoDB, and I enjoy solving real-world problems through clean and efficient code.\n\nCurrently, I am focused on developing AI-driven applications and backend systems that are fast, reliable, and user-centric.",
  availableStatus: "Available to code",
  location: "Delhi, India",
  email: "shivanshudixit573@gmail.com",
  stats: [
    { value: "+100", label: "Satisfied Client" },
    { value: "+95", label: "Good Reviews" },
  ],
  social: {
    twitter: "https://x.com/Shivanshu049",
    instagram: "https://www.instagram.com/shivanshu.dixit18/",
    linkedin: "https://www.linkedin.com/in/shivanshu049",
    github: "https://github.com/Shivanshu49",
    medium: "https://shivanshu49.medium.com",
  },
  bookCallLink: "https://cal.com/shivanshu49/15min",
  resume: "/Shivanshu_Dixit_Resume.pdf",
};

export const skills: string[] = [
  "Backend Development",
  "REST APIs",
  "MERN Stack",
  "Database Design",
  "AI / Machine Learning",
  "System Design",
];

export const education: Education[] = [
  {
    title: "B.Tech CSE Student",
    type: "Learning",
    period: "2022–Present",
  },
  {
    title: "MERN & AI Developer",
    type: "Personal",
    period: "2023–Present",
  },
];

export const services: Service[] = [
  {
    number: "01",
    title: "AI Integration",
    description:
      "Creating intelligent features using machine learning and LLM-based applications.",
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Designing robust server-side applications with clean architecture and efficient logic.",
  },
  {
    number: "03",
    title: "API Development",
    description:
      "Building secure, scalable REST APIs for seamless communication between systems.",
  },
  {
    number: "04",
    title: "Database Management",
    description:
      "Designing optimized databases with MongoDB & SQL for performance and reliability.",
  },
];

export const comparisons: Comparison[] = [
  {
    good: {
      title: "Scalable & Clean Code",
      description:
        "Writing maintainable, efficient backend systems built to scale",
    },
    bad: {
      title: "Messy / Unstructured Code",
      description: "Hard-to-maintain code that breaks as projects grow",
    },
  },
  {
    good: {
      title: "Performance-Focused Development",
      description: "Optimized APIs and databases for speed and efficiency",
    },
    bad: {
      title: "Slow & Inefficient Systems",
      description: "Poor performance leading to bad user experience",
    },
  },
  {
    good: {
      title: "Secure & Reliable Systems",
      description:
        "Implementing best practices for security and data protection",
    },
    bad: {
      title: "Vulnerable Applications",
      description: "Ignoring security, leading to risks and failures",
    },
  },
  {
    good: {
      title: "Clear Communication & Delivery",
      description: "Transparent updates and structured development process",
    },
    bad: {
      title: "Poor Communication",
      description: "Unclear progress and inconsistent delivery",
    },
  },
];

export const projectStats: Stat[] = [
  { value: "25+", label: "Projects built" },
  { value: "5+", label: "Tech Mastered" },
  { value: "100%", label: "Learning" },
];

/**
 * Live, deployed projects only — each links to a working Vercel deployment.
 * Tech stacks are sourced from each repo's package.json / README.
 */
export const projects: Project[] = [
  {
    title: "NEDC Platform",
    tagline: "Online learning & entrepreneurship platform",
    description:
      "A production-grade learning platform for the National Entrepreneurship Development Center's mentor-led programs — course registration, secure payments, and a personalized student dashboard built on Next.js and Supabase.",
    tech: [
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Supabase", icon: "supabase" },
      { name: "Razorpay" },
      { name: "Tailwind", icon: "tailwindcss" },
      { name: "Redis", icon: "redis" },
    ],
    features: [
      "Course registration & enrollment flow",
      "Secure Razorpay payment integration",
      "Personalized student dashboard",
      "Supabase auth, database & storage",
      "Rate-limiting and transactional email",
    ],
    github: "https://github.com/Shivanshu49/NEDC-Platform",
    live: "https://nedc-platform.vercel.app",
    domain: "nedc-platform.vercel.app",
    image: "/projects/nedc.webp",
    accent: "#10b981",
    featured: true,
  },
  {
    title: "TruthLens AI",
    tagline: "AI misinformation & deepfake detection",
    description:
      "A full-stack platform that detects misinformation across text, screenshots, and videos — combining OCR, Google Gemini, and frame-by-frame deepfake analysis behind a glassmorphism React UI.",
    tech: [
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "FastAPI", icon: "python" },
      { name: "Gemini", icon: "gemini" },
      { name: "OCR" },
    ],
    features: [
      "Text & claim credibility analysis",
      "Screenshot OCR with Tesseract",
      "Deepfake video detection via Gemini Vision",
      "Multi-language, real-time results",
    ],
    github: "https://github.com/Shivanshu49/TruthLens",
    live: "https://truth-lens-nine-sand.vercel.app",
    domain: "truth-lens-nine-sand.vercel.app",
    image: "/projects/truthlens.webp",
    accent: "#06b6d4",
  },
  {
    title: "SecondBrain AI",
    tagline: "Predictive AI productivity system",
    description:
      "An AI-powered 'digital neocortex' that turns natural language into structured tasks, breaks complex goals down autonomously, and predicts your productivity trajectory.",
    tech: [
      { name: "React", icon: "react" },
      { name: "FastAPI", icon: "python" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Gemini", icon: "gemini" },
      { name: "Vite" },
    ],
    features: [
      "Natural language → structured tasks",
      "Autonomous goal breakdown",
      "Productivity trajectory prediction",
      "Thought-dump categorization",
    ],
    github: "https://github.com/Shivanshu49/SecondBrain-AI",
    live: "https://second-brain-ai-five.vercel.app",
    domain: "second-brain-ai-five.vercel.app",
    image: "/projects/secondbrain.webp",
    accent: "#8b5cf6",
  },
  {
    title: "Kunjikkas Cafe",
    tagline: "The taste of Malabar, online",
    description:
      "A modern, responsive site for Kunjikkas Cafe with a floating glass navbar, a lightbox gallery, and a zoomable menu — motion-rich and built mobile-first.",
    tech: [
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Framer Motion", icon: "framer" },
    ],
    features: [
      "Floating glassmorphism navbar",
      "Lightbox image gallery",
      "Zoomable interactive menu",
      "Smooth scroll-triggered animations",
    ],
    github: "https://github.com/Shivanshu49/Kunjikkas-Cafe",
    live: "https://kunjikkas-cafe-nine.vercel.app",
    domain: "kunjikkas-cafe-nine.vercel.app",
    image: "/projects/kunjikkas.webp",
    accent: "#f59e0b",
  },
  {
    title: "Developer Portfolio",
    tagline: "The site you're looking at",
    description:
      "This portfolio — a Next.js + TypeScript single-page site with a glassmorphism design system, scroll-choreographed motion, and a live tech-stack showcase.",
    tech: [
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind", icon: "tailwindcss" },
      { name: "Framer Motion", icon: "framer" },
    ],
    features: [
      "Responsive, mobile-first layout",
      "Glassmorphism design system",
      "Scroll-triggered animations",
      "SEO & performance optimized",
    ],
    github: "https://github.com/Shivanshu49/Portfolio",
    live: "https://portfolio-zeta-navy-71.vercel.app",
    domain: "portfolio-zeta-navy-71.vercel.app",
    image: "/projects/portfolio.webp",
    accent: "#3b82f6",
  },
];

export const contactServices: ContactService[] = [
  {
    title: "Backend & API Development",
    description:
      "Building scalable and secure backend systems with clean architecture, efficient APIs, and optimized performance for real-world applications.",
  },
  {
    title: "Full Stack & AI Projects",
    description:
      "Developing modern web applications using the MERN stack and integrating AI features to create intelligent, impactful solutions.",
  },
];

export const footerLinks: FooterLink[] = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Profile", href: "#profile" },
  { label: "Reviews", href: "#why-me" },
  { label: "Contact", href: "#contact" },
];
