"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { PROFILE_IMAGE } from "@/lib/assets";

const CYCLE_MS = 3500;

const taglines = [
  "Turning requirements into scalable code.",
  "Bridging design and deployment.",
  "Clean code. Real-world impact.",
];

const stackTags = [
  { label: "Frontend", desc: "React • Angular", color: "text-[#00e0ff]", border: "border-[#00e0ff]/30 bg-black/60" },
  { label: "DevOps", desc: "Docker • CI/CD", color: "text-[#8b5cf6]", border: "border-[#8b5cf6]/30 bg-black/60" },
  { label: "Mobile", desc: "Flutter • Dart", color: "text-emerald-400", border: "border-emerald-400/30 bg-black/60" },
  { label: "AI / ML", desc: "Python • OpenCV", color: "text-amber-400", border: "border-amber-400/30 bg-black/60" },
];

const floatingChips = [
  { label: "React", top: "10%", left: "-14%", right: "auto", delay: 0 },
  { label: "Angular", top: "32%", left: "auto", right: "-16%", delay: 0.5 },
  { label: "Flutter", top: "58%", left: "-12%", right: "auto", delay: 1 },
  { label: "Docker", top: "80%", left: "auto", right: "-14%", delay: 1.5 },
];

export default function PhoneMockup() {
  const shouldReduce = useReducedMotion();
  const [activeScreen, setActiveScreen] = useState(0);
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [imgError, setImgError] = useState(false);
  const totalScreens = 3;

  const advance = useCallback(() => {
    setActiveScreen((prev) => {
      const next = (prev + 1) % totalScreens;
      if (next === 2) setTaglineIdx((t) => (t + 1) % taglines.length);
      return next;
    });
  }, [totalScreens]);

  useEffect(() => {
    if (shouldReduce || paused) return;
    const interval = setInterval(advance, CYCLE_MS);
    return () => clearInterval(interval);
  }, [shouldReduce, paused, advance]);

  const slideVariants = {
    enter: { opacity: 0, y: shouldReduce ? 0 : 15, scale: 0.98 },
    center: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: shouldReduce ? 0 : -15, scale: 0.98 },
  };

  return (
    <div
      className="relative flex justify-center select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Floating tech chips — drifting gently in background */}
      {floatingChips.map((chip) => (
        <motion.span
          key={chip.label}
          className="absolute font-mono text-[10px] px-3 py-1 rounded-full border border-white/10 bg-[#07080c]/85 text-zinc-400 backdrop-blur-md hidden lg:block z-0 shadow-lg pointer-events-none"
          style={{
            top: chip.top,
            left: chip.left,
            right: chip.right,
          }}
          animate={
            shouldReduce
              ? {}
              : {
                  y: [0, -10, 0],
                  transition: {
                    repeat: Infinity,
                    duration: 4 + chip.delay,
                    ease: "easeInOut",
                    delay: chip.delay,
                  },
                }
          }
        >
          {chip.label}
        </motion.span>
      ))}

      {/* Realistic Phone Frame: ~9:19 ratio with ~8-10px slim black bezel */}
      <div className="relative w-[280px] sm:w-[320px] md:w-[340px] h-[580px] sm:h-[640px] md:h-[670px] rounded-[2.8rem] sm:rounded-[3.2rem] bg-[#07080c] p-[8px] sm:p-[10px] shadow-2xl shadow-[#00e0ff]/10 border border-white/15 ring-1 ring-white/5 flex flex-col justify-between z-10">
        
        {/* Phone screen container (Full-bleed content with rounded inner display) */}
        <div className="relative w-full flex-1 rounded-[2.2rem] sm:rounded-[2.5rem] overflow-hidden bg-[#07080c]">
          
          {/* Full-bleed Photo: Edge-to-edge top of frame to bottom of frame */}
          {!imgError ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={PROFILE_IMAGE}
              alt="Faran Ahmad"
              className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none"
              onError={() => setImgError(true)}
            />
          ) : (
            /* Graceful fallback if image fails to load */
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#00e0ff]/20 via-[#8b5cf6]/20 to-[#07080c] flex items-center justify-center">
              <span className="text-7xl font-bold gradient-text opacity-30 select-none">FA</span>
            </div>
          )}

          {/* Top dark gradient scrim for notch & status bar legibility */}
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#07080c]/85 via-[#07080c]/40 to-transparent pointer-events-none z-10" />

          {/* Bottom dark gradient overlay: transparent at top -> solid dark at bottom */}
          <div className="absolute bottom-0 inset-x-0 h-[65%] bg-gradient-to-t from-[#07080c] via-[#07080c]/85 via-50% to-transparent pointer-events-none z-10" />

          {/* Top Notch / Speaker Bar */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 h-4.5 w-24 rounded-full bg-black/95 border border-white/10 flex items-center justify-between px-3 pointer-events-none">
            <div className="w-2.5 h-2.5 rounded-full bg-[#151515] border border-white/5 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-blue-500/60" />
            </div>
            <div className="w-8 h-1 rounded-full bg-white/10" />
          </div>

          {/* "9:41" Status Bar */}
          <div className="absolute top-3 inset-x-0 px-6 flex items-center justify-between text-[11px] font-semibold text-white/90 z-20 pointer-events-none">
            <span>9:41</span>
            <div className="flex items-center gap-1.5 opacity-90">
              {/* Cellular Signal Icon */}
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M2 17h2v4H2zm4-3h2v7H6zm4-3h2v10h-2zm4-3h2v13h-2zm4-3h2v16h-2z" />
              </svg>
              {/* Wifi Icon */}
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4zm0 3.5c3.78 0 7.22 1.48 9.77 3.89L12 18.25 2.23 11.39C4.78 8.98 8.22 7.5 12 7.5z" />
              </svg>
              {/* Battery Icon */}
              <div className="flex items-center">
                <div className="w-5 h-2.5 rounded-xs border border-white/80 p-0.5 flex items-center">
                  <div className="w-full h-full bg-white rounded-[1px]" />
                </div>
                <div className="w-0.5 h-1 bg-white/80 rounded-r-xs ml-[0.5px]" />
              </div>
            </div>
          </div>

          {/* "Available for work" pulsing-dot badge — top-right pill */}
          <div className="absolute top-11 right-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-emerald-500/30 shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] font-medium text-emerald-300 tracking-wide">
              Available for work
            </span>
          </div>

          {/* Overlaid UI content directly on the photo inside bottom gradient area */}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-20 flex flex-col justify-end min-h-[220px]">
            <AnimatePresence mode="wait">
              {/* Screen 0: Lock-screen style widget with Name & Role */}
              {activeScreen === 0 && (
                <motion.div
                  key="screen-0"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                  className="w-full text-left"
                >
                  <div className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#00e0ff] tracking-wider uppercase bg-[#00e0ff]/10 border border-[#00e0ff]/20 px-2 py-0.5 rounded-full mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00e0ff]" />
                    Software Engineer
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-none">
                    Faran Ahmad
                  </h2>
                  <p className="text-xs sm:text-sm font-medium text-zinc-300 mt-1.5">
                    Software Engineer
                  </p>
                  <div className="mt-3 flex items-center gap-2 pt-2 border-t border-white/10 font-mono text-[10px] text-zinc-400">
                    <span>📍 Pakistan</span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-[#00e0ff]">React / Flutter</span>
                  </div>
                </motion.div>
              )}

              {/* Screen 1: Core Tech Stack pill chips overlaid directly on photo */}
              {activeScreen === 1 && (
                <motion.div
                  key="screen-1"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                  className="w-full text-left"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-[#8b5cf6] tracking-wider uppercase bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 px-2.5 py-0.5 rounded-full">
                      Core Stack
                    </span>
                    <span className="font-mono text-[10px] text-zinc-400">Production</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    {stackTags.map((tag) => (
                      <div
                        key={tag.label}
                        className={`p-2 sm:p-2.5 rounded-xl border backdrop-blur-md ${tag.border}`}
                      >
                        <p className={`font-mono text-[11px] font-semibold ${tag.color}`}>
                          {tag.label}
                        </p>
                        <p className="text-[10px] text-zinc-400 mt-0.5">{tag.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Screen 2: Philosophy / Tagline widget */}
              {activeScreen === 2 && (
                <motion.div
                  key="screen-2"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                  className="w-full text-left"
                >
                  <span className="inline-block font-mono text-[10px] text-emerald-400 tracking-wider uppercase bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-0.5 rounded-full mb-2">
                    Philosophy
                  </span>
                  <div className="p-3.5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
                    <p className="text-zinc-200 text-xs sm:text-[13px] leading-relaxed font-medium italic">
                      &ldquo;{taglines[taglineIdx]}&rdquo;
                    </p>
                    <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between font-mono text-[10px]">
                      <span className="text-zinc-400">Faran Ahmad</span>
                      <span className="text-[#00e0ff]">Ready to build</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom bezel area: pagination dots & home indicator bar */}
        <div className="pt-2 pb-1 flex flex-col items-center gap-2">
          {/* Pagination dots indicating multiple screens */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalScreens }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveScreen(i)}
                aria-label={`Go to screen ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeScreen
                    ? "w-5 bg-[#00e0ff] shadow-sm shadow-[#00e0ff]/50"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Realistic home indicator bar */}
          <div className="w-24 h-1 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  );
}
