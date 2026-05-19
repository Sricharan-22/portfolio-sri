import { Instagram, Linkedin } from "lucide-react";
import type { CSSProperties } from "react";
import { TextReveal } from "../TextReveal";
import {
  CURRENT_EXPERIENCE,
  HOME_SECTION_IDS,
  INTERNSHIP_EXPERIENCE,
} from "./homeSectionData";

const experienceCards = [
  {
    id: "01",
    tone: "dark",
    company: CURRENT_EXPERIENCE.legalName,
    role: CURRENT_EXPERIENCE.role,
    period: CURRENT_EXPERIENCE.timeline,
    location: CURRENT_EXPERIENCE.location,
    note: "Building responsive, high-performance web interfaces across real client projects - from SaaS platforms to CMS-based websites.",
    responsibilities: [
      "Convert UI designs into responsive, production-ready interfaces with clean and maintainable code.",
      "Build and document reusable components, development flows, and project structures for future reference.",
      "Develop WordPress and Framer projects end-to-end, from setup to final launch.",
      "Ensure every website is fully responsive, fast-loading, and functionally solid across all devices.",
      "Take ownership of each project independently - from understanding the requirement to delivering it with quality.",
    ],
    socials: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/desislellp/",
        icon: Instagram,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/desisle/",
        icon: Linkedin,
      },
    ],
  },
  {
    id: "02",
    tone: "light",
    company: INTERNSHIP_EXPERIENCE.legalName,
    role: INTERNSHIP_EXPERIENCE.role,
    period: INTERNSHIP_EXPERIENCE.timeline,
    location: INTERNSHIP_EXPERIENCE.location,
    note: "A 1-month internship where I worked on both frontend and full stack projects - got hands-on experience across the entire development cycle.",
    responsibilities: [
      "Built a complete frontend project independently in the first week.",
      "Developed a full stack project covering both frontend and backend over 3 weeks.",
      "Worked with real project requirements and delivered within set timelines.",
      "Gained practical experience in connecting frontend interfaces with backend logic.",
    ],
    socials: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/nexusinfo.in/",
        icon: Instagram,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/nexus-software-pvt-ltd/",
        icon: Linkedin,
      },
    ],
  },
] as const;

export function AboutSection() {
  return (
    <section
      id={HOME_SECTION_IDS.experience}
      className="relative overflow-visible bg-[#f7efe4] px-4 py-[64px] sm:px-6 md:px-12 md:py-[110px] lg:min-h-[185vh]"
      style={{ scrollMarginTop: "96px" }}
    >
      <style>
        {`
          @keyframes experienceDrift {
            0%, 100% { transform: translate3d(0, 0, 0); opacity: 0.52; }
            50% { transform: translate3d(16px, -14px, 0); opacity: 0.82; }
          }

          @keyframes experienceSweep {
            0% { transform: translateX(-120%); opacity: 0; }
            18%, 62% { opacity: 1; }
            100% { transform: translateX(120%); opacity: 0; }
          }

          @keyframes statusPulse {
            0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.42); }
            50% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
          }

          .experience-orbit {
            animation: experienceDrift 7s ease-in-out infinite;
          }

          .experience-sweep {
            animation: experienceSweep 5.4s ease-in-out infinite;
          }

          .experience-status-ring {
            animation: statusPulse 1.6s ease-in-out infinite;
          }

          .experience-stack-card {
            will-change: transform;
          }
        `}
      </style>

      <div
        aria-hidden="true"
        className="experience-orbit absolute right-[8%] top-[10%] h-36 w-36 rounded-full bg-black/8 blur-3xl"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 md:gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-12">
        <div className="reveal-item flex flex-col justify-between gap-10 lg:sticky lg:top-28" style={{ "--reveal-index": 0 } as CSSProperties}>
          <div>
            <TextReveal
              as="span"
              text="EXPERIENCE"
              className="mb-4 block text-[#5d5f5f] uppercase tracking-[0.22em]"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 600 }}
            />
            <TextReveal
              as="h2"
              text={"WHERE I'VE\nWORKED."}
              className="max-w-[640px] text-[#1a1c1c] uppercase tracking-tight"
              style={{
                fontFamily: "Epilogue, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(38px, 12vw, 94px)",
                lineHeight: "0.92",
              }}
              wordDelay={56}
              lineDelay={160}
            />
            <TextReveal
              as="p"
              text="1 year of building real products - writing clean code, shipping fast, and growing with every project."
              className="mt-7 max-w-lg text-[#5d5f5f]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "17px",
                lineHeight: "1.75",
              }}
              delay={100}
              wordDelay={24}
            />
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[26px] border border-black/10 bg-black/10 sm:grid-cols-3">
            {[
              { label: "Current", value: "Desisle" },
              { label: "Project", value: "5+" },
              { label: "Focus", value: "SaaS" },
            ].map((item) => (
              <div key={item.label} className="bg-white/70 p-4 backdrop-blur md:p-5">
                <span
                  className="block text-[#5d5f5f] uppercase tracking-[0.18em]"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "9px" }}
                >
                  {item.label}
                </span>
                <span
                  className="mt-2 block text-[#1a1c1c]"
                  style={{
                    fontFamily: "Epilogue, sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(18px, 2.4vw, 26px)",
                    lineHeight: "1",
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative overflow-visible rounded-[32px] border p-4 text-white md:p-5"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,12,15,0.96), rgba(20,24,26,0.9))",
            borderColor: "rgba(255,255,255,0.16)",
            boxShadow:
              "0 30px 90px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.12)",
          }}
        >
          <div className="experience-sweep pointer-events-none absolute left-0 top-0 hidden h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />

          <div className="relative z-10 flex flex-col gap-4 pb-0 lg:min-h-[108vh] lg:gap-0 lg:pb-[5px]">
            <div
              aria-hidden="true"
              className="absolute left-5 top-8 h-[calc(100%-64px)] w-px bg-gradient-to-b from-transparent via-white/24 to-transparent md:left-6"
            />

            {experienceCards.map((card, index) => (
              <article
                key={card.id}
                className={`reveal-item experience-stack-card group relative overflow-hidden rounded-[28px] border p-4 transition duration-500 hover:-translate-y-1 sm:p-5 md:p-7 lg:sticky lg:top-28 lg:min-h-[560px] ${
                  index === 0
                    ? "z-10 border-white/12 bg-[#111417] text-white"
                    : "z-20 border-white/70 bg-[#f7efe4] text-[#151719] lg:mt-[10px]"
                }`}
                style={{
                  "--reveal-index": index + 1,
                  boxShadow:
                    index === 0
                      ? "0 28px 80px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.1)"
                      : "0 24px 64px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.72)",
                } as CSSProperties}
              >
                <div
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1 ${
                    index === 0
                      ? "bg-gradient-to-r from-white/60 via-white/30 to-transparent"
                      : "bg-gradient-to-r from-[#1a1c1c] via-[#5d5f5f] to-transparent"
                  }`}
                />

                <div className="mb-6 flex flex-wrap items-start justify-between gap-4 md:mb-7">
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border ${
                        index === 0
                          ? "border-white/14 bg-white/8 text-white/76"
                          : "border-black/10 bg-black/[0.04] text-black/54"
                      }`}
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 800 }}
                    >
                      {card.id}
                    </span>
                    {card.id === "01" ? (
                      <span className="inline-flex items-center gap-3 text-emerald-200/80">
                        <span className="experience-status-ring relative flex h-3 w-3 items-center justify-center rounded-full border border-emerald-300/70">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        </span>
                        <span
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "10px",
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            fontWeight: 700,
                          }}
                        >
                          Currently working
                        </span>
                      </span>
                    ) : (
                      <span
                        className="text-black/42"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "10px",
                          letterSpacing: "0.22em",
                          textTransform: "uppercase",
                          fontWeight: 700,
                        }}
                      >
                        Internship
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {card.socials.map((social) => {
                      const Icon = social.icon;

                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${card.company} ${social.label}`}
                          title={`${card.company} ${social.label}`}
                          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition duration-300 hover:-translate-y-0.5 ${
                            index === 0
                              ? "border-white/12 bg-white/8 text-white/72 hover:border-white/28 hover:bg-white/14 hover:text-white"
                              : "border-black/10 bg-black/[0.04] text-black/60 hover:border-black/20 hover:bg-black/[0.07] hover:text-black"
                          }`}
                        >
                          <Icon aria-hidden="true" size={18} strokeWidth={2.2} />
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-7 xl:grid-cols-[minmax(0,0.9fr)_minmax(280px,1fr)] xl:items-start">
                  <div>
                    <TextReveal
                      as="h3"
                      text={card.company}
                      className="uppercase tracking-tight"
                      style={{
                        fontFamily: "Epilogue, sans-serif",
                        fontWeight: 900,
                        fontSize: "clamp(30px, 10vw, 64px)",
                        lineHeight: "0.94",
                      }}
                      wordDelay={46}
                    />
                    <div className="mt-5 flex flex-col gap-2">
                      <TextReveal
                        as="span"
                        text={card.role}
                        className={index === 0 ? "break-words text-white" : "break-words text-[#151719]"}
                        style={{
                          fontFamily: "Epilogue, sans-serif",
                          fontWeight: 700,
                          fontSize: "clamp(20px, 2vw, 26px)",
                          lineHeight: "1.15",
                        }}
                        delay={70}
                        wordDelay={32}
                      />
                      <span
                        className={index === 0 ? "text-white/44" : "text-black/44"}
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "10px",
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                        }}
                      >
                        {card.period} / {card.location}
                      </span>
                    </div>
                    <TextReveal
                      as="p"
                      text={card.note}
                      className={index === 0 ? "mt-5 text-white/70" : "mt-5 text-black/60"}
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: "1.7" }}
                      delay={110}
                      wordDelay={18}
                    />
                  </div>

                  <div
                    className={`rounded-[22px] border p-4 md:p-5 ${
                      index === 0
                        ? "border-white/10 bg-white/[0.055]"
                        : "border-black/10 bg-white/50"
                    }`}
                  >
                    <span
                      className={index === 0 ? "text-white/42" : "text-black/42"}
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                      }}
                    >
                      Roles & Responsibilities
                    </span>
                    <ul className="mt-4 flex flex-col gap-3">
                      {card.responsibilities.map((responsibility) => (
                        <li
                          key={responsibility}
                          className="grid grid-cols-[34px_minmax(0,1fr)] gap-3"
                        >
                          <span
                            className={`mt-0.5 inline-flex h-6 w-8 items-center justify-center rounded-md border ${
                              index === 0
                                ? "border-white/30 bg-white/10 text-white"
                                : "border-[#151719]/20 bg-[#151719]/8 text-[#151719]"
                            }`}
                            style={{ fontFamily: "Epilogue, sans-serif", fontSize: "10px", fontWeight: 900 }}
                          >
                            &lt;/&gt;
                          </span>
                          <TextReveal
                            as="span"
                            text={responsibility}
                            className={index === 0 ? "text-white/76" : "text-black/66"}
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              lineHeight: "1.55",
                            }}
                            wordDelay={15}
                          />
                        </li>
                      ))}
                    </ul>
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
