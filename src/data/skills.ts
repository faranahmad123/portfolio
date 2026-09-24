// ============================================================
// 🛠️ SKILLS / TECH STACK — Edit to update your expertise.
// ============================================================

export interface Skill {
  name: string;
  category: string;
  description: string;
  proficiency: "High" | "Medium";
  icon: string; // emoji or icon key
}

export const skills: Skill[] = [
  {
    name: "JavaScript",
    category: "Language",
    description: "Core web language powering dynamic, interactive user interfaces and full-stack applications.",
    proficiency: "High",
    icon: "⚡",
  },
  {
    name: "TypeScript",
    category: "Language",
    description: "Strongly-typed superset of JavaScript enabling robust, maintainable codebases at scale.",
    proficiency: "High",
    icon: "🔷",
  },
  {
    name: "Python",
    category: "Language",
    description: "Versatile language used for backend APIs, ML pipelines, and data processing workflows.",
    proficiency: "High",
    icon: "🐍",
  },
  {
    name: "Dart",
    category: "Language",
    description: "Optimized language for building natively compiled Flutter applications across platforms.",
    proficiency: "High",
    icon: "🎯",
  },
  {
    name: "React",
    category: "Frontend",
    description: "Component-based UI library for building performant, declarative web interfaces.",
    proficiency: "High",
    icon: "⚛️",
  },
  {
    name: "Angular",
    category: "Frontend",
    description: "Enterprise-grade framework with RxJS, dependency injection, and modular architecture.",
    proficiency: "High",
    icon: "🅰️",
  },
  {
    name: "Flutter",
    category: "Mobile",
    description: "Google's UI toolkit for crafting natively compiled apps for mobile, web, and desktop from a single codebase.",
    proficiency: "High",
    icon: "📱",
  },
  {
    name: "Flask",
    category: "Backend",
    description: "Lightweight Python micro-framework for building REST APIs and backend services.",
    proficiency: "Medium",
    icon: "🧪",
  },
  {
    name: "OpenCV",
    category: "AI / Vision",
    description: "Computer vision library used for image processing, OCR pipelines, and visual AI tasks.",
    proficiency: "Medium",
    icon: "👁️",
  },
  {
    name: "Docker",
    category: "DevOps",
    description: "Containerization platform ensuring consistent environments from development to production.",
    proficiency: "Medium",
    icon: "🐳",
  },
  {
    name: "Postman",
    category: "DevOps",
    description: "API platform for designing, testing, and documenting RESTful endpoints.",
    proficiency: "High",
    icon: "📬",
  },
  {
    name: "Git / GitHub",
    category: "DevOps",
    description: "Version control and collaboration platform powering modern software workflows.",
    proficiency: "High",
    icon: "🔀",
  },
  {
    name: "Firebase",
    category: "Backend",
    description: "Google's BaaS platform providing real-time databases, auth, and cloud functions.",
    proficiency: "High",
    icon: "🔥",
  },
];

export const concepts = [
  "RESTful API Integration",
  "Containerization",
  "State Management",
  "OCR",
];
