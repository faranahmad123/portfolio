// ============================================================
// 🏢 EXPERIENCE & EDUCATION DATA
// ============================================================

export interface Experience {
  role: string;
  company: string;
  location: string;
  type: string;
  period: string;
  tools: string[];
  bullets: string[];
}

export interface Education {
  degree: string;
  institution: string;

  graduated: string;
  cgpa: string;
}

export const experience: Experience[] = [
  {
    role: "Frontend Developer Intern",
    company: "Keyob",
    location: "Lahore",
    type: "Onsite",
    period: "July 2025 – September 2025",
    tools: ["React", "JavaScript", "Postman", "Docker", "Git"],
    bullets: [
      "Built responsive React UIs, turning complex requirements into scalable components.",
      "Configured and tested RESTful API endpoints with Postman for reliable data sync and typing between frontend and backend.",
      "Used Docker to containerize application environments for consistency across dev and test stages.",
      "Worked in agile cross-functional teams with Git/GitHub and code reviews.",
    ],
  },
];

export const education: Education = {
  degree: "B.Sc. Software Engineering",
  institution: "University of Lahore",
  graduated: "2026",
  cgpa: "3.35 / 4.0",
};
