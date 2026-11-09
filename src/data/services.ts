// ============================================================
// 🎯 SERVICES DATA — DevNest Offerings
// ============================================================

export interface Service {
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  techStack: string[];
}

export const services: Service[] = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Fast, responsive, SEO-friendly websites and online stores that turn visitors into customers.",
    capabilities: [
      "Business & portfolio websites",
      "E-commerce stores with admin panels",
      "Landing pages",
      "Speed & SEO optimization",
      "Hosting and deployment (Vercel)",
    ],
    techStack: ["Next.js", "React", "Tailwind", "Supabase"],
  },
  {
    number: "02",
    title: "Mobile App Development",
    description:
      "Cross-platform Android and iOS apps from a single codebase, built for real users.",
    capabilities: [
      "Custom app development",
      "UI/UX implementation",
      "Firebase backends and authentication",
      "Real-time features and notifications",
      "App store deployment",
    ],
    techStack: ["Flutter", "Dart", "Firebase"],
  },
  {
    number: "03",
    title: "Business Automation",
    description:
      "Stop doing repetitive work by hand. We connect your tools and automate the busywork.",
    capabilities: [
      "Workflow automation",
      "WhatsApp / email / Google Sheets automations",
      "Custom scripts and bots",
      "API integrations",
      "Data extraction and reporting",
    ],
    techStack: ["Python", "APIs", "Google Sheets", "n8n / Make / Zapier"],
  },
  {
    number: "04",
    title: "Social Media Account Handling",
    description:
      "We run your social media so your brand stays active, consistent and growing.",
    capabilities: [
      "Account setup and optimization",
      "Content planning and posting schedule",
      "Post and story design",
      "Engagement and message handling",
      "Monthly growth reports",
    ],
    techStack: ["Instagram", "Facebook", "TikTok", "LinkedIn"],
  },
];
