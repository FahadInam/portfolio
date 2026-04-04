export const METADATA = {
  author: "Fahad Inam",
  title: "Portfolio | Fahad Inam",
  description:
    "Fahad Inam is a Full Stack Developer with 4+ years of experience building scalable web applications across EdTech and SaaS.",
  siteUrl: "",
  twitterHandle: "",
  keywords: [
    "Fahad Inam",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Software Engineer",
    "Portfolio",
  ].join(", "),
  image: "",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A Full Stack Developer",
  "I build scalable web applications",
  "I deliver end-to-end features across the stack",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:fahadinam4@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/fahadinam/",
  },
  {
    name: "github",
    url: "https://github.com/fahadinam",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "nodejs",
    "vite",
    "figma",
    "git",
  ],
  librariesAndFrameworks: [
    "react",
    "nextjs",
    "svelte",
    "redux",
    "tailwindcss",
    "antdesign",
    "mui",
    "bootstrap",
    "tanstack",
  ],
  databases: ["postgresql", "mongodb", "supabase"],
  other: ["graphql", "cypress", "jest", "storybook"],
};

export const PROJECTS = [
  {
    name: "21C Digital",
    imageKey: "21c-digital",
    description: "AI-driven maths education platform for UK schools",
    gradient: ["#4F46E5", "#7C3AED"],
    url: null,
    tech: ["react", "nextjs", "tailwindcss"],
  },
  {
    name: "Shupavu Games",
    imageKey: "shupavu-games",
    description: "Educational gaming platform for Kenyan students",
    gradient: ["#059669", "#34D399"],
    url: null,
    tech: ["typescript", "tailwindcss"],
  },
  {
    name: "Bonzo",
    imageKey: "bonzo",
    description: "AI content creation and CMS for educators",
    gradient: ["#2563EB", "#60A5FA"],
    url: null,
    tech: ["react", "typescript"],
  },
  {
    name: "Quranscape",
    imageKey: "quranscape",
    description: "Online Quran learning with live classes and tracking",
    gradient: ["#0F766E", "#2DD4BF"],
    url: null,
    tech: ["react", "tailwindcss"],
  },
  {
    name: "AKU-EB Platform",
    imageKey: "aku-eb",
    description: "Exam prep platform for AKU-EB students across Pakistan",
    gradient: ["#7C3AED", "#A78BFA"],
    url: null,
    tech: ["react", "typescript"],
  },
  {
    name: "Senf",
    imageKey: "senf",
    description: "Afghanistan's multilingual digital learning platform",
    gradient: ["#DC2626", "#F87171"],
    url: null,
    tech: ["typescript", "tailwindcss"],
  },
  {
    name: "Kankor",
    imageKey: "kankor",
    description: "University entrance exam prep for Afghan students",
    gradient: ["#D97706", "#FBBF24"],
    url: null,
    tech: ["typescript", "tailwindcss"],
  },
  {
    name: "Apimio",
    imageKey: "apimio",
    description: "SaaS PIM platform for retail product data management",
    gradient: ["#1E3A5F", "#3B82F6"],
    url: null,
    tech: ["javascript", "tailwindcss"],
  },
];

export const WORK_CONTENTS = {
  KNOWLEDGE_PLATFORM: [
    {
      title: "Knowledge Platform",
      description:
        "Knowledge Platform is a global EdTech company building CMS, LMS, and educational gaming platforms serving 500+ K-12 schools across Pakistan, Bangladesh, and Kenya.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Transforming education at scale
        </div>
      ),
    },
    {
      title: "AI Integration",
      description:
        "Built AI-powered content creation tools integrating OpenAI APIs with backend services, enabling 60+ educators to generate curriculum-aligned material 3x faster than manual workflows.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Full Stack Developer
        </div>
      ),
    },
    {
      title: "Scale & Impact",
      description:
        "Engineered end-to-end payment integration with PostgreSQL-backed transaction handling, supporting 100,000+ successful transactions. Led frontend and API development for a UK-based LMS, implementing WCAG-compliant accessible UI. Reduced UI bugs by 40% through code splitting, bundle optimization, and systematic refactoring across a cross-functional team of 10+ engineers.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Full Stack Developer
        </div>
      ),
    },
  ],
  SECOND_MOUSE: [
    {
      title: "2nd Mouse Venture Inc",
      description:
        "2nd Mouse Venture Inc is a software company where I developed Keystone, a U.S.-based trucking SaaS serving 30+ logistics companies with fleet management and dispatch operations.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Building logistics solutions
        </div>
      ),
    },
    {
      title: "Auth & Payments",
      description:
        "Implemented secure, role-based authentication flows with OAuth 2.0, ensuring controlled access to sensitive operational and financial data. Integrated Stripe payment processing and QuickBooks APIs for automated invoicing, reducing manual financial reconciliation time for fleet operators.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          React Frontend Developer
        </div>
      ),
    },
    {
      title: "Agile Delivery",
      description:
        "Shipped real-time shipment tracking and driver assignment interfaces in Agile sprints on a bi-weekly release cadence, building role-based dashboards for fleet management and dispatch operations.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          React Frontend Developer
        </div>
      ),
    },
  ],
  APIMIO: [
    {
      title: "Apimio",
      description:
        "Apimio is a Product Information Management (PIM) SaaS platform serving 30+ retail and brand clients with scalable product data management solutions.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Streamlining product data management
        </div>
      ),
    },
    {
      title: "Design & Performance",
      description:
        "Translated Figma designs into pixel-perfect, SEO-optimized web pages with consistent cross-browser rendering and mobile-first responsive behavior. Optimized application performance through lazy loading, image compression, and code-level improvements, achieving sub-2-second load times across key user flows.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Developer
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
