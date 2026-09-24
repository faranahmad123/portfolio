// ============================================================
// 🏆 CERTIFICATES & AWARDS DATA
// ============================================================

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  /** Link to view the certificate/award — set "#" if not available */
  documentUrl: string;
  type: "award" | "certificate";
}

export const certificates: Certificate[] = [
  {
    title: "Runner-up, Mobile App Competition",
    issuer: "University of Lahore",
    year: "2025",
    documentUrl: "#",
    type: "award",
  },
  {
    title: "Introduction to Flutter",
    issuer: "Simplilearn",
    year: "2026",
    documentUrl: "#",
    type: "certificate",
  },
  {
    title: "Advanced Prompt Engineering",
    issuer: "Simplilearn",
    year: "2026",
    documentUrl: "#",
    type: "certificate",
  },
];
