"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ChevronDown, Zap } from "lucide-react";
import { services } from "@/data/services";
import SectionHeading from "./SectionHeading";

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const shouldReduce = useReducedMotion();

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          number="03"
          label="Offerings"
          subtitle="What I do."
        />

        <div className="mt-16 space-y-4">
          {services.map((service, i) => {
            const isExpanded = expandedIndex === i;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass-card overflow-hidden transition-all duration-300 ${
                  isExpanded ? "border-[#00e0ff]/20" : ""
                }`}
              >
                {/* Header - clickable */}
                <button
                  onClick={() =>
                    setExpandedIndex(isExpanded ? null : i)
                  }
                  className="w-full px-6 py-5 flex items-center gap-6 text-left group"
                  aria-expanded={isExpanded}
                >
                  <span className="font-mono text-3xl md:text-4xl font-bold text-white/10 group-hover:text-[#00e0ff]/30 transition-colors">
                    {service.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg md:text-xl">
                      {service.title}
                    </h3>
                    <p className="text-zinc-500 text-sm mt-1 hidden sm:block">
                      {service.description}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-zinc-600"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                {/* Expanded content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-zinc-500 text-sm mb-4 sm:hidden">
                          {service.description}
                        </p>

                        {/* Key Capabilities */}
                        <div className="mb-4">
                          <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-3">
                            Key Capabilities
                          </p>
                          <ul className="space-y-2">
                            {service.capabilities.map((cap) => (
                              <li
                                key={cap}
                                className="flex items-start gap-2 text-zinc-400 text-sm"
                              >
                                <Zap
                                  size={14}
                                  className="text-[#00e0ff] mt-0.5 shrink-0"
                                />
                                {cap}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech stack row */}
                        <div className="flex flex-wrap gap-2">
                          {service.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="font-mono text-[10px] px-3 py-1 rounded-full border border-[#00e0ff]/15 text-[#00e0ff]/70 bg-[#00e0ff]/5"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Animated efficiency bar (first card only) */}
                        {i === 0 && (
                          <div className="mt-4 p-3 rounded-lg border border-white/5 bg-white/[0.02]">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-mono text-[10px] text-zinc-600">
                                Efficiency Score
                              </span>
                              <span className="font-mono text-[10px] text-emerald-400">
                                95%
                              </span>
                            </div>
                            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "95%" }}
                                transition={{
                                  duration: 1.2,
                                  ease: "easeOut",
                                  delay: 0.3,
                                }}
                                className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-[#00e0ff]"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
