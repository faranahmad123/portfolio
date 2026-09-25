// ============================================================
// 🎯 SERVICES DATA
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
    title: "Frontend Web Development",
    description:
      "Crafting pixel-perfect, performant web applications with modern frameworks and TypeScript-first architecture.",
    capabilities: [
      "Responsive & accessible UI development",
      "Component-driven architecture",
      "State management & data flow patterns",
      "Performance optimization & code splitting",
    ],
    techStack: ["React", "Angular", "TypeScript"],
  },
  {
    number: "02",
    title: "Cross-Platform Mobile Apps",
    description:
      "Building beautiful, natively compiled mobile applications from a single codebase with Flutter.",
    capabilities: [
      "iOS & Android from one codebase",
      "Custom widget development",
      "Real-time data with Firebase",
      "Offline-first architecture",
    ],
    techStack: ["Flutter", "Dart", "Firebase"],
  },
  {
    number: "03",
    title: "API Integration & DevOps",
    description:
      "Designing robust API integrations and containerized deployment pipelines for production-ready software.",
    capabilities: [
      "RESTful API design & testing",
      "Docker containerization",
      "CI/CD pipeline configuration",
      "Environment consistency & automation",
    ],
    techStack: ["REST", "Postman", "Docker", "Git"],
  },
  {
    number: "04",
    title: "AI & Machine Learning Solutions",
    description:
      "Developing end-to-end machine learning systems, Siamese neural networks, and interactive model applications with production pipelines.",
    capabilities: [
      "Model Training & Evaluation",
      "NLP Feature Engineering",
      "Neural Network Architecture Design",
      "Interactive ML Demos (Gradio)",
    ],
    techStack: ["Python", "TensorFlow", "scikit-learn", "Gradio"],
  },
];
