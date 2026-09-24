// ============================================================
// 📂 PROJECTS DATA — Edit this array to add/remove projects.
//    Replace image placeholders with your screenshot URLs.
// ============================================================

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tags: string[];
  date: string;
  description: string;
  techStack: string[];
  /** Replace with your project screenshot URL */
  image: string;
  /** Live demo link — set to "#" if not available */
  liveUrl: string;
  /** GitHub repo link — set to "#" if not available */
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: "lifely",
    number: "01",
    title: "Lifely — AI-Powered Telemedicine App",
    category: "Mobile · AI · Healthcare",
    tags: ["Flutter", "Flask", "Firebase", "Python", "OCR"],
    date: "March 2026",
    description:
      "Cross-platform telemedicine app with real-time doctor appointment scheduling and secure patient management via Cloud Firestore. Decoupled Python/Flask backend with Ngrok tunneling for async multipart requests. Automated OCR pipeline (OpenCV + Tesseract) extracting biomarkers (CBC, LFT, Diabetes) from uploaded medical reports. ML models (TabNet, CNN) return diagnostic risk scores to the app.",
    techStack: ["Flutter", "Flask", "Firebase", "Python", "OpenCV", "Tesseract"],
    image: "YOUR_PROJECT_IMAGE_URL_HERE",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "crm-dashboard",
    number: "02",
    title: "Enterprise Sales CRM Dashboard",
    category: "Web · Enterprise · SaaS",
    tags: ["Angular", "TypeScript", "Postman", "Docker"],
    date: "May 2026",
    description:
      "Inventory and commission-tracking SPA with reactive state management for real-time sales reporting. REST data flows verified with Postman. Production build containerized with Docker for consistent deployment.",
    techStack: ["Angular", "TypeScript", "Postman", "Docker", "REST API"],
    image: "YOUR_PROJECT_IMAGE_URL_HERE",
    liveUrl: "#",
    githubUrl: "#",
  },
];
