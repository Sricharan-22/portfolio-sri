# Website Sitemap & Content Inventory

This sitemap is based on the current React routes, homepage sections, case-study data, navigation, and footer links in the website codebase.

## Global Structure

### Header / Navigation

Visible on all pages.

Navigation items:

- Logo: `sri charan.dev` / home link
- Work: `/#work`
- Experience: `/#experience`
- Blog: `/blog`
- Contact: `/#contact`

Content needed:

- Final logo/wordmark text if different
- Navigation labels
- Social/profile destination URLs

### Footer / Contact

Route/anchor: `/#contact`

Footer content areas:

- Profile intro
- Role/title
- Availability statement
- Explore links
- Connect links
- Footer wordmark
- Copyright line

Current footer links:

- About: `/#experience`
- Work: `/#work`
- Blog: `/blog`
- Contact: `/#contact`
- Instagram
- LinkedIn
- Email

Content needed:

- Short personal/professional intro
- Current role
- Availability/CTA statement
- Final email address
- Final Instagram URL
- Final LinkedIn URL
- Footer signature/wordmark

## Page Sitemap

## 1. Home

URL: `/`

Purpose: Main portfolio landing page introducing Sricharan, experience, work, build process, social presence, and contact.

### 1.1 Hero

Component: `HeroSection`

Current heading:

- `CODE`
- `CRAFT`

Current supporting copy:

- Intro paragraph about building scalable web applications and interactive interfaces.

Current stat blocks:

- End-to-End
- Frontend Systems

Content needed:

- Primary hero headline
- Short positioning paragraph
- 2 hero value/stat blocks
- Social labels and URLs
- Hero image direction/asset

### 1.2 Beyond The Build

Component: `MeetTheVisionarySection`

Purpose: Personal/human side of the portfolio.

Current cards:

- Visual Stories / Photography
- Nature Trails / Exploring Nature
- Story Drafts / Script Writing
- Digital Builds / Development

Content needed:

- Section headline
- 4 interest/personality cards
- Card title
- Card category/discipline
- Image direction for each card

### 1.3 Quote / Developer Note

Component: `VisionaryParagraph`

Current quote:

- "Good software starts where curiosity meets clean execution."

Current label:

- Developer Notes - 2026

Content needed:

- One short quote or personal philosophy line
- Attribution/label

### 1.4 Experience

Anchor: `/#experience`

Component: `AboutSection`

Purpose: Current professional background and credibility.

Current content areas:

- About label
- `EXPERIENCE` heading
- Intro paragraph
- Current experience timeline
- Current role
- Company legal name
- Company location
- Current chapter summary
- Role block
- Company profile links
- Studio profile facts
- Recognition block
- Closing statement
- 3 focus areas

Current company:

- Desisle LLP

Current role:

- Frontend Developer

Current timeline:

- Feb 2025 - Present

Content needed:

- Experience intro paragraph
- Current company details
- Role/title
- Timeline
- Location
- Company summary
- Company website URL
- Company social URLs
- 4 studio/profile facts
- Recognition or highlight item
- 3 focus area cards with descriptions

### 1.5 Work / Projects

Anchor: `/#work`

Component: `TheCraftSection`

Purpose: Featured work grid linking to case-study detail pages.

Current content areas:

- Projects label
- `BUILD WITH INTENT.` heading
- Work philosophy paragraph
- Availability/status line
- Featured project card
- Secondary project cards

Projects shown:

- Barakat
- Finance Tale
- Desisle
- Hosaksham

Content needed:

- Section heading
- Work philosophy paragraph
- Availability/status line
- Project title
- Project category/tag
- Project summary
- Project image
- Case-study destination slug

### 1.6 Case Studies Index

Component: `CaseStudiesSection`

Purpose: Large visual archive/list of all case studies.

Current heading:

- `CASE STUDIES`<!--  -->

Each case-study preview uses:

- Tag
- Title
- Description
- Duration
- Client type
- Image

Content needed:

- Section heading
- Case-study preview copy for every project
- Project metadata

### 1.7 Current Build Log

Component: `InstagramSection`

Purpose: Portfolio build/process log. Despite the component name, this section currently works as a development/build update area, not a traditional Instagram feed.

Current content areas:

- Current Build Log / Live Workstream labels
- Date/status badge
- `CURRENT. Build Log.` heading
- Intro paragraph
- Stats: Case Studies, Build Notes, Focus Areas
- Focus area chips
- Pinned update card
- 6 build note cards
- Current direction statement

Content needed:

- Section labels
- Date/status
- Main heading
- Intro paragraph
- Focus area list
- Pinned update
- Build notes or process cards
- Closing direction statement

### 1.8 LinkedIn / Developer Presence

Component: `LinkedInSection`

Purpose: Social proof and embedded LinkedIn posts.

Current content areas:

- Developer Presence / LinkedIn labels
- Profile handle
- Section heading
- Intro paragraph
- Profile card
- Stats
- Featured embedded posts
- LinkedIn CTA

Current stats:

- 12.4k followers
- 500+ connections
- 48 posts

Content needed:

- LinkedIn profile URL
- Final handle
- Section intro copy
- Profile title/bio
- Accurate stats
- Featured LinkedIn post URLs/embed URLs
- CTA label

### 1.9 Testimonial / Quote

Component: `TestimonialsSection`

Purpose: Short motivational quote/testimonial area.

Current quote:

- "Pressure is a privilege"

Current attribution:

- Billie Jean King

Content needed:

- Either a real testimonial or personal quote
- Attribution/name/title

## 2. Blog / Journal

URL: `/blog`

Component: `BlogPage`

Purpose: Journal/articles listing page.

Current content areas:

- Back Home link
- `JOURNAL` heading
- Intro paragraph
- Article cards

Current articles:

- The Silent Space: Minimalism in 2026
- Code as Architecture
- Digital Noir: A New Aesthetic

Each article card uses:

- Date
- Title
- Image

Content needed:

- Blog page heading
- Blog intro paragraph
- Final article list
- For each article: title, date, summary if required, image, category, destination URL if individual article pages are added later

Current limitation:

- There are no individual blog detail routes in the current code. `/blog` is only a listing page.

## 3. Case Study Detail Template

Dynamic route: `/case-study/:slug`

Component: `CaseStudyDetail`

Purpose: Reusable detail page for each project.

Current case-study URLs:

- `/case-study/barakat`
- `/case-study/finance-tale`
- `/case-study/desisle`
- `/case-study/hosaksham`

Template sections:

- Back to Work link
- Project tag
- Project title
- Hero description
- Client
- Role
- Duration
- Client type
- Live website CTA
- Hero/project image
- Snapshot metrics
- Project context
- Source note
- Overview
- What The Build Had To Solve
- Development & Tech Stack Signals
- Key Challenges
- Implementation Notes
- Result & Impact
- Outcome narrative
- Return to Archive CTA

Content needed for each case study:

- Slug
- Tag/category
- Project title
- Client name
- Year
- Role
- Duration
- Client type
- Live URL
- Short hero description
- Project image
- Project context summary
- Source note if needed
- Overview paragraphs
- Implementation notes/details
- Snapshot metrics
- Problem/ecosystem blocks
- Tech stack/development blocks
- Challenge blocks
- Result metrics
- Outcome narrative

### 3.1 Barakat

URL: `/case-study/barakat`

Current category:

- Corporate Website

Content focus:

- Corporate platform
- Food manufacturing/trading/retail ecosystem
- Trust, sustainability, scale, multi-brand routing

Content needed:

- Final case-study copy
- Verified metrics
- Final role wording
- Screenshots/project imagery
- Live project link confirmation

### 3.2 Finance Tale

URL: `/case-study/finance-tale`

Current category:

- Content Platform

Content focus:

- Finance education/publishing platform
- Readability, trust, content architecture, SEO

Content needed:

- Final case-study copy
- Verified platform details
- Metrics/results if available
- Screenshots/project imagery
- Live project link confirmation

### 3.3 Desisle

URL: `/case-study/desisle`

Current category:

- Agency Website

Content focus:

- SaaS product studio website
- Conversion flow, service packaging, pricing, case-study proof, booking path

Content needed:

- Final case-study copy
- Verified service/pricing details
- Metrics/results if available
- Screenshots/project imagery
- Live project link confirmation

### 3.4 Hosaksham

URL: `/case-study/hosaksham`

Current category:

- SaaS Website

Content focus:

- Subscription management SaaS
- Payments, attendance, events, online sessions, WhatsApp, microsites

Content needed:

- Final case-study copy
- Verified product details
- Verified metrics/results
- Screenshots/project imagery
- Live project link confirmation

## 4. Backup Page

URL: `/backup`

Component: `BackupPage`

Purpose: Hidden/secondary page with older or unused content sections.

Current sections:

- Collaborators / client grid
- Frame By Frame personal creative section

Current collaborator labels:

- Vogue
- Leica
- BMW
- Square

Current Frame By Frame copy:

- Personal note about video editing and exploring the world through 24 frames per second.

Content needed if this page will remain live:

- Confirm whether `/backup` should be public, hidden, or removed
- Final collaborator/client list
- Creative/personal section copy
- Final imagery

Recommendation:

- Treat `/backup` as an internal/unused page unless it is intentionally part of the public website.

## Recommended Content Team Deliverables

### Global Content

- Brand/person name
- One-line professional positioning
- Navigation labels
- Footer intro
- Contact details
- Social/profile URLs
- CTA language

### Homepage Content

- Hero headline and subcopy
- Value/stat blocks
- Personal interest cards
- Experience narrative
- Work section intro
- Build/process notes
- Social presence copy
- Quote/testimonial content

### Case Study Content

For each project:

- Short preview copy
- Full case-study story
- Project metadata
- Problem/challenge framing
- Process/implementation notes
- Tech stack or development signals
- Metrics/results
- Outcome narrative
- Screenshots/images
- Live URL

### Blog Content

- Blog intro
- Article titles
- Article dates
- Article summaries
- Article images
- Future article detail pages if required

## Technical Route Summary

| Page | URL | Type | Status |
| --- | --- | --- | --- |
| Home | `/` | Static route with anchored sections | Active |
| Work anchor | `/#work` | Homepage anchor | Active |
| Experience anchor | `/#experience` | Homepage anchor | Active |
| Contact anchor | `/#contact` | Footer anchor | Active |
| Blog | `/blog` | Static route | Active |
| Case Study Detail | `/case-study/:slug` | Dynamic route | Active |
| Barakat Case Study | `/case-study/barakat` | Dynamic content page | Active |
| Finance Tale Case Study | `/case-study/finance-tale` | Dynamic content page | Active |
| Desisle Case Study | `/case-study/desisle` | Dynamic content page | Active |
| Hosaksham Case Study | `/case-study/hosaksham` | Dynamic content page | Active |
| Backup | `/backup` | Static route | Present, likely internal |

