"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface IntroProps {
  onComplete: () => void;
}

const ROLES = [
  "Frontend Developer",
  "DevOps Engineer",
  "Flutter Developer",
];

const NAME = "Faran Ahmad";
const NAME_LETTERS = Array.from(NAME);

export default function Intro({ onComplete }: IntroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const hasFinishedRef = useRef(false);
  const shouldReduceMotion = useReducedMotion();

  // Safely trigger exit sequence only once
  const handleSkip = useCallback(() => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    onComplete();
  }, [onComplete]);

  // Reduced motion: fast path straight to hero
  useEffect(() => {
    if (shouldReduceMotion) {
      handleSkip();
    }
  }, [shouldReduceMotion, handleSkip]);

  // Lock body scroll while intro is visible; unlock immediately upon unmount
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Cycle roles every ~1.2 seconds
  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 1200);
    return () => clearInterval(roleTimer);
  }, []);

  // Auto-finish after ~3.5 seconds
  useEffect(() => {
    const autoTimer = setTimeout(() => {
      handleSkip();
    }, 3500);
    return () => clearTimeout(autoTimer);
  }, [handleSkip]);

  // Accessibility: Allow keyboard users to press Escape or Space to skip
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " ") {
        e.preventDefault();
        handleSkip();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleSkip]);

  // Framer Motion staggered letter reveal variants (~50ms delay between letters)
  const nameContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.15,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      key="portfolio-intro-overlay"
      className="fixed inset-0 z-[9999] w-screen h-screen bg-[#07080c] overflow-hidden flex flex-col justify-between items-center select-none cursor-pointer"
      initial={{ opacity: 1, y: 0 }}
      exit={{
        y: "-100%",
        transition: {
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1], // Smooth curtain slide-up
        },
      }}
      onClick={handleSkip}
      role="dialog"
      aria-label="Portfolio introductory loading sequence"
    >
      {/* Background ambient glow behind center name */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full bg-[#00e0ff]/10 blur-[120px] -z-10"
      />

      {/* TOP BAR: Mock phone status bar ("9:41" left) + Fixed "Skip" button (right) */}
      <header className="w-full max-w-6xl px-5 sm:px-8 pt-5 sm:pt-7 flex items-center justify-between pointer-events-none z-10">
        {/* Phone status bar */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-zinc-400">
            9:41
          </span>
          {/* Mock status icons (Cellular signal + Battery) */}
          <div className="flex items-center gap-1.5 opacity-60">
            <div className="flex items-end gap-[2px] h-2.5">
              <div className="w-[2px] h-1 bg-zinc-400 rounded-[0.5px]" />
              <div className="w-[2px] h-1.5 bg-zinc-400 rounded-[0.5px]" />
              <div className="w-[2px] h-2 bg-zinc-400 rounded-[0.5px]" />
              <div className="w-[2px] h-2.5 bg-zinc-400 rounded-[0.5px]" />
            </div>
            <div className="w-4 h-2 rounded-[2px] border border-zinc-500 p-[1px] flex items-center relative">
              <div className="w-2.5 h-full bg-zinc-400 rounded-[0.5px]" />
              <div className="w-[1.5px] h-1 bg-zinc-500 rounded-r-[0.5px] absolute -right-[2.5px] top-[2px]" />
            </div>
          </div>
        </div>

        {/* Visible Skip button fixed to top-right corner (Interactive, Keyboard Accessible) */}
        <div className="pointer-events-auto">
          <button
            type="button"
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation();
              handleSkip();
            }}
            className="group relative font-mono text-xs sm:text-sm text-zinc-300 hover:text-white transition-all duration-200 border border-zinc-800 hover:border-[#00e0ff]/50 bg-black/50 hover:bg-[#00e0ff]/10 backdrop-blur-md rounded-full px-4 sm:px-5 py-2 min-h-[44px] min-w-[44px] flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00e0ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080c] cursor-pointer shadow-lg shadow-black/40"
            aria-label="Skip introduction sequence"
          >
            <span className="tracking-widest font-medium">SKIP</span>
            <span
              aria-hidden="true"
              className="text-[#00e0ff] transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </button>
        </div>
      </header>

      {/* CENTER: Name letter-by-letter reveal + Rotating role tagline */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 w-full max-w-4xl -mt-4">
        {/* Name reveal: Staggered Framer Motion character animation */}
        <motion.h1
          variants={nameContainerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight font-[family-name:var(--font-display)] flex items-center justify-center flex-wrap select-none"
        >
          {NAME_LETTERS.map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={letterVariants}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Rotating role tagline: crossfading every ~1.2s */}
        <div className="h-8 sm:h-10 flex items-center justify-center mt-3 sm:mt-5 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={roleIndex}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              className="flex items-center gap-2.5 font-mono text-xs sm:text-sm md:text-base text-zinc-400"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00e0ff] shadow-[0_0_8px_#00e0ff]" />
              <span className="tracking-wide uppercase font-medium text-zinc-300">
                {ROLES[roleIndex]}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] shadow-[0_0_8px_#8b5cf6]" />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* BOTTOM THIRD: Smooth Continuous Progress Bar + Skip prompt */}
      <footer className="w-full max-w-sm px-6 pb-10 sm:pb-14 flex flex-col items-center">
        {/* Thin progress bar animating smoothly from 0% to 100% */}
        <div className="w-full h-[2px] bg-zinc-800/80 rounded-full overflow-hidden relative shadow-inner">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[#00e0ff] via-[#8b5cf6] to-[#00e0ff]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 3.4,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Status indicator & click to skip hint */}
        <div className="w-full flex items-center justify-between mt-3 font-mono text-[10px] sm:text-[11px] text-zinc-500">
          <span className="tracking-wider uppercase text-zinc-500">
            SYSTEM INITIALIZING
          </span>
          <span className="text-zinc-500 tracking-wider">
            TAP ANYWHERE TO SKIP
          </span>
        </div>
      </footer>
    </motion.div>
  );
}
