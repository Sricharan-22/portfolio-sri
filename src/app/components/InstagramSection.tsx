// ── Placeholder images (replace with real assets when ready) ──────────────────
const imgFilm1 =
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80";
const imgFilm2 =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80";
const imgFilm3 =
  "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=80";
const imgFilm4 =
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80";
const imgProject01 =
  "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=1200&q=80";
const imgProject02 =
  "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=1200&q=80";

const IMG_BEHIND_SCENES =
  "https://images.unsplash.com/photo-1616527546362-bf6b7f80a751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";
const IMG_EDITOR_WORKSPACE =
  "https://images.unsplash.com/photo-1514471157964-06459a4b9241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";
const IMG_SCREENPLAY =
  "https://images.unsplash.com/photo-1523380262778-076eb862d38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";
const IMG_IG_CONTENT =
  "https://images.unsplash.com/photo-1649532345697-12f864b9062b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";

/* ── Instagram mock post grid ── */
const igPosts = [
  {
    id: "p1",
    img: imgFilm1,
    caption: "Frame geometry. Every cut tells a story — or buries one.",
    likes: "4.2k",
    tag: "Editing",
  },
  {
    id: "p2",
    img: IMG_BEHIND_SCENES,
    caption: "On set. The script lives until the camera rolls.",
    likes: "6.8k",
    tag: "BTS",
  },
  {
    id: "p3",
    img: imgFilm3,
    caption: "Colour as language. Desaturate to speak louder.",
    likes: "3.9k",
    tag: "Colour Grade",
  },
  {
    id: "p4",
    img: IMG_SCREENPLAY,
    caption: "Page 1. Where every great reel begins — in ink.",
    likes: "5.1k",
    tag: "Script",
  },
  {
    id: "p5",
    img: IMG_EDITOR_WORKSPACE,
    caption: "Timeline meditation. 3 AM and the sequence finally breathes.",
    likes: "7.3k",
    tag: "Process",
  },
  {
    id: "p6",
    img: imgFilm2,
    caption: "Stillness before the cut. The edit you don't see.",
    likes: "4.6k",
    tag: "Editing",
  },
];

/* ── Reel highlight chips ── */
const highlights = ["Reels", "Scripts", "BTS", "Colour", "Process", "Archive"];

export function InstagramSection() {
  return (
    <section className="bg-[#0a0a0a] border-t border-white/10">
      {/* ── TOP BAND: Role declaration ── */}
      <div className="border-b border-white/10 px-12 py-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span
            className="text-white/40 uppercase tracking-[4px]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "11px" }}
          >
            Professional Editor & Script Writer
          </span>
          <div className="w-px h-4 bg-white/20" />
          <span
            className="text-white/40 uppercase tracking-[4px]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "11px" }}
          >
            Instagram Page
          </span>
        </div>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 group"
        >
          <span
            className="text-white/60 group-hover:text-white transition-colors"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "12px", letterSpacing: "1.5px" }}
          >
            @buildw.rahul
          </span>
          <div className="w-4 h-4 border border-white/30 flex items-center justify-center group-hover:border-white/60 transition-colors rotate-45">
            <svg width="6" height="6" viewBox="0 0 8 8" fill="none">
              <path d="M1 7L7 1M7 1H2M7 1V6" stroke="white" strokeWidth="1.2" />
            </svg>
          </div>
        </a>
      </div>

      <div className="px-12 pt-16 pb-20">
        {/* ── SECTION TITLE ── */}
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-7">
            <h2
              className="text-white uppercase tracking-tight"
              style={{
                fontFamily: "Epilogue, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(48px, 5vw, 72px)",
                lineHeight: "0.95",
              }}
            >
              EDITOR.
              <br />
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  fontStyle: "italic",
                  fontSize: "clamp(44px, 4.5vw, 68px)",
                }}
              >
                Script Writer.
              </span>
            </h2>
          </div>
          <div className="col-span-5 flex flex-col justify-end gap-5">
            <p
              className="text-white/60"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "17px",
                lineHeight: "1.75",
              }}
            >
              I craft visual stories for digital audiences, specializing in short-form content that captures attention within seconds. From scripting to final cut, every piece is designed to engage, retain, and resonate.
              Through my work on Instagram, I focus on creating high-performing reels — combining storytelling, pacing, and visual rhythm to deliver impactful content that connects with modern viewers.
            </p>
            {/* Instagram stats */}
            <div className="flex items-center gap-8 pt-2">
              {[
                { value: "48.2k", label: "Followers" },
                { value: "312", label: "Posts" },
                { value: "94%", label: "Avg. Reach" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span
                    className="text-white"
                    style={{
                      fontFamily: "Epilogue, sans-serif",
                      fontWeight: 900,
                      fontSize: "28px",
                      lineHeight: "1",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-white/40 uppercase tracking-widest"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── HIGHLIGHTS / STORY CIRCLES ── */}
        <div className="flex items-center gap-4 mb-10">
          {highlights.map((h) => (
            <div key={h} className="flex flex-col items-center gap-2 cursor-pointer group">
              <div className="w-14 h-14 rounded-full border border-white/20 group-hover:border-white/50 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/5" />
              </div>
              <span
                className="text-white/40 group-hover:text-white/70 transition-colors uppercase"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", letterSpacing: "1px" }}
              >
                {h}
              </span>
            </div>
          ))}
          <div className="ml-auto flex items-center gap-3">
            <div className="h-px w-16 bg-white/20" />
            <span
              className="text-white/30 uppercase tracking-widest"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
            >
              Highlights
            </span>
          </div>
        </div>

        {/* ── MAIN SPLIT: Featured image + Post grid ── */}
        <div className="grid grid-cols-12 gap-4">
          {/* Left: large featured "pinned post" */}
          <div className="col-span-5 relative overflow-hidden group cursor-pointer" style={{ height: "560px" }}>
            <img
              src={IMG_IG_CONTENT}
              alt="Featured post"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            {/* IG-style overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20" />
                <span className="text-white/70 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                  @sricharan_edits
                </span>
              </div>
              <p
                className="text-white"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: "16px",
                  lineHeight: "1.55",
                }}
              >
                "The reel is never finished — it just stops being started."
              </p>
              <div className="flex items-center gap-4">
                <span className="text-white/50 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                  ♡ 12.4k
                </span>
                <span className="text-white/50 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                  ◯ 847 comments
                </span>
              </div>
            </div>
            {/* Pinned badge */}
            <div className="absolute top-4 right-4 border border-white/30 px-2 py-1">
              <span className="text-white/60 uppercase" style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", letterSpacing: "1.5px" }}>
                Pinned
              </span>
            </div>
          </div>

          {/* Right: 3×2 post grid */}
          <div className="col-span-7 grid grid-cols-3 gap-1">
            {igPosts.map((post) => (
              <div
                key={post.id}
                className="relative overflow-hidden group cursor-pointer"
                style={{ height: "185px" }}
              >
                <img
                  src={post.img}
                  alt={post.caption}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 gap-1">
                  <span
                    className="text-white/50 uppercase"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", letterSpacing: "1.5px" }}
                  >
                    {post.tag}
                  </span>
                  <p
                    className="text-white"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: "italic",
                      fontSize: "11px",
                      lineHeight: "1.4",
                    }}
                  >
                    {post.caption}
                  </p>
                  <span className="text-white/40 text-xs mt-1" style={{ fontFamily: "Inter, sans-serif" }}>
                    ♡ {post.likes}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="border-t border-white/10 mt-12 pt-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span
              className="text-white/40 uppercase tracking-widest"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "11px" }}
            >
              Follow the edit
            </span>
            <div className="h-px w-20 bg-white/20" />
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 border border-white/20 hover:border-white/50 transition-all px-6 py-3 group"
          >
            {/* Instagram icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover:opacity-100 transition-opacity">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span
              className="text-white/60 group-hover:text-white transition-colors uppercase tracking-widest"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "11px" }}
            >
              View Instagram Profile
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
