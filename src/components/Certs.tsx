"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certificates } from "@/data/certificates";
import SectionHeading from "./SectionHeading";

export default function Certs() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="certs" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          number="05"
          label="Verified Credentials"
          subtitle="Professional Exhibits."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 group hover:border-[#00e0ff]/20 transition-all duration-300 relative overflow-hidden"
            >
              {/* Official Record label */}
              <div className="absolute top-4 right-4">
                <span className="font-mono text-[9px] px-2 py-1 rounded-full border border-emerald-500/20 text-emerald-400/70 bg-emerald-500/5 uppercase tracking-wider">
                  Official Record
                </span>
              </div>

              <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02] w-fit mb-4">
                <Award
                  size={24}
                  className={
                    cert.type === "award"
                      ? "text-amber-400"
                      : "text-[#00e0ff]"
                  }
                />
              </div>

              <h3 className="text-white font-bold text-sm pr-20 leading-snug">
                {cert.title}
              </h3>
              <p className="font-mono text-[11px] text-zinc-500 mt-2">
                {cert.issuer}
              </p>
              <p className="font-mono text-[10px] text-zinc-700 mt-1">
                {cert.year}
              </p>

              <a
                href={cert.documentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 font-mono text-[11px] text-[#00e0ff]/70 hover:text-[#00e0ff] transition-colors"
              >
                <ExternalLink size={12} />
                View Document
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
