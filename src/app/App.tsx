import { useState } from "react";
import { Link, Routes, Route } from "react-router";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { InstagramSection } from "./components/InstagramSection";
import { LinkedInSection } from "./components/LinkedInSection";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import BlogPage from "./pages/BlogPage";
import BackupPage from "./pages/BackupPage";
// ── Placeholder images (replace with real assets when ready) ──────────────────
const imgScreen2 =
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=80";
const imgWorkEnvironment =
  "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=1200&q=80";
const imgProject01 =
  "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=1200&q=80";
const imgProject02 =
  "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=1200&q=80";
const imgArticle1 =
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80";
const imgArticle2 =
  "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80";
const imgArticle3 =
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80";



// Unsplash portrait images for Meet the Visionary
const IMG_AYAKA =
  "https://images.unsplash.com/photo-1701163802894-99fa45f1c83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";
const IMG_ELIAS =
  "https://images.unsplash.com/photo-1638474368314-59198edde028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";
const IMG_LAILA =
  "https://images.unsplash.com/photo-1737554757008-b259fad19c2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";
const IMG_MATEO =
  "https://images.unsplash.com/photo-1674002352912-9bb3fbf3f870?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";

/* ──────────────────────────────────────────────────────────
   NAV BAR
────────────────────────────────────────────────────────── */
const navLinks = [
  { label: "WORK",       side: "left"  },
  { label: "EXPERIENCE", side: "left"  },
  { label: "BLOG",       side: "right" },
  { label: "CONTACT",    side: "right" },
];

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── Main bar ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black md:px-8 px-5"
        style={{ height: "72px", display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center" }}
      >
        {/* Logo – far left */}
        <Link
          to="/"
          className="text-black uppercase tracking-tight"
          style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "clamp(18px, 4vw, 22px)" }}
        >
          SRICHARAN
        </Link>

        {/* Centre group: LEFT links | Toggle | RIGHT links */}
        <div className="flex items-center" style={{ gap: 0 }}>
          {/* Left links */}
          <div className="hidden md:flex items-center gap-8 pr-6">
            {["WORK", "EXPERIENCE"].map((label) => (
              <a
                key={label}
                href="#"
                className="text-black uppercase hover:opacity-60 transition-opacity"
                style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.06em" }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Toggle button */}
          <button
            id="nav-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="w-14 h-14 border border-black flex flex-col items-center justify-center gap-[5px] cursor-pointer transition-colors"
            style={{ background: open ? "#000" : "#fff", flexShrink: 0 }}
          >
            <span
              style={{
                display: "block", width: "18px", height: "1.5px",
                background: open ? "#fff" : "#000",
                transform: open ? "translateY(6.5px) rotate(45deg)" : "none",
                transition: "transform 0.3s, background 0.3s",
              }}
            />
            <span
              style={{
                display: "block", width: "18px", height: "1.5px",
                background: open ? "#fff" : "#000",
                opacity: open ? 0 : 1,
                transition: "opacity 0.2s",
              }}
            />
            <span
              style={{
                display: "block", width: "18px", height: "1.5px",
                background: open ? "#fff" : "#000",
                transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
                transition: "transform 0.3s, background 0.3s",
              }}
            />
          </button>

          {/* Right links */}
          <div className="hidden md:flex items-center gap-8 pl-6">
            {["BLOG", "CONTACT"].map((label) => (
              <Link
                key={label}
                to={label === "BLOG" ? "/blog" : "#"}
                className="text-black uppercase hover:opacity-60 transition-opacity"
                style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.06em" }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Empty right column to keep logo/center balanced */}
        <div className="hidden md:block" />
      </nav>

      {/* ── Fullscreen overlay menu ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 49,
          background: "#000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "48px",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
          transform: open ? "translateY(0)" : "translateY(-16px)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        {/* Thin divider */}
        <div style={{ width: "1px", height: "60px", background: "rgba(255,255,255,0.15)" }} />

        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href="#"
            onClick={() => setOpen(false)}
            style={{
              fontFamily: "Epilogue, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(36px, 6vw, 72px)",
              color: "#fff",
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              opacity: 0.9,
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.4")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.9")}
          >
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "0.55em",
                color: "rgba(255,255,255,0.3)",
                marginRight: "16px",
                verticalAlign: "middle",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {link.label}
          </a>
        ))}

        <div style={{ width: "1px", height: "60px", background: "rgba(255,255,255,0.15)" }} />

        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.25)",
            fontSize: "13px",
            letterSpacing: "2px",
          }}
        >
          SRICHARAN · PORTFOLIO 2024
        </p>
      </div>
    </>
  );
}

/* ──────────────────────────────────────────────────────────
   HERO SECTION
────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="bg-[#f9f9f9] pt-32 pb-16 md:pb-0 px-6 md:px-12 min-h-screen grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
      {/* Left column */}
      <div className="flex flex-col gap-10 md:gap-12 md:order-first order-last text-center md:text-left">
        <div className="flex flex-col gap-6">
          <div
            className="text-black uppercase tracking-tighter"
            style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "clamp(50px, 7vw, 90px)", lineHeight: "0.85" }}
          >
            <p>CODE</p>
            <p>CRAFT</p>
          </div>
          <p className="text-[#5d5f5f] max-w-md mx-auto md:mx-0" style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontStyle: "italic", lineHeight: "1.7" }}>
            I build scalable web applications and interactive interfaces with clean code, performance in mind, and a focus on real-world impact.
          </p>
        </div>
        {/* Social icons */}
        <div className="flex items-center justify-center md:justify-start gap-0">
          {["YT", "IG", "FB", "X"].map((s) => (
            <div key={s} className="border border-black w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-colors" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "10px" }}>
              {s}
            </div>
          ))}
          <div className="ml-4 h-px w-16 md:w-24 bg-[#c6c6c6]" />
        </div>
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 pt-4">
          <div>
            <p className="text-[#1a1c1c] tracking-tight" style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "clamp(32px, 4vw, 48px)" }}>
             End-to-End
            </p>
            <p className="text-[#5d5f5f] uppercase mt-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "1.5" }}>
              From idea → code → deployment — handling the complete development lifecycle.
            </p>
          </div>
          <div>
            <p className="text-[#1a1c1c] tracking-tight" style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "clamp(32px, 4vw, 48px)" }}>
              Problem Solver
            </p>
            <p className="text-[#5d5f5f] uppercase mt-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "1.5" }}>
              Focused on breaking down complex problems into clean, scalable solutions.
            </p>
          </div>
        </div>
      </div>
      {/* Right column – hero image */}
      <div className="h-[400px] md:h-[620px] overflow-hidden order-first md:order-last border border-black/10">
        <img src={imgScreen2} alt="Hero" className="w-full h-full object-cover grayscale" />
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   THE CRAFT SECTION  (CHANGED STRUCTURE)
   New layout: staggered split with text + featured image
────────────────────────────────────────────────────────── */
function TheCraftSection() {
  return (
    <section className="bg-black py-16 md:py-[100px] md:pb-0">
      {/* Main staggered grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-px border border-white/10">
        {/* Left text panel */}
        <div className="col-span-1 md:col-span-5 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between p-6 md:p-12 py-12 md:py-16 min-h-auto md:min-h-[560px]">
          <div>
            <p className="text-white/40 uppercase tracking-widest mb-6" style={{ fontFamily: "Inter, sans-serif", fontSize: "11px" }}>
              Projects
            </p>
            <div
              className="text-white uppercase tracking-tight"
              style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 6vw, 40px)", lineHeight: "1.1" }}
            >
              <p>BUILD WITH</p>
              <p>INTENT.</p>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <p
              className="text-white/70 mb-10"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", fontStyle: "italic", lineHeight: "1.75" }}
            >
              Every project is a balance of logic and emotion. I don’t just build interfaces. I shape experiences where motion, design, and narrative work as one seamless system.
            </p>
            <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row md:items-center gap-4">
              <span className="text-white/40 uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif", fontSize: "11px" }}>
                Status
              </span>
              <div className="hidden md:block w-px h-4 bg-white/20" />
              <p
                className="text-white"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontStyle: "italic" }}
              >
                Open to high-impact projects and creative collaborations in 2026.
              </p>
            </div>
          </div>
        </div>

        {/* Right image: staggered tiles */}
        <div className="col-span-1 md:col-span-7 grid grid-rows-none md:grid-rows-2 min-h-auto md:min-h-[560px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
            <div className="overflow-hidden h-[280px]">
              <img
                src={imgWorkEnvironment}
                alt="Craft environment"
                className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="bg-[#111] flex flex-col justify-end p-8 h-[280px] sm:h-auto border-t sm:border-t-0 sm:border-l border-white/10">
              <span className="text-white/30 uppercase tracking-widest block mb-3" style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}>
                Journey Starts
              </span>
              <p
                className="text-white uppercase tracking-tight"
                style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "clamp(24px, 4vw, 28px)" }}
              >
               BARAKAT
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px">
            {["FINANCE TALE", "DESISLE", "HOSAKSHAM"].map((label, i) => (
              <div
                key={label}
                className="bg-[#0a0a0a] flex flex-col justify-end p-6 h-[200px] sm:h-[280px] border-t sm:border-t-0 border-white/10 hover:bg-[#151515] transition-colors"
                style={{ borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none" }}
              >
                <span className="text-white/30 text-xs uppercase tracking-widest block mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                  {String((i+1) + 1).padStart(2, "0")}
                </span>
                <p
                  className="text-white uppercase"
                  style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 700, fontSize: "clamp(16px, 2.5vw, 18px)" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   ABOUT SECTION  (NEW SECTION)
────────────────────────────────────────────────────────── */
function AboutSection() {
  return (
    <section className="bg-[#f9f9f9] px-6 md:px-12 py-[60px] md:py-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-20">
        {/* Left: heading + description */}
        <div className="col-span-1 md:col-span-4 flex flex-col gap-6 md:gap-8">
          <div>
            <span
              className="text-[#5d5f5f] uppercase tracking-widest block mb-4"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "11px" }}
            >
              About
            </span>
            <h2
              className="text-[#1a1c1c] uppercase tracking-tight"
              style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "clamp(48px, 6vw, 60px)", lineHeight: "1" }}
            >
              EXPERIENCE
            </h2>
          </div>
          <p
            className="text-[#5d5f5f]"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", lineHeight: "1.75" }}
          >
            My experience is shaped at the intersection of development, design, and storytelling. Over the years, I’ve worked on crafting interfaces, editing visual narratives, and building systems that are both functional and expressive.
            From developing responsive web experiences to editing high-impact video content, my journey reflects a constant pursuit of precision, creativity, and evolution in digital craft.
          </p>
        </div>

        {/* Right: timeline */}
        <div className="col-span-1 md:col-span-8 flex flex-col gap-8 md:gap-12 pt-4">
          {[
            {
              period: "2022 — PRESENT",
              role: "Senior Interactive Developer",
              company: "Global Design House",
            },
            {
              period: "2020 — 2022",
              role: "Creative Technologist",
              company: "Studio Noir Collective",
            },
            {
              period: "2018 — 2020",
              role: "Frontend Architect",
              company: "Avenue Creative",
            },
          ].map((item) => (
            <div key={item.role} className="border-b border-[#c6c6c6] pb-6">
              <span
                className="text-[#5d5f5f] block mb-2 md:mb-3"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "12px" }}
              >
                {item.period}
              </span>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 md:gap-0">
                <span
                  className="text-[#1a1c1c] uppercase"
                  style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 700, fontSize: "clamp(20px, 3vw, 24px)" }}
                >
                  {item.role}
                </span>
                <span
                  className="text-[#1a1c1c]"
                  style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "16px" }}
                >
                  {item.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   MEET THE VISIONARY SECTION  (from attached image)
────────────────────────────────────────────────────────── */
const visionaryPeople = [
  {
    id: "01",
    name: "Ayaka Mori",
    discipline: "Stone Carvers",
    img: IMG_AYAKA,
    colStart: 1,
    offsetTop: 180,   // lower card
    imgHeight: 340,
  },
  {
    id: "02",
    name: "Elias Roux",
    discipline: "Neo-Romantic Figurative",
    img: IMG_ELIAS,
    colStart: 2,
    offsetTop: 60,    // center, higher
    imgHeight: 420,
  },
  {
    id: "03",
    name: "Laila Abassi",
    discipline: "Ceramicists",
    img: IMG_LAILA,
    colStart: 3,
    offsetTop: 100,   // slightly elevated
    imgHeight: 360,
  },
  {
    id: "04",
    name: "Mateo Santiago",
    discipline: "Contemporary Sculptors",
    img: IMG_MATEO,
    colStart: 4,
    offsetTop: 200,   // lower right
    imgHeight: 340,
  },
];

function MeetTheVisionarySection() {
  return (
    <section className="bg-black px-6 md:px-12 pt-[60px] md:pt-[80px] pb-[80px] md:pb-[120px]">
      {/* Title */}
      <h2
        className="text-white mb-[50px] md:mb-[80px]"
        style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 400, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1" }}
      >
        Meet{" "}
        <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 400 }}>
          the
        </span>{" "}
        Visionary
      </h2>

      {/* Staggered grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-6 md:min-h-[620px] items-start">
        {visionaryPeople.map((person) => (
          <div
            key={person.id}
            className={`flex flex-col gap-4 ${person.id === "01" ? "md:mt-[180px]" : person.id === "02" ? "md:mt-[60px]" : person.id === "03" ? "md:mt-[100px]" : person.id === "04" ? "md:mt-[200px]" : "mt-0"}`}
          >
            {/* Number + label above image for 03 & 04, below for 01 & 02 */}
            {parseInt(person.id) <= 2 ? (
              <div className="flex flex-col gap-4">
                <div className="w-full overflow-hidden order-first md:order-last" style={{ height: "auto", minHeight: "280px", maxHeight: "420px", aspectRatio: "4/5" }}>
                  <ImageWithFallback
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="order-last md:order-first">
                  <span
                    className="text-white/60 block mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px" }}
                  >
                    № {person.id}
                  </span>
                  <span
                    className="text-white/40 block mb-1"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "12px" }}
                  >
                    {person.discipline}
                  </span>
                  <span
                    className="text-white"
                    style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "22px" }}
                  >
                    {person.name}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div>
                  <span
                    className="text-white/60 block mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px" }}
                  >
                    № {person.id}
                  </span>
                  <span
                    className="text-white/40 block mb-1"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "12px" }}
                  >
                    {person.discipline}
                  </span>
                  <span
                    className="text-white"
                    style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "22px" }}
                  >
                    {person.name}
                  </span>
                </div>
                <div className="w-full overflow-hidden" style={{ height: "auto", minHeight: "280px", maxHeight: "420px", aspectRatio: "4/5" }}>
                  <ImageWithFallback
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* + icon at bottom center */}
      <div className="flex justify-center mt-12 md:mt-20">
        <div className="w-8 h-8 border border-white/30 flex items-center justify-center rotate-45 hover:border-white/60 transition-colors cursor-pointer">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 0V12M0 6H12" stroke="white" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   PARAGRAPH UNDER MEET THE VISIONARY
────────────────────────────────────────────────────────── */
function VisionaryParagraph() {
  return (
    <section className="bg-black border-t border-white/10 px-12 py-[80px]">
      <div className="max-w-3xl mx-auto text-center px-6 md:px-0">
        <p
          className="text-white/70 mb-8"
          style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(18px, 4vw, 26px)", lineHeight: "1.8" }}
        >
          "Creativity begins where logic finds its limits."
        </p>
        <div className="flex items-center justify-center gap-2 md:gap-4">
          <div className="h-px w-8 md:w-12 bg-white/30" />
          <span
            className="text-white/40 uppercase tracking-widest text-[9px] md:text-[11px]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
          >
            The Visionary Collection · 2026
          </span>
          <div className="h-px w-8 md:w-12 bg-white/30" />
        </div>
      </div>
    </section>
  );
}



/* ──────────────────────────────────────────────────────────
   CASE STUDIES
────────────────────────────────────────────────────────── */
function CaseStudies() {
  const cases = [
    { tag: "Website", title: "Barakat", img: imgProject01 },
    { tag: "Application", title: "Finance tale", img: imgProject02},
    { tag: "Website", title: "Desisle", img: imgProject01 },
    { tag: "Website", title: "Hokshaksam", img: imgProject02 },
  ];
  return (
    <section className="py-16 md:py-[100px]">
      <div className="px-6 md:px-12 mb-10 md:mb-16">
        <h2
          className="text-[#1a1c1c] uppercase tracking-tight"
          style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "clamp(48px, 6vw, 60px)" }}
        >
          CASE STUDIES
        </h2>
      </div>
      <div className="flex flex-col">
        {cases.map((c) => (
          <Link
            to={`/case-study/${c.title.toLowerCase().replace(/\s+/g, '-')}`}
            key={c.title}
            className="relative h-[350px] md:h-[500px] overflow-hidden border-b border-black group cursor-pointer block"
          >
            <img src={c.img} alt={c.title} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            <div className="absolute inset-0 bg-black/40 flex items-end justify-between px-6 pb-6 md:px-12 md:pb-12">
              <div>
                <p className="text-white uppercase text-xs tracking-widest mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                  {c.tag}
                </p>
                <h3
                  className="text-white uppercase tracking-tight"
                  style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "clamp(36px, 5vw, 72px)" }}
                >
                  {c.title}
                </h3>
              </div>
              <div className="w-8 h-8 border border-white flex items-center justify-center rotate-45 group-hover:bg-white group-hover:border-transparent transition-all">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="white" strokeWidth="1.5" className="group-hover:stroke-black" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}



/* ──────────────────────────────────────────────────────────
   TESTIMONIALS
────────────────────────────────────────────────────────── */
function Testimonials() {
  return (
    <section className="border-b border-black py-16 md:py-[100px] px-6 md:px-48">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 md:gap-8">
        {/* Quote mark */}
        <svg width="40" height="28" viewBox="0 0 40 28" fill="none">
          <path d="M0 28V16.8C0 12.2667 1.06667 8.46667 3.2 5.4C5.42667 2.33333 8.98667 0.533333 13.88 0L15.44 3.72C12.8267 4.34667 10.88 5.53333 9.6 7.28C8.41333 8.93333 7.77333 10.8267 7.68 12.96H14.64V28H0ZM24.16 28V16.8C24.16 12.2667 25.2267 8.46667 27.36 5.4C29.5867 2.33333 33.1467 0.533333 38.04 0L39.6 3.72C36.9867 4.34667 35.04 5.53333 33.76 7.28C32.5733 8.93333 31.9333 10.8267 31.84 12.96H38.8V28H24.16Z" fill="#1a1c1c" />
        </svg>
        <p
          className="text-[#1a1c1c] text-center"
          style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(20px, 2.5vw, 36px)", lineHeight: "1.6" }}
        >
          "Sricharan doesn't just build websites; he builds digital monuments.
          His attention to typographic detail and structural rhythm is unparalleled
          in the modern web."
        </p>
        <div className="text-center pt-4">
          <p
            className="text-[#1a1c1c] uppercase tracking-widest"
            style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 700, fontSize: "14px" }}
          >
            ARTHUR BLACK
          </p>
          <p className="text-[#5d5f5f] mt-1" style={{ fontFamily: "Inter, sans-serif", fontSize: "12px" }}>
            Creative Director, Noir Collective
          </p>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   MAIN CONTENT
────────────────────────────────────────────────────────── */
function Home() {
  return (
    <main>
      {/* 1. Hero section - Code Craft */}
      <HeroSection />
      
      {/* 2. Meet the visionary */}
      <MeetTheVisionarySection />
      <VisionaryParagraph />
      
      {/* 3. Experience */}
      <AboutSection />
      
      {/* 4. Projects */}
      <TheCraftSection />
      
      {/* 5. Case studies */}
      <CaseStudies />
      
      {/* 6. Editor */}
      <InstagramSection />
      
      {/* 7. My post and presence */}
      <LinkedInSection />
      <Testimonials />
    </main>
  );
}

/* ──────────────────────────────────────────────────────────
   FOOTER
────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 px-6 md:px-12 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
      <p
        className="text-white/60 tracking-widest text-center md:text-left"
        style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "12px" }}
      >
        © 2026 SRICHARAN. ALL RIGHTS RESERVED.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
        {["Instagram", "LinkedIn", "Email"].map((link) => (
          <a
            key={link}
            href="#"
            className="text-white/60 hover:text-white transition-colors"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "12px", letterSpacing: "1.2px" }}
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}

/* ──────────────────────────────────────────────────────────
   APP ROOT & ROUTING
────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/backup" element={<BackupPage />} />
      </Routes>
      <Footer />
    </div>
  );
}