// ============================================================
// 📂 PROJECTS DATA — DevNest Client & Production Work
// ============================================================

export const DESIHUB_IMAGE = "/images/projects/desihub.png";
export const CLIENT_PROJECT_2_IMAGE = "YOUR_PROJECT_IMAGE_URL_HERE";
export const CLIENT_PROJECT_3_IMAGE = "YOUR_PROJECT_IMAGE_URL_HERE";
export const CLIENT_PROJECT_4_IMAGE = "YOUR_PROJECT_IMAGE_URL_HERE";
export const CLIENT_PROJECT_5_IMAGE = "YOUR_PROJECT_IMAGE_URL_HERE";
export const CLIENT_PROJECT_6_IMAGE = "YOUR_PROJECT_IMAGE_URL_HERE";

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
  /** Set to true when ready to display publicly */
  published?: boolean;
}

export const projects: Project[] = [
  // ============================================================
  // 🚀 CLIENT PROJECT 1: DESI HUB (NEWEST)
  // ============================================================
  {
    id: "desi-hub",
    number: "01",
    title: "DESI HUB — Organic Food E-Commerce Store",
    category: "Web · E-Commerce · Next.js · Supabase",
    tags: ["Web", "E-Commerce", "Next.js", "Supabase"],
    date: "2026",
    description:
      "A production-ready, mobile-first e-commerce website with a full admin panel for DESI HUB, an organic desi food brand. Customers scan a QR code at stalls, browse products and place an order in under a minute.",
    bullets: [
      "Built a mobile-first storefront with category filters, search, sort, cart drawer and Cash on Delivery checkout, with a one-tap WhatsApp order confirmation.",
      "Developed a secure admin panel for product, category, order and stall management, with image upload, stock toggles and order status tracking.",
      "Implemented QR-based stall tracking, so every order is tagged to its stall and the owner can see which location performs best.",
      "Added bilingual support (English / Urdu with RTL), a floating WhatsApp button, SEO metadata and Row Level Security for safe data access.",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Supabase", "Vercel"],
    image: DESIHUB_IMAGE,
    liveUrl: "https://desihubstore.com",
    githubUrl: "#",
    published: true,
  },

  // ============================================================
  // 🛠️ CLIENT PROJECTS 2 - 6 PLACEHOLDERS (Fill in when ready)
  // Set published: true when details are populated.
  // ============================================================

  // TODO: Fill in Client Project 2 details
  {
    id: "client-project-2",
    number: "02",
    title: "Client Project 2", // TODO: Project Title
    category: "Web Development", // TODO: Category
    tags: ["Web", "Full-Stack"], // TODO: Tags
    date: "2026", // TODO: Date / Year
    description: "Client project description placeholder.", // TODO: Description
    bullets: [
      "Key achievement or deliverable 1", // TODO: Bullet 1
      "Key achievement or deliverable 2", // TODO: Bullet 2
    ],
    techStack: ["React", "Next.js", "Tailwind CSS"], // TODO: Tech chips
    image: CLIENT_PROJECT_2_IMAGE, // TODO: Screenshot URL
    liveUrl: "#", // TODO: Live demo URL
    githubUrl: "#", // TODO: GitHub URL
    published: false, // Set to true to show in UI
  },

  // TODO: Fill in Client Project 3 details
  {
    id: "client-project-3",
    number: "03",
    title: "Client Project 3", // TODO: Project Title
    category: "Mobile App", // TODO: Category
    tags: ["Mobile", "Flutter"], // TODO: Tags
    date: "2026", // TODO: Date / Year
    description: "Client project description placeholder.", // TODO: Description
    bullets: [
      "Key achievement or deliverable 1", // TODO: Bullet 1
      "Key achievement or deliverable 2", // TODO: Bullet 2
    ],
    techStack: ["Flutter", "Dart", "Firebase"], // TODO: Tech chips
    image: CLIENT_PROJECT_3_IMAGE, // TODO: Screenshot URL
    liveUrl: "#", // TODO: Live demo URL
    githubUrl: "#", // TODO: GitHub URL
    published: false, // Set to true to show in UI
  },

  // TODO: Fill in Client Project 4 details
  {
    id: "client-project-4",
    number: "04",
    title: "Client Project 4", // TODO: Project Title
    category: "Business Automation", // TODO: Category
    tags: ["Automation", "Python", "APIs"], // TODO: Tags
    date: "2026", // TODO: Date / Year
    description: "Client project description placeholder.", // TODO: Description
    bullets: [
      "Key achievement or deliverable 1", // TODO: Bullet 1
      "Key achievement or deliverable 2", // TODO: Bullet 2
    ],
    techStack: ["Python", "APIs", "Google Sheets"], // TODO: Tech chips
    image: CLIENT_PROJECT_4_IMAGE, // TODO: Screenshot URL
    liveUrl: "#", // TODO: Live demo URL
    githubUrl: "#", // TODO: GitHub URL
    published: false, // Set to true to show in UI
  },

  // TODO: Fill in Client Project 5 details
  {
    id: "client-project-5",
    number: "05",
    title: "Client Project 5", // TODO: Project Title
    category: "Web & E-Commerce", // TODO: Category
    tags: ["Web", "E-Commerce"], // TODO: Tags
    date: "2026", // TODO: Date / Year
    description: "Client project description placeholder.", // TODO: Description
    bullets: [
      "Key achievement or deliverable 1", // TODO: Bullet 1
      "Key achievement or deliverable 2", // TODO: Bullet 2
    ],
    techStack: ["Next.js", "Tailwind CSS", "Supabase"], // TODO: Tech chips
    image: CLIENT_PROJECT_5_IMAGE, // TODO: Screenshot URL
    liveUrl: "#", // TODO: Live demo URL
    githubUrl: "#", // TODO: GitHub URL
    published: false, // Set to true to show in UI
  },

  // TODO: Fill in Client Project 6 details
  {
    id: "client-project-6",
    number: "06",
    title: "Client Project 6", // TODO: Project Title
    category: "Social Media & Growth", // TODO: Category
    tags: ["Social Media", "Automation"], // TODO: Tags
    date: "2026", // TODO: Date / Year
    description: "Client project description placeholder.", // TODO: Description
    bullets: [
      "Key achievement or deliverable 1", // TODO: Bullet 1
      "Key achievement or deliverable 2", // TODO: Bullet 2
    ],
    techStack: ["Instagram API", "Content Automation"], // TODO: Tech chips
    image: CLIENT_PROJECT_6_IMAGE, // TODO: Screenshot URL
    liveUrl: "#", // TODO: Live demo URL
    githubUrl: "#", // TODO: GitHub URL
    published: false, // Set to true to show in UI
  },

  // ============================================================
  // 📦 FEATURED AGENCY PORTFOLIO ARCHIVE (Existing Projects)
  // ============================================================
  {
    id: "product-matching",
    number: "02",
    title: "Cross-Platform Product Matching System",
    category: "AI · Machine Learning · Python",
    tags: ["AI", "Machine Learning", "Python", "TensorFlow", "Gradio"],
    date: "February 2026",
    description:
      "An automated matching system that identifies and links identical products across e-commerce platforms, even with differing titles and prices. It powers real-time price comparisons and eliminates duplicate listings to streamline catalog management.",
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
    githubUrl: "#",
    published: true,
  },
  {
    id: "lifely",
    number: "03",
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
    githubUrl: "#",
    published: true,
  },
  {
    id: "crm-dashboard",
    number: "04",
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
    published: true,
  },
  {
    id: "study-planner",
    number: "05",
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
    githubUrl: "#",
    published: true,
  },
  {
    id: "qr-attendance",
    number: "06",
    title: "Event Check-In — QR Attendance System",
    category: "Flutter · Mobile · Event Tech",
    tags: ["Flutter", "Mobile", "Event Tech", "Google Sheets API"],
    date: "December 2025",
    description:
      "Designed, developed, and operated a custom Flutter app to manage live attendance for department events (300+ attendees), replacing manual check-in with real-time QR scanning and cloud sheet sync.",
    bullets: [
      "Implemented a high-speed QR scanning feature with Google Sheets API integration for real-time cloud database updates to \"MasterList\" and \"Logs\" sheets.",
      "Verified attendee records during check-in, achieving 100% accuracy in final attendance reporting.",
      "Operated the app live at the event, processing check-ins/check-outs under real-world, high-pressure conditions and troubleshooting on-site scanning issues.",
      "Streamlined the entry process, cutting wait times and preventing unauthorized entry versus the previous manual system.",
    ],
    techStack: ["Flutter", "Dart", "Google Sheets API", "QR Scanning"],
    image: "/images/projects/qr-attendance.png",
    liveUrl: "#",
    githubUrl: "#",
    published: true,
  },
];
