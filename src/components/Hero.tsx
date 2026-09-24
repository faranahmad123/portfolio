"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  FileText,
} from "lucide-react";
import { socialLinks } from "@/data/navigation";
import { PROFILE_IMAGE } from "@/lib/assets";

const floatingChips = ["React", "Angular", "Flutter", "Docker"];

/** Gradient avatar fallback with initials */
function AvatarFallback() {
  return (
    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#00e0ff]/30 via-[#8b5cf6]/30 to-[#07080c] flex items-center justify-center">
      <span className="text-4xl font-bold gradient-text">FA</span>
    </div>
  );
}

export default function Hero() {
  const shouldReduce = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    }),
  };

  const isValidImage =
    PROFILE_IMAGE && !PROFILE_IMAGE.includes("YOUR_") && PROFILE_IMAGE.length > 5;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#00e0ff]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#8b5cf6]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Text */}
        <div className="order-2 lg:order-1">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="section-label mb-4"
          >
            Software Engineer
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight"
          >
            Faran{" "}
            <span className="gradient-text">Ahmad</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-4 font-mono text-sm text-zinc-400"
          >
            Frontend & DevOps
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-6 text-zinc-400 leading-relaxed max-w-lg"
          >
            Frontend-focused Software Engineer with hands-on experience
            building responsive React and Angular SPAs, cross-platform
            Flutter apps, and containerized deployments with Docker. Passionate
            about turning complex requirements into clean, scalable code.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#work" className="glow-btn glow-btn-primary">
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn glow-btn-outline"
            >
              <FileText size={16} />
              Resume
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="mt-8 flex gap-4"
          >
            {[
              { icon: Github, href: socialLinks.github, label: "GitHub" },
              { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${socialLinks.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:border-[#00e0ff]/30 hover:text-[#00e0ff] text-zinc-500 transition-all duration-300 hover:-translate-y-1"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: Phone mockup */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="order-1 lg:order-2 flex justify-center relative"
        >
          {/* Floating tech chips */}
          {floatingChips.map((chip, i) => (
            <motion.span
              key={chip}
              className="absolute font-mono text-[10px] px-3 py-1 rounded-full border border-white/10 bg-[#07080c]/80 text-zinc-500 backdrop-blur-sm hidden lg:block"
              style={{
                top: `${15 + i * 20}%`,
                left: i % 2 === 0 ? "-5%" : "auto",
                right: i % 2 !== 0 ? "-5%" : "auto",
              }}
              animate={
                shouldReduce
                  ? {}
                  : {
                      y: [0, -8, 0],
                      transition: {
                        repeat: Infinity,
                        duration: 3 + i * 0.5,
                        ease: "easeInOut",
                      },
                    }
              }
            >
              {chip}
            </motion.span>
          ))}

          {/* Phone frame */}
          <div className="relative w-[260px] sm:w-[280px] rounded-[2rem] border border-white/10 bg-[#0f1119]/60 backdrop-blur-xl p-6 shadow-2xl shadow-[#00e0ff]/5">
            {/* Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-[#07080c] border border-white/5" />

            <div className="mt-8 flex flex-col items-center gap-4">
              {/* Avatar */}
              <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-white/10">
                {isValidImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={PROFILE_IMAGE}
                    alt="Faran Ahmad"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      (e.target as HTMLImageElement).parentElement!.querySelector('.fallback')?.classList.remove('hidden');
                    }}
                  />
                ) : (
                  <AvatarFallback />
                )}
              </div>

              <div className="text-center">
                <p className="text-white font-bold text-sm">Faran Ahmad</p>
                <p className="font-mono text-[10px] text-zinc-500 mt-1">
                  Software Engineer
                </p>
              </div>

              {/* Available badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[10px] text-emerald-400">
                  Available for work
                </span>
              </div>

              {/* Mini stats */}
              <div className="w-full grid grid-cols-2 gap-2 mt-2">
                {["Frontend", "DevOps", "Mobile", "AI/ML"].map((label) => (
                  <div
                    key={label}
                    className="text-center py-2 rounded-lg border border-white/5 bg-white/[0.02]"
                  >
                    <p className="font-mono text-[9px] text-zinc-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={shouldReduce ? {} : { y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600"
      >
        <span className="font-mono text-[10px]">scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
}
