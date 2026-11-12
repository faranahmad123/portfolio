// ============================================================
// 🧭 NAVIGATION DATA
// ============================================================

import { siteConfig } from "./site";

export interface NavLink {
  number: string;
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { number: "01", label: "Work", href: "#work" },
  { number: "02", label: "Services", href: "#services" },
  { number: "03", label: "About", href: "#about" },
  { number: "04", label: "Process", href: "#process" },
  { number: "05", label: "Contact", href: "#contact" },
];

// ============================================================
// 🔗 SOCIAL / CONTACT LINKS — Derived from siteConfig
// ============================================================

export const socialLinks = {
  email: siteConfig.email,
  phone: siteConfig.whatsappNumber,
  whatsapp: siteConfig.whatsappLink,
  instagram: siteConfig.instagramUrl,
  instagramHandle: siteConfig.instagramHandle,
};
