"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PROFILE_IMAGE, RESUME_PATH } from "@/lib/assets";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    title: "Frontend",
    items: ["React", "Angular", "TypeScript"],
    icon: "🖥️",
  },
  {
    title: "Cross-Platform",
    items: ["Flutter", "Dart"],
    icon: "📱",
  },
  {
    title: "DevOps",
    items: ["Docker", "Git/GitHub"],
    icon: "⚙️",
  },
  {
    title: "Backend & AI",
    items: ["Python", "TensorFlow", "Flask", "OpenCV"],
    icon: "🧠",
  },
];

export default function About() {
  const shouldReduce = useReducedMotion();
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          number="01"
          label="The Architect"
          subtitle="Behind the code."
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {/* Profile Card column */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduce ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Tall / portrait photo card (aspect-[4/5] ratio, full-bleed, edge-to-edge) */}
            <div className="relative w-full max-w-[340px] sm:max-w-none aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-[#090a0f] shadow-2xl shadow-[#00e0ff]/5 group">
              {/* Full-bleed Photo */}
              {!imgError ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={PROFILE_IMAGE}
                  alt="Faran Ahmad"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 select-none pointer-events-none"
                  onError={() => setImgError(true)}
                />
              ) : (
                /* Graceful fallback if image fails to load */
                <div className="w-full h-full bg-gradient-to-br from-[#00e0ff]/20 via-[#8b5cf6]/20 to-[#07080c] flex items-center justify-center">
                  <span className="text-6xl font-bold gradient-text opacity-40 select-none">FA</span>
                </div>
              )}

              {/* Top dark gradient scrim for upper badges */}
              <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#07080c]/90 via-[#07080c]/45 to-transparent pointer-events-none z-10" />

              {/* Bottom dark gradient scrim for role tag pills */}
              <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#07080c] via-[#07080c]/80 to-transparent pointer-events-none z-10" />

              {/* Top-left: circular icon badge */}
              <div className="absolute top-4 left-4 z-20 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#00e0ff] shadow-lg">
                <svg className="w-4 h-4 text-[#00e0ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 004 11m0 0a8 8 0 00.5 2.75" />
                </svg>
              </div>

              {/* Top-right: "Available for work" pill badge */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-emerald-500/30 shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="font-mono text-[10px] font-medium text-emerald-300">
                  Available for work
                </span>
              </div>

              {/* Bottom overlay: role tag pills directly on the photo */}
              <div className="absolute bottom-4 inset-x-4 z-20 flex flex-wrap gap-2 justify-center">
                {["Frontend", "DevOps", "Mobile"].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-3 py-1 rounded-full border border-white/15 text-white/90 bg-black/60 backdrop-blur-md shadow-sm transition-colors hover:border-[#00e0ff]/40 hover:text-[#00e0ff]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Below the photo card (outside it, in normal flow): Name, Location & Resume */}
            <div className="text-center mt-4 flex flex-col items-center">
              <h3 className="text-white font-bold text-xl">Faran Ahmad</h3>
              <p className="font-mono text-xs text-zinc-400 mt-1">
                📍 Pakistan
              </p>
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-btn glow-btn-outline text-xs px-4 py-2 mt-3 inline-flex items-center gap-2 group"
              >
                <svg className="w-3.5 h-3.5 text-[#00e0ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
                <svg className="w-3 h-3 text-zinc-500 group-hover:text-[#00e0ff] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* About text + highlights */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-zinc-400 leading-relaxed"
              >
                Frontend-focused Software Engineer with hands-on internship
                experience building responsive React and Angular SPAs,
                cross-platform Flutter applications, and containerized
                deployments with Docker. Proven ability to integrate RESTful
                APIs, automate medical-report OCR pipelines (OpenCV &
                Tesseract), and collaborate in agile teams using Git/GitHub.
                Seeking a role where I can apply my full-stack frontend,
                mobile, and DevOps skills to deliver production-grade software.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="pt-1 flex flex-wrap gap-4 items-center"
              >
                <a
                  href={RESUME_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-btn glow-btn-primary text-xs inline-flex items-center gap-2 group"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Full Resume
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* 4 highlight cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="glass-card p-5 group hover:border-[#00e0ff]/20 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">{h.icon}</span>
                    <h4 className="text-white font-semibold text-sm">
                      {h.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {h.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-[10px] px-2 py-1 rounded-md border border-white/5 text-zinc-500 bg-white/[0.02]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-6 border-l-2 border-l-[#00e0ff]/30"
            >
              <p className="text-zinc-300 italic leading-relaxed">
                &ldquo;Great software connects clean code with real-world
                deployment.&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00e0ff]/30 to-[#8b5cf6]/30 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">FA</span>
                </div>
                <div>
                  <p className="text-white text-xs font-medium">Faran Ahmad</p>
                  <p className="font-mono text-[10px] text-zinc-600">
                    Creator
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
