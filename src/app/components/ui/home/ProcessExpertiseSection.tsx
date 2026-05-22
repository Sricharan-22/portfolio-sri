import {
  ArrowUpRight,
  BarChart3,
  Clock3,
  Code2,
  FileClock,
  Github,
  LayoutDashboard,
  MessageSquareText,
  Monitor,
  PauseCircle,
  TimerReset,
} from "lucide-react";
import type { CSSProperties } from "react";
import { TextReveal } from "../TextReveal";
import { HOME_SECTION_IDS } from "./homeSectionData";

const PROJECT_FEATURES = [
  {
    title: "Screen-edge focus cycle",
    icon: Monitor,
  },
  {
    title: "Hourly accountability prompts",
    icon: MessageSquareText,
  },
  {
    title: "Pause reason tracking",
    icon: PauseCircle,
  },
  {
    title: "Daily report generator",
    icon: FileClock,
  },
  {
    title: "Authenticated dashboard",
    icon: BarChart3,
  },
] as const;

const PROJECT_TAGS = [
  {
    name: "Electron",
    note: "Desktop app",
    icon: Monitor,
  },
  {
    name: "JavaScript",
    note: "Core stack",
    icon: Code2,
  },
  {
    name: "Dashboard",
    note: "Web view",
    icon: LayoutDashboard,
  },
] as const;

export function ProcessExpertiseSection() {
  return (
    <section
      id={HOME_SECTION_IDS.projects}
      className="relative overflow-hidden bg-black px-4 py-14 text-white sm:px-6 md:px-12 md:py-[96px]"
      style={{ scrollMarginTop: "96px" }}
    >
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div className="reveal-item min-w-0" style={{ "--reveal-index": 0 } as CSSProperties}>
            <TextReveal
              as="span"
              text="Projects"
              className="mb-4 block text-white/42 uppercase tracking-[0.22em]"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 600 }}
          />
            <TextReveal
              as="h2"
            text={"Personal\nprojects."}
            className="text-white tracking-tight"
            style={{
              fontFamily: "Epilogue, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(38px, 12vw, 82px)",
              lineHeight: "0.92",
            }}
            wordDelay={58}
            lineDelay={160}
          />
          <TextReveal
            as="p"
            text={
              "I build personal products to solve problems I feel firsthand. Productive+ turns focus sessions, pauses, and progress updates into a work rhythm I can actually review."
            }
            className="mt-6 max-w-md text-white/58"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", lineHeight: "1.75" }}
            delay={120}
            wordDelay={24}
            lineDelay={90}
          />

          <a
            href="https://github.com/Sricharan-22/productive-plus"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex h-12 items-center gap-3 rounded-full border border-white/14 bg-white px-5 text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white/88"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 700 }}
          >
            <Github aria-hidden="true" size={17} strokeWidth={2.4} />
            View repository
            <ArrowUpRight aria-hidden="true" size={17} strokeWidth={2.5} />
          </a>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            {PROJECT_TAGS.map((tag, index) => {
              const Icon = tag.icon;

              return (
                <div
                  key={tag.name}
                  className="reveal-item inline-flex h-14 items-center gap-3 rounded-full border border-white/14 bg-white/[0.06] px-3.5 text-white sm:px-4"
                  style={{
                    "--reveal-index": index + 1,
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                  } as CSSProperties}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
                    <Icon aria-hidden="true" size={17} strokeWidth={2.4} />
                  </span>
                  <span className="flex flex-col leading-none">
                    <span>{tag.name}</span>
                    <span
                      className="mt-1 text-white/42"
                      style={{ fontSize: "10px", fontWeight: 600 }}
                    >
                      {tag.note}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <article
          className="reveal-item relative overflow-hidden rounded-[26px] border border-white/12 bg-white/[0.055] p-5 backdrop-blur md:p-6"
          style={{ "--reveal-index": 4 } as CSSProperties}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-65"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.11), transparent 38%), radial-gradient(circle at 88% 4%, rgba(95,224,175,0.2), transparent 30%)",
            }}
          />

          <div className="relative grid gap-6 xl:grid-cols-[0.78fr_1fr] xl:gap-7">
            <div className="min-w-0">
              <div className="flex items-start justify-between gap-4 border-b border-white/12 pb-5">
                <div>
                  <span
                    className="block text-white/38 uppercase tracking-[0.22em]"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 700 }}
                  >
                    Project 01
                  </span>
                  <TextReveal
                    as="h3"
                    text="Productive+"
                    className="mt-3 text-white tracking-tight"
                    style={{
                      fontFamily: "Epilogue, sans-serif",
                      fontWeight: 900,
                      fontSize: "clamp(28px, 5vw, 42px)",
                      lineHeight: "0.98",
                    }}
                    wordDelay={45}
                  />
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/14 bg-white text-black">
                  <TimerReset aria-hidden="true" size={21} strokeWidth={2.4} />
                </span>
              </div>

              <p
                className="mt-5 text-white/66"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", lineHeight: "1.7" }}
              >
                Electron.js desktop productivity application built around focused work cycles,
                progress evidence, and honest pause tracking.
              </p>

              <div className="mt-6 overflow-hidden rounded-[22px] border border-white/12 bg-black/45">
                <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
                  <span
                    className="text-white/42 uppercase tracking-[0.2em]"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 700 }}
                  >
                    Active session
                  </span>
                  <span
                    className="rounded-full bg-[#91f0bf] px-2.5 py-1 text-black"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 800 }}
                  >
                    Focus
                  </span>
                </div>
                <div className="m-3 mt-0 grid overflow-hidden border border-white/10 bg-[#101313] sm:grid-cols-[1fr_0.72fr]">
                  <div className="border-b border-white/10 px-4 py-5 sm:border-b-0 sm:border-r">
                    <div className="flex items-center gap-3">
                      <Clock3 aria-hidden="true" className="text-[#91f0bf]" size={20} strokeWidth={2.3} />
                      <span
                        className="text-white"
                        style={{
                          fontFamily: "Epilogue, sans-serif",
                          fontSize: "clamp(30px, 5vw, 44px)",
                          fontWeight: 900,
                          lineHeight: "1",
                        }}
                      >
                        01:00
                      </span>
                    </div>
                    <p
                      className="mt-3 text-white/48"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", lineHeight: "1.55" }}
                    >
                      Persistent edge overlay keeps the cycle visible without taking over the
                      current task.
                    </p>
                  </div>
                  <div className="grid">
                    {["Progress prompt", "Pause reason", "Daily report"].map((signal) => (
                      <span
                        key={signal}
                        className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 last:border-b-0"
                        style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 700 }}
                      >
                        <span className="text-white/58">{signal}</span>
                        <span className="h-2 w-2 rounded-full bg-[#91f0bf]" aria-hidden="true" />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="min-w-0 border-t border-white/12 pt-2 xl:border-l xl:border-t-0 xl:pl-7 xl:pt-0">
              <div className="flex items-center gap-3 pb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/10 text-white">
                  <LayoutDashboard aria-hidden="true" size={18} strokeWidth={2.3} />
                </span>
                <div>
                  <p
                    className="text-white"
                    style={{ fontFamily: "Epilogue, sans-serif", fontSize: "18px", fontWeight: 900 }}
                  >
                    What it ships
                  </p>
                  <p
                    className="mt-1 text-white/42"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "12px" }}
                  >
                    Desktop focus system + browser review layer
                  </p>
                </div>
              </div>

              <ol className="divide-y divide-white/10 border-y border-white/10">
                {PROJECT_FEATURES.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <li key={feature.title} className="grid gap-3 py-4 sm:grid-cols-[44px_minmax(0,1fr)]">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/10 text-[#91f0bf]">
                        <Icon aria-hidden="true" size={19} strokeWidth={2.3} />
                      </span>
                      <div className="min-w-0">
                        <span
                          className="text-white/35"
                          style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 800 }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p
                          className="mt-1 text-white"
                          style={{ fontFamily: "Epilogue, sans-serif", fontSize: "16px", fontWeight: 900 }}
                        >
                          {feature.title}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
