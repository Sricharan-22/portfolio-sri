const IMG_PROFESSIONAL =
  "https://images.unsplash.com/photo-1704382002666-5dc4fbb522c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";
const IMG_WRITING_DESK =
  "https://images.unsplash.com/photo-1772408195534-8a080196dd51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";

const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/sricharananbalagan/";

const linkedInPosts = [
  {
    id: "lp1",
    iframeSrc:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7442980321819537410?collapsed=1",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7442980321819537410",
  },
  {
    id: "lp2",
    iframeSrc:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7307842580837191683?collapsed=1",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:share:7307842580837191683",
  },
  {
    id: "lp3",
    iframeSrc:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7360900541482233858?collapsed=1",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7360900541482233858",
  },
] as const;

const profileStats = [
  { value: "12.4k", label: "Followers" },
  { value: "500+", label: "Connections" },
  { value: "48", label: "Posts" },
] as const;

export function LinkedInSection() {
  return (
    <section className="relative w-full overflow-hidden border-t border-white/10 bg-black">
      <div className="relative z-10 border-b border-white/10 px-4 md:px-12 py-4 md:py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 w-full">
        <div className="flex items-center gap-4 sm:gap-6">
          <span
            className="text-white/42 uppercase tracking-[4px]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "11px" }}
          >
            Developer Presence
          </span>
          <div className="w-px h-4 bg-white/18" />
          <span
            className="text-white/42 uppercase tracking-[4px]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "11px" }}
          >
            LinkedIn
          </span>
        </div>
        <a href={LINKEDIN_PROFILE_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 group">
          <span
            className="text-white/58 transition-colors group-hover:text-white"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "12px", letterSpacing: "1.5px" }}
          >
            @sricharan-dev
          </span>
          <div className="w-4 h-4 border border-white/25 flex items-center justify-center group-hover:border-white/60 transition-colors rotate-45">
            <svg width="6" height="6" viewBox="0 0 8 8" fill="none">
              <path d="M1 7L7 1M7 1H2M7 1V6" stroke="white" strokeWidth="1.2" />
            </svg>
          </div>
        </a>
      </div>

      <div className="relative z-10 px-4 md:px-12 pt-10 md:pt-16 pb-12 md:pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-10 md:mb-16 items-start w-full">
          <div className="col-span-1 lg:col-span-6 w-full max-w-full">
            <p
              className="text-white/42 uppercase tracking-widest mb-4"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "11px" }}
            >
              Engineering Notes & Industry
            </p>
            <h2
              className="text-white uppercase tracking-tight"
              style={{
                fontFamily: "Epilogue, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(40px, 4.5vw, 64px)",
                lineHeight: "0.95",
              }}
            >
              THINKING{" "}
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                }}
                >
                 OUT
                </span>
                <br />
              LOUD.
            </h2>
            <p
              className="text-white/62 mt-8 max-w-md"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "normal",
                fontSize: "17px",
                lineHeight: "1.75",
              }}
            >
              I write about the decisions behind the work, not the work itself. Why a
              particular architecture held up under load. What the brief said versus
              what the build required. Where planning saved time and where it did
              not. Practical observations from someone currently in production, not
              reflecting on it from a distance.
            </p>
          </div>

          <div className="col-span-1 lg:col-span-6 w-full max-w-full">
            <div className="border border-white/12 bg-white/[0.055] p-6 sm:p-8 flex flex-col gap-6 w-full rounded-[28px] backdrop-blur">
              <div className="flex items-start gap-5">
                <div
                  className="w-16 h-16 overflow-hidden flex-shrink-0 rounded-2xl"
                  style={{ border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <img
                    src={IMG_PROFESSIONAL}
                    alt="Sricharan profile"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span
                    className="text-white"
                    style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 700, fontSize: "18px" }}
                  >
                    Sricharan
                  </span>
                  <span
                    className="text-white/58"
                    style={{ fontFamily: "'Playfair Display', serif", fontStyle: "normal", fontSize: "14px" }}
                  >
                    Frontend Developer - React & Next.js
                  </span>
                  <span
                    className="text-white/42 uppercase tracking-wide mt-1"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
                  >
                    I plan the architecture before I open an editor - Building at Desisle LLP
                  </span>
                </div>
              </div>

              <div className="border-t border-white/10" />

              <div className="flex items-center justify-between gap-4 sm:gap-0">
                {profileStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`flex-1 flex flex-col gap-1 ${index < profileStats.length - 1 ? "sm:border-r border-white/10 sm:pr-6 sm:mr-6" : ""}`}
                  >
                    <span
                      className="text-white"
                      style={{
                        fontFamily: "Epilogue, sans-serif",
                        fontWeight: 900,
                        fontSize: "clamp(20px, 4vw, 26px)",
                        lineHeight: "1",
                      }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="text-white/42 uppercase tracking-widest"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10" />

              <a
                href={LINKEDIN_PROFILE_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
                    <rect x="2" y="2" width="20" height="20" rx="4" fill="white" />
                    <path
                      d="M7 10v7M7 7v.5M12 17v-3.5c0-1.5.5-2.5 2-2.5s2 1 2 2.5V17M12 10v7"
                      stroke="#1a1c1c"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span
                    className="text-white uppercase tracking-widest"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "11px" }}
                  >
                    Follow - LinkedIn
                  </span>
                </div>
                <div className="w-4 h-4 border border-white/25 flex items-center justify-center group-hover:border-white/60 transition-colors rotate-45">
                  <svg width="6" height="6" viewBox="0 0 8 8" fill="none">
                    <path d="M1 7L7 1M7 1H2M7 1V6" stroke="white" strokeWidth="1.2" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 mb-8 md:mb-10 w-full overflow-hidden">
          <span
            className="text-white/42 uppercase tracking-widest"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "11px" }}
          >
            Featured Posts
          </span>
          <div className="flex-1 h-px bg-white/12" />
          <span
            className="text-white/48"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "normal", fontSize: "12px" }}
          >
            2026 - Engineering & Delivery
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {linkedInPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white/[0.055] border border-white/12 rounded-[22px] flex flex-col group transition-colors overflow-hidden shadow-[0_18px_54px_rgba(0,0,0,0.22)]"
            >
              <div className="relative w-full h-[560px] overflow-hidden group/iframe bg-white rounded-[20px]">
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

                <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />

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
              </div>
            </article>
          ))}
        </div>

        <div className="border-t border-white/10 mt-8 md:mt-12 pt-8 md:pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0 w-full">
          <div className="flex items-center gap-4 sm:gap-6 max-w-full">
            <span
              className="text-white/42 uppercase tracking-widest whitespace-nowrap"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "11px" }}
            >
              Read more on LinkedIn
            </span>
            <div className="h-px w-12 sm:w-20 bg-white/16" />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-full">
            <div className="h-10 w-24 overflow-hidden">
              <img src={IMG_WRITING_DESK} alt="" className="w-full h-full object-cover grayscale opacity-40" />
            </div>
            <a
                href={LINKEDIN_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 border border-white/16 bg-white/[0.055] hover:border-white/42 transition-all px-6 py-3 group"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="opacity-60 group-hover:opacity-100 transition-opacity"
              >
                <rect x="2" y="2" width="20" height="20" rx="4" fill="white" />
                <path
                  d="M7 10v7M7 7v.5M12 17v-3.5c0-1.5.5-2.5 2-2.5s2 1 2 2.5V17M12 10v7"
                  stroke="#1a1c1c"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span
                className="text-white/58 group-hover:text-white transition-colors uppercase tracking-widest"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "11px" }}
              >
                Follow - LinkedIn
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
