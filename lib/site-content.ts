export type ProjectStatus = "live" | "coming-soon";
export type ProjectCategory = "phone" | "desktop" | "other" | "both";

export interface ProjectLinkSet {
  route: `/projects/${string}`;
  demoUrl?: string;
  repoUrl?: string;
  architectureUrl?: string;
  termsRoute?: `/projects/${string}/terms` | `/terms/${string}.html`;
  privacyRoute?: `/projects/${string}/privacy` | `/privacy/${string}.html`;
  deleteAccountRoute?: `/projects/${string}/delete-account`;
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  highlights: string[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  category: ProjectCategory;
  tech: string[];
  links: ProjectLinkSet;
  caseStudy?: ProjectCaseStudy;
}

export interface NavItem {
  label: string;
  href: `#${string}` | `/projects/${string}` | string;
  external?: boolean;
}

export type ContactItemId = "github" | "linkedin" | "email";

export interface ContactItem {
  id: ContactItemId;
  label: string;
  href: string;
  external?: boolean;
  value?: string;
  copyValue?: string;
  actionLabel?: string;
}

export const SECTION_IDS = {
  home: "home",
  about: "about",
  experience: "experience",
  projects: "projects",
  contact: "contact",
} as const;

export const SITE_META = {
  title: "Pandabyte | Huntington Co – Software Engineer & Full-Stack Developer",
  description:
    "Pandabyte is the portfolio of Huntington Co, a Regents Scholar at UCLA. Featuring Nibble (a student dining app), robotics projects, and full-stack case studies built with React Native, Next.js, and Postgres.",
  shortDescription:
    "Pandabyte – portfolio of Huntington Co, UCLA software engineer. React Native, Next.js, and Postgres projects.",
  siteName: "Pandabyte",
  url: "https://www.pandabyte.dev",
  keywords: [
    "Pandabyte",
    "Huntington Co",
    "software engineer",
    "full-stack developer",
    "UCLA",
    "React Native",
    "Next.js",
    "Nibble",
    "portfolio",
  ],
} as const;

export const RESUME_PATH = "/Huntington_SWE_Resume.pdf";

export const PROJECTS: ProjectItem[] = [
  {
    slug: "nibble",
    title: "Nibble",
    summary:
      "Bruin dining companion with dietary filtering, local-first UX, and privacy-conscious routing.",
    status: "live",
    category: "phone",
    tech: ["React Native", "Expo", "TypeScript", "Supabase"],
    links: {
      route: "/projects/nibble",
      architectureUrl: "/projects/nibble#architecture",
      privacyRoute: "/privacy/nibble_policy.html",
      deleteAccountRoute: "/projects/nibble/delete-account",
    },
    caseStudy: {
      overview:
        "Nibble is a UCLA dining companion that helps students quickly find meals that match dietary preferences, with reliable menu access and low-friction UX.",
      problem:
        "Students often check multiple menu sources, parse inconsistent food information, and repeatedly apply dietary constraints, which slows daily decisions.",
      solution:
        "Nibble consolidates menu data into a mobile-first flow with saved preferences, clear filtering, and local-first behavior for reliable browsing.",
      architecture:
        "Built with React Native + Expo on the client and Supabase-backed data/auth with typed boundaries for reliability and faster iteration.",
      highlights: [
        "Preference-aware filtering for faster meal decisions.",
        "Local-first read paths for resilient menu browsing.",
        "Privacy-aware account/data handling with a dedicated policy route.",
      ],
    },
  },
  {
    slug: "campus-event-escrow",
    title: "Ducky's Money Bin",
    summary:
      "Campus event payments and escrow workflow for org invites, member signups, held funds, and policy-based refunds.",
    status: "live",
    category: "phone",
    tech: ["React Native", "Expo", "TypeScript", "Stripe", "Supabase"],
    links: {
      route: "/projects/campus-event-escrow",
      termsRoute: "/terms/campus_event_escrow_terms.html",
      privacyRoute: "/privacy/campus_event_escrow_policy.html",
      deleteAccountRoute: "/projects/campus-event-escrow/delete-account",
    },
  },
  {
    slug: "asset-scanner",
    title: "Asset Scanner",
    summary:
      "Computer vision safety classification pipeline for moderation workflows and model evaluation.",
    status: "coming-soon",
    category: "desktop",
    tech: ["Python", "OpenCV", "Node.js", "Next.js", "MongoDB"],
    links: {
      route: "/projects/asset-scanner",
      repoUrl: "https://github.com/HuntingtonPanda/Asset_scanner",
    },
  },
  {
    slug: "ai-quiz-generator",
    title: "AI Quiz Generator",
    summary:
      "Adaptive quiz generation for educators with review loops, export support, and analytics hooks.",
    status: "coming-soon",
    category: "desktop",
    tech: ["Next.js", "TypeScript", "OpenAI API", "Prisma"],
    links: {
      route: "/projects/ai-quiz-generator",
      repoUrl: "https://github.com/HuntingtonPanda/AI_Online_Kahoot",
    },
  },
  {
    slug: "gidi",
    title: "GIDI",
    summary:
      "LEGO robotics build that combines sensors, YOLOv8, and OpenCV to track a selected target and launch red toy balls.",
    status: "live",
    category: "other",
    tech: ["Python", "YOLOv8", "OpenCV", "Sensors", "LEGO Robotics"],
    links: {
      route: "/projects/gidi",
    },
  },
];

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: `#${SECTION_IDS.about}` },
  { label: "Experience", href: `#${SECTION_IDS.experience}` },
  { label: "Projects", href: `#${SECTION_IDS.projects}` },
  { label: "Contact", href: `#${SECTION_IDS.contact}` },
  { label: "Resume", href: RESUME_PATH, external: true },
];

export const CONTACT_ITEMS: ContactItem[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/PandaOats",
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/huntington-co/",
    external: true,
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:CoHuntington7@gmail.com",
    value: "CoHuntington7@gmail.com",
    copyValue: "CoHuntington7@gmail.com",
    actionLabel: "Open mail app",
  },
];
