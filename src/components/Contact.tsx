"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Send, Mail, Phone, Linkedin, Github } from "lucide-react";
import { socialLinks } from "@/data/navigation";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [name, setName] = useState("");
  const [need, setNeed] = useState("");
  const [reachAt, setReachAt] = useState("");
  const shouldReduce = useReducedMotion();

  const handleSend = () => {
    const body = `Hi Faran, my name is ${name || "[Name]"} and I am looking for a developer for ${need || "[Project]"}. You can reach me at ${reachAt || "[Contact]"} to discuss this further.`;
    window.open(
      `mailto:${socialLinks.email}?subject=New Inquiry from ${name || "Someone"}&body=${encodeURIComponent(body)}`,
      "_self"
    );
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: socialLinks.email,
      href: `mailto:${socialLinks.email}`,
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: socialLinks.phone,
      href: socialLinks.whatsapp,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "faran02",
      href: socialLinks.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "faranahmad123",
      href: socialLinks.github,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          number="06"
          label="Initiate Connect"
          subtitle="Let's talk."
        />

        <motion.p
          initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-zinc-400 max-w-lg"
        >
          Open to freelance projects, internship opportunities, and full-time
          roles. Let&apos;s build something great together.
        </motion.p>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          {/* Message composer */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 md:p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
                Message Composer
              </span>
            </div>

            <div className="text-zinc-300 leading-loose text-sm md:text-base">
              Hi Faran, my name is{" "}
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="your name"
                className="inline-block w-32 sm:w-40 bg-transparent border-b border-[#00e0ff]/30 text-[#00e0ff] font-mono text-sm px-1 py-0.5 focus:outline-none focus:border-[#00e0ff] placeholder:text-zinc-700 transition-colors"
                aria-label="Your name"
              />{" "}
              and I am looking for a developer for{" "}
              <input
                type="text"
                value={need}
                onChange={(e) => setNeed(e.target.value)}
                placeholder="project type"
                className="inline-block w-32 sm:w-40 bg-transparent border-b border-[#00e0ff]/30 text-[#00e0ff] font-mono text-sm px-1 py-0.5 focus:outline-none focus:border-[#00e0ff] placeholder:text-zinc-700 transition-colors"
                aria-label="Project type"
              />
              . You can reach me at{" "}
              <input
                type="text"
                value={reachAt}
                onChange={(e) => setReachAt(e.target.value)}
                placeholder="email or phone"
                className="inline-block w-40 sm:w-48 bg-transparent border-b border-[#00e0ff]/30 text-[#00e0ff] font-mono text-sm px-1 py-0.5 focus:outline-none focus:border-[#00e0ff] placeholder:text-zinc-700 transition-colors"
                aria-label="Your contact"
              />{" "}
              to discuss this further.
            </div>

            <button
              onClick={handleSend}
              className="glow-btn glow-btn-primary mt-8"
            >
              <Send size={16} />
              Dispatch Message
            </button>
          </motion.div>

          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 flex items-center gap-4 group hover:border-[#00e0ff]/20 transition-all duration-300 block"
              >
                <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02] group-hover:border-[#00e0ff]/20 transition-all">
                  <link.icon
                    size={18}
                    className="text-zinc-500 group-hover:text-[#00e0ff] transition-colors"
                  />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-wider">
                    {link.label}
                  </p>
                  <p className="text-zinc-300 text-sm mt-0.5">{link.value}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
