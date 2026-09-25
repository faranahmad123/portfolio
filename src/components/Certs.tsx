"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certificates } from "@/data/certificates";
import SectionHeading from "./SectionHeading";

export default function Certs() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="certs" className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <SectionHeading
          number="06"
          label="Verified Credentials"
          subtitle="Professional Exhibits."
        />

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-5 sm:p-6 group hover:border-[#00e0ff]/20 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Official Record label */}
                <div className="absolute top-4 right-4">
                  <span className="font-mono text-[9px] px-2 py-0.5 sm:py-1 rounded-full border border-emerald-500/20 text-emerald-400/80 bg-emerald-500/5 uppercase tracking-wider">
                    Official Record
                  </span>
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl border border-white/5 bg-white/[0.02] w-fit mb-4">
                  <Award
                    size={22}
                    className={
                      cert.type === "award"
                        ? "text-amber-400"
                        : "text-[#00e0ff]"
                    }
                  />
                </div>

                <h3 className="text-white font-bold text-sm sm:text-base pr-16 leading-snug">
                  {cert.title}
                </h3>
                <p className="font-mono text-[11px] text-zinc-400 mt-2">
                  {cert.issuer}
                </p>
                <p className="font-mono text-[10px] text-zinc-600 mt-1">
                  {cert.year}
                </p>
              </div>

              {/* View Document link with min 44px touch target on mobile */}
              <a
                href={cert.documentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 font-mono text-[11px] text-[#00e0ff]/80 hover:text-[#00e0ff] transition-colors min-h-[44px] py-2"
              >
                <ExternalLink size={14} />
                View Document
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
