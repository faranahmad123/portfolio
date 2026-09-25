"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-[#07080c]/85 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-mono text-sm text-white hover:text-[#00e0ff] transition-colors py-2"
            aria-label="Back to top"
          >
            faran<span className="text-[#00e0ff]">/</span>ahmad
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group font-mono text-xs text-zinc-500 hover:text-white transition-colors py-2"
              >
                <span className="text-[#00e0ff]/60 mr-1">{link.number}</span>
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="glow-btn glow-btn-primary text-xs !py-2 !px-4"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile hamburger (min 44x44px touch target) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 min-w-[44px] min-h-[44px] p-2 text-white cursor-pointer active:scale-95 transition-transform"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-white"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[2px] bg-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-white"
            />
          </button>
        </div>
      </motion.nav>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-[#07080c]/98 backdrop-blur-2xl flex flex-col items-center justify-center p-6"
          >
            <nav className="flex flex-col items-center gap-6 w-full max-w-xs">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="text-xl sm:text-2xl font-bold text-white hover:text-[#00e0ff] transition-colors min-h-[44px] flex items-center justify-center w-full"
                >
                  <span className="font-mono text-xs sm:text-sm text-[#00e0ff]/60 mr-3">
                    {link.number}
                  </span>
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="glow-btn glow-btn-primary mt-4 w-full flex items-center justify-center min-h-[44px]"
              >
                Hire Me
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
