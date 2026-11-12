"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Compass, PenTool, Code2, Rocket } from "lucide-react";
import { processSteps } from "@/data/process";
import SectionHeading from "./SectionHeading";

const stepIcons = [Compass, PenTool, Code2, Rocket];

export default function HowWeWork() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="process" className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <SectionHeading
          number="04"
          label="Process"
          subtitle="How we work."
        />

        <div className="mt-12 sm:mt-16 space-y-6">
          {processSteps.map((step, i) => {
            const Icon = stepIcons[i % stepIcons.length];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: shouldReduce ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="glass-card p-4 sm:p-6 md:p-8 relative overflow-hidden"
              >
                {/* Accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00e0ff] to-[#8b5cf6]" />

                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="p-2.5 sm:p-3 rounded-xl border border-white/5 bg-white/[0.02] shrink-0">
                    <Icon size={20} className="text-[#00e0ff]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-2 mb-2">
                      <div>
                        <h3 className="text-white font-bold text-base sm:text-lg">
                          {i + 1}. {step.title}
                        </h3>
                        <p className="font-mono text-xs sm:text-sm text-zinc-400">
                          {step.subtitle}
                        </p>
                      </div>
                      <span className="font-mono text-[10px] sm:text-[11px] text-[#00e0ff]/80 px-2.5 sm:px-3 py-1 rounded-full border border-[#00e0ff]/15 bg-[#00e0ff]/5 w-fit">
                        Step {step.step}
                      </span>
                    </div>

                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                      {step.description}
                    </p>

                    {/* Deliverables */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {step.deliverables.map((item) => (
                        <span
                          key={item}
                          className="font-mono text-[9px] sm:text-[10px] px-2.5 py-1 rounded-md border border-white/5 text-zinc-400 bg-white/[0.02]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

