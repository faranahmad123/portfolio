// ============================================================
// 🔄 HOW WE WORK — DevNest 4-Step Process
// ============================================================

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    subtitle: "We understand your business and goals",
    description:
      "We dive deep into your brand, target audience, core challenges, and objectives to define clear project deliverables and a realistic timeline.",
    deliverables: [
      "Requirement discovery & audit",
      "Scope & milestones definition",
      "Tech stack & architecture recommendation",
    ],
  },
  {
    step: "02",
    title: "Design & Plan",
    subtitle: "Architecting the user journey",
    description:
      "We design intuitive, high-converting interfaces and map out database models, API connections, and automation triggers before building.",
    deliverables: [
      "Modern UI/UX design concepts",
      "System & database architecture",
      "Sprint roadmap & review checkpoints",
    ],
  },
  {
    step: "03",
    title: "Build & Test",
    subtitle: "Fast, production-grade execution",
    description:
      "We turn approved plans into clean, maintainable code, configure automation pipelines, and thoroughly test speed, responsiveness, and reliability.",
    deliverables: [
      "Responsive web / mobile development",
      "API & automation workflow setup",
      "QA, security & cross-device verification",
    ],
  },
  {
    step: "04",
    title: "Launch & Support",
    subtitle: "Seamless rollout and ongoing scaling",
    description:
      "We deploy to secure production environments (Vercel/Firebase), configure domain & analytics, and stay by your side for updates and continuous growth.",
    deliverables: [
      "Production deployment & DNS setup",
      "Handover & team walkthrough",
      "Ongoing maintenance & scaling support",
    ],
  },
];

