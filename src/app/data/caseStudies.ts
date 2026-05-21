import financeTaleCover from "../../assets/finance-tale-cover.png";
import bookmarkHubCover from "../../assets/bookmark-hub.png";
import desisleCover from "../../assets/desisle.png";
import hosakshamCover from "../../assets/hosaksham.png";
import prodxverseCover from "../../assets/prodxverse.png";

const imgProject01 =
  "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=1200&q=80";
const imgProject02 = financeTaleCover;
const imgProject03 = desisleCover;
const imgProject04 = hosakshamCover;
const imgProject05 = prodxverseCover;
const imgProject06 = bookmarkHubCover;
const imgProject07 =
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80";

type CaseStudyMetric = {
  label: string;
  value: string;
  note?: string;
};

type CaseStudyBlock = {
  title: string;
  description: string;
};

type CaseStudyTopic = {
  title: string;
  paragraphs: readonly string[];
  tags?: readonly string[];
  quote?: string;
  metrics?: readonly CaseStudyMetric[];
};

type CaseStudyLogoItem = {
  name: string;
  logo: string;
};

type CaseStudyStackGroup = {
  title: string;
  items: readonly CaseStudyLogoItem[];
};

export type CaseStudy = {
  slug: string;
  tag: string;
  title: string;
  img: string;
  client: string;
  year: string;
  role: string;
  duration: string;
  clientType: string;
  description: string;
  details: readonly string[];
  liveUrl?: string;
  sourceNote?: string;
  contextSummary?: string;
  projectSummary?: readonly string[];
  snapshotMetrics?: readonly CaseStudyMetric[];
  ecosystemBlocks?: readonly CaseStudyBlock[];
  stackSignals?: readonly CaseStudyBlock[];
  challengeBlocks?: readonly CaseStudyBlock[];
  resultMetrics?: readonly CaseStudyMetric[];
  outcomeNarrative?: readonly string[];
  customObjective?: CaseStudyTopic;
  customStruggle?: CaseStudyTopic;
  customTransformation?: CaseStudyTopic;
  customOutcomes?: CaseStudyTopic;
  customLearnings?: CaseStudyTopic;
  technologiesUsed?: readonly CaseStudyLogoItem[];
  frameworksUsed?: readonly CaseStudyLogoItem[];
  toolsUsed?: readonly CaseStudyLogoItem[];
  stackGroups?: readonly CaseStudyStackGroup[];
};

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    slug: "barakat",
    tag: "FMCG Website",
    title: "Building a Web Presence for a UAE-Based FMCG Brand",
    img: imgProject01,
    client: "Client confidential",
    year: "2025",
    role: "Frontend Developer",
    duration: "6 weeks",
    clientType: "Diversified Conglomerate",
    description:
      "Custom WordPress - frontend development, ACF setup & documentation.",
    customObjective: {
      title: "Objective",
      paragraphs: [
        "The client is a large, privately held conglomerate headquartered in the Gulf region, operating across 14+ companies spanning education, real estate, construction, hospitality, logistics, media, and general trading - with a presence across the UAE, Kuwait, and Saudi Arabia.",
        "The brief was to build and deliver a custom WordPress website that could represent this breadth of operations professionally, be easily managed by non-technical internal staff after handoff, and remain stable and bug-free in production. My role covered the full frontend development pipeline - from writing HTML and CSS, configuring Advanced Custom Fields (ACF) in WordPress, fixing PHP-level bugs, through to documenting the entire website for the client's internal team.",
      ],
      metrics: [
        { value: "HTML & CSS", label: "Custom frontend", note: "build on WordPress" },
        { value: "ACF setup", label: "Custom field", note: "configuration in WP" },
        { value: "PHP bug fixing", label: "Backend issue", note: "resolution" },
        { value: "Documentation", label: "Full site", note: "and editing flow docs" },
      ],
    },
    customStruggle: {
      title: "Struggle",
      paragraphs: [
        "A conglomerate website is inherently complex - it has to communicate clearly across multiple completely different industries, each with its own tone, content type, and audience. Making that feel unified rather than scattered was the first challenge at the frontend level.",
        "Custom WordPress builds introduce a different layer of difficulty. ACF configuration needs to be set up thoughtfully so that the fields map clearly to the frontend templates - otherwise the editing experience breaks down for the client's internal team. Getting that architecture right took careful planning before a single field was created.",
        "PHP bugs on a WordPress site can surface in unexpected ways - often tied to theme conflicts, plugin interactions, or custom template logic that was not accounted for during initial development. Diagnosing and fixing these without disrupting already-working sections of the site required a methodical, careful approach.",
        "And on top of all of this, the site needed to be handed off with documentation thorough enough that the client's non-technical team could manage and edit it independently - without needing a developer for every content update.",
      ],
    },
    customTransformation: {
      title: "Transformation",
      paragraphs: [
        "The website came together as a cohesive, professionally structured digital presence - one that successfully carries the scale and credibility of a 1,250+ employee organisation across its many divisions. The ACF setup gave the internal team a clean, structured way to manage content across all sections without touching code.",
        "PHP bugs that were silently causing issues in production were identified, isolated, and resolved - leaving the site stable and reliable. The frontend work in HTML and CSS ensured the visual output matched the design intent precisely, across sections and page types.",
      ],
      quote:
        "A website for an enterprise client is not just built - it is handed over. The documentation is what makes the build last beyond the developer who made it.",
    },
    customOutcomes: {
      title: "Outcomes",
      paragraphs: [
        "The custom WordPress website was delivered, bug-fixed, and fully documented - ready for the client's internal team to manage independently. The ACF field structure gives non-technical editors control over page content, section text, and media without needing developer involvement for routine updates.",
        "The documentation I produced covers the entire website flow and editing workflow - a reference that the client's team can rely on long after the engagement ends. For a large organisation with multiple divisions and internal stakeholders, that kind of handoff documentation is as valuable as the site itself.",
      ],
      tags: [
        "Custom WordPress built",
        "ACF fields configured",
        "PHP bugs resolved",
        "Full site documented",
        "Client-ready handoff",
        "HTML & CSS frontend",
      ],
    },
    customLearnings: {
      title: "Personal insights and learnings",
      paragraphs: [
        "This was my deepest engagement with WordPress as a development platform - not just using it as a CMS, but customising it at the theme, template, and field level. ACF in particular changed how I think about content architecture. The way fields are structured in the backend directly shapes how editors experience the site, and getting that wrong creates friction that outlasts the build.",
        "Working through PHP bugs taught me to read code I did not write - tracing issues back through template files, hooks, and plugin logic to find the root cause rather than patching symptoms. That kind of diagnostic thinking is a skill that transfers across every stack I work in.",
        "But the biggest learning from this project was the value of documentation. Writing a thorough editing guide for a non-technical client forced me to understand the site completely - every field, every section, every dependency. You cannot document something you do not fully understand. That discipline made me a better developer.",
      ],
    },
    sourceNote: "Client confidential - name withheld by request.",
    contextSummary:
      "Barakat operates across multiple verticals within the food industry, each with a different audience, purchase logic, and set of trust requirements. The brief was to build a platform that can hold the full scope of the group, route different visitor types to the right place, and present the organisation with the credibility its scale warrants.",
    projectSummary: [
      "The architecture was designed around three non-negotiable outcomes: a unified group identity that does not flatten the individual brand identities beneath it, a navigation system that surfaces the right vertical for any given visitor without requiring them to understand the corporate structure first, and a visual language that communicates permanence.",
      "A shared design token system provided the coherence. Per-brand accent overrides provided the distinction. Dynamic routing handled the multi-vertical navigation without full page reloads. The result is a platform that reads as one company and feels like several.",
    ],
    details: [
      "Brand switching is handled through layout segments rather than navigation-level conditional rendering. Each vertical loads within the same shell, reducing the cognitive overhead of a full-page transition and keeping the group identity visible throughout.",
      "The component library was built token-first. The visual design file and the CSS variable map were kept in sync throughout the build - a discipline that cost two hours of overhead and saved six hours of hunt-the-discrepancy debugging in the final week.",
    ],
    snapshotMetrics: [
      { value: "Live", label: "Shipped on schedule", note: "Currently live." },
      { value: "Multi", label: "Brand platform", note: "Built for multiple verticals under one group." },
      { value: "Token-first", label: "Design system", note: "Shared shell with brand-specific overrides." },
      { value: "6 weeks", label: "Delivery window", note: "Planned and shipped within the project schedule." },
    ],
    ecosystemBlocks: [
      {
        title: "Multi-brand identity without fragmentation",
        description: "Each vertical needed its own presence within a single, coherent structure.",
      },
      {
        title: "Visitor routing without friction",
        description:
          "Someone arriving for the manufacturing division should not need to decode the full corporate hierarchy to find it.",
      },
      {
        title: "Scalability",
        description:
          "New product lines or subsidiaries needed to be addable without requiring structural changes to the platform.",
      },
    ],
    stackSignals: [
      { title: "Framework", description: "Next.js App Router." },
      { title: "Styling", description: "Tailwind CSS with brand-specific token overrides." },
      { title: "Animation", description: "Framer Motion for entry transitions only, with no decorative animation." },
      { title: "Deployment", description: "Vercel." },
    ],
    challengeBlocks: [
      {
        title: "Shared layout shell",
        description:
          "Designing a shell that all brand sections inherit from while allowing each section to override visual properties without breaking the parent structure. Solved by separating layout tokens from brand tokens at the CSS variable level.",
      },
      {
        title: "Page weight management",
        description:
          "The visual ambition of the design required discipline with asset loading strategy - lazy loading below-fold media and static generation for all content pages.",
      },
    ],
    resultMetrics: [
      { value: "Live", label: "Launched on schedule", note: "Client confirmed and currently live." },
      { value: "Hours", label: "New vertical setup", note: "New verticals can be added in hours, not weeks." },
      { value: "Unified", label: "Group identity", note: "One corporate platform with differentiated verticals." },
    ],
    outcomeNarrative: [
      "Barakat's website now does what a corporate platform should do: it communicates scale without demanding that a visitor understand the full organisational map before they can engage with any part of it.",
      "The multi-brand architecture solved a structural problem that the previous site had simply avoided. The planning done in week one - the token system, the routing logic, the layout inheritance model - is the reason the build landed on time and the platform will hold as it grows.",
    ],
    technologiesUsed: [
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
    frameworksUsed: [
      { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
    ],
    toolsUsed: [
      { name: "WordPress CMS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Bitbucket", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
    ],
    stackGroups: [
      {
        title: "Technologies",
        items: [
          { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
          { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
          { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        ],
      },
      {
        title: "Frameworks & CMS",
        items: [
          { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
          { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
          { name: "Advanced Custom Fields (ACF)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
        ],
      },
      {
        title: "Tools",
        items: [
          { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
          { name: "Bitbucket", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
        ],
      },
    ],
  },
  {
    slug: "finance-tale",
    tag: "Content Platform",
    title: "Where financial literacy becomes a curriculum",
    img: imgProject02,
    client: "Finance Tale",
    year: "2026",
    role: "Frontend Developer",
    duration: "5 weeks",
    clientType: "Finance Education",
    liveUrl: "https://thefinancetale.com/",
    description:
      "Landing page and product UI built end to end from zero design direction to a product the team believed in.",
    customObjective: {
      title: "Objective",
      paragraphs: [
        "The goal was to take The Finance Tale from a raw idea to a fully functional, visually compelling web presence. This meant building the landing page end to end and constructing the product interface entirely from the ground up, matching design specifications precisely while making it feel polished and credible to users visiting for the first time.",
        "Beyond the landing page, the scope extended to the product UI built in React, full end-to-end testing of all site functionality, and gaining enough understanding of the backend stack to work across the full pipeline.",
      ],
      tags: ["Landing page", "React UI", "End-to-end testing", "Full-stack awareness"],
    },
    customStruggle: {
      title: "Struggle",
      paragraphs: [
        "When the project began, there was no design foundation to build on, just an idea. The team had a vision for what the product should do, but no clarity on what it should look like, how users would move through it, or what the experience would feel like.",
        "Working with an undefined visual direction meant every decision had to be made from scratch. Translating a vague concept into structured UI components, layouts, and interactions required constant alignment between what was possible in code and what would actually serve the user well.",
        "On the technical side, understanding the backend flow, MongoDB, Visual Studio tooling, while staying focused on frontend delivery was an added layer of complexity that required learning on the job.",
      ],
    },
    customTransformation: {
      title: "Transformation",
      paragraphs: [
        "The design work became the turning point. Once the interface took shape, with clear structure, intentional UX, and a visual identity that matched the product's purpose, the team's confidence in the product shifted entirely.",
        "What started as an abstract idea became something the stakeholders could see, navigate, and believe in. The React UI was built end to end as per the design system, with UI fixes and refinements along the way to make the interface feel complete and production-ready.",
      ],
      quote:
        "Before the design work, they had a concept. After it, they had a product and a clear picture of where it was going.",
    },
    customOutcomes: {
      title: "Outcomes",
      paragraphs: [
        "The landing page launched end to end, designed, built, and tested. Every feature and user flow on the site was verified through thorough end-to-end testing, ensuring nothing broke in the hands of real users.",
        "The product UI went from zero to a complete, structured interface built in React, visually attractive, functionally sound, and aligned to the original design intent. Stakeholders came away with a clear product vision they felt confident presenting.",
      ],
      tags: ["Landing page shipped", "Product UI complete", "All flows tested", "Stakeholder alignment"],
    },
    customLearnings: {
      title: "Personal insights and learnings",
      paragraphs: [
        "This project reinforced that good UX is not just a visual layer, it is what turns an idea into something people trust. The moment the design clicked, the entire team's relationship with the product changed. That was a powerful thing to witness and be responsible for.",
        "Working across the full stack, React on the frontend, MongoDB and Visual Studio on the backend, made me a more rounded engineer. Understanding how data flows from the backend shaped how I structured the UI and how I approached testing.",
        "End-to-end testing also taught me that building something is only half the work. Verifying it rigorously, from a user's point of view, is what makes it trustworthy.",
      ],
    },
    contextSummary:
      "Finance content has a trust problem that predates the internet. Readers arrive sceptical, scan fast, and leave the moment something feels off. Finance Tale needed an interface that earned credibility in the first three seconds without announcing that it was trying to.",
    projectSummary: [
      "The build was built around three design constraints: no element on the page should compete with the article text, every navigation action should reduce the distance to the next relevant piece of content, and SEO infrastructure should be structural rather than cosmetic.",
      "Typography was the primary interface decision. Hierarchy was established through size, weight, and spacing - not colour or iconography. The result is a reading environment that holds attention without announcing itself.",
    ],
    details: [
      "The SEO architecture was the first thing built, not the last. Structured data schemas for article and organisation entities are generated from the content frontmatter at build time.",
      "The typography system was documented before it was implemented. Font size scale, line height ratios, and spacing multipliers are stored as CSS custom properties with named semantic references so that future developers can understand intent rather than guessing from numbers.",
    ],
    ecosystemBlocks: [
      {
        title: "Reading experience at scale",
        description:
          "Long-form financial articles needed typographic and spatial treatment that reduces fatigue across extended reading sessions.",
      },
      {
        title: "Authority through restraint",
        description:
          "The visual language had to signal credibility to a financially literate audience without becoming cold or exclusionary to a general one.",
      },
      {
        title: "Organic growth infrastructure",
        description:
          "Metadata, structured data, canonical logic, and page generation strategy had to be correct before the first article was published.",
      },
    ],
    stackSignals: [
      { title: "Framework", description: "Next.js App Router with static generation for article pages." },
      { title: "Content model", description: "MDX with frontmatter for metadata management." },
      { title: "SEO", description: "JSON-LD structured data, OpenGraph image generation, and sitemap generation." },
      { title: "Deployment", description: "Vercel." },
    ],
    challengeBlocks: [
      {
        title: "Line length and leading",
        description:
          "Long-form content requires different typographic constraints than a marketing page. The reading column is capped at 68 characters per line at all breakpoints.",
      },
      {
        title: "Static generation at content volume",
        description:
          "As the article archive grows, build time becomes a constraint. ISR with a 24-hour revalidation window balances freshness against build performance from the start.",
      },
    ],
    resultMetrics: [
      { value: "Green", label: "Core Web Vitals", note: "Article pages achieved green scores across all metrics on launch day." },
      { value: "Live", label: "Launched on schedule", note: "Currently live." },
      { value: "SEO-first", label: "Growth foundation", note: "Search infrastructure was built before publication scale." },
    ],
    outcomeNarrative: [
      "Finance Tale launched with a reading experience that does not apologise for the length of the content it carries. The interface earns attention rather than competing for it.",
      "The SEO foundation was correct from day one - which means the platform is compounding organic reach now rather than engineering it retroactively.",
    ],
    technologiesUsed: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
    frameworksUsed: [
      { name: "shadcn/ui", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/shadcnui.svg" },
    ],
    toolsUsed: [
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Bitbucket", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
      { name: "Visual Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
    ],
  },
  {
    slug: "desisle",
    tag: "SaaS UI/UX Design Agency",
    title: "Turning a SaaS Agency's Vision Into a Live Website",
    img: imgProject03,
    client: "Desisle LLP",
    year: "2025",
    role: "Developer",
    duration: "Dev, Testing & Content Ops",
    clientType: "SaaS Design Agency",
    liveUrl: "https://www.desisle.com/",
    description:
      "SaaS UI/UX Design Agency - development, content ops & maintenance.",
    customObjective: {
      title: "Objective",
      paragraphs: [
        "Desisle is a SaaS-only UI/UX design agency that has built 40+ products across FinTech, HealthTech, AI, and B2B SaaS - helping founders go from idea to investor-ready interfaces. The website is the agency's primary sales and credibility asset, where case studies, blogs, and service pages do the work of converting new clients.",
        "My role spanned development, testing, and maintenance - with a specific focus on keeping the content engine running. That meant publishing and maintaining blogs and case studies on the Next.js site, ensuring everything was accurate, functional, and consistent with the agency's design standards.",
      ],
      metrics: [
        { value: "Development", label: "React / Next.js site work", note: "beyond design" },
        { value: "Testing", label: "QA across pages", note: "and features" },
        { value: "Blog ops", label: "Publishing", note: "and maintaining blog posts" },
        { value: "Case studies", label: "Posting", note: "and maintaining client work" },
      ],
    },
    customStruggle: {
      title: "Struggle",
      paragraphs: [
        "Working at a design agency means the bar for the website itself is exceptionally high. Every page - including blogs and case studies - needs to look and feel as polished as the client work it showcases. There is no room for misaligned layouts, broken content, or inconsistent formatting when the product being sold is design quality.",
        "Managing content ops on a Next.js codebase also means each blog post and case study is not just a copy-paste - it involves structured data, metadata, routing, and layout components that all need to work together correctly. Getting that pipeline reliable, especially across many case studies, required discipline in how content was structured and tested before going live.",
        "Balancing development tasks alongside testing and maintenance - without a dedicated QA pipeline - meant staying sharp across the entire site at once.",
      ],
    },
    customTransformation: {
      title: "Transformation",
      paragraphs: [
        "Owning the content pipeline end to end - from development to publishing to maintenance - gave the agency a reliable system for getting case studies and blogs live without errors or broken experiences. Each published piece became a live sales asset, and the consistency across them reflected directly on Desisle's credibility.",
        "The testing work ensured that the site, which carries the weight of converting SaaS founders into clients, stayed functional and trustworthy at every touchpoint. For an agency whose entire pitch is built around quality and attention to detail, that reliability is not a background task - it is part of the product.",
      ],
      quote:
        "At a design agency, the website is the portfolio. Keeping it reliable, consistent, and always live is as important as the design work itself.",
    },
    customOutcomes: {
      title: "Outcomes",
      paragraphs: [
        "The Desisle website now houses a growing library of detailed case studies and blogs - each structured, tested, and maintained to the agency's quality bar. These pages serve as the primary trust signals for founders evaluating the agency, covering work across AI analytics platforms, HealthTech, EdTech, and more.",
        "The development and maintenance work I contributed to supports a site that has helped Desisle's clients raise $10M+ in funding, serves 40+ completed SaaS products as social proof, and positions the agency competitively against freelancers and traditional agencies in the Indian and global SaaS market.",
      ],
      tags: [
        "Case studies live & maintained",
        "Blog pipeline operational",
        "Site tested across all flows",
        "React / Next.js codebase",
        "Zero broken content shipped",
      ],
    },
    customLearnings: {
      title: "Personal insights and learnings",
      paragraphs: [
        "This was the first time I worked inside a design-led environment as a developer, and that context shifted how I approach frontend work. When the people around you think in systems, components, and user flows, you naturally start holding your own code to a higher visual standard.",
        "Managing content operations on a Next.js site taught me that publishing is not just writing - it is structured data, routing, metadata, and consistency across every page. A blog post or case study that breaks the layout or loads incorrectly undermines the very credibility it is trying to build.",
        "Testing in this environment also sharpened my eye. At a design agency, a misaligned element or a broken link is not just a bug - it is a contradiction of the product being sold. That raised my bar for what done actually means.",
      ],
    },
    contextSummary:
      "There is an internal credibility test that every studio website must pass: does this look like work we would be proud to show a prospective client? The secondary test is commercial: does it convert?",
    sourceNote: "Result metrics should be verified before publishing.",
    projectSummary: [
      "The build was structured around three conversion levers: service clarity, proof compression, and contact proximity. A visitor should understand what Desisle builds, see evidence that it builds it well, and reach a booking interface without scrolling past anything that does not advance either objective.",
      "Every section was evaluated against this question: does this exist because it helps the visitor make a decision, or because it helps us feel like we have covered everything? Anything that answered the second question was cut.",
    ],
    details: [
      "The Calendly integration was embedded inline rather than linked externally. An external redirect introduces an exit from the brand context at the most critical moment in the conversion journey.",
      "The service section uses a tab-based architecture to present SaaS and Web as parallel but distinct offers without requiring two separate pages or a single section that conflates them.",
    ],
    ecosystemBlocks: [
      {
        title: "Service packaging",
        description:
          "A studio that builds websites and SaaS products needs to present those as distinct offers with distinct value propositions, not as one undifferentiated list of capabilities.",
      },
      {
        title: "Proof without overwhelm",
        description:
          "Case studies need to be visible enough to build confidence but contained enough not to become an obstacle between the visitor and the contact page.",
      },
      {
        title: "Contact path",
        description:
          "The distance between intent and action should be one step. Calendly integration, not a form that enters a queue.",
      },
    ],
    stackSignals: [
      { title: "Framework", description: "Next.js." },
      { title: "Styling", description: "Tailwind CSS." },
      { title: "Animation", description: "Framer Motion scroll-triggered reveals, with no looping animations." },
      { title: "Booking", description: "Calendly embedded inline, not redirect." },
    ],
    challengeBlocks: [
      {
        title: "Editorial ambition vs conversion logic",
        description:
          "Design wanted a rich, layered visual experience. Conversion logic wanted the fewest possible steps. The richness lives in the visual treatment of components, not in the quantity of components.",
      },
      {
        title: "Case study preview system",
        description:
          "The homepage needed enough information to qualify interest without recreating the full case study. The card shows the outcome statement, client type, and a single result metric.",
      },
    ],
    resultMetrics: [
      { value: "4 weeks", label: "Launch window", note: "Launched in 4 weeks." },
      { value: "Primary", label: "Sales asset", note: "Currently the primary sales asset for the studio." },
      { value: "Inline", label: "Booking path", note: "Shortened the distance between intent and action." },
    ],
    outcomeNarrative: [
      "The Desisle website now functions as a sales conversation that starts before the client calls. The service packaging is clear enough that enquiries arrive with a reasonable understanding of what they are enquiring about.",
      "The proof is visible enough to generate confidence before the first word is exchanged. The contact path is short enough that intent does not dissipate between forming and acting on it.",
    ],
    technologiesUsed: [
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    ],
    frameworksUsed: [],
    toolsUsed: [
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Bitbucket", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
    ],
    stackGroups: [
      {
        title: "Technology",
        items: [
          { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
          { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
          { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        ],
      },
      {
        title: "Database",
        items: [
          { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        ],
      },
      {
        title: "Tools",
        items: [
          { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
          { name: "Bitbucket", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
        ],
      },
    ],
  },
  {
    slug: "hosaksham",
    tag: "Academy Subscription",
    title: "Where every academy becomes a scalable business",
    img: imgProject04,
    client: "HoSaksham",
    year: "2025",
    role: "Frontend Developer",
    duration: "5 weeks",
    clientType: "SaaS - B2B India",
    liveUrl: "https://hosaksham.in/",
    description:
      "Academy subscription management SaaS - component development.",
    customObjective: {
      title: "Objective",
      paragraphs: [
        "HoSaksham is a SaaS platform helping 100+ small businesses in India - sports academies, dance studios, chess clubs, fitness centres, and tutors - automate payments, attendance tracking, and event management through WhatsApp.",
        "My role as a developer was focused on building and maintaining the component elements that run throughout the website. These are the building blocks that users interact with across every page - from subscription feature sections and pricing displays to CTA blocks and testimonial cards. The goal was to make them consistent, reusable, and scalable as the product grew.",
      ],
      tags: ["Component development", "Reusable UI elements", "Cross-page consistency", "SaaS marketing site"],
    },
    customStruggle: {
      title: "Struggle",
      paragraphs: [
        "A SaaS marketing site like HoSaksham has a wide range of content types on a single page - stat counters, feature grids, testimonials, pricing prompts, FAQs, and calls to action. The challenge with shared components is that they need to work across all of these contexts without being rebuilt each time.",
        "Building components that appear throughout an entire website means every decision carries weight. A change in one element ripples across every page it appears on. Getting the structure right from the start - so components were flexible enough to handle different content but consistent enough to feel unified - was the core technical challenge.",
        "It also required a strong understanding of the product's purpose: who HoSaksham serves, what the platform does, and what users need to understand quickly when they land on the site.",
      ],
    },
    customTransformation: {
      title: "Transformation",
      paragraphs: [
        "By building components that were designed to be reused - not duplicated - the website gained a coherent visual and structural language from top to bottom. Feature cards, stat blocks, testimonial layouts, and CTA sections all share a consistent foundation, making the site feel like a single product rather than a collection of pages.",
        "The components I worked on now serve the full breadth of the site - from the hero section and the \"Do more, stress less\" metrics to the workflow feature sections covering subscriptions, events, attendance, and WhatsApp automation.",
      ],
      quote:
        "Consistent components are what make a product feel like a product - not just a collection of pages stitched together.",
    },
    customOutcomes: {
      title: "Outcomes",
      paragraphs: [
        "The components I built are live across the HoSaksham website and carry the weight of communicating a product used by 100+ businesses across India - from chess clubs to skating academies. The platform now processes over Rs12 Cr+ annually and the site is a key part of how new businesses discover and evaluate it.",
      ],
      metrics: [
        { value: "Rs12Cr+", label: "Collected annually", note: "via the platform" },
        { value: "100+", label: "SMBs trust", note: "the product" },
        { value: "60+", label: "Hours saved", note: "per business per month" },
        { value: "95%", label: "Subscription", note: "renewal rate" },
      ],
      tags: ["Components live site-wide", "Consistent UI language", "Real product, real users"],
    },
    customLearnings: {
      title: "Personal insights and learnings",
      paragraphs: [
        "This project taught me that component-level work is not a small task - it is foundational. When you own the elements that repeat across an entire website, you are responsible for the user's first impression at every touchpoint. That sharpened how I think about reusability, flexibility, and naming conventions in code.",
        "Working on a live SaaS product targeting real Indian SMBs - fitness coaches, skating camps, chess clubs - also grounded me in what a product actually needs to communicate: trust, simplicity, and speed. The content of a component is not separate from its design; they shape each other.",
        "I came away with a deeper appreciation for building things that outlast the sprint - components that other parts of the team can rely on, extend, and build on top of without breaking what already works.",
      ],
    },
    contextSummary:
      "Hosaksham is a SaaS product built for operators - gym owners, studio managers, programme leads - who need to manage the administrative surface of a membership-based business.",
    sourceNote: "Result metrics should be verified before publishing.",
    projectSummary: [
      "The architecture was built around visitor types rather than product features. Instead of a feature list with generic benefit statements beneath each item, the navigation presents three operator contexts: Studio & Gym, Online Programme, Subscription Community.",
      "The feature still exists in the product. The website presents the problem it solves and the operator type it solves it for. In practice, that is the difference between a visitor who reads the page and a visitor who recognises themselves in it.",
    ],
    details: [
      "The context switcher state is managed in a React context provider at the section level, not the page level. This scopes the state change to the product demonstration section while allowing the surrounding page to remain context-agnostic.",
      "Pricing is displayed without context switching because pricing is flat across operator types. A deliberate decision: do not segment what does not need to be segmented.",
    ],
    ecosystemBlocks: [
      {
        title: "Feature surface communication",
        description:
          "Enumerating features converts nobody. Identifying the visitor's problem and showing the feature that solves it converts people who have that problem.",
      },
      {
        title: "Audience segmentation without separate pages",
        description:
          "Three distinct operator types on a single URL, each experiencing a tailored version of the product story.",
      },
      {
        title: "Trust for a complex product",
        description:
          "Multi-feature SaaS tools require more proof than single-purpose tools. The website needed specific, contextual proof points rather than generic testimonials.",
      },
    ],
    stackSignals: [
      { title: "Framework", description: "Next.js." },
      { title: "Styling", description: "Tailwind CSS." },
      { title: "Interactivity", description: "React state-driven operator context switcher." },
      { title: "Animation", description: "Framer Motion context transition animations." },
    ],
    challengeBlocks: [
      {
        title: "Operator context switcher",
        description:
          "The switcher had to read as navigation rather than a content toggle. Visitors should feel like they are moving to a relevant section of the product, not activating a filter.",
      },
      {
        title: "Content parity across contexts",
        description:
          "If the gym context is more detailed than the online programme context, visitors notice the asymmetry and draw conclusions about product maturity. All three contexts required equal depth.",
      },
    ],
    resultMetrics: [
      { value: "Live", label: "Launched on schedule", note: "Currently live." },
      { value: "3", label: "Operator contexts", note: "Studio & Gym, Online Programme, Subscription Community." },
      { value: "Scoped", label: "State architecture", note: "Context state is local to the product demonstration section." },
    ],
    outcomeNarrative: [
      "Hosaksham now has a website that solves the problem every multi-feature SaaS faces: how do you communicate breadth without inducing decision paralysis.",
      "The operator context architecture means the site tells three different stories from one URL, each one precise enough that the right visitor sees themselves in it. The planning work made a five-week delivery possible without cutting corners on any of the three contexts.",
    ],
    technologiesUsed: [
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
    frameworksUsed: [
      { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    ],
    toolsUsed: [
      { name: "WordPress CMS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Bitbucket", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
    ],
  },
  {
    slug: "prodxverse",
    tag: "Product Design Education Platform",
    title: "Where Product Design Education Gets a Digital Home",
    img: imgProject05,
    client: "ProdXVerse",
    year: "2025",
    role: "Developer",
    duration: "Full build + Content + QA",
    clientType: "EdTech - Cohort Program",
    description:
      "Product design education platform - full-stack dev, content ops & maintenance.",
    customObjective: {
      title: "Objective",
      paragraphs: [
        "ProdXVerse is a 12-week cohort-based design education program launched by the founder of Desisle - built to take beginners and mid-level designers to job-ready product designers using AI-powered workflows, live mentorship, and real SaaS projects.",
        "As an extension of my Desisle role, I was brought in to build the ProdXVerse website from the ground up - owning the full development lifecycle from initial build to ongoing feature sections, blog publishing, and end-to-end testing and maintenance. The site needed to do one thing above all else: convert serious, motivated applicants into enrolled students.",
      ],
      metrics: [
        { value: "Full website build", label: "Front to back", note: "in React / Next.js" },
        { value: "Feature sections", label: "Curriculum, pricing", note: "mentor, FAQ" },
        { value: "Blog publishing", label: "Content ops", note: "and live posts" },
        { value: "Testing & QA", label: "End-to-end", note: "across all flows" },
      ],
    },
    customStruggle: {
      title: "Struggle",
      paragraphs: [
        "Building a website for a design education program - founded by a UI/UX agency - means every pixel of the site is being evaluated through a designer's eyes. The product being sold is design quality and product thinking. The website cannot afford to feel rough, inconsistent, or unfinished at any point.",
        "The scope here was significantly broader than a component-focused role. Owning the site from the ground up meant making architectural decisions about structure, routing, and content layout early - decisions that would affect how easily the site could grow as new cohorts, blog posts, and feature sections were added over time.",
        "Running this alongside the Desisle engagement also meant managing two distinct codebases, two content pipelines, and two sets of quality standards simultaneously - without letting either slip.",
      ],
    },
    customTransformation: {
      title: "Transformation",
      paragraphs: [
        "ProdXVerse went from idea to a fully functional, conversion-focused website - built in Next.js with a structured content pipeline for blogs and a maintainable codebase that could grow with the program. Every major section of the site - curriculum, mentor profile, pricing tiers, testimonials, FAQ, and application form - was developed and tested to work seamlessly together.",
        "The site now serves as the primary trust and conversion asset for a program capped at 30 seats per cohort, where every enrolled student represents a significant commitment. That means the website's job is high-stakes - and the build reflects that.",
      ],
      quote:
        "Building for an education program meant building for a promise. Every section of the site had to make a first-time visitor feel that this program was worth 12 weeks of their life.",
    },
    customOutcomes: {
      title: "Outcomes",
      paragraphs: [
        "The ProdXVerse website is live, tested, and actively enrolling students - with Cohort 1 now open with only 10 seats remaining from a 30-seat cap. The blog is operational, feature sections are maintained and updated, and the site holds up across all critical user flows - from landing to application submission.",
        "The work spans the full development lifecycle: architecture, feature development, content publishing, QA, and ongoing maintenance - all running in parallel with the Desisle engagement, demonstrating the ability to manage multiple live products at once without dropping quality on either.",
      ],
      tags: [
        "Full site built & live",
        "Blog pipeline running",
        "All flows QA tested",
        "Cohort 1 enrolling now",
        "Dual product ownership",
        "React / Next.js",
      ],
    },
    customLearnings: {
      title: "Personal insights and learnings",
      paragraphs: [
        "Building ProdXVerse end to end was a different kind of challenge from the component work at Desisle. Owning the full site meant I was responsible for every decision - not just the implementation. That pushed me to think like a product developer, not just a developer executing a brief.",
        "Running both Desisle and ProdXVerse simultaneously taught me how to context-switch clearly between projects - keeping each codebase, content pipeline, and quality bar separate in my head without letting one bleed into the other. That discipline is something you only build by actually doing it under pressure.",
        "This project also deepened my appreciation for what a website does for an early-stage product. ProdXVerse had no reputation when I started building it. The site was the reputation - and how it was built directly shaped whether people would trust the program enough to apply. That is a responsibility I now carry into every project I work on.",
      ],
    },
    contextSummary:
      "Prodxverse needed a website that could present a modern product ecosystem without overwhelming first-time visitors. The priority was structure: what the product does, who it helps, and why it matters.",
    projectSummary: [
      "The page structure was planned around product clarity. Each section had one job: introduce the problem, explain the product value, show the workflow, and move the visitor toward action.",
      "The visual system was kept clean and modular so future product updates can be added without rebuilding the entire page experience.",
    ],
    details: [
      "Built responsive sections with reusable layout patterns for hero, feature blocks, proof sections, and conversion areas.",
      "Focused on clean spacing, readable hierarchy, and component consistency so the product story stays easy to scan across desktop and mobile.",
    ],
    snapshotMetrics: [
      { value: "Product", label: "Website type", note: "Structured for product explanation and conversion." },
      { value: "Responsive", label: "Frontend output", note: "Built for desktop, tablet, and mobile flows." },
      { value: "Reusable", label: "Components", note: "Sections planned for easy future updates." },
    ],
    ecosystemBlocks: [
      {
        title: "Product clarity",
        description: "The site needed to make the product easy to understand without relying on long explanations.",
      },
      {
        title: "Conversion path",
        description: "Each section supports the next decision, from awareness to action.",
      },
    ],
    stackSignals: [
      { title: "Frontend", description: "Responsive page development with reusable components." },
      { title: "Styling", description: "Clean section layouts, consistent spacing, and scalable UI patterns." },
    ],
    resultMetrics: [
      { value: "Clear", label: "Product story", note: "The product value is easier to scan and understand." },
      { value: "Modular", label: "Page system", note: "Future sections can be added without layout rework." },
    ],
    technologiesUsed: [
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    ],
    frameworksUsed: [],
    toolsUsed: [
      { name: "Bitbucket", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    ],
    stackGroups: [
      {
        title: "Technology",
        items: [
          { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
          { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
          { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        ],
      },
      {
        title: "Database",
        items: [
          { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        ],
      },
      {
        title: "Tools",
        items: [
          { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
          { name: "Bitbucket", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
        ],
      },
    ],
  },
  {
    slug: "bookmark-hub",
    tag: "Bookmark & Resource Manager",
    title: "Where the Web Gets Collected, Sorted and Saved",
    img: imgProject06,
    client: "Curious Designer",
    year: "2025",
    role: "Developer",
    duration: "Deployment, Fixes & QA",
    clientType: "SaaS Tool - Designer Utility",
    liveUrl: "https://curiousdesigner.in/",
    description:
      "Bookmark & resource manager for designers - deployment, feature fixes & testing.",
    customObjective: {
      title: "Objective",
      paragraphs: [
        "Curious Designer is a bookmark and resource manager built specifically for designers - a personal tool that lets users save, organise, and retrieve design resources, references, and inspiration in one structured place. Think of it as a curated knowledge base tailored to how designers actually work and collect ideas.",
        "My role as a developer covered three core areas: deploying the product, resolving feature-level bugs and fixes in the React / Next.js codebase, and testing the application end to end to ensure a smooth, reliable experience for users once live.",
      ],
      metrics: [
        { value: "Deployment", label: "Taking the product", note: "live end to end" },
        { value: "Feature fixes", label: "Bug resolution", note: "in React / Next.js" },
        { value: "Testing & QA", label: "End-to-end", note: "functionality checks" },
        { value: "Product", label: "Resource manager", note: "for designers" },
      ],
    },
    customStruggle: {
      title: "Struggle",
      paragraphs: [
        "Deploying a Next.js application is rarely as simple as pushing to production. Environment configuration, build optimisation, routing behaviour in production versus development, and authentication flows - all of these need to be verified and corrected at the point of deployment. Getting a product live reliably requires anticipating where things break that worked perfectly in local development.",
        "Feature fixes require a different mindset from greenfield development. Coming into an existing codebase, understanding how it is structured, tracing the source of a bug without breaking adjacent functionality - this demands patience and a systematic approach that writing new code does not always require.",
        "For a tool that designers use to manage and retrieve their saved resources, the experience has to be smooth and trustworthy. Any broken flow - saving a bookmark, organising into collections, retrieving on return - directly undermines the product's core value. Testing had to cover not just happy paths but edge cases and failure states that real users would eventually encounter.",
      ],
    },
    customTransformation: {
      title: "Transformation",
      paragraphs: [
        "The product went from a codebase to a live, accessible application - deployed, stable, and ready for real users. Feature fixes that had been blocking parts of the product from working as intended were resolved cleanly, and the application was tested thoroughly enough to be handed to users with confidence.",
        "For a niche tool built for designers - a highly opinionated audience with a sharp eye for when things feel broken - delivering a reliable, polished experience is not optional. The deployment and QA work I contributed to is what made the product trustworthy enough to use daily.",
      ],
      quote:
        "Deployment is where a product becomes real. Everything before it is a promise - everything after it is a responsibility.",
    },
    customOutcomes: {
      title: "Outcomes",
      paragraphs: [
        "Curious Designer is live and accessible - a deployed, functional React / Next.js product that designers can sign up for and use to manage their resource libraries. Feature-level issues were resolved, keeping the core bookmark and organisation flows intact and working as designed. End-to-end testing ensured that the critical user journeys - authentication, saving, organising, and retrieving resources - held up reliably in production.",
      ],
      tags: [
        "Product deployed live",
        "Feature bugs resolved",
        "End-to-end QA complete",
        "React / Next.js",
        "Auth flows verified",
        "Production-stable",
      ],
    },
    customLearnings: {
      title: "Personal insights and learnings",
      paragraphs: [
        "Deployment taught me that the gap between a working development build and a stable production environment is larger than it looks. Environment variables, build configurations, server-side rendering behaviour, and authentication redirects all need to be handled explicitly - nothing carries over automatically. Going through this process sharpened my understanding of how Next.js behaves in production specifically, beyond what local development ever reveals.",
        "Working on feature fixes in an existing codebase was a valuable exercise in reading other people's code with care. Before fixing anything, I had to understand what was there - why it was written that way, what it depended on, and what would break if I changed it. That kind of code empathy is a skill that grows with every unfamiliar codebase you step into.",
        "Testing a product built for designers also reminded me that the user of this tool has a higher standard for polish than most. Designers notice friction immediately. That awareness pushed me to test more thoroughly than I might have for a different audience - and it raised my overall bar for what working correctly actually means.",
      ],
    },
    contextSummary:
      "Bookmark Hub is built around a practical user need: keeping frequently used links organised without turning the interface into another cluttered dashboard.",
    projectSummary: [
      "The interface was designed around speed and clarity. Users should be able to add, scan, group, and revisit links with minimal friction.",
      "The layout keeps actions visible while leaving enough whitespace for repeated daily use.",
    ],
    details: [
      "Built a clean frontend structure for link cards, categories, search-friendly layouts, and empty states.",
      "Prioritised predictable UI behaviour and responsive layouts so the app feels usable on both desktop and mobile.",
    ],
    snapshotMetrics: [
      { value: "Utility", label: "Product type", note: "Designed for repeated daily use." },
      { value: "Clean", label: "Interface", note: "Low-friction layout for saving and scanning links." },
      { value: "Responsive", label: "Experience", note: "Works across device sizes." },
    ],
    ecosystemBlocks: [
      {
        title: "Information organisation",
        description: "Saved links need enough structure to be useful without becoming hard to manage.",
      },
      {
        title: "Daily-use ergonomics",
        description: "The interface needed to stay light, fast, and predictable for repeated use.",
      },
    ],
    stackSignals: [
      { title: "Frontend", description: "React-style component thinking for cards, lists, and states." },
      { title: "UX", description: "Focused flows for saving, finding, and revisiting links." },
    ],
    resultMetrics: [
      { value: "Simple", label: "Core flow", note: "Save, organise, and revisit links quickly." },
      { value: "Scalable", label: "UI structure", note: "Categories and cards can grow with the user's collection." },
    ],
    technologiesUsed: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "shadcn/ui", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/shadcnui.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
    toolsUsed: [
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Bitbucket", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Visual Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
    ],
  },
  {
    slug: "automotive-group-website",
    tag: "Multi-Website Documentation",
    title: "Where UAE Automotive Branding Meets Precision Testing",
    img: imgProject07,
    client: "Client confidential",
    year: "2025",
    role: "QA Tester",
    duration: "Docs, Brand Guidelines & Testing",
    clientType: "9 companies, 34+ brands",
    description:
      "Multi-website documentation, brand guidelines & cross-site testing.",
    sourceNote: "Client confidential - name withheld by request.",
    customObjective: {
      title: "Objective",
      paragraphs: [
        "The client is one of the UAE's most established family business conglomerates - founded in the early 1950s with over 67 years of legacy, 9 operating companies, 34+ brands, 2000+ employees, and 13 consecutive Superbrands Awards. Their business divisions span automotive, real estate, construction, energy, financial exchange, general trading, and technology.",
        "Across this group, each company and service division maintains its own web presence and brand identity. The objective was to bring coherence and reliability to all of it - through comprehensive documentation of every website's flow and content structure, a unified set of brand guidelines across the group's digital properties, and end-to-end testing across all websites to ensure consistent, functional, and error-free user experiences.",
      ],
      metrics: [
        { value: "Website docs", label: "Full flow", note: "documented per site" },
        { value: "Brand guidelines", label: "Across the group's", note: "websites" },
        { value: "Cross-site QA", label: "End-to-end", note: "testing all sites" },
        { value: "Enterprise scale", label: "9 companies", note: "34+ brands" },
      ],
    },
    customStruggle: {
      title: "Struggle",
      paragraphs: [
        "Documenting a single website is straightforward. Documenting multiple websites across a conglomerate - each with its own structure, content type, user journey, and team of internal editors - is an entirely different challenge. Every site needed to be understood deeply enough to be documented accurately, without overflattening the purpose, audience, and editorial logic of each one independently.",
        "Brand guidelines across a group this large carry an additional layer of complexity. Each business unit has its own identity - automotive, financial exchange, real estate, and technology all look and feel different. Documenting those guidelines in a way that is consistent at the group level while respecting the distinctiveness of each brand required careful thought about how the documentation itself was structured.",
        "Testing across multiple websites meant holding a wide mental map of what correct looks like for each - different flows, different forms, different languages, and different user expectations across each business division. Keeping all of that accurate and thorough simultaneously was the core operational challenge of this engagement.",
      ],
    },
    customTransformation: {
      title: "Transformation",
      paragraphs: [
        "What had previously been a set of disconnected websites - each managed independently, with no central reference for how they should look, behave, or be edited - now had a coherent documentation layer behind them. Internal teams across the group gained a structured reference for how their websites work and how to manage them without external developer dependency.",
        "The brand guidelines documentation gave the group's digital presence a shared language - a reference point that future design, development, and content decisions across any division could be held against. For a conglomerate with 34+ brands, that kind of consistency infrastructure is invisible when it works and very visible when it is missing.",
      ],
      quote:
        "At enterprise scale, documentation is not admin work - it is the connective tissue that keeps a multi-brand, multi-team organisation moving in the same direction.",
    },
    customOutcomes: {
      title: "Outcomes",
      paragraphs: [
        "Every website across the group was documented - full flow, editing structure, and content guidelines - giving internal teams access to reliable references for managing their digital presence. Brand guidelines were produced and documented across the group's web properties, creating a shared standard for how the group's identity is expressed online.",
        "All websites were tested end to end - across English and Arabic language versions, across all key user flows and interactive features - ensuring that a conglomerate trusted by over 2000 employees and with 13 Superbrands Awards was represented online without errors or inconsistencies.",
      ],
      metrics: [
        { value: "9", label: "Companies", note: "documented" },
        { value: "34+", label: "Brands covered", note: "in guidelines" },
        { value: "2", label: "Languages tested", note: "EN & AR" },
        { value: "67+", label: "Years of legacy", note: "represented" },
      ],
      tags: [
        "Multi-site documentation",
        "Brand guidelines complete",
        "End-to-end QA done",
        "Bilingual testing",
        "Enterprise-scale delivery",
        "Internal team handoff",
      ],
    },
    customLearnings: {
      title: "Personal insights and learnings",
      paragraphs: [
        "This engagement taught me what it actually means to work at enterprise scale. When you are documenting and testing not one website, but an entire ecosystem of them - each with its own purpose, team, and audience - you have to develop a systematic approach to your own work. You cannot rely on memory or intuition across that many moving parts. Process and structure become the skill.",
        "Writing brand guidelines at a conglomerate level also deepened my understanding of how identity works in large organisations. Every brand under the group has its own visual language, but they all need to feel like part of the same family. Documenting that balance accurately, without flattening the individual brands or losing the group coherence, required a level of design awareness I had not needed to apply before.",
        "Testing bilingual websites - across English and Arabic - added another dimension I had not encountered in earlier projects. RTL layout, translated content, and localised user flows all need to be verified independently. That experience made me a more thorough tester and a more globally aware developer.",
      ],
    },
    contextSummary:
      "The automotive group website needed to communicate scale and trust while keeping each business vertical easy to understand for visitors.",
    projectSummary: [
      "The site structure was planned around brand clarity, service visibility, and fast access to enquiry paths.",
      "The layout keeps the automotive visual language premium while making the content easy to scan across desktop and mobile.",
    ],
    details: [
      "Built responsive sections for brand overview, services, featured vehicles, enquiry paths, and trust-building content.",
      "Focused on clean UI hierarchy, strong image presentation, and consistent component spacing across the website.",
    ],
    snapshotMetrics: [
      { value: "Group", label: "Website type", note: "Built for an automotive business with multiple verticals." },
      { value: "Premium", label: "Visual direction", note: "Focused on vehicle imagery, hierarchy, and trust." },
      { value: "Responsive", label: "Frontend output", note: "Structured for mobile and desktop browsing." },
    ],
    ecosystemBlocks: [
      {
        title: "Brand and service clarity",
        description: "Visitors should quickly understand the group, its vehicle categories, and its service offering.",
      },
      {
        title: "Premium presentation",
        description: "The interface needed to feel polished without making enquiry paths harder to reach.",
      },
    ],
    stackSignals: [
      { title: "Frontend", description: "Responsive website development with reusable sections." },
      { title: "UI", description: "Premium imagery, structured content blocks, and clear conversion paths." },
    ],
    resultMetrics: [
      { value: "Clear", label: "Group positioning", note: "The website presents the business and its verticals clearly." },
      { value: "Ready", label: "Enquiry flow", note: "Visitors can move from browsing to contact with less friction." },
    ],
    stackGroups: [],
    technologiesUsed: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "shadcn/ui", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/shadcnui.svg" },
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
    toolsUsed: [
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Bitbucket", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Visual Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
    ],
  },
] as const;

export function getCaseStudyBySlug(slug?: string) {
  return CASE_STUDIES.find((item) => item.slug === slug?.toLowerCase());
}
