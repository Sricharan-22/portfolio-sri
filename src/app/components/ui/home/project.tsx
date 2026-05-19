import { Link } from "react-router";
import { CASE_STUDIES } from "../../../data/caseStudies";
import { HOME_SECTION_IDS } from "./homeSectionData";

export function TheCraftSection() {
  const [featuredProject, ...secondaryProjects] = CASE_STUDIES;

  return (
    <section
      id={HOME_SECTION_IDS.work}
      className="bg-black py-16 md:py-[100px] md:pb-0"
      style={{ scrollMarginTop: "96px" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-px border border-white/10">
        <div className="col-span-1 md:col-span-5 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between p-6 md:p-12 py-12 md:py-16 min-h-auto md:min-h-[560px]">
          <div>
            <p
              className="text-white/40 uppercase tracking-widest mb-6"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "11px" }}
            >
              Selected Work
            </p>
            <div
              className="text-white uppercase tracking-tight"
              style={{
                fontFamily: "Epilogue, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 6vw, 40px)",
                lineHeight: "1.1",
              }}
            >
              <p>PRODUCTS</p>
              <p>WORTH SHIPPING.</p>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <p
              className="text-white/70 mb-10"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "17px",
                fontStyle: "normal",
                lineHeight: "1.75",
              }}
            >
              These are not mockups. They are not concept pieces. Every project in
              this archive is live, used by real people, and built with a specific
              outcome in mind beyond "make it look good". The category changes -
              SaaS, corporate, content - but the process does not: understand the
              product first, plan the architecture second, write the code third.
            </p>
            <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row md:items-center gap-4">
              <span
                className="text-white/40 uppercase tracking-widest"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "11px" }}
              >
                Status
              </span>
              <div className="hidden md:block w-px h-4 bg-white/20" />
              <p
                className="text-white"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "15px",
                  fontStyle: "normal",
                }}
              >
                Currently engaged. Selectively available for new work starting soon.
                If the project is worth planning properly, reach out.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-7 grid grid-rows-none md:grid-rows-2 min-h-auto md:min-h-[560px]">
          <Link
            to={`/case-study/${featuredProject.slug}`}
            className="group relative overflow-hidden min-h-[280px] border-t border-white/10 block"
          >
            <img
              src={featuredProject.img}
              alt={featuredProject.title}
              className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20 transition-opacity duration-500 group-hover:from-black/90 group-hover:via-black/65 group-hover:to-black/25" />
            <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <span
                  className="text-white/30 text-xs uppercase tracking-widest"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  01
                </span>
                <span
                  className="text-white/45 uppercase tracking-widest"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
                >
                  {featuredProject.tag}
                </span>
              </div>
              <div>
                <p
                  className="mb-3 text-white uppercase tracking-tight"
                  style={{
                    fontFamily: "Epilogue, sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(24px, 4vw, 32px)",
                  }}
                >
                  {featuredProject.title}
                </p>
                <p
                  className="max-w-md overflow-hidden max-h-0 translate-y-3 text-white/0 transition-all duration-300 group-hover:max-h-24 group-hover:translate-y-0 group-hover:text-white/70"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "14px",
                    lineHeight: "1.6",
                  }}
                >
                  {featuredProject.description}
                </p>
              </div>
            </div>
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px">
            {secondaryProjects.map((project, index) => (
              <article
                key={project.slug}
                className="group relative overflow-hidden min-h-[220px] sm:min-h-[280px] border-t border-white/10 sm:border-t-0"
                style={{
                  borderLeft: index > 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
                }}
              >
              <img
                src={project.img}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20 transition-opacity duration-500 group-hover:from-black/90 group-hover:via-black/65 group-hover:to-black/25" />
              <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="text-white/30 text-xs uppercase tracking-widest"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {String(index + 2).padStart(2, "0")}
                  </span>
                  <span
                    className="text-white/45 uppercase tracking-widest"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
                  >
                    {project.tag}
                  </span>
                </div>
                <div>
                  <p
                    className="mb-3 text-white uppercase tracking-tight"
                    style={{
                      fontFamily: "Epilogue, sans-serif",
                      fontWeight: 900,
                      fontSize: "clamp(20px, 3vw, 28px)",
                    }}
                  >
                    {project.title}
                  </p>
                  <p
                    className="max-w-sm overflow-hidden max-h-0 translate-y-3 text-white/0 transition-all duration-300 group-hover:max-h-24 group-hover:translate-y-0 group-hover:text-white/70"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "14px",
                      lineHeight: "1.6",
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
