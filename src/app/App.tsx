import imgScreen2 from "figma:asset/0a1809ed7d458bcaac683eb0f3fa9bbe78c2203c.png";
import imgWorkEnvironment from "figma:asset/e317e51f2b3673ec21234f517c00abd2c4eeefbc.png";
import imgProject01 from "figma:asset/4414c28aa77abf9008fa1c9c93973d28bea54256.png";
import imgProject02 from "figma:asset/3d233458dc5e7c402836788b2c7301e3e3c6a3cc.png";
import imgFilm1 from "figma:asset/b888fc9179b397bedabb0f9c64e555cb1320a4fc.png";
import imgFilm2 from "figma:asset/68ab126be1a847da8c5c4b71e67afd0f5070a635.png";
import imgFilm3 from "figma:asset/ef1164c0bee74ff6af16acd5e3bd4ab6ea18231d.png";
import imgFilm4 from "figma:asset/3fba52fa361b0bf09c8b9525c836b3373f228fd2.png";
import imgFilm6 from "figma:asset/04a6c1a51fd087d37c6c0295ecf2709e94be5335.png";
import imgArticle1 from "figma:asset/d2af2e75ee1d1a1a939b848621952bf4dec6e136.png";
import imgArticle2 from "figma:asset/0ab7b27c61b0b3b677ab6a8d76eadb0b4e9f3aa3.png";
import imgArticle3 from "figma:asset/5c0f310abde82f06f938c054254fa25e1c03aa6b.png";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { InstagramSection } from "./components/InstagramSection";
import { LinkedInSection } from "./components/LinkedInSection";

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
function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black flex items-center justify-between px-8 py-5">
      <span
        className="text-black uppercase tracking-tight"
        style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "22px" }}
      >
        SRICHARAN
      </span>
      <div className="flex items-center gap-10">
        <a href="#" className="text-black border-b-2 border-black pb-1 uppercase text-sm tracking-tight" style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 700 }}>
          WORK
        </a>
        <a href="#" className="text-gray-500 uppercase text-sm tracking-tight" style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 700 }}>
          EXPERIENCE
        </a>
        <div className="w-14 h-14 border border-black flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-colors">
          <span className="text-xs tracking-wider">☰</span>
        </div>
        <a href="#" className="text-gray-500 uppercase text-sm tracking-tight" style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 700 }}>
          BLOG
        </a>
        <a href="#" className="text-gray-500 uppercase text-sm tracking-tight" style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 700 }}>
          CONTACT
        </a>
      </div>
    </nav>
  );
}

/* ──────────────────────────────────────────────────────────
   HERO SECTION
────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="bg-[#f9f9f9] pt-24 pb-0 px-12 min-h-screen grid grid-cols-2 gap-16 items-center">
      {/* Left column */}
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <div
            className="text-black uppercase tracking-tighter"
            style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "clamp(60px, 7vw, 90px)", lineHeight: "0.85" }}
          >
            <p>VISUAL</p>
            <p>POETRY</p>
          </div>
          <p className="text-[#5d5f5f] max-w-md" style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontStyle: "italic", lineHeight: "1.7" }}>
            Welcome to a visual journey that transcends time and space. Discover the artistry of moments captured in motion.
          </p>
        </div>
        {/* Social icons */}
        <div className="flex items-center gap-0">
          {["YT", "IG", "FB", "X"].map((s) => (
            <div key={s} className="border border-black w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-colors" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "10px" }}>
              {s}
            </div>
          ))}
          <div className="ml-4 h-px w-24 bg-[#c6c6c6]" />
        </div>
        {/* Stats */}
        <div className="grid grid-cols-2 gap-12 pt-4">
          <div>
            <p className="text-[#1a1c1c] tracking-tight" style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "48px" }}>
              +250k
            </p>
            <p className="text-[#5d5f5f] uppercase mt-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "1.5" }}>
              Videos reaching a wide audience and give lasting impression
            </p>
          </div>
          <div>
            <p className="text-[#1a1c1c] tracking-tight" style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "48px" }}>
              +800k
            </p>
            <p className="text-[#5d5f5f] uppercase mt-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "1.5" }}>
              Hours watched, engaging storytelling that captivates viewers
            </p>
          </div>
        </div>
      </div>
      {/* Right column – hero image */}
      <div className="h-[620px] overflow-hidden">
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
    <section className="bg-black" style={{ padding: "100px 0 0" }}>
      {/* Top label */}
      <div className="px-12 mb-10">
        <span
          className="text-white/40 uppercase tracking-[4px]"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "11px" }}
        >
          The Craft
        </span>
      </div>

      {/* Main staggered grid */}
      <div className="grid grid-cols-12 gap-px border border-white/10">
        {/* Left text panel */}
        <div className="col-span-5 border-r border-white/10 flex flex-col justify-between p-12 py-16 min-h-[560px]">
          <div>
            <p className="text-white/40 uppercase tracking-widest mb-6" style={{ fontFamily: "Inter, sans-serif", fontSize: "11px" }}>
              Philosophy
            </p>
            <div
              className="text-white uppercase tracking-tight"
              style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 3vw, 40px)", lineHeight: "1.1" }}
            >
              <p>LESS IS</p>
              <p>ABSOLUTE.</p>
            </div>
          </div>
          <div>
            <p
              className="text-white/70 mb-10"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", fontStyle: "italic", lineHeight: "1.75" }}
            >
              Precision over decoration. Every frame, every line, every
              pixel — deliberate. The craft is not what you see; it is
              what you feel between the cuts.
            </p>
            <div className="border-t border-white/20 pt-6 flex items-center gap-4">
              <span className="text-white/40 uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif", fontSize: "11px" }}>
                Status
              </span>
              <div className="w-px h-4 bg-white/20" />
              <p
                className="text-white"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontStyle: "italic" }}
              >
                Available for select editorial collaborations in 2024.
              </p>
            </div>
          </div>
        </div>

        {/* Right image: 3 staggered tiles */}
        <div className="col-span-7 grid grid-rows-2 min-h-[560px]">
          <div className="grid grid-cols-2 gap-px">
            <div className="overflow-hidden h-[280px]">
              <img
                src={imgWorkEnvironment}
                alt="Craft environment"
                className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="bg-[#111] flex flex-col justify-end p-8">
              <span className="text-white/30 uppercase tracking-widest block mb-3" style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}>
                discipline
              </span>
              <p
                className="text-white uppercase tracking-tight"
                style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "28px" }}
              >
                Visual Storytelling
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-px">
            {["Motion", "Editorial", "Identity"].map((label, i) => (
              <div
                key={label}
                className="bg-[#0a0a0a] flex flex-col justify-end p-6 h-[280px] border-t border-white/10 hover:bg-[#151515] transition-colors"
              >
                <span className="text-white/30 text-xs uppercase tracking-widest block mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className="text-white uppercase"
                  style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 700, fontSize: "18px" }}
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
    <section className="bg-[#f9f9f9] px-12 py-[100px]">
      <div className="grid grid-cols-12 gap-x-20">
        {/* Left: heading + description */}
        <div className="col-span-4 flex flex-col gap-8">
          <div>
            <span
              className="text-[#5d5f5f] uppercase tracking-widest block mb-4"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "11px" }}
            >
              About
            </span>
            <h2
              className="text-[#1a1c1c] uppercase tracking-tight"
              style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "60px", lineHeight: "1" }}
            >
              ABOUT
            </h2>
          </div>
          <p
            className="text-[#5d5f5f]"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", lineHeight: "1.75" }}
          >
            My journey is a synthesis of technical rigor and visual storytelling.
            I build interfaces that don't just function — they resonate.
          </p>
        </div>

        {/* Right: timeline */}
        <div className="col-span-8 flex flex-col gap-12 pt-4">
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
                className="text-[#5d5f5f] block mb-3"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "12px" }}
              >
                {item.period}
              </span>
              <div className="flex items-baseline justify-between">
                <span
                  className="text-[#1a1c1c] uppercase"
                  style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 700, fontSize: "24px" }}
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
    <section className="bg-black px-12 pt-[80px] pb-[120px]">
      {/* Title */}
      <h2
        className="text-white mb-[80px]"
        style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 400, fontSize: "clamp(40px, 5vw, 64px)", lineHeight: "1.1" }}
      >
        Meet{" "}
        <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 400 }}>
          the
        </span>{" "}
        Visionary
      </h2>

      {/* Staggered 4-column grid */}
      <div className="grid grid-cols-4 gap-6" style={{ minHeight: "620px", alignItems: "start" }}>
        {visionaryPeople.map((person) => (
          <div
            key={person.id}
            style={{ marginTop: `${person.offsetTop}px` }}
            className="flex flex-col gap-4"
          >
            {/* Number + label above image for 03 & 04, below for 01 & 02 */}
            {parseInt(person.id) <= 2 ? (
              <>
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
                <div
                  className="w-full overflow-hidden"
                  style={{ height: `${person.imgHeight}px` }}
                >
                  <ImageWithFallback
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </>
            ) : (
              <>
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
                <div
                  className="w-full overflow-hidden"
                  style={{ height: `${person.imgHeight}px` }}
                >
                  <ImageWithFallback
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* + icon at bottom center */}
      <div className="flex justify-center mt-20">
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
      <div className="max-w-3xl mx-auto text-center">
        <p
          className="text-white/70 mb-8"
          style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(18px, 2.2vw, 26px)", lineHeight: "1.8" }}
        >
          "These are the makers who refuse the ordinary — each one a world
          unto themselves. Stone, clay, form and feeling: they are the architects
          of a new visual language, where material meets meaning and tradition
          becomes transformation."
        </p>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-white/30" />
          <span
            className="text-white/40 uppercase tracking-widest"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "11px" }}
          >
            The Visionary Collection · 2024
          </span>
          <div className="h-px w-12 bg-white/30" />
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   CLIENT GRID
────────────────────────────────────────────────────────── */
function ClientGrid() {
  const clients = ["VOGUE", "LEICA", "BMW", "SQUARE"];
  return (
    <section className="bg-[#e8e8e8] px-12 py-20">
      <div className="flex items-end justify-between mb-12">
        <span
          className="text-[#1a1c1c] uppercase tracking-widest"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "12px" }}
        >
          Collaborators
        </span>
        <span
          className="text-[#1a1c1c]"
          style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "12px" }}
        >
          SELECTED CLIENTS 2018-2024
        </span>
      </div>
      <div className="grid grid-cols-4 border border-black">
        {clients.map((client, i) => (
          <div
            key={client}
            className={`flex items-center justify-center py-12 ${i < 3 ? "border-r border-black" : ""}`}
          >
            <span
              className="text-[#1a1c1c]"
              style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "20px" }}
            >
              {client}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   CASE STUDIES
────────────────────────────────────────────────────────── */
function CaseStudies() {
  const cases = [
    { tag: "Visual Identity / Web", title: "NOIR ARCHIVE", img: imgProject01 },
    { tag: "Motion Design / Interaction", title: "KINETIC FORM", img: imgProject02 },
  ];
  return (
    <section className="py-[100px]">
      <div className="px-12 mb-16">
        <h2
          className="text-[#1a1c1c] uppercase tracking-tight"
          style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "60px" }}
        >
          CASE STUDIES
        </h2>
      </div>
      <div className="flex flex-col">
        {cases.map((c) => (
          <div key={c.title} className="relative h-[500px] overflow-hidden border-b border-black group cursor-pointer">
            <img src={c.img} alt={c.title} className="absolute inset-0 w-full h-full object-cover grayscale" />
            <div className="absolute inset-0 bg-black/40 flex items-end justify-between px-12 pb-12">
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
          </div>
        ))}
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   FRAME BY FRAME (Hobbies & Editing)
────────────────────────────────────────────────────────── */
function FrameByFrame() {
  const films = [imgFilm1, imgFilm2, imgFilm3, imgFilm4, imgFilm6];
  return (
    <section className="bg-black px-12 py-[100px]">
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-5 flex flex-col gap-8">
          <div
            className="text-white uppercase tracking-tight"
            style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "clamp(36px, 4vw, 60px)", lineHeight: "1.05" }}
          >
            <p>FRAME BY</p>
            <p>FRAME</p>
          </div>
          <p
            className="text-white/60"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "18px", lineHeight: "1.7" }}
          >
            Outside of code, I explore the world through 24 frames per second.
            Video editing is my rhythmic meditation.
          </p>
        </div>
        <div className="col-span-7 grid grid-cols-3 gap-1">
          {films.slice(0, 3).map((src, i) => (
            <div key={i} className="h-[220px] overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          ))}
          <div className="h-[220px] overflow-hidden">
            <img src={films[3]} alt="" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="h-[220px] border border-white/20 flex items-center justify-center">
            <div className="w-8 h-8 border border-white/40 flex items-center justify-center rotate-45">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 0V12M0 6H12" stroke="white" strokeWidth="1" />
              </svg>
            </div>
          </div>
          <div className="h-[220px] overflow-hidden">
            <img src={films[4]} alt="" className="w-full h-full object-cover grayscale" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   TESTIMONIALS
────────────────────────────────────────────────────────── */
function Testimonials() {
  return (
    <section className="border-b border-black py-[100px] px-48">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
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
   JOURNAL
────────────────────────────────────────────────────────── */
const journalPosts = [
  { date: "OCT 24, 2023", title: "The Silent Space: Minimalism in 2024", img: imgArticle1 },
  { date: "SEP 12, 2023", title: "Code as Architecture", img: imgArticle2 },
  { date: "AUG 05, 2023", title: "Digital Noir: A New Aesthetic", img: imgArticle3 },
];

function Journal() {
  return (
    <section className="bg-[#f9f9f9] px-12 py-[100px]">
      <div className="flex items-end justify-between mb-16">
        <h2
          className="text-[#1a1c1c] uppercase tracking-tight"
          style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "60px" }}
        >
          JOURNAL
        </h2>
        <span
          className="border-b border-black pb-1 text-[#1a1c1c] uppercase cursor-pointer"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "12px" }}
        >
          View All Posts
        </span>
      </div>
      <div className="grid grid-cols-3 gap-12">
        {journalPosts.map((post) => (
          <article key={post.title} className="flex flex-col gap-4">
            <div className="h-[256px] overflow-hidden bg-[#e2e2e2]">
              <img src={post.img} alt={post.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <span className="text-[#5d5f5f] uppercase" style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}>
              {post.date}
            </span>
            <h3
              className="text-[#1a1c1c] uppercase"
              style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "1.4" }}
            >
              {post.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   FOOTER
────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 px-12 py-20 flex items-center justify-between">
      <p
        className="text-white/60 tracking-widest"
        style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "12px" }}
      >
        © 2024 DIGITAL NOIR. ALL RIGHTS RESERVED.
      </p>
      <div className="flex items-center gap-12">
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
   APP ROOT
────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <NavBar />
      <main>
        <HeroSection />
        {/* THE CRAFT — changed structure */}
        <TheCraftSection />
        {/* ABOUT — new section */}
        <AboutSection />
        {/* MEET THE VISIONARY — from attached image */}
        <MeetTheVisionarySection />
        {/* PARAGRAPH under Meet the Visionary */}
        <VisionaryParagraph />
        {/* rest of original sections */}
        <ClientGrid />
        <CaseStudies />
        <FrameByFrame />
        {/* INSTAGRAM — Editor & Script Writer */}
        <InstagramSection />
        {/* LINKEDIN — Professional posts & profile */}
        <LinkedInSection />
        <Testimonials />
        <Journal />
        <Footer />
      </main>
    </div>
  );
}