import { Link, useParams } from "react-router";
import { getCaseStudyBySlug } from "../data/caseStudies";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return (
      <div className="pt-32 px-12 pb-24 min-h-screen">
        <h1 className="text-4xl" style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900 }}>
          Case Study Not Found
        </h1>
        <Link to="/" className="text-blue-500 underline mt-4 block">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-[#f6f3ef] min-h-screen pt-[88px]">
      <header className="px-6 md:px-12 py-14 md:py-20 max-w-7xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#5d5f5f] hover:text-black mb-10 uppercase tracking-widest text-xs"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <span>&larr;</span> Back to Work
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <span
              className="text-[#5d5f5f] uppercase tracking-widest block mb-4"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "11px" }}
            >
              {study.tag}
            </span>
            <h1
              className="text-[#1a1c1c] uppercase tracking-tight mb-6"
              style={{
                fontFamily: "Epilogue, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(44px, 7vw, 96px)",
                lineHeight: "0.92",
              }}
            >
              {study.title}
            </h1>
            <p
              className="text-[#5d5f5f] max-w-3xl"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(18px, 2.5vw, 24px)",
                fontStyle: "italic",
                lineHeight: "1.7",
              }}
            >
              {study.description}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start gap-6 lg:pl-10">
            <div className="grid grid-cols-2 gap-6 w-full">
              {[
                { label: "Client", value: study.client },
                { label: "Role", value: study.role },
                { label: "Duration", value: study.duration },
                { label: "Client Type", value: study.clientType },
              ].map((item) => (
                <div key={item.label} className="border-t border-black/10 pt-4">
                  <span
                    className="text-[#5d5f5f] uppercase tracking-widest block mb-2"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="text-[#1a1c1c]"
                    style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 700, fontSize: "16px" }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {study.liveUrl ? (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-4 border border-black/15 px-6 py-3 hover:bg-black hover:text-white transition-colors"
              >
                <span
                  className="uppercase tracking-widest"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "11px" }}
                >
                  Visit Live Website
                </span>
                <span
                  style={{
                    fontFamily: "Epilogue, sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                  }}
                >
                  &nearr;
                </span>
              </a>
            ) : null}
          </div>
        </div>
      </header>

      <div className="px-6 md:px-12 pb-14 md:pb-20">
        <div className="max-w-7xl mx-auto overflow-hidden border border-black/10">
          <div className="w-full h-[42vh] md:h-[70vh] max-h-[820px] overflow-hidden">
            <img src={study.img} alt={study.title} className="w-full h-full object-cover grayscale" />
          </div>
        </div>
      </div>

      {study.snapshotMetrics?.length ? (
        <section className="px-6 md:px-12 pb-14 md:pb-20">
          <div className="max-w-7xl mx-auto bg-black text-white border border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px">
              {study.snapshotMetrics.map((metric) => (
                <div key={metric.label} className="bg-[#090909] p-6 md:p-8">
                  <span
                    className="text-white/40 uppercase tracking-widest block mb-3"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
                  >
                    {metric.label}
                  </span>
                  <span
                    className="text-white block"
                    style={{
                      fontFamily: "Epilogue, sans-serif",
                      fontWeight: 900,
                      fontSize: "clamp(28px, 4vw, 44px)",
                    }}
                  >
                    {metric.value}
                  </span>
                  {metric.note ? (
                    <p
                      className="text-white/60 mt-3"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "14px",
                        lineHeight: "1.6",
                      }}
                    >
                      {metric.note}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-6 md:px-12 pb-14 md:pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="border-t border-black/10 pt-6 sticky top-[112px]">
              <span
                className="text-[#5d5f5f] uppercase tracking-widest block mb-5"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
              >
                Project Context
              </span>
              <p
                className="text-[#1a1c1c]"
                style={{
                  fontFamily: "Epilogue, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(22px, 3vw, 30px)",
                  lineHeight: "1.2",
                }}
              >
                {study.contextSummary ??
                  "A development case study covering architecture, implementation choices, integrations, and production delivery from concept to launch."}
              </p>
              {study.sourceNote ? (
                <p
                  className="text-[#5d5f5f] mt-6"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "14px",
                    fontStyle: "italic",
                    lineHeight: "1.7",
                  }}
                >
                  {study.sourceNote}
                </p>
              ) : null}
            </div>
          </aside>

          <div className="lg:col-span-8 flex flex-col gap-12 md:gap-16">
            <section>
              <span
                className="text-[#5d5f5f] uppercase tracking-widest block mb-4"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
              >
                Overview
              </span>
              <div
                className="flex flex-col gap-6 text-[#5d5f5f]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "18px",
                  lineHeight: "1.85",
                }}
              >
                {(study.projectSummary ?? study.details).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            {study.ecosystemBlocks?.length ? (
              <section>
                <span
                  className="text-[#5d5f5f] uppercase tracking-widest block mb-4"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
                >
                  What The Build Had To Solve
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-black/10 bg-black/10">
                  {study.ecosystemBlocks.map((block) => (
                    <div key={block.title} className="bg-[#fbf9f5] p-6 md:p-8">
                      <h2
                        className="text-[#1a1c1c] uppercase mb-4"
                        style={{
                          fontFamily: "Epilogue, sans-serif",
                          fontWeight: 700,
                          fontSize: "clamp(20px, 2.2vw, 24px)",
                          lineHeight: "1.2",
                        }}
                      >
                        {block.title}
                      </h2>
                      <p
                        className="text-[#5d5f5f]"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "16px",
                          lineHeight: "1.8",
                        }}
                      >
                        {block.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {study.stackSignals?.length ? (
              <section className="bg-black text-white p-6 md:p-10 border border-white/10">
                <span
                  className="text-white/40 uppercase tracking-widest block mb-5"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
                >
                  Development & Tech Stack Signals
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {study.stackSignals.map((block) => (
                    <div key={block.title} className="border-t border-white/10 pt-5">
                      <h2
                        className="text-white uppercase mb-3"
                        style={{
                          fontFamily: "Epilogue, sans-serif",
                          fontWeight: 700,
                          fontSize: "clamp(18px, 2vw, 22px)",
                        }}
                      >
                        {block.title}
                      </h2>
                      <p
                        className="text-white/70"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "15px",
                          lineHeight: "1.8",
                        }}
                      >
                        {block.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {study.challengeBlocks?.length ? (
              <section>
                <span
                  className="text-[#5d5f5f] uppercase tracking-widest block mb-4"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
                >
                  Key Challenges
                </span>
                <div className="flex flex-col border border-black/10">
                  {study.challengeBlocks.map((block) => (
                    <div
                      key={block.title}
                      className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-4 md:gap-8 border-b border-black/10 last:border-b-0 bg-[#fbf9f5] p-6 md:p-8"
                    >
                      <h2
                        className="text-[#1a1c1c] uppercase"
                        style={{
                          fontFamily: "Epilogue, sans-serif",
                          fontWeight: 700,
                          fontSize: "clamp(18px, 2vw, 22px)",
                          lineHeight: "1.2",
                        }}
                      >
                        {block.title}
                      </h2>
                      <p
                        className="text-[#5d5f5f]"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "16px",
                          lineHeight: "1.8",
                        }}
                      >
                        {block.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            <section>
              <span
                className="text-[#5d5f5f] uppercase tracking-widest block mb-4"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
                >
                  Implementation Notes
                </span>
              <div
                className="flex flex-col gap-6 text-[#5d5f5f]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "18px",
                  lineHeight: "1.85",
                }}
              >
                {study.details.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      {study.resultMetrics?.length ? (
        <section className="px-6 md:px-12 pb-14 md:pb-20">
          <div className="max-w-7xl mx-auto bg-[#111111] text-white p-6 md:p-10 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4">
                <span
                  className="text-white/40 uppercase tracking-widest block mb-4"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
                >
                  Result & Impact
                </span>
                <h2
                  className="text-white uppercase tracking-tight"
                  style={{
                    fontFamily: "Epilogue, sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(28px, 4vw, 42px)",
                    lineHeight: "1",
                  }}
                >
                  What The Build Delivered
                </h2>
              </div>

              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px border border-white/10 bg-white/10">
                  {study.resultMetrics.map((metric) => (
                    <div key={metric.label} className="bg-[#0b0b0b] p-6 md:p-8">
                      <span
                        className="text-white block"
                        style={{
                          fontFamily: "Epilogue, sans-serif",
                          fontWeight: 900,
                          fontSize: "clamp(28px, 4vw, 44px)",
                        }}
                      >
                        {metric.value}
                      </span>
                      <span
                        className="text-white/55 uppercase tracking-widest block mt-3"
                        style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
                      >
                        {metric.label}
                      </span>
                      {metric.note ? (
                        <p
                          className="text-white/70 mt-3"
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "15px",
                            lineHeight: "1.7",
                          }}
                        >
                          {metric.note}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>

                {study.outcomeNarrative?.length ? (
                  <div
                    className="mt-8 flex flex-col gap-5 text-white/72"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "17px",
                      lineHeight: "1.8",
                    }}
                  >
                    {study.outcomeNarrative.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <div className="bg-black text-white px-6 md:px-12 py-24 md:py-32 text-center group cursor-pointer hover:bg-[#111] transition-colors">
        <Link to="/" className="block">
          <span
            className="text-white/40 uppercase tracking-widest block mb-4"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "11px" }}
          >
            Return to Archive
          </span>
          <span
            className="uppercase"
            style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "clamp(32px, 4vw, 48px)" }}
          >
            View All Work
          </span>
        </Link>
      </div>
    </article>
  );
}
