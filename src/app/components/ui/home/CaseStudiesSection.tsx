import { Link } from "react-router";
import { CASE_STUDIES } from "../../../data/caseStudies";

export function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-[100px]">
      <div className="px-6 md:px-12 mb-10 md:mb-16">
        <h2
          className="text-[#1a1c1c] uppercase tracking-tight"
          style={{
            fontFamily: "Epilogue, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(48px, 6vw, 60px)",
          }}
        >
          CASE STUDIES
        </h2>
      </div>
      <div className="flex flex-col">
        {CASE_STUDIES.map((caseStudy) => (
          <Link
            to={`/case-study/${caseStudy.slug}`}
            key={caseStudy.slug}
            className="relative h-[350px] md:h-[500px] overflow-hidden border-b border-black group cursor-pointer block"
          >
            <img
              src={caseStudy.img}
              alt={caseStudy.title}
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/60" />
            <div className="absolute inset-0 flex flex-col justify-between px-6 py-6 md:px-12 md:py-12">
              <div className="flex items-start justify-between gap-6">
                <div className="flex flex-col gap-2">
                  <span
                    className="text-white/75 uppercase tracking-widest opacity-0 -translate-y-4 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", transitionDelay: "60ms" }}
                  >
                    Duration: {caseStudy.duration}
                  </span>
                  <span
                    className="text-white/75 uppercase tracking-widest opacity-0 -translate-y-4 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", transitionDelay: "140ms" }}
                  >
                    Client Type: {caseStudy.clientType}
                  </span>
                </div>
                <div className="w-8 h-8 border border-white flex items-center justify-center rotate-45 group-hover:bg-white group-hover:border-transparent transition-all">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M1 11L11 1M11 1H3M11 1V9"
                      stroke="white"
                      strokeWidth="1.5"
                      className="group-hover:stroke-black"
                    />
                  </svg>
                </div>
              </div>
              <div className="max-w-3xl">
                <p
                  className="text-white uppercase text-xs tracking-widest mb-2"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {caseStudy.tag}
                </p>
                <h3
                  className="text-white uppercase tracking-tight"
                  style={{
                    fontFamily: "Epilogue, sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(36px, 5vw, 72px)",
                  }}
                >
                  {caseStudy.title}
                </h3>
                <p
                  className="max-w-2xl overflow-hidden text-white/0 max-h-0 translate-y-3 transition-all duration-300 group-hover:mt-4 group-hover:max-h-28 group-hover:translate-y-0 group-hover:text-white/75"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "16px",
                    lineHeight: "1.7",
                  }}
                >
                  {caseStudy.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
