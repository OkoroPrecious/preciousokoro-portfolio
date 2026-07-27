export interface FeaturedProject {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  responsibilities: string[];
  features: string[];
  results: string[];
  github: string | null;
  live: string | null;
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "AfricaMedTech",

    subtitle: "Enterprise Healthcare Platform",

    description:
      "A modern enterprise healthcare platform that connects patients, doctors, pharmacies, laboratories, and hospital administrators in one unified system.",

    image: "/images/projects/AMT.png",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
    ],

    responsibilities: [
      "Built responsive interfaces with Next.js and TypeScript.",
      "Developed reusable UI components.",
      "Integrated backend REST APIs.",
      "Implemented authentication and protected routes.",
      "Collaborated with backend developers and designers.",
    ],

    features: [
      "Patient Portal",
      "Doctor Dashboard",
      "Laboratory Management",
      "Appointment Scheduling",
      "Authentication",
      "Notifications",
      "Responsive Design",
    ],

    results: [
      "Improved frontend maintainability through reusable components.",
      "Delivered a fast and responsive user experience.",
      "Supported multiple user roles from a single application.",
    ],

    github: null,

    live: "https://africamedtech.com/",
  },

  {
    title: "Hospital Dashboard",

    subtitle: "Healthcare Administration Dashboard",

    description:
      "A role-based hospital administration dashboard for managing appointments, analytics, patients, and medical records.",

    image: "/images/projects/underconstruction.png",

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],

    responsibilities: [
      "Designed responsive dashboard layouts.",
      "Developed reusable dashboard components.",
      "Integrated REST APIs.",
      "Built analytics and reporting screens.",
    ],

    features: [
      "Analytics Dashboard",
      "Appointment Management",
      "Patient Records",
      "Responsive Layout",
      "Notifications",
    ],

    results: [
      "Improved workflow efficiency.",
      "Modernized the dashboard experience.",
      "Optimized UI performance.",
    ],

    github: null,

    live: null,
  },
];