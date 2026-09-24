"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PROFILE_IMAGE } from "@/lib/assets";
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
    items: ["Flask", "Python", "OpenCV", "OCR"],
    icon: "🧠",
  },
];

function AvatarFallback() {
  return (
    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#00e0ff]/20 via-[#8b5cf6]/20 to-[#07080c] flex items-center justify-center">
      <span className="text-5xl font-bold gradient-text">FA</span>
    </div>
  );
}

export default function About() {
  const shouldReduce = useReducedMotion();

  const isValidImage =
    PROFILE_IMAGE && !PROFILE_IMAGE.includes("YOUR_") && PROFILE_IMAGE.length > 5;

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          number="01"
          label="The Architect"
          subtitle="Behind the code."
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduce ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 flex flex-col items-center text-center"
          >
            <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-white/10 mb-4">
              {isValidImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={PROFILE_IMAGE}
                  alt="Faran Ahmad"
                  className="w-full h-full object-cover"
                />
              ) : (
                <AvatarFallback />
              )}
            </div>
            <h3 className="text-white font-bold text-lg">Faran Ahmad</h3>
            <p className="font-mono text-xs text-zinc-500 mt-1">
              📍 Pakistan
            </p>
            <div className="flex gap-2 mt-4 flex-wrap justify-center">
              {["Frontend", "DevOps", "Mobile"].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] px-3 py-1 rounded-full border border-[#00e0ff]/20 text-[#00e0ff]/80 bg-[#00e0ff]/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* About text + highlights */}
          <div className="lg:col-span-2 space-y-8">
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
