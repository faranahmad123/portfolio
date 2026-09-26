"use client";

import { socialLinks } from "@/data/navigation";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left w-full">
        <p className="font-mono text-xs text-zinc-500">
          © 2026 Faran Ahmad
        </p>

        <div className="flex gap-2 sm:gap-4">
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
              className="text-zinc-500 hover:text-[#00e0ff] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-white/[0.02]"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
