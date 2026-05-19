import imgScreen2 from "../../../../assets/hero-banner.webp";
import IMG_AYAKA from "../../../../assets/IMG_1579.JPG.jpeg";
import IMG_MATEO from "../../../../assets/1742325442796.jpg";

const imgWorkEnvironment =
  "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=1200&q=80";

const IMG_ELIAS =
  "https://images.unsplash.com/photo-1638474368314-59198edde028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";
const IMG_LAILA =
  "https://images.unsplash.com/photo-1737554757008-b259fad19c2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";

export const HOME_SECTION_IDS = {
  work: "work",
  experience: "experience",
  contact: "contact",
} as const;

export const NAV_ITEMS = [
  { label: "TOOL", side: "left", sectionId: HOME_SECTION_IDS.work },
  { label: "EXPERIENCE", side: "left", sectionId: HOME_SECTION_IDS.experience },
  { label: "WORK", side: "right", sectionId: HOME_SECTION_IDS.work },
] as const;

export const HERO_IMAGE = imgScreen2;
export const HERO_SOCIALS = ["YT", "IG", "FB", "X"] as const;

export const HERO_STATS = [
  {
    title: "Websites & SaaS",
    description: "Two modes, one mindset",
  },
  {
    title: "Product-led",
    description: "Not just feature-complete",
  },
] as const;

export const CURRENT_EXPERIENCE = {
  company: "Desisle",
  legalName: "Desisle LLP",
  location: "India",
  role: "Frontend Developer",
  period: "Role 01 - Current Position",
  timeline: "Feb 2025 - Present",
  companyType: "Product Studio - SaaS & Web",
  studioUrl: "https://www.desisle.com/",
  summary:
    "Desisle LLP is a lean product studio that designs and builds SaaS products and web platforms for clients. Working here means operating across the entire frontend surface of a product - from the first wireframe conversation to the post-launch performance audit. There is no handoff between design and development because that gap does not exist in a small team. You own the output entirely.",
  projectSummary:
    "In a little over a year, four client products built from the ground up: a multi-brand corporate platform, a finance content platform, a SaaS product website, and the studio's own site. Each one is live. Each one taught me something the previous one did not.",
  statement:
    "Started with a client demo in a one-month internship. Currently four live products into a studio role. The trajectory is clear enough.",
} as const;

export const INTERNSHIP_EXPERIENCE = {
  company: "Nexus Info",
  legalName: "Nexus Info",
  location: "Virtual",
  role: "Web Development Intern",
  period: "Role 02 - Internship",
  timeline: "Jul 15, 2024 - Aug 15, 2024",
  duration: "1 month",
  type: "Virtual Internship - Web Development",
  summary:
    "A one-month virtual internship that covered more ground than the duration suggests. The first two weeks were spent building and delivering a standalone frontend project - scoped, executed, and shipped independently. The remaining time went into something larger: a full-stack website built end to end, frontend and backend, as part of a client demo project.",
  outcome:
    "The internship confirmed what kind of developer I was becoming - one who moves from requirement to working product without needing the path to be fully laid out first. Nexus Info certified the completion with a note on exceptional dedication and a proactive approach to challenges. Those words mean more when you know what the five weeks actually contained.",
  certificate: "Certified by Nexus Info - Web Development - July 15 - August 15, 2024",
} as const;

export const INTERNSHIP_BUILDS = [
  {
    label: "Weeks 1-2",
    value: "Standalone frontend project - scoped and delivered independently",
  },
  {
    label: "Weeks 3-4",
    value: "Full end-to-end website - frontend and backend, client demo project",
  },
  {
    label: "Outcome",
    value: "Certified completion - recognised for exceptional skills and dedication",
  },
] as const;

export const EXPERIENCE_PILLARS = [
  {
    title: "Planning as a Discipline",
    description:
      "I do not open a code editor until I understand what I am building and why. That means reading the brief, mapping the component surface, identifying where complexity will concentrate, and deciding how to contain it before writing a single line. It adds an hour at the start. It saves a week in the middle.",
  },
  {
    title: "React & Next.js Systems",
    description:
      "Not just knowing the API - knowing when to reach for it and when not to. Server Components, App Router architecture, data fetching patterns, bundle strategy. I treat the framework as a set of decisions, not a set of conventions to follow by default.",
  },
  {
    title: "Full-Stack Awareness",
    description:
      "Frontend decisions do not exist in isolation. Having built end-to-end - including backend - means I understand what the API contract needs to look like before it exists, and I write frontend code that does not create avoidable problems for the layer beneath it.",
  },
] as const;

export const EXPERIENCE_STUDIO_PROFILE = [
  { label: "01", value: "Lean team structure - high individual ownership" },
  { label: "02", value: "SaaS and corporate web focus" },
  { label: "03", value: "End-to-end product delivery, not component-level contribution" },
  { label: "04", value: "Multiple live products shipped per year" },
] as const;

export const EXPERIENCE_SOCIALS = [
  {
    label: "LinkedIn",
    value: "company/desisle",
    href: "https://www.linkedin.com/company/desisle/",
  },
  {
    label: "Instagram",
    value: "@desislellp",
    href: "https://www.instagram.com/desislellp",
  },
] as const;

export const EXPERIENCE_RECOGNITION = [
  {
    title: "Four Production Projects",
    description:
      "Four production projects shipped in twelve months, each on schedule and currently live. No project has required a post-launch architectural rework.",
  },
] as const;

export const VISIONARY_PEOPLE = [
  {
    id: "01",
    name: "Photography",
    discipline: "Hobby",
    description:
      "I photograph the way I write code - searching for the exact composition before pressing anything. Light, geometry, and the half-second before things change.",
    note: "Still frames. Still thinking.",
    img: IMG_AYAKA,
    offsetClassName: "md:mt-[180px]",
  },
  {
    id: "02",
    name: "Script writer",
    discipline: "Hobby",
    description:
      "The best architectural decisions I have made happened nowhere near a keyboard. Removing yourself from the problem is often the most productive thing you can do with a hard question.",
    note: "Words before wireframes.",
    img: IMG_ELIAS,
    offsetClassName: "md:mt-[60px]",
  },
  {
    id: "03",
    name: "Video editor",
    discipline: "Hobby",
    description:
      "A script and a codebase solve the same problem: how do you move someone step by step without losing them. Editing taught me pacing, and pacing makes everything better.",
    note: "Cut to the point.",
    img: IMG_LAILA,
    offsetClassName: "md:mt-[100px]",
  },
  {
    id: "04",
    name: "Developer",
    discipline: "Craft",
    description:
      "Client projects sharpen execution. Personal projects sharpen taste - experiments in tooling, interface patterns, and product ideas that do not fit anywhere else.",
    img: IMG_MATEO,
    offsetClassName: "md:mt-[200px]",
  },
] as const;

export const FOOTER_LINKS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: "mailto:sricharananbalagan6@gmail.com" },
] as const;

export const FOOTER_INTRO = {
  name: "sri charan.dev",
  role: "Frontend Developer - React & Next.js - Product-minded engineer",
  availability:
    "Currently heads-down at Desisle LLP. Open to conversations about the right next thing.",
} as const;

export const FOOTER_NAV_LINKS = [
  { label: "About", to: `/#${HOME_SECTION_IDS.experience}` },
  { label: "Work", to: `/#${HOME_SECTION_IDS.work}` },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: `/#${HOME_SECTION_IDS.contact}` },
] as const;

export const FOOTER_WORDMARK = {
  base: "buildwithsri",
  prefix: "build",
  middle: "with",
  suffix: "sri",
  comma: ",",
  spacer: " ",
  exclamations: "!!",
  hover: "buildwith, sri!!",
} as const;

export const HOME_MEDIA = {
  imgWorkEnvironment,
} as const;
