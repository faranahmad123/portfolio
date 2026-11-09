"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { PROFILE_IMAGE } from "@/lib/assets";
import { siteConfig } from "@/data/site";
import SectionHeading from "./SectionHeading";

const agencyHighlights = [
  {
    title: "Websites",
    items: ["Next.js", "React", "Tailwind"],
    icon: "🌐",
  },
  {
    title: "Mobile Apps",
    items: ["Flutter", "Firebase"],
    icon: "📱",
  },
  {
    title: "Automation",
    items: ["Python", "APIs", "Workflows"],
    icon: "⚙️",
  },
  {
    title: "Social Media",
    items: ["Content", "Scheduling", "Growth"],
    icon: "📈",
  },
];

export default function About() {
  const shouldReduce = useReducedMotion();
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <SectionHeading
          number="01"
          label="Who We Are"
          subtitle="Behind DevNest."
        />

        <div className="mt-12 sm:mt-16 grid lg:grid-cols-3 gap-8 sm:gap-10">
          {/* Profile Card column */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduce ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center w-full"
          >
            {/* Tall / portrait photo card (aspect-[4/5] ratio, full-bleed, edge-to-edge) */}
            <div className="relative w-full max-w-[280px] min-[375px]:max-w-[320px] sm:max-w-[340px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-[#090a0f] shadow-2xl shadow-[#00e0ff]/5 group mx-auto">
              {/* Full-bleed Photo using next/image with fill */}
              {!imgError ? (
                <Image
                  src={PROFILE_IMAGE}
                  alt={`${siteConfig.founderName} — Founder, ${siteConfig.brandName}`}
                  fill
                  sizes="(max-width: 640px) 320px, 340px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105 select-none pointer-events-none"
                  onError={() => setImgError(true)}
                />
              ) : (
                /* Graceful fallback if image fails to load */
                <div className="w-full h-full bg-gradient-to-br from-[#00e0ff]/20 via-[#8b5cf6]/20 to-[#07080c] flex items-center justify-center">
                  <span className="text-6xl font-bold gradient-text opacity-40 select-none">DN</span>
                </div>
              )}

              {/* Top dark gradient scrim for upper badges */}
              <div className="absolute top-0 inset-x-0 h-24 sm:h-28 bg-gradient-to-b from-[#07080c]/90 via-[#07080c]/45 to-transparent pointer-events-none z-10" />

              {/* Bottom dark gradient scrim for role tag pills */}
              <div className="absolute bottom-0 inset-x-0 h-32 sm:h-36 bg-gradient-to-t from-[#07080c] via-[#07080c]/80 to-transparent pointer-events-none z-10" />

              {/* Top-left: circular icon badge */}
              <div className="absolute top-3.5 sm:top-4 left-3.5 sm:left-4 z-20 w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#00e0ff] shadow-lg">
                <svg className="w-4 h-4 text-[#00e0ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 004 11m0 0a8 8 0 00.5 2.75" />
                </svg>
              </div>

              {/* Top-right: "Taking new projects" pill badge */}
              <div className="absolute top-3.5 sm:top-4 right-3.5 sm:right-4 z-20 flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-emerald-500/30 shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] font-medium text-emerald-300">
                  Taking new projects
                </span>
              </div>

              {/* Bottom overlay: role tag pills directly on the photo */}
              <div className="absolute bottom-3.5 sm:bottom-4 inset-x-3 sm:inset-x-4 z-20 flex flex-wrap gap-1.5 sm:gap-2 justify-center">
                {["Websites", "Apps", "Automation"].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] sm:text-[11px] px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/15 text-white/90 bg-black/60 backdrop-blur-md shadow-sm transition-colors hover:border-[#00e0ff]/40 hover:text-[#00e0ff]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Below the photo card: Name, Title & Location */}
            <div className="text-center mt-4 flex flex-col items-center">
              <h3 className="text-white font-bold text-xl">{siteConfig.founderName}</h3>
              <p className="font-mono text-xs text-[#00e0ff] mt-0.5">
                Founder, {siteConfig.brandName}
              </p>
              <p className="font-mono text-xs text-zinc-400 mt-1">
                Pakistan • Serving clients worldwide
              </p>
            </div>
          </motion.div>

          {/* About text + highlights */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-zinc-300 text-sm sm:text-base leading-relaxed"
              >
                DevNest is a digital agency that turns business ideas into
                working products. We build high-performance websites and mobile
                apps, automate manual processes with smart workflows, and manage
                social media accounts so brands stay active and grow. We work
                with small businesses, startups and local brands, and we deliver
                on time with clear communication.
              </motion.p>
            </div>

            {/* 4 mini highlight cards (1 col on mobile, 2 cols on sm+) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {agencyHighlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="glass-card p-4 sm:p-5 group hover:border-[#00e0ff]/20 transition-all"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
                    <span className="text-lg sm:text-xl">{h.icon}</span>
                    <h4 className="text-white font-semibold text-sm">
                      {h.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {h.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-[9px] sm:text-[10px] px-2 py-1 rounded-md border border-white/5 text-zinc-400 bg-white/[0.02]"
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
              className="glass-card p-5 sm:p-6 border-l-2 border-l-[#00e0ff]/30"
            >
              <p className="text-zinc-200 italic text-sm sm:text-base leading-relaxed">
                &ldquo;We don&apos;t just deliver projects, we build the digital
                systems your business grows on.&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/10 shrink-0 bg-[#090a0f]">
                  <Image
                    src={PROFILE_IMAGE}
                    alt={siteConfig.founderName}
                    width={36}
                    height={36}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">
                    {siteConfig.founderName}
                  </p>
                  <p className="font-mono text-[10px] text-zinc-400">
                    Founder, {siteConfig.brandName}
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
