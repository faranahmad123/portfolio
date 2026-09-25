"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroProps {
  onComplete: () => void;
}

const roles = ["Frontend", "DevOps", "Flutter"];

export default function Intro({ onComplete }: IntroProps) {
  const [progress, setProgress] = useState(0);
  const [nameRevealed, setNameRevealed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const fullName = "Faran Ahmad";

  const skip = useCallback(() => {
    setVisible(false);
    setTimeout(onComplete, 600);
  }, [onComplete]);

  // Name typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setNameRevealed(fullName.slice(0, i));
      if (i >= fullName.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  // Progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 2;
      });
    }, 70);
    return () => clearInterval(interval);
  }, []);

  // Role rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  // Auto-finish after ~3.5s
  useEffect(() => {
    const timer = setTimeout(skip, 3500);
    return () => clearTimeout(timer);
  }, [skip]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#07080c] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          onClick={skip}
          role="dialog"
          aria-label="Loading intro"
        >
          {/* Skip button (min 44px tap target) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              skip();
            }}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 font-mono text-xs text-zinc-400 hover:text-[#00e0ff] transition-colors border border-zinc-800 hover:border-[#00e0ff]/30 rounded-lg px-4 py-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center bg-black/40"
            aria-label="Skip intro"
          >
            SKIP →
          </button>

          <div className="flex flex-col items-center gap-6 sm:gap-8 px-4 sm:px-6 max-w-md w-full">
            {/* Status bar */}
            <div className="w-full flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-zinc-500">
              <span>9:41</span>
              <div className="flex gap-1">
                <div className="w-3.5 sm:w-4 h-2 rounded-xs bg-zinc-700" />
                <div className="w-3.5 sm:w-4 h-2 rounded-xs bg-zinc-700" />
                <div className="w-3.5 sm:w-4 h-2 rounded-xs bg-zinc-800" />
              </div>
            </div>

            {/* Name reveal with responsive font sizes */}
            <div className="text-center w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-display)] tracking-tight">
                {nameRevealed}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                  className="text-[#00e0ff]"
                >
                  |
                </motion.span>
              </h1>

              {/* Rotating role */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 sm:mt-4 font-mono text-xs sm:text-sm text-zinc-400"
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Progress bar */}
            <div className="w-full max-w-xs">
              <div className="h-[2px] w-full bg-zinc-900 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #00e0ff, #8b5cf6)",
                    width: `${progress}%`,
                  }}
                  transition={{ ease: "linear" }}
                />
              </div>
              <p className="text-right font-mono text-[10px] text-zinc-600 mt-1">
                {progress}%
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
