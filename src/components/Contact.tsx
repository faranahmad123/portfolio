"use client";

import { useState, FormEvent } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Send, Mail, MessageCircle, Instagram, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { siteConfig } from "@/data/site";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [name, setName] = useState("");
  const [projectType, setProjectType] = useState("");
  const [contact, setContact] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const shouldReduce = useReducedMotion();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !projectType.trim() || !contact.trim()) {
      setStatus("error");
      setFeedback("Please fill out all fields before dispatching.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          projectType: projectType.trim(),
          contact: contact.trim(),
          honeypot,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Failed to dispatch message. Please try again.");
      }

      setStatus("success");
      setFeedback("Message dispatched successfully! We will get back to you within 24 hours.");
      setName("");
      setProjectType("");
      setContact("");
    } catch (err: unknown) {
      setStatus("error");
      setFeedback(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or reach out directly via WhatsApp or email."
      );
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: siteConfig.whatsappNumber,
      href: siteConfig.whatsappLink,
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: siteConfig.instagramHandle,
      href: siteConfig.instagramUrl,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <SectionHeading
          number="05"
          label="Initiate Connect"
          subtitle="Let's talk."
        />

        <motion.p
          initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-zinc-400 text-sm sm:text-base max-w-lg leading-relaxed"
        >
          Ready to launch your website, app, automation or grow your social
          media? Tell us what you need and we&apos;ll get back to you within 24
          hours.
        </motion.p>

        <div className="mt-12 sm:mt-16 grid lg:grid-cols-2 gap-8">
          {/* Message composer form */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-5 sm:p-6 md:p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                Message Composer
              </span>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Honeypot field for spam prevention */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="opacity-0 absolute -z-10 pointer-events-none h-0 w-0 p-0 m-0 border-0"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="text-zinc-300 leading-loose text-sm sm:text-base">
                <span>Hi DevNest, my name is </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="your name"
                  required
                  className="w-full min-[440px]:w-auto min-[440px]:inline-block min-[440px]:w-36 sm:w-40 bg-transparent border-b border-[#00e0ff]/30 text-[#00e0ff] font-mono text-sm px-1 py-1 focus:outline-none focus:border-[#00e0ff] placeholder:text-zinc-700 transition-colors my-1"
                  aria-label="Your name"
                />
                <span> and I need </span>
                <input
                  type="text"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  placeholder="website, app, automation, social media..."
                  required
                  className="w-full min-[440px]:w-auto min-[440px]:inline-block min-[440px]:w-64 sm:w-72 bg-transparent border-b border-[#00e0ff]/30 text-[#00e0ff] font-mono text-sm px-1 py-1 focus:outline-none focus:border-[#00e0ff] placeholder:text-zinc-700 transition-colors my-1"
                  aria-label="Service or project type"
                />
                <span> for my business. You can reach me at </span>
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="email or phone"
                  required
                  className="w-full min-[440px]:w-auto min-[440px]:inline-block min-[440px]:w-44 sm:w-48 bg-transparent border-b border-[#00e0ff]/30 text-[#00e0ff] font-mono text-sm px-1 py-1 focus:outline-none focus:border-[#00e0ff] placeholder:text-zinc-700 transition-colors my-1"
                  aria-label="Your contact info"
                />
                <span> to discuss this further.</span>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`glow-btn glow-btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] ${
                    status === "loading" ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Dispatching...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Dispatch Message
                    </>
                  )}
                </button>

                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-btn glow-btn-outline w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] text-xs sm:text-sm"
                >
                  <MessageCircle size={16} className="text-emerald-400" />
                  Chat on WhatsApp
                </a>

                {status === "error" && (
                  <button
                    type="button"
                    onClick={() => {
                      const body = `Hi DevNest, my name is ${name || "[Name]"} and I need ${projectType || "[service / project type]"} for my business. You can reach me at ${contact || "[Contact]"} to discuss this further.`;
                      window.open(
                        `mailto:${siteConfig.email}?subject=New DevNest Inquiry from ${name || "Someone"}&body=${encodeURIComponent(body)}`,
                        "_self"
                      );
                    }}
                    className="text-xs font-mono text-zinc-500 hover:text-[#00e0ff] underline underline-offset-4 transition-colors text-center sm:text-left min-h-[44px] flex items-center justify-center sm:justify-start"
                  >
                    Open in default mail client instead ↗
                  </button>
                )}
              </div>

              {/* Status / feedback message */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-3.5 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-300 text-xs sm:text-sm flex items-center gap-2.5"
                  >
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                    <span>{feedback}</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-3.5 rounded-xl border border-rose-500/20 bg-rose-500/10 text-rose-300 text-xs sm:text-sm flex items-center gap-2.5"
                  >
                    <AlertCircle size={18} className="text-rose-400 shrink-0" />
                    <span>{feedback}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-3.5 sm:space-y-4"
          >
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 sm:p-5 flex items-center gap-4 group hover:border-[#00e0ff]/20 transition-all duration-300 block min-h-[56px]"
              >
                <div className="p-2.5 sm:p-3 rounded-xl border border-white/5 bg-white/[0.02] group-hover:border-[#00e0ff]/20 transition-all shrink-0">
                  <link.icon
                    size={18}
                    className="text-zinc-500 group-hover:text-[#00e0ff] transition-colors"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                    {link.label}
                  </p>
                  <p className="text-zinc-300 text-sm mt-0.5 truncate">{link.value}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
