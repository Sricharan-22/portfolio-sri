import imgArticle1 from "figma:asset/d2af2e75ee1d1a1a939b848621952bf4dec6e136.png";
import imgArticle2 from "figma:asset/0ab7b27c61b0b3b677ab6a8d76eadb0b4e9f3aa3.png";
import imgArticle3 from "figma:asset/5c0f310abde82f06f938c054254fa25e1c03aa6b.png";

const IMG_PROFESSIONAL =
  "https://images.unsplash.com/photo-1704382002666-5dc4fbb522c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";
const IMG_WRITING_DESK =
  "https://images.unsplash.com/photo-1772408195534-8a080196dd51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";

/* ── LinkedIn post mock data ── */
const linkedInPosts = [
  {
    id: "lp1",
    date: "Mar 14, 2024",
    reactions: "1.2k",
    comments: "84",
    tag: "Script Writing",
    img: imgArticle1,
    title: "Why Every Video Editor Should Write Scripts",
    excerpt:
      "The edit begins before you open Premiere. It begins the moment the script locks. Here's how I changed my workflow by writing before cutting — and why it changed everything about how I tell stories on screen.",
  },
  {
    id: "lp2",
    date: "Feb 28, 2024",
    reactions: "2.4k",
    comments: "136",
    tag: "Industry Insight",
    img: imgArticle2,
    title: "The Invisible Grammar of the Instagram Reel",
    excerpt:
      "60 seconds. No room for anything accidental. Every cut, every sound design choice, every caption — it's not social media, it's micro-cinema. Here's the framework I use to build reels that retain.",
  },
  {
    id: "lp3",
    date: "Jan 19, 2024",
    reactions: "876",
    comments: "61",
    tag: "Process",
    img: imgArticle3,
    title: "From Blank Page to Final Cut: My End-to-End Process",
    excerpt:
      "Script. Storyboard. Shoot. Selects. Rough cut. Fine cut. Colour. Sound. Done? Never. I'm sharing the full pipeline I've refined over six years of editorial and branded content work.",
  },
];

/* ── Profile headline stats ── */
const profileStats = [
  { value: "12.4k", label: "Followers" },
  { value: "500+", label: "Connections" },
  { value: "48", label: "Articles" },
];

export function LinkedInSection() {
  return (
    <section className="bg-[#f3f3f4] border-t border-black/10">
      {/* ── TOP LABEL BAND ── */}
      <div className="border-b border-black/10 px-12 py-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span
            className="text-[#5d5f5f] uppercase tracking-[4px]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "11px" }}
          >
            Professional Voice
          </span>
          <div className="w-px h-4 bg-black/20" />
          <span
            className="text-[#5d5f5f] uppercase tracking-[4px]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "11px" }}
          >
            LinkedIn
          </span>
        </div>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 group"
        >
          <span
            className="text-[#1a1c1c]/60 group-hover:text-[#1a1c1c] transition-colors"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "12px", letterSpacing: "1.5px" }}
          >
            @sricharan-dev
          </span>
          <div className="w-4 h-4 border border-black/30 flex items-center justify-center group-hover:border-black/60 transition-colors rotate-45">
            <svg width="6" height="6" viewBox="0 0 8 8" fill="none">
              <path d="M1 7L7 1M7 1H2M7 1V6" stroke="#1a1c1c" strokeWidth="1.2" />
            </svg>
          </div>
        </a>
      </div>

      <div className="px-12 pt-16 pb-20">
        {/* ── HEADER GRID: Title left, Profile card right ── */}
        <div className="grid grid-cols-12 gap-12 mb-16 items-start">
          {/* Title */}
          <div className="col-span-6">
            <p
              className="text-[#5d5f5f] uppercase tracking-widest mb-4"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "11px" }}
            >
              Thoughts, Craft & Industry
            </p>
            <h2
              className="text-[#1a1c1c] uppercase tracking-tight"
              style={{
                fontFamily: "Epilogue, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(40px, 4.5vw, 64px)",
                lineHeight: "0.95",
              }}
            >
              MY{" "}
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  fontStyle: "italic",
                }}
              >
                posts &
              </span>
              <br />
              PRESENCE
            </h2>
            <p
              className="text-[#5d5f5f] mt-8 max-w-md"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "17px",
                lineHeight: "1.75",
              }}
            >
              Writing about the intersection of editing, storytelling and
              digital craft — for editors, directors and creators who believe
              that words and images are the same language.
            </p>
          </div>

          {/* LinkedIn Profile card */}
          <div className="col-span-6">
            <div className="border border-black/15 bg-white p-8 flex flex-col gap-6">
              {/* Profile header */}
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 overflow-hidden flex-shrink-0" style={{ border: "1px solid rgba(0,0,0,0.1)" }}>
                  <img
                    src={IMG_PROFESSIONAL}
                    alt="Sricharan profile"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span
                    className="text-[#1a1c1c]"
                    style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 700, fontSize: "18px" }}
                  >
                    Sricharan
                  </span>
                  <span
                    className="text-[#5d5f5f]"
                    style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "14px" }}
                  >
                    Editor · Script Writer · Digital Storyteller
                  </span>
                  <span
                    className="text-[#5d5f5f] uppercase tracking-wide mt-1"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
                  >
                    Global Design House · Chennai, India
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-black/10" />

              {/* Stats row */}
              <div className="flex items-center gap-0">
                {profileStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`flex-1 flex flex-col gap-1 ${i < profileStats.length - 1 ? "border-r border-black/10 pr-6 mr-6" : ""}`}
                  >
                    <span
                      className="text-[#1a1c1c]"
                      style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "26px", lineHeight: "1" }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="text-[#5d5f5f] uppercase tracking-widest"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-black/10" />

              {/* CTA */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  {/* LinkedIn logo */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#1a1c1c]"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="4" fill="#1a1c1c" />
                    <path
                      d="M7 10v7M7 7v.5M12 17v-3.5c0-1.5.5-2.5 2-2.5s2 1 2 2.5V17M12 10v7"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span
                    className="text-[#1a1c1c] uppercase tracking-widest"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "11px" }}
                  >
                    Connect on LinkedIn
                  </span>
                </div>
                <div className="w-4 h-4 border border-black/30 flex items-center justify-center group-hover:border-black/60 transition-colors rotate-45">
                  <svg width="6" height="6" viewBox="0 0 8 8" fill="none">
                    <path d="M1 7L7 1M7 1H2M7 1V6" stroke="#1a1c1c" strokeWidth="1.2" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ── DIVIDER LABEL ── */}
        <div className="flex items-center gap-6 mb-10">
          <span
            className="text-[#5d5f5f] uppercase tracking-widest"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "11px" }}
          >
            Featured Posts
          </span>
          <div className="flex-1 h-px bg-black/15" />
          <span
            className="text-[#5d5f5f]"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "12px" }}
          >
            2024 · Content & Craft
          </span>
        </div>

        {/* ── POSTS GRID ── */}
        <div className="grid grid-cols-3 gap-px border border-black/10">
          {linkedInPosts.map((post, i) => (
            <article
              key={post.id}
              className={`bg-white flex flex-col group cursor-pointer hover:bg-[#f9f9f9] transition-colors ${
                i < linkedInPosts.length - 1 ? "border-r border-black/10" : ""
              }`}
            >
              {/* Post image */}
              <div className="h-[180px] overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-600"
                />
              </div>

              {/* Post content */}
              <div className="flex flex-col gap-4 p-7 flex-1">
                {/* Meta row */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-[#5d5f5f] uppercase tracking-widest"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
                  >
                    {post.tag}
                  </span>
                  <span
                    className="text-[#5d5f5f]"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
                  >
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-[#1a1c1c] uppercase"
                  style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 700, fontSize: "18px", lineHeight: "1.3" }}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p
                  className="text-[#5d5f5f] flex-1"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    fontSize: "14px",
                    lineHeight: "1.7",
                  }}
                >
                  {post.excerpt}
                </p>

                {/* Bottom: reactions */}
                <div className="border-t border-black/10 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-[#5d5f5f] text-xs flex items-center gap-1" style={{ fontFamily: "Inter, sans-serif" }}>
                      <span>👍</span> {post.reactions}
                    </span>
                    <span className="text-[#5d5f5f] text-xs flex items-center gap-1" style={{ fontFamily: "Inter, sans-serif" }}>
                      <span>💬</span> {post.comments}
                    </span>
                  </div>
                  <div className="w-3 h-3 border border-black/30 flex items-center justify-center rotate-45 group-hover:border-black/60 transition-colors">
                    <svg width="5" height="5" viewBox="0 0 8 8" fill="none">
                      <path d="M1 7L7 1M7 1H2M7 1V6" stroke="#1a1c1c" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── BOTTOM CTA BAR ── */}
        <div className="border-t border-black/10 mt-12 pt-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span
              className="text-[#5d5f5f] uppercase tracking-widest"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "11px" }}
            >
              Read more on LinkedIn
            </span>
            <div className="h-px w-20 bg-black/20" />
          </div>
          <div className="flex items-center gap-4">
            {/* Writing desk image — decorative strip */}
            <div className="h-10 w-24 overflow-hidden">
              <img
                src={IMG_WRITING_DESK}
                alt=""
                className="w-full h-full object-cover grayscale opacity-40"
              />
            </div>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 border border-black/20 hover:border-black/50 transition-all px-6 py-3 group"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="opacity-60 group-hover:opacity-100 transition-opacity"
              >
                <rect x="2" y="2" width="20" height="20" rx="4" fill="#1a1c1c" />
                <path
                  d="M7 10v7M7 7v.5M12 17v-3.5c0-1.5.5-2.5 2-2.5s2 1 2 2.5V17M12 10v7"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span
                className="text-[#1a1c1c]/60 group-hover:text-[#1a1c1c] transition-colors uppercase tracking-widest"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "11px" }}
              >
                View LinkedIn Profile
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
