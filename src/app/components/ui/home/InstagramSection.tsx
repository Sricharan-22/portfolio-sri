import { CASE_STUDIES } from "../../../data/caseStudies";

const focusAreas = [
  "Next.js App Router",
  "Component Architecture",
  "SaaS Information Design",
  "Performance Budgeting",
  "Frontend Planning Process",
] as const;

const buildNotes = [
  {
    id: "01",
    status: "Note",
    title: "Plan the data before you plan the UI",
    description:
      "Most frontend problems that appear in the second month were created in the first week by not asking: what shape is this data going to arrive in, and how will that change when the product grows?",
  },
  {
    id: "02",
    status: "Note",
    title: "The App Router changes more than routing",
    description:
      "Server Components force a clarifying question that client-side React lets you avoid: is this component stateful or is it just rendered?",
  },
  {
    id: "03",
    status: "Note",
    title: "Information hierarchy is the first design decision",
    description:
      "Before typeface, before colour, before spacing - what is the order in which a user should receive information? That sequence is the interface.",
  },
  {
    id: "04",
    status: "Note",
    title: "A component boundary is a promise",
    description:
      "When you define a component, you are making a claim about what belongs together and what can vary independently. If that claim is wrong, everyone after you pays for it.",
  },
  {
    id: "05",
    status: "Note",
    title: "SaaS websites are persuasion problems",
    description:
      "A SaaS marketing site does one job: get a qualified visitor from first impression to considered action in the fewest possible steps.",
  },
  {
    id: "06",
    status: "Note",
    title: "Measure before you optimise",
    description:
      "Performance intuition is unreliable. Lighthouse, bundle analyser, React DevTools profiler - look at the numbers before changing anything.",
  },
] as const;

const buildStats = [
  { value: String(CASE_STUDIES.length).padStart(2, "0"), label: "Case Studies" },
  { value: String(buildNotes.length).padStart(2, "0"), label: "Build Notes" },
  { value: String(focusAreas.length).padStart(2, "0"), label: "Focus Areas" },
] as const;

export function InstagramSection() {
  return (
    <section className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="flex flex-col justify-between gap-4 border-b border-white/10 px-6 py-6 md:flex-row md:items-center md:px-12 md:gap-0">
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <span
            className="text-white/40 uppercase tracking-[2px] md:tracking-[4px]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "clamp(9px, 2vw, 11px)" }}
          >
            Current Build Log
          </span>
          <div className="hidden h-4 w-px bg-white/20 md:block" />
          <span
            className="text-white/40 uppercase tracking-[2px] md:tracking-[4px]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "clamp(9px, 2vw, 11px)" }}
          >
            Live Workstream
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-white/60"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.14em" }}
          >
            MAY 2026
          </span>
          <span
            className="text-white/45 uppercase"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "11px", letterSpacing: "0.16em" }}
          >
            Active
          </span>
        </div>
      </div>

      <div className="px-6 pb-16 pt-12 md:px-12 md:pb-20 md:pt-16">
        <div className="mb-12 grid grid-cols-1 gap-8 md:mb-16 md:grid-cols-12">
          <div className="col-span-1 md:col-span-7">
            <h2
              className="text-white uppercase tracking-tight"
              style={{
                fontFamily: "Epilogue, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(48px, 5vw, 72px)",
                lineHeight: "0.95",
              }}
            >
              CURRENT.
              <br />
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "clamp(44px, 4.5vw, 68px)",
                }}
              >
                Build Log.
              </span>
            </h2>
          </div>

          <div className="col-span-1 flex flex-col justify-end gap-5 md:col-span-5">
            <p
              className="text-white/60"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "normal",
                fontSize: "17px",
                lineHeight: "1.75",
              }}
            >
              This is not a highlight reel. It is a record of what is currently
              being built, what questions are open, and what recently got answered.
              Decisions that looked right, decisions that did not, and the gap
              between the two.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 md:gap-8">
              {buildStats.map((stat) => (
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

        <div className="mb-10 flex items-center gap-3 overflow-x-auto pb-4 custom-scrollbar">
          {focusAreas.map((focus) => (
            <div
              key={focus}
              className="shrink-0 rounded-full border border-white/12 bg-white/[0.03] px-4 py-3 text-white/62 transition-colors duration-300 hover:border-white/30 hover:text-white"
            >
              <span
                className="uppercase"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", letterSpacing: "0.12em" }}
              >
                {focus}
              </span>
            </div>
          ))}
          <div className="ml-auto hidden items-center gap-3 md:flex">
            <div className="h-px w-16 bg-white/20" />
            <span
              className="text-white/30 uppercase tracking-widest"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
            >
              Active Threads
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <article className="relative overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_38%),linear-gradient(180deg,#161616,#0b0b0b)] p-6 md:col-span-5 md:min-h-[420px] md:p-8">
            <div className="flex h-full flex-col justify-between gap-10">
              <div>
                <div className="mb-6 flex items-start justify-between gap-4">
                  <span
                    className="text-white/35 uppercase tracking-widest"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
                  >
                    Pinned Update
                  </span>
                  <span
                    className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-white/55 uppercase"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", letterSpacing: "0.12em" }}
                  >
                    In Progress
                  </span>
                </div>

                <h3
                  className="text-white uppercase tracking-tight"
                  style={{
                    fontFamily: "Epilogue, sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(28px, 3vw, 38px)",
                    lineHeight: "1",
                  }}
                >
                  Portfolio v2 - Why it took this long
                </h3>

                <p
                  className="mt-5 text-white/68"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "16px",
                    lineHeight: "1.8",
                  }}
                >
                  The first version was shipped too quickly. It showed work, but it
                  did not explain thinking. A portfolio for a developer who plans
                  before building should not be the thing in their life that was not
                  planned properly.
                </p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Written before it was designed",
                    "Designed before a single component was built",
                    "Built in that order, deliberately",
                  ].map((item) => (
                    <div key={item} className="grid grid-cols-[34px_minmax(0,1fr)] gap-3">
                      <span
                        className="mt-0.5 inline-flex h-6 w-8 items-center justify-center rounded-md border border-white/16 bg-white/8 text-white/72"
                        style={{ fontFamily: "Epilogue, sans-serif", fontSize: "10px", fontWeight: 900 }}
                        aria-hidden="true"
                      >
                        &lt;/&gt;
                      </span>
                      <p
                        className="text-white/78"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "13px",
                          lineHeight: "1.6",
                        }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <div className="grid grid-cols-1 gap-1 md:col-span-7 md:grid-cols-2 lg:grid-cols-3">
            {buildNotes.map((note) => (
              <article
                key={note.id}
                className="flex min-h-[200px] flex-col justify-between border border-white/10 bg-[#0f0f10] p-5 transition-all duration-300 hover:border-white/25 hover:bg-[#141415]"
              >
                <div>
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <span
                      className="text-white/28 uppercase tracking-widest"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
                    >
                      {note.id}
                    </span>
                    <span
                      className="text-white/48 uppercase"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", letterSpacing: "0.12em" }}
                    >
                      {note.status}
                    </span>
                  </div>

                  <h4
                    className="text-white uppercase"
                    style={{
                      fontFamily: "Epilogue, sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(18px, 2vw, 22px)",
                      lineHeight: "1.2",
                    }}
                  >
                    {note.title}
                  </h4>
                </div>

                <p
                  className="mt-6 text-white/62"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "14px",
                    lineHeight: "1.7",
                  }}
                >
                  {note.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between md:gap-0">
          <div className="flex items-center gap-6">
            <span
              className="text-white/40 uppercase tracking-widest"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "11px" }}
            >
              Current Direction
            </span>
            <div className="hidden h-px w-20 bg-white/20 md:block" />
          </div>

          <p
            className="max-w-2xl text-white/62 md:text-right"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "16px",
              lineHeight: "1.75",
            }}
          >
            The log stays open. Return when there is something worth reading - which
            tends to be whenever something breaks in an instructive way.
          </p>
        </div>
      </div>
    </section>
  );
}
