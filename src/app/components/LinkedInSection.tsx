// ── Placeholder images (replace with real assets when ready) ──────────────────
const imgArticle1 =
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80";
const imgArticle2 =
  "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80";
const imgArticle3 =
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80";

const IMG_PROFESSIONAL =
  "https://images.unsplash.com/photo-1704382002666-5dc4fbb522c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";
const IMG_WRITING_DESK =
  "https://images.unsplash.com/photo-1772408195534-8a080196dd51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";

/* ── LinkedIn post mock data ── */
const linkedInPosts = [
  {
    id: "lp1",
    iframeSrc: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7442980321819537410?collapsed=1",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7442980321819537410"
  },
  {
    id: "lp2",
    iframeSrc: "https://www.linkedin.com/embed/feed/update/urn:li:share:7307842580837191683?collapsed=1",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:share:7307842580837191683"
  },
  {
    id: "lp3",
    iframeSrc: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7360900541482233858?collapsed=1",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7360900541482233858"
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
    <section className="bg-[#f3f3f4] border-t border-black/10 w-full overflow-hidden">
      {/* ── TOP LABEL BAND ── */}
      <div className="border-b border-black/10 px-4 md:px-12 py-4 md:py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 w-full">
        <div className="flex items-center gap-4 sm:gap-6">
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

      <div className="px-4 md:px-12 pt-10 md:pt-16 pb-12 md:pb-20 w-full">
        {/* ── HEADER GRID: Title left, Profile card right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-10 md:mb-16 items-start w-full">
          {/* Title */}
          <div className="col-span-1 lg:col-span-6 w-full max-w-full">
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
              I share my journey as a developer through LinkedIn posts and dev-focused videos , documenting real problems, solutions, and lessons learned while building applications.
              My content is centered around coding, debugging, system thinking, and helping others understand how real-world development works.
            </p>
          </div>

          {/* LinkedIn Profile card */}
          <div className="col-span-1 lg:col-span-6 w-full max-w-full">
            <div className="border border-black/15 bg-white p-6 sm:p-8 flex flex-col gap-6 w-full">
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
                    Developer · Editor · Script Writer ·
                  </span>
                  <span
                    className="text-[#5d5f5f] uppercase tracking-wide mt-1"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
                  >
                    Desisle · Bangalore, India
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-black/10" />

              {/* Stats row */}
              <div className="flex items-center justify-between gap-4 sm:gap-0">
                {profileStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`flex-1 flex flex-col gap-1 ${i < profileStats.length - 1 ? "sm:border-r border-black/10 sm:pr-6 sm:mr-6" : ""}`}
                  >
                    <span
                      className="text-[#1a1c1c]"
                      style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "clamp(20px, 4vw, 26px)", lineHeight: "1" }}
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
        <div className="flex items-center gap-4 sm:gap-6 mb-8 md:mb-10 w-full overflow-hidden">
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
            2026 · Content & Craft
          </span>
        </div>

        {/* ── POSTS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {linkedInPosts.map((post, i) => (
            <article
              key={post.id}
              className={`bg-white border border-black/10 rounded-[8px] flex flex-col group transition-colors overflow-hidden shadow-sm ${!post.iframeSrc ? "cursor-pointer hover:bg-[#f9f9f9]" : ""}`}
            >
              {post.iframeSrc ? (
                <div className="relative w-full h-[560px] overflow-hidden group/iframe bg-white">
                  <iframe
                    src={post.iframeSrc}
                    height="100%"
                    width="100%"
                    frameBorder="0"
                    allowFullScreen
                    scrolling="no"
                    title="Embedded post"
                    style={{ border: "none", minHeight: "560px", background: "#fff" }}
                  />

                  {/* Bottom fade out gradient */}
                  <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />

                  {/* View full post button overlay */}
                  {post.postUrl && (
                    <div className="absolute bottom-[10px] left-0 right-0 flex justify-center opacity-0 group-hover/iframe:opacity-100 transition-opacity duration-300">
                      <a
                        href={post.postUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#1a1c1c] text-white px-16 py-3 text-center min-w-[160px] hover:bg-black transition-colors"
                        style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 700, fontSize: "14px", whiteSpace: "nowrap" }}
                      >
                        View
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <>
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
                </>
              )}
            </article>
          ))}
        </div>

        {/* ── BOTTOM CTA BAR ── */}
        <div className="border-t border-black/10 mt-8 md:mt-12 pt-8 md:pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0 w-full">
          <div className="flex items-center gap-4 sm:gap-6 max-w-full">
            <span
              className="text-[#5d5f5f] uppercase tracking-widest whitespace-nowrap"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "11px" }}
            >
              Read more on LinkedIn
            </span>
            <div className="h-px w-12 sm:w-20 bg-black/20" />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-full">
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
