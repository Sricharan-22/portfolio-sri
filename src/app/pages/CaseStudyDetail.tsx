import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { getCaseStudyBySlug, type CaseStudy } from "../data/caseStudies";
import { ScrollReveal } from "../components/ui/ScrollReveal";

type TopicBlock = {
  title: string;
  description: string;
  tags?: readonly string[];
  quote?: string;
  metrics?: readonly {
    label: string;
    value: string;
    note?: string;
  }[];
};

function getProductName(study: CaseStudy) {
  return study.title.split(" - ")[0];
}

function getTeam(study: CaseStudy) {
  return [study.role, "Client stakeholders", "Design and development collaborators"];
}

function getCollaborationApproach(study: CaseStudy) {
  return (
    study.projectSummary?.[0] ??
    study.contextSummary ??
    "Worked closely with stakeholders to translate project goals into a clear, responsive, and production-ready web experience."
  );
}

function getObjective(study: CaseStudy) {
  return study.customObjective?.paragraphs[0] ?? study.contextSummary ?? study.description;
}

function getStruggleBlocks(study: CaseStudy): TopicBlock[] {
  if (study.customStruggle) {
    return [
      {
        title: study.customStruggle.title,
        description: study.customStruggle.paragraphs.join("\n\n"),
        tags: study.customStruggle.tags,
        quote: study.customStruggle.quote,
      },
    ];
  }

  if (study.challengeBlocks?.length) {
    return [...study.challengeBlocks];
  }

  if (study.ecosystemBlocks?.length) {
    return [...study.ecosystemBlocks];
  }

  return [
    {
      title: "Clarifying the product story",
      description:
        "The core challenge was shaping the project into a page structure that visitors could understand quickly without losing the depth of the original brief.",
    },
    {
      title: "Balancing clarity and detail",
      description:
        "The interface needed enough information to build trust while staying light enough for quick scanning across devices.",
    },
  ];
}

function getTransformationBlocks(study: CaseStudy): TopicBlock[] {
  if (study.customTransformation) {
    return [
      {
        title: study.customTransformation.title,
        description: study.customTransformation.paragraphs.join("\n\n"),
        tags: study.customTransformation.tags,
        quote: study.customTransformation.quote,
      },
    ];
  }

  if (study.stackSignals?.length) {
    return study.stackSignals.map((block) => ({
      title: block.title,
      description: block.description,
    }));
  }

  return study.details.slice(0, 3).map((paragraph, index) => ({
    title: ["Structure", "Interface", "Delivery"][index] ?? "Build decision",
    description: paragraph,
  }));
}

function getOutcomeBlocks(study: CaseStudy): TopicBlock[] {
  if (study.customOutcomes) {
    return [
      {
        title: study.customOutcomes.title,
        description: study.customOutcomes.paragraphs.join("\n\n"),
        tags: study.customOutcomes.tags,
        quote: study.customOutcomes.quote,
        metrics: study.customOutcomes.metrics,
      },
    ];
  }

  if (study.resultMetrics?.length) {
    return study.resultMetrics.map((metric) => ({
      title: metric.label,
      description: metric.note ? `${metric.value} - ${metric.note}` : metric.value,
    }));
  }

  if (study.outcomeNarrative?.length) {
    return study.outcomeNarrative.map((paragraph, index) => ({
      title: ["Final result", "Project impact", "Delivered value"][index] ?? "Outcome",
      description: paragraph,
    }));
  }

  return [
    {
      title: "Clearer digital presence",
      description:
        "The final experience gives the project a cleaner structure, stronger visual hierarchy, and a more direct path for visitors to understand the value.",
    },
    {
      title: "Reusable foundation",
      description:
        "The build creates a flexible page system that can support future updates without needing a full redesign.",
    },
  ];
}

function getLearningBlocks(study: CaseStudy): TopicBlock[] {
  if (study.customLearnings) {
    return [
      {
        title: study.customLearnings.title,
        description: study.customLearnings.paragraphs.join("\n\n"),
        tags: study.customLearnings.tags,
        quote: study.customLearnings.quote,
      },
    ];
  }

  if (study.outcomeNarrative?.length) {
    return study.outcomeNarrative.map((paragraph, index) => ({
      title: ["Project learning", "Delivery insight", "Product takeaway"][index] ?? "Personal insight",
      description: paragraph,
    }));
  }

  return [
    {
      title: "Designing around real use",
      description:
        "This project reinforced the value of turning broad requirements into small interface decisions that make the experience easier to understand and maintain.",
    },
    {
      title: "Building with future updates in mind",
      description:
        "The layout and component choices were kept reusable so the project can grow without needing a complete visual or structural rebuild.",
    },
  ];
}

function CaseStudyBrief({ study }: { study: CaseStudy }) {
  return (
    <section className="px-4 pb-5 sm:px-6 md:px-12">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#050608] text-white shadow-[0_24px_70px_rgba(8,10,12,0.16)]">
        <div className="relative p-4 sm:p-5 md:p-8">
          <div className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-6 md:mb-7 md:flex-row md:items-end md:justify-between md:pb-7">
            <div>
              <span
                className="mb-3 block uppercase text-white/42"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 900, letterSpacing: "0.18em" }}
              >
                Case Study Snapshot
              </span>
              <h2
                className="text-[#f7efe4]"
                style={{ fontFamily: "Epilogue, sans-serif", fontSize: "clamp(30px, 4vw, 56px)", fontWeight: 900, lineHeight: "0.95" }}
              >
                Project Brief
              </h2>
            </div>
            <span
              className="w-fit rounded-full border border-white/14 bg-white/8 px-4 py-2 text-white/62"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 800, letterSpacing: "0.12em" }}
            >
              {study.year}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 lg:grid-cols-[0.85fr_1.65fr]">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur md:p-7">
              <span
                className="mb-4 block uppercase text-white/42"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 900, letterSpacing: "0.16em" }}
              >
                Team
              </span>
              <div className="flex flex-wrap gap-2">
                {getTeam(study).map((member) => (
                  <span
                    key={member}
                    className="rounded-full border border-white/12 bg-white/8 px-3 py-2 text-[#f7efe4]"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 700 }}
                  >
                    {member}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-[#f7efe4]/18 bg-[#f7efe4]/[0.06] p-5 backdrop-blur md:p-7">
              <span
                className="mb-4 block uppercase text-[#f7efe4]/58"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 900, letterSpacing: "0.16em" }}
              >
                Collaboration Approach
              </span>
              <p
                className="max-w-4xl text-white/74"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(17px, 1.8vw, 21px)", lineHeight: "1.65" }}
              >
                {getCollaborationApproach(study)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ObjectivePanel({ study }: { study: CaseStudy }) {
  const paragraphs = study.customObjective?.paragraphs ?? [getObjective(study)];
  const tags = study.customObjective?.tags;

  return (
    <section className="px-4 pb-5 sm:px-6 md:px-12">
      <div className="mx-auto max-w-7xl rounded-[32px] bg-[#f7efe4] px-5 py-10 text-[#121416] sm:px-6 md:px-10 md:py-16">
        <div className="grid grid-cols-1 gap-7 md:gap-10 xl:grid-cols-[360px_1fr] xl:items-start">
          <div className="min-w-0">
            <span
              className="mb-5 block uppercase text-[#121416]/45"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 900, letterSpacing: "0.18em" }}
            >
              Case Study Direction
            </span>
            <h2
              className="text-[#121416]"
              style={{ fontFamily: "Epilogue, sans-serif", fontSize: "clamp(38px, 12vw, 72px)", lineHeight: "0.94", fontWeight: 900 }}
            >
              Objective
            </h2>
          </div>
          <div className="min-w-0">
            <div
              className="flex flex-col gap-6 text-[#303235]"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(18px, 5vw, 30px)", lineHeight: "1.55" }}
            >
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {tags?.length ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#121416] px-4 py-2 text-[#f7efe4]"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 700 }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            {study.customObjective?.metrics?.length ? (
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {study.customObjective.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-[20px] bg-[#121416] p-5 text-[#f7efe4]">
                    <span
                      aria-hidden="true"
                      className="mb-4 block text-[#f7efe4]"
                      style={{ fontFamily: "Epilogue, sans-serif", fontSize: "14px", fontWeight: 900 }}
                    >
                      &lt;/&gt;
                    </span>
                    <span
                      className="block"
                      style={{ fontFamily: "Epilogue, sans-serif", fontSize: "16px", fontWeight: 800, lineHeight: "1.2" }}
                    >
                      {metric.value}
                    </span>
                    <span
                      className="mt-2 block text-[#f7efe4]/62"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", lineHeight: "1.45" }}
                    >
                      {metric.label}
                      {metric.note ? <span className="block">{metric.note}</span> : null}
                    </span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function TopicPanel({
  title,
  subtitle,
  blocks,
}: {
  title: string;
  subtitle: string;
  blocks: TopicBlock[];
}) {
  return (
    <section className="px-4 pb-5 sm:px-6 md:px-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#050608] text-white">
        <div className="grid grid-cols-1 xl:grid-cols-[360px_1fr]">
          <div className="border-b border-white/10 p-5 sm:p-6 md:p-10 xl:border-b-0 xl:border-r">
            <div className="lg:sticky lg:top-28">
              <span
                className="mb-5 block uppercase text-white/42"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 900, letterSpacing: "0.18em" }}
              >
                {subtitle}
              </span>
              <h2
                className="max-w-full break-words text-white"
                style={{ fontFamily: "Epilogue, sans-serif", fontSize: "clamp(30px, 3.4vw, 46px)", lineHeight: "1.05", fontWeight: 900 }}
              >
                {title}
              </h2>
            </div>
          </div>

          <div>
            {blocks.map((block, index) => {
              const showBlockTitle = block.title.trim().toLowerCase() !== title.trim().toLowerCase();

              return (
                <article
                  key={block.title}
                  className="group grid grid-cols-1 gap-5 border-b border-white/10 p-5 transition-colors duration-300 last:border-b-0 hover:bg-white/[0.035] sm:gap-6 sm:p-6 md:grid-cols-[72px_1fr] md:p-10 lg:grid-cols-[88px_1fr]"
                >
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-[16px] border border-white/14 text-[#f7efe4] transition-colors duration-300 group-hover:border-[#f7efe4]/60 sm:h-12 sm:w-12"
                    style={{ fontFamily: "Epilogue, sans-serif", fontSize: "15px", fontWeight: 900 }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    {showBlockTitle ? (
                      <h3
                        className="mb-5 text-[#f7efe4]"
                        style={{ fontFamily: "Epilogue, sans-serif", fontSize: "clamp(22px, 2.5vw, 30px)", lineHeight: "1.2", fontWeight: 700 }}
                      >
                        {block.title}
                      </h3>
                    ) : null}

                    <div
                      className="flex max-w-3xl flex-col gap-5 text-white/70"
                      style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(17px, 2vw, 21px)", lineHeight: "1.7" }}
                    >
                      {block.description.split("\n\n").map((paragraph) => (
                        <p key={paragraph} className="flex min-w-0 gap-3 sm:gap-4">
                          <span
                            aria-hidden="true"
                            className="mt-1 shrink-0 text-[#f7efe4]"
                            style={{ fontFamily: "Epilogue, sans-serif", fontSize: "14px", fontWeight: 900 }}
                          >
                            &lt;/&gt;
                          </span>
                          <span className="min-w-0">{paragraph}</span>
                        </p>
                      ))}
                    </div>

                    {block.quote ? (
                      <blockquote
                        className="mt-8 max-w-3xl rounded-[24px] bg-[#f7efe4] p-5 text-[#303235] md:p-8"
                        style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontStyle: "italic", lineHeight: "1.7" }}
                      >
                        "{block.quote}"
                      </blockquote>
                    ) : null}

                    {block.metrics?.length ? (
                      <div className="mt-8 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                        {block.metrics.map((metric) => (
                          <div key={metric.label} className="rounded-[20px] bg-[#f7efe4] p-5 text-[#121416]">
                            <span
                              className="block"
                              style={{ fontFamily: "Epilogue, sans-serif", fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 800, lineHeight: "1" }}
                            >
                              {metric.value}
                            </span>
                            <span
                              className="mt-3 block text-[#303235]/72"
                              style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", lineHeight: "1.35" }}
                            >
                              {metric.label}
                              {metric.note ? <span className="block">{metric.note}</span> : null}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {block.tags?.length ? (
                      <div className="mt-8 flex flex-wrap gap-3">
                        {block.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-[#f7efe4] px-4 py-2 text-[#121416]"
                            style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 700 }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoStackSection({ study }: { study: CaseStudy }) {
  const groups = [
    ...(study.stackGroups ?? []),
    ...(!study.stackGroups
      ? [
          { title: "Technology", items: study.technologiesUsed },
          { title: "Frameworks", items: study.frameworksUsed },
          { title: "Tools", items: study.toolsUsed },
        ]
      : []),
  ].filter((group) => group.items?.length);

  if (!groups.length) {
    return null;
  }

  return (
    <section className="px-4 pb-5 sm:px-6 md:px-12">
      <div className="mx-auto max-w-7xl rounded-[32px] bg-[#f7efe4] px-5 py-10 text-[#121416] sm:px-6 md:px-10 md:py-16">
        <div className="mb-10 flex flex-col gap-4 border-b border-[#121416]/12 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span
              className="mb-4 block uppercase text-[#121416]/45"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 900, letterSpacing: "0.18em" }}
            >
              Project Stack
            </span>
            <h2
              className="text-[#121416]"
              style={{ fontFamily: "Epilogue, sans-serif", fontSize: "clamp(36px, 5vw, 68px)", lineHeight: "0.95", fontWeight: 900 }}
            >
              Built with
            </h2>
          </div>
          <p
            className="max-w-md text-[#303235]/72"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", lineHeight: "1.65" }}
          >
            The core technologies and tools used to design, build, test, and ship this project.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title}>
              <h3
                className="mb-4 uppercase text-[#121416]"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 900, letterSpacing: "0.14em" }}
              >
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items?.map((item) => (
                  <div
                    key={item.name}
                    className="group inline-flex min-h-[52px] items-center gap-3 rounded-full border border-[#121416]/10 px-3.5 py-2.5 transition-colors duration-300 hover:border-[#121416]/22 hover:bg-[#121416]/5 sm:min-h-[56px] sm:px-4"
                  >
                    <span className="flex h-8 w-8 items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5">
                      <img src={item.logo} alt={`${item.name} logo`} className="h-6 w-6 object-contain" loading="lazy" />
                    </span>
                    <span
                      className="text-[#121416]"
                      style={{ fontFamily: "Epilogue, sans-serif", fontSize: "14px", fontWeight: 700 }}
                    >
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = getCaseStudyBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) {
    return (
      <div className="pt-32 px-12 pb-24 min-h-screen">
        <h1 className="text-4xl" style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900 }}>
          Case study not found
        </h1>
        <Link to="/" className="text-blue-500 underline mt-4 block">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#f7efe4] pt-[88px]">
      <header className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-12 md:py-20">
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#5d5f5f] hover:text-black"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <span>&larr;</span> Back to Work
        </Link>

        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          <div className="min-w-0 lg:col-span-8">
            <span
              className="mb-4 block uppercase tracking-widest text-[#5d5f5f]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "11px" }}
            >
              {study.tag}
            </span>
            <h1
              className="mb-6 max-w-full break-words tracking-tight text-[#1a1c1c]"
              style={{
                fontFamily: "Epilogue, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(44px, 6.4vw, 92px)",
                lineHeight: "0.92",
                overflowWrap: "anywhere",
              }}
            >
              {study.title}
            </h1>
            <p
              className="max-w-3xl text-[#5d5f5f]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(18px, 2.5vw, 24px)",
                fontStyle: "normal",
                lineHeight: "1.7",
              }}
            >
              {study.description}
            </p>
          </div>

          <div className="min-w-0 lg:col-span-4">
            <div className="rounded-[32px] border border-black/10 bg-white/45 p-3 shadow-[0_18px_48px_rgba(18,20,22,0.05)] backdrop-blur sm:p-4">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  { label: "Client", value: study.client },
                  { label: "Role", value: study.role },
                  { label: "Duration", value: study.duration },
                  { label: "Client Type", value: study.clientType },
                ].map((item) => (
                  <div key={item.label} className="rounded-[24px] border border-black/8 bg-[#f7efe4] p-4 sm:p-5">
                    <span
                      className="mb-3 block uppercase tracking-widest text-[#5d5f5f]"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 700 }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="block text-[#1a1c1c]"
                      style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 800, fontSize: "clamp(16px, 1.8vw, 20px)", lineHeight: "1.25" }}
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
                  className="mt-3 inline-flex w-full items-center justify-between rounded-full border border-black/12 bg-[#1a1c1c] px-5 py-4 text-[#f7efe4] transition-colors hover:bg-black"
                >
                  <span
                    className="uppercase tracking-widest"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 800 }}
                  >
                    Visit Live Website
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f7efe4] text-[#1a1c1c]">
                    <ArrowUpRight aria-hidden="true" size={17} strokeWidth={2.5} />
                  </span>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </header>

      <ScrollReveal distance={40} once>
        <div className="px-0 pb-14 md:pb-20">
          <div className="mx-0 overflow-hidden rounded-none border-y border-black/10">
            <div
              className={`w-full overflow-hidden ${
                study.slug === "finance-tale" ? "aspect-[16/9] sm:aspect-[2048/819]" : "h-[38vh] min-h-[320px] max-h-[820px] md:h-[70vh]"
              }`}
            >
              <img
                src={study.img}
                alt={study.title}
                className={`h-full w-full object-center grayscale ${
                  study.slug === "finance-tale" ? "object-contain" : "object-cover"
                }`}
              />
            </div>
          </div>
        </div>
      </ScrollReveal>

      <CaseStudyBrief study={study} />
      <ObjectivePanel study={study} />
      <TopicPanel title="Struggle" subtitle="Case Study Topic" blocks={getStruggleBlocks(study)} />
      <TopicPanel title="Transformation" subtitle="Case Study Process" blocks={getTransformationBlocks(study)} />
      <TopicPanel title="Outcomes" subtitle="Case Study Results" blocks={getOutcomeBlocks(study)} />
      <TopicPanel
        title="Personal insights and learnings"
        subtitle="Case Study Takeaway"
        blocks={getLearningBlocks(study)}
      />
      <LogoStackSection study={study} />

      <ScrollReveal once>
        <div className="mx-4 mb-6 rounded-[32px] bg-black px-5 py-20 text-center text-white transition-colors hover:bg-[#111] sm:mx-6 md:mx-12 md:px-12 md:py-32">
          <Link to="/" className="block">
            <span
              className="mb-4 block uppercase tracking-widest text-white/40"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "11px" }}
            >
              Return to Archive
            </span>
            <span
              className="uppercase"
              style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "clamp(32px, 4vw, 48px)" }}
            >
              View all work
            </span>
          </Link>
        </div>
      </ScrollReveal>
    </article>
  );
}
