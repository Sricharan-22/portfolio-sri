import {
  CURRENT_EXPERIENCE,
  EXPERIENCE_PILLARS,
  EXPERIENCE_RECOGNITION,
  EXPERIENCE_SOCIALS,
  EXPERIENCE_STUDIO_PROFILE,
  HOME_SECTION_IDS,
} from "./homeSectionData";

export function AboutSection() {
  return (
    <section
      id={HOME_SECTION_IDS.experience}
      className="bg-[#f9f9f9] px-6 md:px-12 py-[60px] md:py-[100px]"
      style={{ scrollMarginTop: "96px" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-16">
        <div className="col-span-1 md:col-span-4 flex flex-col gap-6 md:gap-8 md:self-start md:sticky md:top-28">
          <div>
            <span
              className="text-[#5d5f5f] uppercase tracking-widest block mb-4"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "11px" }}
            >
              About
            </span>
            <h2
              className="text-[#1a1c1c] uppercase tracking-tight"
              style={{
                fontFamily: "Epilogue, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(48px, 6vw, 60px)",
                lineHeight: "1",
              }}
            >
              EXPERIENCE
            </h2>
          </div>
          <p
            className="text-[#5d5f5f]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "18px",
              lineHeight: "1.75",
            }}
          >
            I may not have a long list of companies yet, but this phase is giving me
            exactly what I need: repeated shipping cycles, frontend ownership,
            debugging experience, and cleaner implementation instincts inside one
            real studio environment.
          </p>
          <div className="w-full border-y border-black/10 py-5">
            <span
              className="text-[#5d5f5f] uppercase tracking-[0.18em]"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "11px" }}
            >
              {CURRENT_EXPERIENCE.timeline}
            </span>
            <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <span
                className="text-[#111111] uppercase"
                style={{
                  fontFamily: "Epilogue, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(28px, 4.2vw, 38px)",
                  lineHeight: "0.98",
                }}
              >
                {CURRENT_EXPERIENCE.role}
              </span>

              <div className="flex flex-col gap-2 md:items-end md:text-right">
                <span
                  className="text-[#111111]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(22px, 3vw, 28px)",
                    fontStyle: "italic",
                    lineHeight: "1.05",
                  }}
                >
                  {CURRENT_EXPERIENCE.legalName}
                </span>
                <span
                  className="text-[#5d5f5f] uppercase tracking-[0.16em]"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", lineHeight: "1.5" }}
                >
                  {CURRENT_EXPERIENCE.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-8 flex flex-col gap-6 md:gap-8">
          <div className="border border-black/10 bg-[#111111] text-white overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.75fr] gap-px">
              <div className="p-6 md:p-10">
                <span
                  className="text-white/40 uppercase tracking-widest block mb-4"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
                >
                  {CURRENT_EXPERIENCE.period}
                </span>
                <div className="mb-6 flex flex-col gap-4 border-y border-white/10 py-5 md:flex-row md:items-start md:justify-between">
                  <div className="flex flex-col gap-2">
                    <h3
                      className="text-white uppercase tracking-tight"
                      style={{
                        fontFamily: "Epilogue, sans-serif",
                        fontWeight: 900,
                        fontSize: "clamp(26px, 4vw, 38px)",
                        lineHeight: "1",
                      }}
                    >
                      {CURRENT_EXPERIENCE.legalName}
                    </h3>
                    <span
                      className="text-white/62 uppercase tracking-[0.16em]"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "11px" }}
                    >
                      {CURRENT_EXPERIENCE.location}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 md:items-end">
                    <span
                      className="text-white/38 uppercase tracking-[0.18em]"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "9px" }}
                    >
                      Timeline
                    </span>
                    <span
                      className="text-white"
                      style={{
                        fontFamily: "Epilogue, sans-serif",
                        fontWeight: 700,
                        fontSize: "clamp(15px, 2vw, 18px)",
                        lineHeight: "1.2",
                      }}
                    >
                      {CURRENT_EXPERIENCE.timeline}
                    </span>
                  </div>
                </div>
                <p
                  className="text-white/72 mb-8"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "18px",
                    fontStyle: "italic",
                    lineHeight: "1.75",
                  }}
                >
                  {CURRENT_EXPERIENCE.summary}
                </p>
                <div className="border-t border-white/10 pt-5">
                  <span
                    className="text-white/45 uppercase tracking-widest block mb-2"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
                  >
                    Role
                  </span>
                  <span
                    className="text-white"
                    style={{
                      fontFamily: "Epilogue, sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(22px, 3vw, 28px)",
                    }}
                  >
                    {CURRENT_EXPERIENCE.role}
                  </span>
                </div>

                <div className="border-t border-white/10 pt-6 mt-6">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span
                      className="text-white/35 uppercase tracking-widest block"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "9px" }}
                    >
                      Company Profiles
                    </span>
                    <a
                      href={CURRENT_EXPERIENCE.studioUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/60 hover:text-white transition-colors uppercase"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", letterSpacing: "0.14em" }}
                    >
                      Visit Studio
                    </a>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {EXPERIENCE_SOCIALS.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group border border-white/10 bg-white/[0.03] px-4 py-4 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06]"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex flex-col gap-1 text-left">
                            <span
                              className="text-white/38 uppercase tracking-widest"
                              style={{ fontFamily: "Inter, sans-serif", fontSize: "9px" }}
                            >
                              {social.label}
                            </span>
                            <span
                              className="text-white"
                              style={{
                                fontFamily: "Epilogue, sans-serif",
                                fontWeight: 700,
                                fontSize: "clamp(15px, 2vw, 18px)",
                                lineHeight: "1.25",
                              }}
                            >
                              {social.value}
                            </span>
                          </div>
                          <span
                            className="text-white/45 transition-transform duration-300 group-hover:translate-x-1"
                            style={{
                              fontFamily: "Epilogue, sans-serif",
                              fontWeight: 700,
                              fontSize: "18px",
                              lineHeight: "1",
                            }}
                            aria-hidden="true"
                          >
                            {"->"}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#090909] p-6 md:p-8 flex flex-col gap-8">
                <div>
                  <span
                    className="text-white/35 uppercase tracking-widest block mb-4"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "9px" }}
                  >
                    Studio Profile
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {EXPERIENCE_STUDIO_PROFILE.map((item) => (
                      <div key={item.label} className="border-t border-white/10 pt-3">
                        <span
                          className="text-white/35 uppercase tracking-widest block mb-2"
                          style={{ fontFamily: "Inter, sans-serif", fontSize: "9px" }}
                        >
                          {item.label}
                        </span>
                        <span
                          className="text-white"
                          style={{
                            fontFamily: "Epilogue, sans-serif",
                            fontWeight: 700,
                            fontSize: "clamp(15px, 2vw, 18px)",
                            lineHeight: "1.3",
                          }}
                        >
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-5">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span
                      className="text-white/35 uppercase tracking-widest block"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "9px" }}
                    >
                      Recognition
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    {EXPERIENCE_RECOGNITION.map((item) => (
                      <div key={item.title} className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                        <h4
                          className="text-white uppercase mb-2"
                          style={{
                            fontFamily: "Epilogue, sans-serif",
                            fontWeight: 700,
                            fontSize: "clamp(16px, 2vw, 18px)",
                            lineHeight: "1.2",
                          }}
                        >
                          {item.title}
                        </h4>
                        <p
                          className="text-white/68"
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "15px",
                            lineHeight: "1.75",
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-5">
                  <p
                    className="text-white/70"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "16px",
                      lineHeight: "1.8",
                    }}
                  >
                    {CURRENT_EXPERIENCE.statement}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-black/10 bg-black/10">
            {EXPERIENCE_PILLARS.map((pillar) => (
              <div key={pillar.title} className="bg-[#fbfbfb] p-6 md:p-8">
                <span
                  className="text-[#5d5f5f] uppercase tracking-widest block mb-4"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
                >
                  Focus Area
                </span>
                <h3
                  className="text-[#1a1c1c] uppercase mb-4"
                  style={{
                    fontFamily: "Epilogue, sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(20px, 2.4vw, 24px)",
                    lineHeight: "1.2",
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-[#5d5f5f]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "16px",
                    lineHeight: "1.75",
                  }}
                >
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
