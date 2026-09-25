// ============================================================
// 📂 PROJECTS DATA — Edit this array to add/remove projects.
//    Replace image placeholders with your screenshot URLs.
// ============================================================

export const PRODUCT_MATCHING_IMAGE = "YOUR_PROJECT_IMAGE_URL_HERE";
export const LIFELY_IMAGE = "YOUR_PROJECT_IMAGE_URL_HERE";
export const CRM_DASHBOARD_IMAGE = "YOUR_PROJECT_IMAGE_URL_HERE";
export const STUDY_PLANNER_IMAGE = "YOUR_PROJECT_IMAGE_URL_HERE";
export const QR_ATTENDANCE_IMAGE = "YOUR_PROJECT_IMAGE_URL_HERE";

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tags: string[];
  date: string;
  description: string;
  bullets?: string[];
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
    id: "product-matching",
    number: "01",
    title: "Cross-Platform Product Matching System",
    category: "AI · Machine Learning · Python",
    tags: ["AI", "Machine Learning", "Python", "TensorFlow", "Gradio"],
    date: "February 2026",
    description:
      "End-to-end ML system that identifies when the same product is listed across different e-commerce platforms (Amazon, eBay, Walmart, AliExpress) despite differing titles, formatting, and pricing — powering use cases like price-comparison engines and catalog deduplication.",
    bullets: [
      "Engineered a dual-branch Siamese neural network (TensorFlow/Keras) combining Word2Vec embeddings with structured NLP features (brand, category, specs, language detection) to output a pairwise similarity score.",
      "Built a smart pair-sampling pipeline generating balanced positive/negative training pairs (~30K total) from clustered product data, with EarlyStopping and learning-rate scheduling for robust training.",
      "Designed a hybrid rule-based matcher (brand, model-number, Jaccard title similarity, price-tier scoring) as an interpretable validation layer, tested against realistic multi-platform product data with a 6-panel results dashboard.",
      "Shipped an interactive Gradio web app with live search, cross-platform matching, confidence-score visualizations, and batch testing — with graceful fallback to the rule-based matcher when the trained model isn't available.",
    ],
    techStack: [
      "Python",
      "TensorFlow/Keras",
      "scikit-learn",
      "Word2Vec",
      "Gradio",
      "Pandas",
      "Matplotlib",
    ],
    image: "/images/projects/product-matching.png",
    liveUrl: "#",
    githubUrl: "https://github.com/faranahmad123/Product-Matching-Across-Platforms",
  },
  {
    id: "lifely",
    number: "02",
    title: "Lifely — AI-Powered Telemedicine App",
    category: "Mobile · AI · Healthcare",
    tags: ["Flutter", "Flask", "Firebase", "Python", "OCR"],
    date: "March 2026",
    description:
      "Cross-platform telemedicine app with real-time doctor appointment scheduling and secure patient management via Cloud Firestore. Decoupled Python/Flask backend with Ngrok tunneling for async multipart requests. Automated OCR pipeline (OpenCV + Tesseract) extracting biomarkers (CBC, LFT, Diabetes) from uploaded medical reports. ML models (TabNet, CNN) return diagnostic risk scores to the app.",
    bullets: [
      "Automated OCR pipeline (OpenCV + Tesseract) extracting biomarkers (CBC, LFT, Diabetes) from uploaded medical reports.",
      "Cross-platform Flutter application with Cloud Firestore real-time appointment scheduling and patient management.",
      "Decoupled Python/Flask backend with Ngrok tunneling for asynchronous multipart requests.",
      "Machine learning models (TabNet, CNN) predicting and returning diagnostic risk scores directly to the mobile app.",
    ],
    techStack: ["Flutter", "Flask", "Firebase", "Python", "OpenCV", "Tesseract"],
    image: "/images/projects/lifely.png",
    liveUrl: "#",
    githubUrl: "https://github.com/faranahmad123/Lifely-App",
  },
  {
    id: "crm-dashboard",
    number: "03",
    title: "Enterprise Sales CRM Dashboard",
    category: "Web · Enterprise · SaaS",
    tags: ["Angular", "TypeScript", "Postman", "Docker"],
    date: "May 2026",
    description:
      "Inventory and commission-tracking SPA with reactive state management for real-time sales reporting. REST data flows verified with Postman. Production build containerized with Docker for consistent deployment.",
    bullets: [
      "Architected reactive state management with RxJS for real-time sales reporting and commission calculations.",
      "Verified and documented full RESTful data flows across endpoints using Postman collections.",
      "Built multi-stage Docker containerization pipeline ensuring lightweight, production-grade deployments.",
    ],
    techStack: ["Angular", "TypeScript", "Postman", "Docker", "REST API"],
    image: "/images/projects/crm-dashboard.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "study-planner",
    number: "04",
    title: "Study Planner — Student Productivity App",
    category: "Flutter · Firebase · Mobile",
    tags: ["Flutter", "Firebase", "Mobile", "Dart"],
    date: "January 2026",
    description:
      "Cross-platform mobile productivity app helping students organize schedules, track subjects, and manage study tasks with real-time sync.",
    bullets: [
      "Built full CRUD functionality for subjects and topics with real-time data synchronization via Firebase Realtime Database.",
      "Integrated Firebase Authentication for secure onboarding, login, and session management.",
      "Designed a \"Focus Mode\" feature with a custom circular timer and interactive session logic to boost study efficiency.",
      "Built a responsive UI with custom widgets, StreamBuilders for reactive state management, and optimized layouts across screen sizes and keyboard interactions.",
      "Engineered a cost-effective profile-image solution by encoding photos to Base64 for direct storage in the Realtime Database, avoiding external storage costs.",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Firebase Realtime Database",
      "Firebase Auth",
    ],
    image: "/images/projects/study-planner.png",

    liveUrl: "#",
    githubUrl: "https://github.com/faranahmad123/Study-Planner",
  },
  {
    id: "qr-attendance",
    number: "05",
    title: "Event Check-In — QR Attendance System",
    category: "Flutter · Mobile · Event Tech",
    tags: ["Flutter", "Mobile", "Event Tech", "Google Sheets API"],
    date: "December 2025",
    description:
      "Designed, developed, and personally operated a custom Flutter app to manage live attendance for the CS Department Annual Dinner (300+ attendees), replacing manual check-in with real-time QR scanning.",
    bullets: [
      "Implemented a high-speed QR scanning feature with Google Sheets API integration for real-time cloud database updates to \"MasterList\" and \"Logs\" sheets.",
      "Verified attendee SAP IDs against departmental records during check-in, achieving 100% accuracy in final attendance reporting.",
      "Operated the app live at the event, processing check-ins/check-outs under real-world, high-pressure conditions and troubleshooting on-site scanning issues.",
      "Streamlined the entry process, cutting wait times and preventing unauthorized entry versus the previous manual system.",
    ],
    techStack: ["Flutter", "Dart", "Google Sheets API", "QR Scanning"],
    image: "/images/projects/qr-attendance.png",
    liveUrl: "#",
    githubUrl: "https://github.com/faranahmad123/Attendance-Scanner",
  },
];
