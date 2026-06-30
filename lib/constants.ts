import {
  SiPostman,
  SiJunit5,
  SiJira,
  SiGit,
  SiMysql,
  SiPython,
  SiApachejmeter,
  SiGooglechrome,
} from "react-icons/si";
import {
  Bug,
  TestTube2,
  Database,
  Code2,
  GitBranch,
  Shield,
  Gauge,
  Layers,
  FileSearch,
  ClipboardCheck,
  BarChart3,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { IconType } from "react-icons";

// ─── Personal Info ────────────────────────────────────────────
export const PERSONAL = {
  name: "Vaishali Sharma",
  firstName: "Vaishali",
  lastName: "Sharma",
  role: "QA Engineer",
  tagline: "Testing Quality. Building Confidence.",
  summary:
    "QA Engineer with hands-on experience in both manual and automation testing on enterprise-grade microservices and web applications. Skilled in writing test plans, running regression and API tests, and tracking defects end-to-end in JIRA. I work well in Agile teams and take the quality of what ships seriously.",
  location: "Ghaziabad, India",
  email: "shvaishali37@gmail.com",
  phone: "+91-8279335242",
  linkedin: "https://www.linkedin.com/in/vaishalisharma01",
  linkedinHandle: "vaishalisharma01",
  github: "https://github.com/kikiguhi",
  githubHandle: "vaishalisharma",
  resumeUrl: "/VAISHALI_RESUME.pdf", 
  availability: "Open to Opportunities",
} as const;

// ─── Navigation ───────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Workflow", href: "/workflow" },
  { label: "Contact", href: "/contact" },
] as const;

// ─── Hero Stats ───────────────────────────────────────────────
export const HERO_STATS = [
  { value: 200, suffix: "+", label: "Test Cases Written" },
  { value: 90, suffix: "%", label: "Test Coverage" },
  { value: 30, suffix: "%", label: "Faster Execution" },
  { value: 3, suffix: "", label: "Production Releases" },
] as const;

// ─── About ────────────────────────────────────────────────────
export const ABOUT = {
  story:
    "I'm a QA Engineer who believes that great software starts with great testing. With experience across enterprise-grade microservices and web applications, I've developed a keen eye for quality that goes beyond just finding bugs — it's about building confidence in every release.",
  journey:
    "My journey into quality assurance began during my Master's in Computer Applications at ABES Engineering College. What started as curiosity about how software fails evolved into a passion for ensuring it succeeds. Today, I specialize in both manual and automation testing, working with tools like TestNG, Postman, and JUnit to deliver reliable software.",
  focus:
    "Currently focused on expanding my automation testing expertise, particularly in API validation and regression testing optimization. I'm passionate about shift-left testing practices and believe in catching defects early to save time and resources.",
  philosophy:
    "Quality isn't just a phase — it's a mindset. I approach every feature with the question: 'How could this break?' This proactive thinking helps teams ship faster without sacrificing reliability.",
  values: [
    "Attention to Detail",
    "Proactive Communication",
    "Continuous Learning",
    "Team Collaboration",
  ],
} as const;

// ─── Skills ───────────────────────────────────────────────────
export interface Skill {
  name: string;
  icon: LucideIcon;
  category: string;
}

export const SKILL_CATEGORIES = [
  "All",
  "Testing Types",
  "Automation",
  "Tools & Databases",
  "Methodologies",
] as const;

export const SKILLS: Skill[] = [
  // Testing Types
  { name: "Manual Testing", icon: ClipboardCheck, category: "Testing Types" },
  { name: "Automation Testing", icon: Workflow, category: "Testing Types" },
  { name: "API Testing", icon: Code2, category: "Testing Types" },
  { name: "Regression Testing", icon: GitBranch, category: "Testing Types" },
  { name: "Smoke Testing", icon: Shield, category: "Testing Types" },
  { name: "Performance Testing", icon: Gauge, category: "Testing Types" },
  { name: "Database Testing", icon: Database, category: "Testing Types" },
  { name: "Black-box Testing", icon: Layers, category: "Testing Types" },
  { name: "GUI Testing", icon: FileSearch, category: "Testing Types" },
  { name: "Cross-browser Testing", icon: Bug, category: "Testing Types" },

  // Automation
  { name: "Python", icon: Code2, category: "Automation" },
  { name: "SQL", icon: Database, category: "Automation" },
  { name: "JUnit", icon: TestTube2, category: "Automation" },
  { name: "TestNG", icon: TestTube2, category: "Automation" },

  // Tools & Databases
  { name: "Postman", icon: Code2, category: "Tools & Databases" },
  { name: "JIRA", icon: Bug, category: "Tools & Databases" },
  { name: "Git", icon: GitBranch, category: "Tools & Databases" },
  { name: "MySQL", icon: Database, category: "Tools & Databases" },
  { name: "MSSQL", icon: Database, category: "Tools & Databases" },
  { name: "JMeter", icon: Gauge, category: "Tools & Databases" },
  { name: "BrowserStack", icon: Layers, category: "Tools & Databases" },

  // Methodologies
  { name: "Agile / Scrum", icon: Workflow, category: "Methodologies" },
  { name: "SDLC", icon: BarChart3, category: "Methodologies" },
  { name: "Shift-Left Testing", icon: Shield, category: "Methodologies" },
  { name: "Test Planning", icon: ClipboardCheck, category: "Methodologies" },
  { name: "Test Case Design", icon: FileSearch, category: "Methodologies" },
  { name: "Defect Management", icon: Bug, category: "Methodologies" },
  { name: "Bug Lifecycle", icon: Workflow, category: "Methodologies" },
];

// ─── Experience ───────────────────────────────────────────────
export interface Experience {
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
}

export const EXPERIENCES: Experience[] = [
  {
    company: "Whitehats Technologies",
    role: "Quality Analyst",
    duration: "Feb 2025 – Jan 2026",
    startDate: "2025-02",
    endDate: "2026-01",
    responsibilities: [
      "Wrote and executed 200+ test cases covering regression, smoke, GUI, and black-box scenarios — kept test coverage above 90% across the release cycle.",
      "Automated API and report validation tests using JUnit and Postman, cutting manual test execution time by around 30%, which helped the team ship faster without skipping checks.",
      "Did API testing with Postman across 10+ endpoints each sprint, catching data integrity issues before they made it to production.",
      "Logged 80+ defects in JIRA with clear reproduction steps and priority tags — worked with developers directly to get 95% of them resolved within the same sprint.",
      "Used SQL queries against MSSQL to verify backend data matched what was showing on the frontend reports, caught 15+ data-layer bugs before UAT.",
      "Sat in on sprint planning, daily stand-ups, and retros, and gave sign-off on release readiness for 3 production deployments.",
    ],
    technologies: [
      "JUnit",
      "Postman",
      "JIRA",
      "MSSQL",
      "SQL",
      "Git",
      "Agile/Scrum",
    ],
    metrics: [
      { label: "Test Cases", value: "200+" },
      { label: "Coverage", value: "90%+" },
      { label: "Faster Execution", value: "30%" },
      { label: "Defects Logged", value: "80+" },
      { label: "Sprint Resolution", value: "95%" },
      { label: "Prod Releases", value: "3" },
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────
export interface Project {
  title: string;
  overview: string;
  problem: string;
  testingStrategy: string;
  challenges: string;
  results: string[];
  techStack: string[];
  size: "large" | "medium";
  github: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Stay Portal",
    overview:
      "A booking and payment platform tested end-to-end across browsers for functional, regression, and cross-browser compatibility.",
    problem:
      "The booking flow had critical payment integrity issues and UI inconsistencies across browsers that needed comprehensive testing.",
    testingStrategy:
      "End-to-end testing of booking and payment flows — functional, regression, and cross-browser. Validated payment data accuracy using MySQL queries against backend.",
    challenges:
      "Complex payment flows with multiple edge cases across different browsers required meticulous cross-browser testing strategies.",
    results: [
      "Improved booking efficiency by 35%",
      "Cut interface load time by 40%",
      "Tracked 50+ defects in JIRA with priority tagging",
      "Validated payment data accuracy with MySQL queries",
    ],
    techStack: [
      "JIRA",
      "MSSQL",
      "MySQL",
      "Manual Testing",
      "Automation Testing",
      "Cross-browser Testing",
    ],
    size: "large",
    github: "https://github.com/shvaishali37/stay-portal",
  },
  {
    title: "Data Processing & Reporting Tool",
    overview:
      "An ETL pipeline that pulled data from DB servers, processed raw records, and generated reports — tested for data integrity and transformation accuracy.",
    problem:
      "Data transformation logic in the ETL pipeline needed validation to ensure reports matched source data accurately.",
    testingStrategy:
      "Tested ETL pipeline data flow from DB servers through processing to final reports. Wrote reusable TestNG scripts to validate data transformation logic.",
    challenges:
      "Complex data transformations with multiple stages required careful validation at each step to ensure downstream report accuracy.",
    results: [
      "Found defects early enough for team to fix before downstream reports",
      "Trimmed regression test time by 25% with reusable TestNG scripts",
      "Reused test scripts across builds for consistent validation",
    ],
    techStack: ["TestNG", "JUnit", "MSSQL", "Automation Testing"],
    size: "medium",
    github: "https://github.com/shvaishali37/etl-reporting-tool",
  },
];

// ─── Testing Workflow Steps ───────────────────────────────────
export const WORKFLOW_STEPS = [
  {
    step: 1,
    title: "Requirements",
    description: "Analyze requirements and identify testable scenarios",
    icon: FileSearch,
  },
  {
    step: 2,
    title: "Planning",
    description: "Create test plan with scope, timelines, and resources",
    icon: ClipboardCheck,
  },
  {
    step: 3,
    title: "Test Design",
    description: "Design test cases with clear steps and expected results",
    icon: Layers,
  },
  {
    step: 4,
    title: "Automation",
    description: "Automate regression and API tests for faster execution",
    icon: Code2,
  },
  {
    step: 5,
    title: "Execution",
    description: "Execute test suites and document results systematically",
    icon: Workflow,
  },
  {
    step: 6,
    title: "Bug Reporting",
    description: "Log defects with clear reproduction steps and priority",
    icon: Bug,
  },
  {
    step: 7,
    title: "Regression",
    description: "Re-test fixes and run regression to prevent side effects",
    icon: GitBranch,
  },
  {
    step: 8,
    title: "Release",
    description: "Sign off on release readiness after final validation",
    icon: Shield,
  },
] as const;

// ─── Quality Metrics ──────────────────────────────────────────
export const QUALITY_METRICS = [
  { value: 200, suffix: "+", label: "Test Cases Written", icon: ClipboardCheck },
  { value: 90, suffix: "%", label: "Test Coverage", icon: Shield },
  { value: 30, suffix: "%", label: "Automation Time Savings", icon: Gauge },
  { value: 80, suffix: "+", label: "Defects Tracked", icon: Bug },
  { value: 3, suffix: "", label: "Production Releases", icon: GitBranch },
  { value: 10, suffix: "+", label: "APIs Tested per Sprint", icon: Code2 },
] as const;

// ─── Tools ────────────────────────────────────────────────────
export interface Tool {
  name: string;
  icon: IconType;
  color: string;
  description: string;
}

export const TOOLS: Tool[] = [
  {
    name: "Postman",
    icon: SiPostman,
    color: "#FF6C37",
    description: "API Testing & Validation",
  },
  {
    name: "JUnit",
    icon: SiJunit5,
    color: "#25A162",
    description: "Unit Testing Framework",
  },
  {
    name: "TestNG",
    icon: SiJunit5,
    color: "#CD6839",
    description: "Test Automation Framework",
  },
  {
    name: "JIRA",
    icon: SiJira,
    color: "#0052CC",
    description: "Defect Tracking & Management",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    description: "Version Control",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
    description: "Database Testing",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
    description: "Scripting & Automation",
  },
  {
    name: "JMeter",
    icon: SiApachejmeter,
    color: "#D22128",
    description: "Performance Testing",
  },
  {
    name: "BrowserStack",
    icon: SiGooglechrome,
    color: "#F5A623",
    description: "Cross-browser Testing",
  },
];

// ─── Education ────────────────────────────────────────────────
export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  cgpa: string;
}

export const EDUCATION: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "ABES Engineering College",
    location: "Ghaziabad, Uttar Pradesh",
    duration: "2022 – 2024",
    cgpa: "7.7/10",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "IMS University Courses Campus",
    location: "Ghaziabad",
    duration: "2019 – 2022",
    cgpa: "7.2/10",
  },
];

// ─── Social Links ─────────────────────────────────────────────
export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: PERSONAL.linkedin,
    handle: PERSONAL.linkedinHandle,
  },
  {
    label: "GitHub",
    href: PERSONAL.github,
    handle: PERSONAL.githubHandle,
  },
  {
    label: "Email",
    href: `mailto:${PERSONAL.email}`,
    handle: PERSONAL.email,
  },
] as const;

// ─── Certificates ─────────────────────────────────────────────
export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  url?: string;
  credentialId?: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    title: "ISTQB Certified Tester Foundation Level (CTFL)",
    issuer: "ISTQB - International Software Testing Qualifications Board",
    date: "2025",
    credentialId: "ISTQB-CTFL-9831",
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "2025",
    url: "https://badgr.com/public/assertions",
  },
  {
    title: "Automation Testing Specialist (Python/Java)",
    issuer: "Whitehats Technical Academy",
    date: "2025",
  },
] as const;

