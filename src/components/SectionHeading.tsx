"use client";

import { motion, useReducedMotion } from "framer-motion";

interface SectionHeadingProps {
  number: string;
  label: string;
  subtitle: string;
}

export default function SectionHeading({
  number,
  label,
  subtitle,
}: SectionHeadingProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <p className="section-label">
        {number} // {label}
      </p>
      <h2 className="section-title mt-2">{subtitle}</h2>
      <div className="mt-4 w-16 h-[2px] bg-gradient-to-r from-[#00e0ff] to-[#8b5cf6] rounded-full" />
    </motion.div>
  );
}
