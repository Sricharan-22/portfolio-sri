import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { Link } from "react-router";
import { CASE_STUDIES } from "../../../data/caseStudies";
import { TextReveal } from "../TextReveal";
import { HOME_SECTION_IDS } from "./homeSectionData";

function shortTitle(title: string) {
  return title.split(" - ")[0];
}

const LEFT_CASE_ORDER = ["finance-tale", "hosaksham"] as const;
const RIGHT_CASE_ORDER = [
  "desisle",
  "prodxverse",
  "barakat",
  "automotive-group-website",
  "bookmark-hub",
] as const;

export function CaseStudiesSection() {
  const leftCases = LEFT_CASE_ORDER.map((slug) =>
    CASE_STUDIES.find((caseStudy) => caseStudy.slug === slug),
  ).filter((caseStudy): caseStudy is (typeof CASE_STUDIES)[number] => Boolean(caseStudy));
  const rightCases = RIGHT_CASE_ORDER.map((slug) =>
    CASE_STUDIES.find((caseStudy) => caseStudy.slug === slug),
  ).filter((caseStudy): caseStudy is (typeof CASE_STUDIES)[number] => Boolean(caseStudy));

  return (
    <section
      id={HOME_SECTION_IDS.work}
      className="relative overflow-hidden bg-[#f7efe4] px-4 py-14 sm:px-6 md:px-12 md:py-[110px]"
      style={{ scrollMarginTop: "96px" }}
    >
      <style>
        {`
          @keyframes caseFloat {
            0%, 100% { transform: translate3d(0, 0, 0); }
            50% { transform: translate3d(0, -8px, 0); }
          }

          .case-feature-float {
            animation: caseFloat 6s ease-in-out infinite;
          }
        `}
      </style>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="reveal-item mb-9 grid grid-cols-1 gap-5 md:mb-14 lg:grid-cols-[0.85fr_1fr] lg:items-end" style={{ "--reveal-index": 0 } as CSSProperties}>
          <div className="min-w-0">
            <TextReveal
              as="span"
              text="Case Studies"
              className="mb-4 block text-[#5d5f5f] uppercase tracking-[0.22em]"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 600 }}
            />
            <TextReveal
              as="h2"
              text={"Proof, kept\nvisual."}
              className="text-[#1a1c1c] uppercase tracking-tight"
              style={{
                fontFamily: "Epilogue, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(38px, 12vw, 88px)",
                lineHeight: "0.92",
              }}
              wordDelay={58}
              lineDelay={160}
            />
          </div>
          <TextReveal
            as="p"
            text="The cards stay light on purpose. Open the case study when you want the architecture, constraints, and delivery notes."
            className="max-w-xl text-[#5d5f5f] lg:justify-self-end"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: "1.75" }}
            delay={90}
            wordDelay={22}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr]">
          <div className="grid grid-cols-1 gap-4">
            {leftCases.map((caseStudy, index) => (
              <Link
                key={caseStudy.slug}
                to={`/case-study/${caseStudy.slug}`}
                className="reveal-item case-feature-float group relative min-h-[300px] overflow-hidden rounded-[32px] border border-black/10 bg-black text-white shadow-[0_24px_70px_rgba(0,0,0,0.16)] sm:min-h-[340px] md:min-h-[390px]"
                style={
                  {
                    "--reveal-index": index + 1,
                    animationDelay: `${index * 0.8}s`,
                  } as CSSProperties
                }
              >
                <img
                  src={caseStudy.img}
                  alt={caseStudy.title}
                  className={`absolute inset-0 h-full w-full object-center grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0 ${
                    caseStudy.slug === "finance-tale" ? "object-contain" : "object-cover"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/82 via-black/42 to-black/18 transition duration-700 group-hover:from-black/72 group-hover:via-black/32" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/72 to-transparent" />

                <div className="relative flex h-full min-h-[300px] flex-col justify-between p-5 sm:min-h-[340px] sm:p-6 md:min-h-[390px] md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-2 rounded-full border border-white/14 bg-white/10 px-3 py-2 backdrop-blur-xl sm:gap-3 sm:px-4">
                      <span
                        className="text-white/45 uppercase tracking-[0.2em]"
                        style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
                      >
                        {caseStudy.year}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-white/28" />
                      <span
                        className="text-white/76"
                        style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 700 }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/18 bg-white/12 backdrop-blur-xl transition duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-black sm:h-12 sm:w-12">
                      <ArrowUpRight aria-hidden="true" size={20} strokeWidth={2.4} />
                    </span>
                  </div>

                  <div className="min-w-0 max-w-3xl">
                    <span
                      className="mb-4 block text-white/52 uppercase tracking-[0.22em]"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
                    >
                      {caseStudy.tag}
                    </span>
                    <TextReveal
                      as="h3"
                      text={shortTitle(caseStudy.title)}
                      className="text-white uppercase tracking-tight"
                      style={{
                        fontFamily: "Epilogue, sans-serif",
                        fontWeight: 900,
                        fontSize: "clamp(32px, 11vw, 68px)",
                        lineHeight: "0.92",
                      }}
                      wordDelay={42}
                    />
                    <div className="mt-6 flex flex-wrap gap-2">
                      {[caseStudy.clientType, caseStudy.duration, caseStudy.role].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/14 bg-white/10 px-3 py-2 text-white/72 backdrop-blur-xl"
                          style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 600 }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4">
            {rightCases.map((caseStudy, index) => (
              <Link
                key={caseStudy.slug}
                to={`/case-study/${caseStudy.slug}`}
                className="reveal-item group relative min-h-[150px] overflow-hidden rounded-[28px] border border-black/10 bg-[#151719] text-white shadow-[0_18px_48px_rgba(0,0,0,0.1)] transition duration-500 hover:-translate-y-1 sm:min-h-[160px]"
                style={{ "--reveal-index": index + leftCases.length + 1 } as CSSProperties}
              >
                <img
                  src={caseStudy.img}
                  alt={caseStudy.title}
                  className={`absolute inset-0 h-full w-full object-center grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0 ${
                    caseStudy.slug === "finance-tale" ? "object-contain" : "object-cover"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/62 to-black/24 transition duration-700 group-hover:from-black/78" />
                <div className="relative flex min-h-[150px] items-end justify-between gap-4 p-5 sm:min-h-[160px] md:gap-5 md:p-6">
                  <div className="min-w-0">
                    <div className="mb-4 flex min-w-0 items-center gap-2 sm:mb-5 sm:gap-3">
                      <span
                        className="text-white/36 uppercase tracking-[0.22em]"
                        style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
                      >
                        {String(index + leftCases.length + 1).padStart(2, "0")}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-white/22" />
                      <span
                        className="truncate text-white/54 uppercase tracking-[0.16em]"
                        style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
                      >
                        {caseStudy.tag}
                      </span>
                    </div>
                    <TextReveal
                      as="h3"
                      text={shortTitle(caseStudy.title)}
                      className="text-white uppercase tracking-tight"
                      style={{
                        fontFamily: "Epilogue, sans-serif",
                        fontWeight: 900,
                        fontSize: "clamp(24px, 8vw, 34px)",
                        lineHeight: "0.98",
                      }}
                      wordDelay={36}
                    />
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/14 bg-white/10 backdrop-blur-xl transition duration-500 group-hover:rotate-45 group-hover:bg-[#f7efe4] group-hover:text-black">
                    <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.4} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
