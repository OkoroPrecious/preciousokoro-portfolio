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
    title: "Etta Atlantic Memorial",

    subtitle: "Hospital & Diagnostic Centre Website",

    description:
      "The public website for Etta Atlantic Memorial Hospital and Diagnostic Centre. Patients can browse services, health packages, and doctors, read testimonials, and book appointments. It is built as a fast, statically exported site.",

    image: "/images/projects/etta-atlantic.jpg",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zod",
      "Storybook",
      "Vitest",
    ],

    responsibilities: [
      "Built the full site with Next.js 16 static export, so it is served as plain HTML with no server to run.",
      "Structured content into modules with Zod-validated schemas for services, packages, doctors, and hospital info.",
      "Built a design system of tokens and atomic components, documented in Storybook with accessibility checks.",
      "Implemented SEO: canonical URLs, sitemap, robots rules, and per-page metadata.",
      "Wrote unit tests with Vitest and Testing Library, and enforced type-aware linting and formatting.",
    ],

    features: [
      "Services & Specialties",
      "Health Packages with Brochures",
      "Doctors Directory",
      "Patient Testimonials",
      "Appointment Booking CTAs",
      "Social & Contact Integration",
      "Responsive Design",
    ],

    results: [
      "Shipped a fast, low-cost static site the hospital can host anywhere.",
      "Made content easy to update safely through typed, validated data modules.",
      "Kept the UI consistent through a documented component library.",
    ],

    github: null,

    live: "https://www.ettaatlantic.com",
  },

  {
    title: "BALEPEPE",

    subtitle: "Fashion E-commerce Store",

    description:
      "A custom online store for the fashion brand Maison BALEPEPE. It replaced the brand's old WooCommerce site and adds live Paystack checkout and automatic order notifications.",

    image: "/images/projects/balepepe.jpg",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Motion",
      "Paystack",
      "Node.js",
    ],

    responsibilities: [
      "Built the storefront end to end: home, shop, product detail, search, cart, and checkout.",
      "Integrated Paystack with server-side cart re-pricing and a signature-verified payment webhook.",
      "Automated order notifications to WhatsApp, Gmail, and Google Sheets.",
      "Migrated from WooCommerce with permanent redirects that preserve legacy URLs and SEO.",
      "Applied the client's design corrections across phone and desktop layouts.",
    ],

    features: [
      "Product Catalogue with Filters",
      "Search",
      "Cart Drawer",
      "Paystack Checkout",
      "Order Confirmation & Verification",
      "Newsletter & Cookie Consent",
      "Responsive Design",
    ],

    results: [
      "Moved the brand off WordPress to a faster custom storefront.",
      "Gave the client secure online payments and instant order alerts.",
      "Kept existing search rankings and links working through the migration.",
    ],

    github: null,

    live: "https://balepepe.com",
  },
];