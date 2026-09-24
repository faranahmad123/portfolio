// ============================================================
// 🧭 NAVIGATION DATA
// ============================================================

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
  { number: "05", label: "Certs", href: "#certs" },
  { number: "06", label: "Contact", href: "#contact" },
];

// ============================================================
// 🔗 SOCIAL / CONTACT LINKS — Edit these with your real URLs
// ============================================================

export const socialLinks = {
  email: "contactfaranahmad@gmail.com",
  phone: "+92-3336534204",
  whatsapp: "https://wa.me/923336534204",
  linkedin: "https://linkedin.com/in/faran02",
  github: "https://github.com/faranahmad123",
};
