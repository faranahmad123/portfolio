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
import PhoneMockup from "./PhoneMockup";

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

        {/* Right: Animated phone mockup */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="order-1 lg:order-2"
        >
          <PhoneMockup />
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
