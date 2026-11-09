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
  { number: "01", label: "About", href: "#about" },
  { number: "02", label: "Expertise", href: "#expertise" },
  { number: "03", label: "Services", href: "#services" },
  { number: "04", label: "Work", href: "#work" },
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
