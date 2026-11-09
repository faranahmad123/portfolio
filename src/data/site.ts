// ============================================================
// 🌐 DEVEST SITE & BRAND CONFIG
// Central configuration for all brand details and contact info.
// ============================================================

export const siteConfig = {
  brandName: "DevNest",
  tagline: "Websites, Apps & Automation",
  siteUrl: "https://devnest.codes",
  email: "faranahmad@devnest.codes",
  whatsappNumber: "+1 709 5073546",
  whatsappLink: "https://wa.me/17095073546",
  instagramHandle: "@getdevnest",
  instagramUrl: "https://instagram.com/getdevnest",
  founderName: "Faran Ahmad",
} as const;

export type SiteConfig = typeof siteConfig;

