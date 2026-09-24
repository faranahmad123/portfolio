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
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#07080c]"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          onClick={skip}
          role="dialog"
          aria-label="Loading intro"
        >
          {/* Skip button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              skip();
            }}
            className="absolute top-6 right-6 z-10 font-mono text-xs text-zinc-500 hover:text-[#00e0ff] transition-colors border border-zinc-800 hover:border-[#00e0ff]/30 rounded-lg px-4 py-2"
            aria-label="Skip intro"
          >
            SKIP →
          </button>

          <div className="flex flex-col items-center gap-8 px-6 max-w-md w-full">
            {/* Status bar */}
            <div className="w-full flex items-center justify-between font-mono text-[11px] text-zinc-600">
              <span>9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-2 rounded-sm bg-zinc-700" />
                <div className="w-4 h-2 rounded-sm bg-zinc-700" />
                <div className="w-4 h-2 rounded-sm bg-zinc-800" />
              </div>
            </div>

            {/* Name reveal */}
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-display)] tracking-tight">
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
                  className="mt-4 font-mono text-sm text-zinc-500"
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
              <p className="text-right font-mono text-[10px] text-zinc-700 mt-1">
                {progress}%
              </p>
            </div>

            {/* Role chips */}
            <div className="flex gap-3 flex-wrap justify-center">
              {roles.map((role, i) => (
                <span
                  key={role}
                  className={`font-mono text-[10px] px-3 py-1 rounded-full border transition-all duration-300 ${
                    i === roleIndex
                      ? "border-[#00e0ff]/40 text-[#00e0ff] bg-[#00e0ff]/5"
                      : "border-zinc-800 text-zinc-600"
                  }`}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
