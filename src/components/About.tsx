"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const agencyHighlights = [
  {
    title: "Websites",
    items: ["Next.js", "React", "Tailwind"],
    icon: "🌐",
    desc: "Fast, modern storefronts & platforms",
  },
  {
    title: "Mobile Apps",
    items: ["Flutter", "Firebase", "iOS & Android"],
    icon: "📱",
    desc: "Cross-platform mobile applications",
  },
  {
    title: "Automation",
    items: ["Python", "APIs", "Smart Workflows"],
    icon: "⚙️",
    desc: "Save hours on repetitive business tasks",
  },
  {
    title: "Social Media",
    items: ["Content", "Scheduling", "Brand Growth"],
    icon: "📈",
    desc: "Active profiles & engaged audiences",
  },
];

export default function About() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="about" className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <SectionHeading
          number="03"
          label="Who We Are"
          subtitle="Behind DevNest."
        />

        <div className="mt-12 sm:mt-16 max-w-4xl">
          {/* Focused founder bio paragraph */}
          <motion.p
            initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-zinc-300 text-base sm:text-lg md:text-xl leading-relaxed font-normal"
          >
            DevNest helps businesses grow online — from fast, modern websites
            and mobile apps to automation that saves you hours every week, and
            social media management that keeps your brand active. We work
            closely with small businesses, startups and local brands, and
            deliver on time with clear communication.
          </motion.p>

          {/* 4 clean mini highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 sm:mt-12">
            {agencyHighlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="glass-card p-5 group hover:border-[#00e0ff]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="text-xl sm:text-2xl">{h.icon}</span>
                    <h4 className="text-white font-bold text-base">
                      {h.title}
                    </h4>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                    {h.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {h.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-[9px] sm:text-[10px] px-2 py-0.5 rounded-md border border-white/5 text-zinc-400 bg-white/[0.02] group-hover:border-[#00e0ff]/20 group-hover:text-zinc-300 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
