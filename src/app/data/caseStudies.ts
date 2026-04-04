const imgProject01 =
  "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=1200&q=80";
const imgProject02 =
  "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=1200&q=80";
const imgProject03 =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80";
const imgProject04 =
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80";

type CaseStudyMetric = {
  label: string;
  value: string;
  note?: string;
};

type CaseStudyBlock = {
  title: string;
  description: string;
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
};

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    slug: "barakat",
    tag: "Corporate Website",
    title: "Barakat",
    img: imgProject01,
    client: "Barakat Group",
    year: "2025",
    role: "Frontend Architecture, CMS Integration & Delivery",
    duration: "3 months",
    clientType: "Fresh food manufacturing, trading & retail ecosystem",
    liveUrl: "https://barakatgroup.ae/",
    description:
      "A corporate platform engineered to communicate scale, trust, sustainability, and a multi-brand ecosystem while routing users into both B2B and D2C journeys.",
    details: [
      "The Barakat website had to do more than look premium. It needed to explain a layered business spanning manufacturing, trading, sustainability, CSR, careers, and multiple consumer-facing brands without losing clarity.",
      "The build balances operational proof with clear navigation. Instead of a generic brochure site, the platform leads with freshness, cold-chain credibility, product breadth, certifications, and ecosystem links to customer-facing commerce and portal experiences.",
      "From a delivery perspective, the real challenge was information architecture: making a large, multi-audience food business feel structured, trustworthy, and modern across homepage hierarchy, product taxonomy, sustainability communication, and conversion touchpoints.",
    ],
    projectSummary: [
      "Public site analysis shows a narrative-first corporate experience with clear pathways into About, Products, Sustainability, CSR, Careers, and Contact, plus prominent jumps to a customer portal and the Barakat Fresh storefront.",
      "The platform also carries a heavy credibility burden: it must communicate certifications, manufacturing scale, sourcing reach, cold-chain logistics, and brand architecture while still feeling fresh and consumer-friendly.",
    ],
    snapshotMetrics: [
      {
        value: "10,000+",
        label: "SKUs across categories",
        note: "Published on the products page.",
      },
      {
        value: "55,000+",
        label: "Litres of juice per day",
        note: "Operational proof point surfaced through the product experience.",
      },
      {
        value: "80%+",
        label: "Penetration in UAE 5-star hotels",
        note: "Signals premium hospitality trust.",
      },
      {
        value: "350+",
        label: "Refrigerated vehicles",
        note: "Supports the cold-chain and delivery narrative.",
      },
    ],
    ecosystemBlocks: [
      {
        title: "Corporate trust layer",
        description:
          "The homepage establishes authority through freshness claims, manufacturing quality, certifications, sustainability, testimonials, and company heritage dating back to 1976.",
      },
      {
        title: "Deep product architecture",
        description:
          "The product experience spans overview, manufacturing, and trading while organizing a very large portfolio into beverages, ready-to-cook, ready-to-eat, frozen desserts, fresh fruits, vegetables, and specialty products.",
      },
      {
        title: "Brand ecosystem structure",
        description:
          "Barakat, Thrill, myD, Froza, and Snackat are presented as one connected house of brands, helping the website communicate range without fragmenting the master brand.",
      },
      {
        title: "Multi-path conversion routing",
        description:
          "The site serves multiple audiences at once by linking to Barakat Fresh for D2C shopping, B+ Customer Portal for operational buyers, and dedicated corporate sections for institutional trust and enquiries.",
      },
    ],
    stackSignals: [
      {
        title: "CMS-led corporate platform",
        description:
          "Public inspection strongly suggests a WordPress-backed marketing site: the live homepage currently exposes a WordPress admin-only Instagram feed error, which indicates CMS-managed content and plugin-driven social modules.",
      },
      {
        title: "Component-heavy editorial frontend",
        description:
          "The site uses sliders, accordions, video, metric blocks, testimonial modules, download links, and large media sections, pointing to a modular page-builder or componentized theme approach rather than a static brochure build.",
      },
      {
        title: "Connected digital ecosystem",
        description:
          "The corporate site is only one part of the product surface. It hands off to Barakat Fresh e-commerce, app downloads, and customer portal flows, so the technical design likely had to prioritize clear outbound routing and ecosystem coherence.",
      },
      {
        title: "Multilingual and integration-aware",
        description:
          "The presence of Arabic navigation, downloadable reports/catalogs, social channels, and portal links suggests a content and integration strategy built around flexibility, localization, and non-trivial content operations.",
      },
    ],
    challengeBlocks: [
      {
        title: "Serving very different audiences",
        description:
          "A single platform needed to work for hospitality buyers, retail partners, procurement teams, end consumers, job applicants, and brand stakeholders without overwhelming any one audience.",
      },
      {
        title: "Explaining scale without losing warmth",
        description:
          "Barakat is a large operational business, but the brand promise is still freshness, nourishment, and daily quality. The site had to make logistics, certifications, and processing feel human and trustworthy, not industrial or cold.",
      },
      {
        title: "Handling a broad information architecture",
        description:
          "Products alone span massive breadth. Organizing manufacturing capabilities, trading categories, featured products, brand content, and sustainability narratives demanded careful hierarchy and content chunking.",
      },
      {
        title: "Keeping third-party experiences stable",
        description:
          "The live site currently shows a broken Instagram feed module, which is a good reminder that plugin-based or third-party widgets can become fragile operational dependencies on marketing sites.",
      },
    ],
    resultMetrics: [
      {
        value: "53+",
        label: "Countries sourced",
        note: "Shows international sourcing scale.",
      },
      {
        value: "14,000+",
        label: "Tons traded monthly",
        note: "Communicates trading volume.",
      },
      {
        value: "80+",
        label: "Local UAE farm partnerships",
        note: "Highlighted in sustainability messaging.",
      },
      {
        value: "99.9%",
        label: "Biodegradable bottles and caps",
        note: "Connects product quality with sustainability.",
      },
    ],
    outcomeNarrative: [
      "What makes the Barakat site strong is not just surface polish. It turns operational scale into trust signals: cold chain, sourcing reach, manufacturing capability, certifications, sustainability commitments, and brand breadth all reinforce the core message of freshness.",
      "It also supports business growth structurally. The corporate experience builds confidence, the product architecture demonstrates range, and the ecosystem links move users into the right destination whether they need retail ordering, B2B access, or brand information.",
    ],
    sourceNote:
      "Stack and implementation notes here are based on public inspection of the live website and linked ecosystem surfaces, not internal repository access.",
    contextSummary:
      "A large-scale corporate web build translating operational complexity into a clear, trusted digital product.",
  },
  {
    slug: "finance-tale",
    tag: "Content Platform",
    title: "Finance Tale",
    img: imgProject02,
    client: "The Finance Tale",
    year: "2024",
    role: "Content Platform Engineering & Frontend Architecture",
    duration: "4 months",
    clientType: "Finance education and publishing platform",
    liveUrl: "https://thefinancetale.com/",
    description:
      "A finance publishing platform built to make personal money topics easier to discover, read, and trust through reusable templates, strong information hierarchy, and clean frontend delivery.",
    details: [
      "The core product challenge for finance content is always clarity under trust pressure. Readers do not just need information quickly; they need to feel that the structure, hierarchy, and tone are reliable enough to guide financial decisions.",
      "For a platform like The Finance Tale, the most valuable UX work sits in content architecture, reading flow, category hierarchy, and discovery patterns that help users move from broad questions to high-intent topics without friction.",
    ],
    sourceNote:
      "The live Finance Tale site was not reliably parsable through public analysis tools during this review, so the notes below combine verified domain-level observations with clearly stated editorial and UX inferences.",
    contextSummary:
      "A content-driven web platform where implementation quality, readability, and CMS structure directly shape user trust.",
    projectSummary: [
      "The Finance Tale appears positioned as a branded finance destination rather than a product dashboard, which shifts the experience priorities toward content trust, discovery, hierarchy, and repeat readership.",
      "In this kind of platform, success depends on reducing cognitive load. Financial content is often dense, comparative, and jargon-heavy, so the website has to translate complexity into readable paths, scannable sections, and consistent article structure.",
    ],
    ecosystemBlocks: [
      {
        title: "Content discovery architecture",
        description:
          "A finance website has to move users across topics like saving, borrowing, investing, taxation, or market education without making the platform feel fragmented. That makes category hierarchy, searchability, and reading paths central to the product.",
      },
      {
        title: "Trust-first reading experience",
        description:
          "Financial content needs strong hierarchy, clean summaries, supporting sections, and clear calls to action so readers can understand key takeaways quickly and choose whether to go deeper.",
      },
      {
        title: "SEO and repeat readership",
        description:
          "A strong finance publication is not just a static site. It needs evergreen discoverability, topic clustering, internal linking, and a content system that supports recurring publication and long-tail acquisition.",
      },
      {
        title: "Monetization-ready content surface",
        description:
          "Whether the eventual model is subscriptions, sponsorships, lead generation, or affiliate partnerships, the interface has to support trust signals and conversion moments without interrupting the reading experience.",
      },
    ],
    stackSignals: [
      {
        title: "Content-led web architecture",
        description:
          "The public domain and branding indicate a publication-style experience where CMS flexibility, article templating, category organization, and metadata strategy are likely more important than app-style interaction complexity.",
      },
      {
        title: "SEO-aware implementation priorities",
        description:
          "For finance content, the technical quality bar includes crawlability, semantic heading structure, fast page loads, share previews, and strong internal linking, all of which shape organic discoverability.",
      },
      {
        title: "Operational publishing workflow",
        description:
          "A site like this typically depends on reusable templates for articles, authoring, featured stories, topic collections, and promotion surfaces so the team can scale content without redesigning each page.",
      },
      {
        title: "Inference boundary",
        description:
          "Unlike Barakat, the live site did not expose enough stable public content through the analysis tools to verify the exact framework or backend. These technical notes describe the likely implementation priorities, not a confirmed stack fingerprint.",
      },
    ],
    challengeBlocks: [
      {
        title: "Making finance readable",
        description:
          "Financial content often loses readers through jargon, long paragraphs, and poor hierarchy. The UX challenge is to shape dense topics into sequences that feel approachable without oversimplifying the subject.",
      },
      {
        title: "Balancing trust and conversion",
        description:
          "Readers become skeptical quickly when a finance site feels too promotional. The platform has to earn trust through structure, tone, and credibility before it asks users to subscribe, click deeper, or engage with offers.",
      },
      {
        title: "Designing for multiple intents",
        description:
          "Some visitors are scanning headlines, others need a specific answer, and some want deep education. That means navigation, content chunking, and recommendation logic all need to support very different reading depths.",
      },
      {
        title: "Scaling consistency across content",
        description:
          "Without a strong publishing system, finance content sites become inconsistent and hard to scan. The real challenge is building a structure that keeps every article recognizable, clear, and efficient to produce.",
      },
    ],
    outcomeNarrative: [
      "From a product perspective, The Finance Tale is strongest when it behaves like a well-structured learning system, not just a list of articles. A clean editorial UX can turn intimidating money topics into guided reading journeys.",
      "This kind of website creates value through clarity. When layout, hierarchy, and article architecture are done well, users trust the content more, stay longer, and are more likely to return as repeat readers.",
    ],
  },
  {
    slug: "desisle",
    tag: "Agency Website",
    title: "Desisle",
    img: imgProject03,
    client: "Desisle",
    year: "2026",
    role: "Frontend Engineering, Conversion Architecture & Site Delivery",
    duration: "2 months",
    clientType: "SaaS product studio",
    liveUrl: "https://www.desisle.com/",
    description:
      "A conversion-focused studio website built to turn founder traffic into qualified conversations through strong information architecture, reusable sections, and reliable frontend delivery.",
    details: [
      "The site is not trying to be a passive brochure. It is built as a conversion machine for service clarity, case-study proof, pricing transparency, and booked discovery calls.",
      "Its real job is to frame product design as a business-growth lever. That means every section has to support one of four goals: establish a sharp point of view, package offers cleanly, prove outcomes, or route visitors toward contact.",
    ],
    sourceNote:
      "Desisle notes are based on public inspection of the live website and visible case-study, pricing, and CTA surfaces. Exact framework choices remain inferred unless exposed publicly.",
    contextSummary:
      "A marketing website engineered as a clear conversion funnel, with reusable sections, strong CTA paths, and scalable content structure.",
    projectSummary: [
      "The Desisle homepage is structured around founder pain, service packaging, case-study proof, pricing, and strategic differentiation. It sells clarity before it sells style.",
      "The information architecture is especially strong for an agency site: hero statement, problem framing, offer ladder, workflow, industry specialization, case studies, pricing pods, insights, and booking all form one continuous funnel.",
    ],
    snapshotMetrics: [
      {
        value: "6",
        label: "Core service offers",
        note: "MVP design, redesign, design systems, audits, pods, and done-for-you delivery are all explicitly positioned.",
      },
      {
        value: "5",
        label: "Step workflow",
        note: "Discover, Define, Design, Deliver, and Develop Further.",
      },
      {
        value: "3",
        label: "Pricing pods",
        note: "Starter, Growth, and Scale create a clear productized pricing ladder.",
      },
      {
        value: "4",
        label: "Featured case studies",
        note: "Outcome-led work examples reinforce the agency value proposition.",
      },
    ],
    ecosystemBlocks: [
      {
        title: "Clear founder positioning",
        description:
          "The site frames the core problem as misalignment between business goals and user needs, which is a stronger sales angle than generic 'beautiful design' messaging.",
      },
      {
        title: "Productized service architecture",
        description:
          "Instead of listing vague capabilities, the site groups work into packaged offers like MVP design, redesign, systems, audits, and design pods, making the agency easier to evaluate and buy from.",
      },
      {
        title: "Case-study proof and content engine",
        description:
          "The presence of outcome-led case-study headlines and insight articles gives the brand both credibility and an SEO/content layer that supports ongoing growth beyond direct outreach.",
      },
      {
        title: "Booking-ready conversion path",
        description:
          "The experience consistently pushes users toward action through free audit CTAs, service exploration, works navigation, transparent pricing, and a visible 30-minute call booking flow.",
      },
    ],
    stackSignals: [
      {
        title: "Marketing site with heavy modular sectioning",
        description:
          "The public page structure suggests a block-based, componentized marketing build with repeated content modules, long-form section composition, and animated transitions rather than a minimal static landing page.",
      },
      {
        title: "External conversion tooling",
        description:
          "Primary booking flows route through Cal.com, which reduces the need for custom scheduling infrastructure while keeping the website focused on positioning and conversion.",
      },
      {
        title: "Content and CMS orientation",
        description:
          "The live site clearly supports blogs, works, pricing, and service pages. That points to a content-managed workflow where editors can publish new proof and offers without rebuilding the site each time.",
      },
      {
        title: "Public stack inference boundary",
        description:
          "The site publicly references services such as WordPress and development, but that does not confirm the website itself runs on WordPress. The implementation signals above are inferred from the live experience, not source access.",
      },
    ],
    challengeBlocks: [
      {
        title: "Standing out in a crowded agency market",
        description:
          "Design agencies often blur together. The challenge here is to make the site feel strategic, product-savvy, and focused on SaaS growth rather than just aesthetic output.",
      },
      {
        title: "Selling outcomes, not services",
        description:
          "The strongest agency sites do not just list capabilities. They connect services to founder pain, product metrics, and team velocity. That translation work is a key UX challenge.",
      },
      {
        title: "Balancing atmosphere with clarity",
        description:
          "The Desisle site uses a highly designed, editorial presentation. The risk with that approach is that style can overpower information. The build has to keep CTAs, pricing, and service comprehension fast and obvious.",
      },
      {
        title: "Creating trust before the sales call",
        description:
          "Because services are high-trust and higher-ticket, the site must do a lot of pre-call persuasion through proof, positioning, workflow transparency, and content depth.",
      },
    ],
    resultMetrics: [
      {
        value: "92%",
        label: "Support handled in featured AI case study",
        note: "Used in a featured work headline to communicate outcome-oriented capability.",
      },
      {
        value: "85%",
        label: "Screen time reduction in featured mobile case study",
        note: "Demonstrates measurable UX impact across another project.",
      },
      {
        value: "60%",
        label: "Easier data comprehension in featured redesign case study",
        note: "Reinforces the agency's positioning around clarity and product usability.",
      },
      {
        value: "$3k-$8k",
        label: "Visible monthly pricing ladder",
        note: "Signals productized services and budget clarity.",
      },
    ],
    outcomeNarrative: [
      "Desisle succeeds because it behaves like a focused growth funnel instead of a portfolio dump. Messaging, pricing, case studies, and booking flows all reinforce the same product-partner narrative.",
      "From a UX standpoint, the site reduces agency ambiguity. Prospects can understand what the studio does, how it works, what kinds of outcomes it delivers, and how to start a conversation without hunting for answers.",
    ],
  },
  {
    slug: "hosaksham",
    tag: "SaaS Website",
    title: "Hosaksham",
    img: imgProject04,
    client: "HoSaksham",
    year: "2025",
    role: "Product Website Engineering, SaaS Flows & Conversion Delivery",
    duration: "5 months",
    clientType: "Subscription management SaaS for academies and service businesses",
    liveUrl: "https://hosaksham.in/",
    description:
      "A conversion-focused SaaS website that explains subscriptions, events, attendance, payments, and microsites for academies, coaching centers, and service businesses in one coherent product narrative.",
    details: [
      "The product itself is operationally dense: billing, attendance, renewals, events, Zoom and Google Meet support, WhatsApp communication, microsites, and payment reconciliation all need to feel understandable to small business operators.",
      "The website therefore has to act as both explainer and salesperson. It must reduce complexity, show concrete results, surface use cases across industries, and move visitors into demo or free-trial flows quickly.",
    ],
    sourceNote:
      "HoSaksham analysis is based on public inspection of the live website and visible linked surfaces such as app.hosaksham.com, demo CTAs, and marketplace references.",
    contextSummary:
      "A SaaS marketing site that had to turn a complex operations product into a clear, demo-ready web experience.",
    projectSummary: [
      "The homepage is organized around one big promise: one platform for subscriptions, payments, attendance, events, online sessions, and customer communication across academies and service businesses.",
      "Instead of staying abstract, the site leans heavily on concrete business outcomes, specific use cases, testimonials, free trial CTAs, and operational proof like collection volumes, renewal rates, and hours saved.",
    ],
    snapshotMetrics: [
      {
        value: "70%",
        label: "Less time on admin",
        note: "Positioned as a direct business outcome from automation.",
      },
      {
        value: "10x",
        label: "Faster fee collection",
        note: "Tied to auto-invoicing and gateway integration.",
      },
      {
        value: "40%",
        label: "Higher event sales",
        note: "Connected to cross-promotion and event visibility.",
      },
      {
        value: "90%",
        label: "On-time renewals",
        note: "Highlights the value of automated renewals.",
      },
    ],
    ecosystemBlocks: [
      {
        title: "One-platform positioning",
        description:
          "The site makes a broad product surface feel unified by anchoring everything around one dashboard for coaches, centers, schedules, payments, and customer communication.",
      },
      {
        title: "Use-case driven feature education",
        description:
          "Subscriptions, event management, attendance, online sessions, and microsites are each framed through outcomes and industries, helping visitors quickly see where the product fits their workflow.",
      },
      {
        title: "Integration-led trust building",
        description:
          "WhatsApp Business, payment gateway APIs, Zoom, Google Meet, branded microsites, and marketplace tie-ins all communicate that the product is meant to plug into real operational environments, not just live in isolation.",
      },
      {
        title: "Strong conversion architecture",
        description:
          "The free trial, demo flow, customer quotes, industry logos, limited-time offer, and marketplace extension create multiple conversion hooks for businesses at different levels of readiness.",
      },
    ],
    stackSignals: [
      {
        title: "Separate SaaS app surface",
        description:
          "The live site routes users to app.hosaksham.com for product usage, which suggests a clear separation between the marketing site and the application layer.",
      },
      {
        title: "Payment and operational integrations",
        description:
          "Public FAQ and feature copy explicitly mention payment gateway APIs, settlement cycles, attendance workflows, receipts, and reconciliation, indicating a non-trivial backend orchestration layer behind the product promise.",
      },
      {
        title: "Communication and meeting ecosystem",
        description:
          "The platform advertises custom WhatsApp Business connectivity plus Zoom and Google Meet support, which points to an integration-heavy product architecture built around service operations.",
      },
      {
        title: "Event and microsite capabilities",
        description:
          "Branded event pages, ticketing, QR check-ins, and microsites imply reusable templates, campaign tooling, and modular product surfaces beyond a simple subscription dashboard.",
      },
    ],
    challengeBlocks: [
      {
        title: "Explaining a wide feature surface",
        description:
          "The product crosses subscriptions, classes, events, attendance, communication, and payments. The website has to compress that complexity into a story that feels simple to non-technical business owners.",
      },
      {
        title: "Serving multiple industries with one message",
        description:
          "HoSaksham targets education, fitness, dance, yoga, retail, playschools, and more. The challenge is to make the site feel specific enough for each while still protecting a unified platform narrative.",
      },
      {
        title: "Earning trust for money movement",
        description:
          "As soon as payments are involved, the bar for trust rises sharply. The site has to answer concerns around settlement timing, gateway visibility, receipts, and bank transfer handling in a very direct way.",
      },
      {
        title: "Bridging acquisition and activation",
        description:
          "For SaaS, a great homepage is not enough. The marketing site must smoothly hand users from awareness to trial or demo, with enough confidence and clarity to reduce drop-off before first product use.",
      },
    ],
    resultMetrics: [
      {
        value: "₹12Cr+",
        label: "Collected annually",
        note: "A top-level operational proof point published on the site.",
      },
      {
        value: "50+",
        label: "Active businesses",
        note: "Signals current traction across the customer base.",
      },
      {
        value: "60+",
        label: "Hours saved per month",
        note: "Positioned as time saved per active business.",
      },
      {
        value: "95%",
        label: "Renewal rates",
        note: "Highlights retention value in subscription workflows.",
      },
    ],
    outcomeNarrative: [
      "HoSaksham works best as a product website when every feature is translated into business relief: fewer admin hours, faster collections, stronger renewals, easier events, and cleaner daily operations.",
      "The site turns an operationally complex SaaS product into a high-clarity conversion experience by grounding every promise in use cases, testimonials, metrics, and concrete integrations.",
    ],
  },
] as const;

export function getCaseStudyBySlug(slug?: string) {
  return CASE_STUDIES.find((item) => item.slug === slug?.toLowerCase());
}
