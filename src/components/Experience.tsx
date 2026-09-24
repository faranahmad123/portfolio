"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience, education } from "@/data/experience";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          number="04.5"
          label="Timeline"
          subtitle="Experience & Education."
        />

        <div className="mt-16 space-y-8">
          {/* Experience cards */}
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: shouldReduce ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-6 md:p-8 relative overflow-hidden"
            >
              {/* Accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00e0ff] to-[#8b5cf6]" />

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02] shrink-0">
                  <Briefcase size={20} className="text-[#00e0ff]" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        {exp.role}
                      </h3>
                      <p className="font-mono text-sm text-zinc-500">
                        {exp.company} — {exp.location}{" "}
                        <span className="text-zinc-700">({exp.type})</span>
                      </p>
                    </div>
                    <span className="font-mono text-[11px] text-[#00e0ff]/70 px-3 py-1 rounded-full border border-[#00e0ff]/15 bg-[#00e0ff]/5 whitespace-nowrap w-fit">
                      {exp.period}
                    </span>
                  </div>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tools.map((tool) => (
                      <span
                        key={tool}
                        className="font-mono text-[10px] px-2 py-1 rounded-md border border-white/5 text-zinc-600 bg-white/[0.02]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-zinc-400 text-sm"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#00e0ff]/50 mt-2 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 md:p-8 relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#8b5cf6] to-[#00e0ff]" />

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02] shrink-0">
                <GraduationCap size={20} className="text-[#8b5cf6]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">
                  {education.degree}
                </h3>
                <p className="font-mono text-sm text-zinc-500 mt-1">
                  {education.institution} — {education.campus}
                </p>
                <div className="flex flex-wrap gap-4 mt-3">
                  <span className="font-mono text-[11px] text-zinc-400">
                    🎓 Graduated {education.graduated}
                  </span>
                  <span className="font-mono text-[11px] text-emerald-400">
                    CGPA {education.cgpa}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
