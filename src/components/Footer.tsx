"use client";

import { socialLinks } from "@/data/navigation";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-zinc-600">
          © 2026 Faran Ahmad.
        </p>

        <div className="flex gap-4">
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
              className="text-zinc-700 hover:text-[#00e0ff] transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
