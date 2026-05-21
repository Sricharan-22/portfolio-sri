import { LayoutTemplate, WandSparkles } from "lucide-react";
import type { CSSProperties } from "react";
import { TextReveal } from "../TextReveal";
import { HOME_SECTION_IDS } from "./homeSectionData";

const PROCESS_ITEMS = [
  {
    title: "Framer websites",
    points: [
      "End-to-end Framer website setup",
      "Template selection and customization",
      "Animations and interactions",
      "Launch-ready delivery",
    ],
    icon: WandSparkles,
  },
  {
    title: "WordPress builds",
    points: [
      "End-to-end WordPress website setup",
      "Page building with Elementor / Divi",
      "Custom WordPress development",
      "ACF fields for flexible content management",
    ],
    icon: LayoutTemplate,
  },
] as const;

const TOOLS = [
  {
    name: "WordPress",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  {
    name: "Framer",
    logo: "https://cdn.simpleicons.org/framer/000000",
  },
] as const;

export function ProcessExpertiseSection() {
  return (
    <section
      id={HOME_SECTION_IDS.tools}
      className="relative overflow-hidden bg-black px-4 py-14 text-white sm:px-6 md:px-12 md:py-[96px]"
      style={{ scrollMarginTop: "96px" }}
    >
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div className="reveal-item min-w-0" style={{ "--reveal-index": 0 } as CSSProperties}>
            <TextReveal
              as="span"
              text="Tools"
              className="mb-4 block text-white/42 uppercase tracking-[0.22em]"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 600 }}
          />
            <TextReveal
              as="h2"
            text={"My\ntoolkit."}
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
              "Besides coding, I also build complete websites using no-code and CMS tools - from setup to launch, all by myself."
            }
            className="mt-6 max-w-md text-white/58"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", lineHeight: "1.75" }}
            delay={120}
            wordDelay={24}
            lineDelay={90}
          />

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            {TOOLS.map((tool, index) => {
              const content = (
                <>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                    <img
                      src={tool.logo}
                      alt={`${tool.name} logo`}
                      className="h-7 w-7 object-contain"
                      loading="lazy"
                    />
                  </span>
                  <span>{tool.name}</span>
                </>
              );

              return (
                <div
                  key={tool.name}
                  className="reveal-item inline-flex h-14 items-center gap-3 rounded-full border border-white/14 bg-white/[0.06] px-3.5 text-white sm:px-4"
                  style={{
                    "--reveal-index": index + 1,
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                  } as CSSProperties}
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {PROCESS_ITEMS.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="reveal-item group min-h-[230px] rounded-[26px] border border-white/12 bg-white/[0.055] p-5 backdrop-blur transition duration-500 hover:-translate-y-1 hover:bg-white hover:text-black md:min-h-[250px] md:p-6"
                style={{ "--reveal-index": index + 3 } as CSSProperties}
              >
                <div className="mb-10 flex items-start justify-between gap-4">
                  <span
                    className="text-white/35 transition-colors group-hover:text-black/35"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 700 }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/10 text-white transition-colors group-hover:border-black/10 group-hover:bg-black group-hover:text-white">
                    <Icon aria-hidden="true" size={19} strokeWidth={2.3} />
                  </span>
                </div>
                <TextReveal
                  as="h3"
                  text={item.title}
                  className=""
                  style={{
                    fontFamily: "Epilogue, sans-serif",
                    fontWeight: 900,
                        fontSize: "clamp(21px, 7vw, 30px)",
                        lineHeight: "1.05",
                      }}
                  wordDelay={45}
                />
                <ul className="mt-5 flex flex-col gap-3">
                  {item.points.map((point) => (
                    <li key={point} className="grid grid-cols-[34px_minmax(0,1fr)] gap-3">
                      <span
                        className="mt-0.5 inline-flex h-6 w-8 items-center justify-center rounded-md border border-white/30 bg-white/10 text-white transition-colors group-hover:border-black/20 group-hover:bg-black group-hover:text-white"
                        style={{ fontFamily: "Epilogue, sans-serif", fontSize: "10px", fontWeight: 900 }}
                      >
                        &lt;/&gt;
                      </span>
                      <TextReveal
                        as="span"
                        text={point}
                        className="text-white/58 transition-colors group-hover:text-black/58"
                        style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: "1.55" }}
                        wordDelay={18}
                      />
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
