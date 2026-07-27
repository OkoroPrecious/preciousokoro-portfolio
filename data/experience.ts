export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export const experience: Experience[] = [
  {
    company: "AMTech",
    role: "Frontend Software Engineer",
    period: "2024 - Present",
    description: [
      "Built enterprise healthcare platforms using React, Next.js and TypeScript.",
      "Developed role-based dashboards for patients, doctors and administrators.",
      "Integrated REST APIs and optimized frontend performance.",
      "Collaborated closely with designers and backend engineers.",
    ],
  },
  {
    company: "Crown Interactive",
    role: "Frontend Developer",
    period: "2023 - 2024",
    description: [
      "Built responsive web applications.",
      "Integrated REST APIs.",
      "Developed reusable UI components.",
    ],
  },
  {
    company: "Semicolon Africa",
    role: "Frontend Engineering Trainee",
    period: "2022",
    description: [
      "Learned JavaScript and React fundamentals.",
      "Built frontend projects.",
      "Practiced Git workflows and clean code principles.",
    ],
  },
];