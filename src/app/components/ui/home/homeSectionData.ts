import imgScreen2 from "../../../../assets/IMG_0913.JPG.jpeg";
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
  { label: "WORK", side: "left", sectionId: HOME_SECTION_IDS.work },
  { label: "EXPERIENCE", side: "left", sectionId: HOME_SECTION_IDS.experience },
  { label: "BLOG", side: "right", to: "/blog" },
  { label: "CONTACT", side: "right", sectionId: HOME_SECTION_IDS.contact },
] as const;

export const HERO_IMAGE = imgScreen2;
export const HERO_SOCIALS = ["YT", "IG", "FB", "X"] as const;

export const HERO_STATS = [
  {
    title: "End-to-End",
    description:
      "From idea to code to deployment - handling the complete development lifecycle.",
  },
  {
    title: "Frontend Systems",
    description:
      "Turning product requirements into reusable components, stable layouts, and scalable UI structure.",
  },
] as const;

export const CURRENT_EXPERIENCE = {
  company: "Desisle",
  legalName: "Desisle LLP",
  location: "HSR Layout, Bangalore",
  role: "Frontend Developer",
  period: "Current Chapter",
  timeline: "Feb 2025 - Present",
  studioUrl: "https://www.desisle.com/",
  summary:
    "My professional growth is being shaped inside one studio where I work directly on frontend builds, reusable components, responsive layouts, debugging, and production-ready delivery. Staying in one environment has helped me go deeper into implementation instead of only collecting titles.",
  statement:
    "One company. Real shipping work. Better instincts for architecture, maintainability, and delivery.",
} as const;

export const EXPERIENCE_PILLARS = [
  {
    title: "Frontend Engineering",
    description:
      "Building responsive interfaces, reusable components, and polished web flows that hold up in production.",
  },
  {
    title: "System Building",
    description:
      "Turning repeated requirements into cleaner structures, scalable sections, and maintainable implementation patterns.",
  },
  {
    title: "Problem Solving",
    description:
      "Working through bugs, layout edge cases, and product constraints until the final experience is stable and usable.",
  },
] as const;

export const EXPERIENCE_STUDIO_PROFILE = [
  { label: "Studio", value: "Desisle" },
  { label: "Model", value: "SaaS Product Studio" },
  { label: "Role", value: "Frontend Developer" },
  { label: "Focus", value: "React, UI Systems & Delivery" },
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
    title: "Component-Driven Delivery",
    description:
      "The work relies on reusable sections, cleaner implementation patterns, and frontend consistency instead of one-off page building.",
  },
] as const;

export const VISIONARY_PEOPLE = [
  {
    id: "01",
    name: "Visual Stories",
    discipline: "Photography",
    img: IMG_AYAKA,
    offsetClassName: "md:mt-[180px]",
  },
  {
    id: "02",
    name: "Nature Trails",
    discipline: "Exploring Nature",
    img: IMG_ELIAS,
    offsetClassName: "md:mt-[60px]",
  },
  {
    id: "03",
    name: "Story Drafts",
    discipline: "Script Writing",
    img: IMG_LAILA,
    offsetClassName: "md:mt-[100px]",
  },
  {
    id: "04",
    name: "Digital Builds",
    discipline: "Development",
    img: IMG_MATEO,
    offsetClassName: "md:mt-[200px]",
  },
] as const;

export const FOOTER_LINKS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: "mailto:hello@sricharan.dev" },
] as const;

export const FOOTER_INTRO = {
  name: "Sricharan",
  role: "Frontend Developer at Desisle",
  availability: "Open for frontend builds, product websites, and engineering collaborations.",
} as const;

export const FOOTER_NAV_LINKS = [
  { label: "About", to: `/#${HOME_SECTION_IDS.experience}` },
  { label: "Work", to: `/#${HOME_SECTION_IDS.work}` },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: `/#${HOME_SECTION_IDS.contact}` },
] as const;

export const FOOTER_WORDMARK = {
  base: "builditsri",
  prefix: "build",
  middle: "it",
  suffix: "sri",
  comma: ",",
  spacer: " ",
  exclamations: "!!",
  hover: "build,it sri!!",
} as const;

export const HOME_MEDIA = {
  imgWorkEnvironment,
} as const;
