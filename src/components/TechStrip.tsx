"use client";

import { motion, useReducedMotion } from "framer-motion";

interface TechTool {
  name: string;
  category: string;
  dotColor: string;
}

const tools: TechTool[] = [
  { name: "Next.js", category: "Full-Stack Web", dotColor: "#00e0ff" },
  { name: "React", category: "Modern UI", dotColor: "#61dafb" },
  { name: "Flutter", category: "iOS & Android", dotColor: "#8b5cf6" },
  { name: "Tailwind CSS", category: "Design Systems", dotColor: "#38bdf8" },
  { name: "Firebase", category: "Realtime Backend", dotColor: "#f59e0b" },
  { name: "Supabase", category: "Database & Auth", dotColor: "#10b981" },
  { name: "Python", category: "Automation & APIs", dotColor: "#3b82f6" },
  { name: "Vercel", category: "Cloud Hosting", dotColor: "#a855f7" },
];

export default function TechStrip() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="relative py-12 md:py-16 border-y border-white/5 bg-[#07080c]/60 backdrop-blur-sm overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-24 bg-[#00e0ff]/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-24 bg-[#8b5cf6]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Subtle header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8"
        >
          <span className="font-mono text-[11px] sm:text-xs text-zinc-400 uppercase tracking-widest">
            Tools & Platforms We Build With
          </span>
        </motion.div>

        {/* Clean client-facing badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: shouldReduce ? 0 : 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative px-4 py-2.5 rounded-full border border-white/10 bg-[#090a0f]/80 backdrop-blur-md hover:border-[#00e0ff]/40 hover:bg-[#00e0ff]/[0.04] transition-all duration-300 flex items-center gap-2.5 shadow-sm hover:shadow-[0_0_15px_rgba(0,224,255,0.12)] cursor-default"
            >
              <span
                className="w-2 h-2 rounded-full transition-transform group-hover:scale-125"
                style={{ backgroundColor: tool.dotColor }}
              />
              <span className="font-mono text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                {tool.name}
              </span>
              <span className="font-mono text-[10px] text-zinc-500 group-hover:text-zinc-400 transition-colors hidden sm:inline">
                • {tool.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

