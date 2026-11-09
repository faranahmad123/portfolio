// ============================================================
// 🛠️ SKILLS / TECH STACK — Agency Expertise
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
    name: "Automation Workflows",
    category: "Automation",
    description: "Design and deployment of custom automated business workflows that eliminate repetitive busywork and sync tools.",
    proficiency: "Medium",
    icon: "⚙️",
  },
  {
    name: "API Integrations",
    category: "Integration",
    description: "Robust connection of third-party platforms, webhooks, CRM endpoints, and payment gateways into unified data flows.",
    proficiency: "Medium",
    icon: "🔌",
  },
  {
    name: "TensorFlow/Keras",
    category: "AI / ML",
    description: "Deep learning framework for training Siamese neural networks, feature extractors, and predictive models.",
    proficiency: "Medium",
    icon: "🧠",
  },
  {
    name: "scikit-learn",
    category: "AI / ML",
    description: "Machine learning library for classification, pair sampling, metric evaluation, and feature clustering.",
    proficiency: "Medium",
    icon: "📊",
  },
  {
    name: "Gradio",
    category: "AI / ML",
    description: "Interactive web interface framework for deploying live machine learning demos and model visualization.",
    proficiency: "Medium",
    icon: "🎨",
  },
  {
    name: "OpenCV",
    category: "AI / Vision",
    description: "Computer vision library used for image processing, OCR pipelines, and visual AI tasks.",
    proficiency: "Medium",
    icon: "👁️",
  },
  {
    name: "Flask",
    category: "Backend",
    description: "Lightweight Python micro-framework for building REST APIs and backend services.",
    proficiency: "Medium",
    icon: "🧪",
  },
  {
    name: "Firebase Auth/Realtime DB",
    category: "Backend",
    description: "Cloud database and authentication platform powering real-time synchronization, session security, and reactive data streams.",
    proficiency: "Medium",
    icon: "🔥",
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
];

export const concepts = [
  "Business Process Automation",
  "API Integrations & Webhooks",
  "Cross-Platform Mobile",
  "Full-Stack Web Engineering",
  "State Management",
  "Real-time Cloud Sync",
  "Containerization & CI/CD",
];
