"use client";

import { motion } from "framer-motion";
import { techStackData } from "@/data/techStack";
import StackIcon from "tech-stack-icons";
import Badge from "@/components/Badge";
import { CircleDot } from "lucide-react";

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative py-24 min-h-screen flex items-center overflow-hidden">
      {/* Semi-transparent overlay to make the global video bg more visible in this section */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="text-center mb-16"
        >
          <Badge icon={<CircleDot size={14} />}>Tech Arsenal</Badge>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Tools & <span className="text-text-secondary font-normal">Technologies</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            The core robust technologies and tools I specialize in to build scalable and modern web applications.
          </p>
        </motion.div>

        {/* Categories Container */}
        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          {techStackData.map((categoryData, catIdx) => (
            <motion.div 
              key={categoryData.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: catIdx * 0.1 }}
            >
              {/* Category Header with Purple Line */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-5 bg-[#A855F7] rounded-full" />
                <h3 className="text-[#A855F7] text-sm font-bold tracking-widest uppercase">
                  {categoryData.category}
                </h3>
              </div>
              
              {/* Items Grid */}
              <div className="flex flex-wrap gap-4">
                {categoryData.items.map((item, itemIdx) => {
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 100, damping: 20, delay: catIdx * 0.1 + itemIdx * 0.05 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="flex flex-col items-center justify-center p-6 w-[130px] h-[130px] rounded-[16px] bg-[#0A0A0A]/60 border border-white/5 backdrop-blur-md hover:border-white/10 hover:bg-[#121212]/70 transition-all duration-300 group"
                    >
                      <div className="mb-4">
                        {item.icon === "fastapi" ? (
                          <svg viewBox="0 0 128 128" className="w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                            <path fill="#059669" d="M64 0a64 64 0 1 0 64 64A64.072 64.072 0 0 0 64 0zm0 124a60 60 0 1 1 60-60 60.068 60.068 0 0 1-60 60z" />
                            <path fill="#059669" d="M64 12A52 52 0 1 0 116 64 52.059 52.059 0 0 0 64 12zm0 100a48 48 0 1 1 48-48 48.054 48.054 0 0 1-48 48z" />
                            <path fill="#059669" d="M57.48 93.38a2 2 0 0 0 3.12 1.54l36.56-25.68A2 2 0 0 0 96 66.02H76.7V34.62a2 2 0 0 0-3.12-1.54L37.02 58.76a2 2 0 0 0 1.15 3.22h19.3v31.4z" />
                          </svg>
                        ) : item.icon === "nextjs" ? (
                          <div className="w-10 h-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] flex items-center justify-center">
                             <img src="/next.svg" alt="Next.js" className="w-full h-full object-contain brightness-0 invert" />
                          </div>
                        ) : item.icon === "groq" ? (
                          <svg viewBox="0 0 100 100" className="w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                            <circle cx="50" cy="50" r="50" fill="#F55036" />
                            <path fill="white" transform="translate(18, 16) scale(0.65)" d="M63 3.6V20.2C59 16.5 52.8 14 45.4 14C23.6 14 9.1 27.6 9.1 44.8C9.1 61.6 24 75 45.2 75C53.7 75 60.1 72.1 63.8 67.9V74.8C63.8 85.3 54.8 91.2 46.5 91.2C38.9 91.2 31.9 86.8 30.5 78.4H15.1C16.8 96 30 105 46.5 105C64.6 105 79.1 94.6 79.1 73.1V3.6H63ZM44.7 61.5C33 61.5 24.8 54 24.8 44.8C24.8 35.6 33.3 27.7 44.7 27.7C56.2 27.7 64 35.8 64 45.1C64 54 56.4 61.5 44.7 61.5Z"/>
                          </svg>
                        ) : (
                          <StackIcon 
                            name={item.icon} 
                            className={`w-10 h-10 transition-transform duration-300 group-hover:scale-110 ${
                              ['github', 'expressjs', 'nextjs', 'nextjs2'].includes(item.icon) ? 'drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] brightness-0 invert opacity-90' : ''
                            }`} 
                          />
                        )}
                      </div>
                      <span className="text-xs font-medium text-text-secondary tracking-wide">
                        {item.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
