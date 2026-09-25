"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { skills, concepts } from "@/data/skills";
import SectionHeading from "./SectionHeading";

export default function SkillInspector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSkill = skills[activeIndex];
  const shouldReduce = useReducedMotion();

  return (
    <section id="expertise" className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <SectionHeading
          number="02"
          label="Core Stack"
          subtitle="The toolkit."
        />

        <div className="mt-12 sm:mt-16 grid lg:grid-cols-[1fr_380px] gap-8">
          {/* Tile grid (2 cols on small mobile, 3 on 400px+, 4 on sm, 5 on md+) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 min-[400px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2.5 sm:gap-3"
          >
            {skills.map((skill, i) => (
              <button
                key={skill.name}
                onClick={() => setActiveIndex(i)}
                onMouseEnter={() => setActiveIndex(i)}
                className={`group glass-card p-3 sm:p-4 flex flex-col items-center justify-center gap-2 transition-all duration-300 cursor-pointer min-h-[56px] text-center ${
                  i === activeIndex
                    ? "!border-[#00e0ff]/40 shadow-lg shadow-[#00e0ff]/5"
                    : "hover:border-white/10"
                }`}
                aria-label={`View details for ${skill.name}`}
              >
                <span className="text-xl sm:text-2xl">{skill.icon}</span>
                <span className="font-mono text-[9px] sm:text-[10px] text-zinc-400 group-hover:text-white transition-colors text-center leading-tight line-clamp-2">
                  {skill.name}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Inspector panel (stacks below grid on mobile, sticky on lg) */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduce ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-5 sm:p-6 lg:sticky lg:top-24 h-fit"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                System Inspector
              </span>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <span className="font-mono text-[10px] text-zinc-500">
                  NAME
                </span>
                <p className="text-white font-bold text-lg sm:text-xl mt-0.5">
                  {activeSkill.name}
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] text-zinc-500">
                  CATEGORY
                </span>
                <p className="font-mono text-xs sm:text-sm text-[#00e0ff] mt-0.5">
                  {activeSkill.category}
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] text-zinc-500">
                  DESCRIPTION
                </span>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mt-1">
                  {activeSkill.description}
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] text-zinc-500">
                  PROFICIENCY
                </span>
                <div className="mt-2 flex items-center gap-3">
                  <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      key={activeSkill.name}
                      initial={{ width: 0 }}
                      animate={{
                        width:
                          activeSkill.proficiency === "High" ? "90%" : "65%",
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-[#00e0ff] to-[#8b5cf6]"
                    />
                  </div>
                  <span
                    className={`font-mono text-[10px] font-medium ${
                      activeSkill.proficiency === "High"
                        ? "text-emerald-400"
                        : "text-amber-400"
                    }`}
                  >
                    {activeSkill.proficiency}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Concept chips */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-12 flex flex-wrap gap-2 sm:gap-3"
        >
          {concepts.map((concept) => (
            <span
              key={concept}
              className="font-mono text-[10px] sm:text-[11px] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/5 text-zinc-400 bg-white/[0.02] hover:border-[#8b5cf6]/30 hover:text-[#8b5cf6] transition-all duration-300"
            >
              {concept}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
