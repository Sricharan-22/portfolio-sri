import { ArrowUpRight, Code2, Layers3, MonitorSmartphone } from "lucide-react";
import type { CSSProperties } from "react";
import { TextReveal } from "../TextReveal";

const HELP_ITEMS = [
  {
    title: "Web\ndevelopment",
    description:
      "Pixel-perfect, responsive sites written in clean code - portfolio sites, company pages, and product launches built to perform, not just look good.",
    icon: MonitorSmartphone,
  },
  {
    title: "Product\ndevelopment",
    description:
      "Complex web apps built end-to-end - dashboards, onboarding flows, and product screens engineered for real users and real data.",
    icon: Layers3,
  },
  {
    title: "Component\nlibrary",
    description:
      "Scalable React component libraries built with clean architecture, consistent props, and documentation that makes your codebase easy to hand off and grow.",
    icon: Code2,
  },
] as const;

export function HelpSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7efe4] px-4 py-14 text-[#1a1c1c] sm:px-6 md:px-12 md:py-[96px]">
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div className="reveal-item min-w-0" style={{ "--reveal-index": 0 } as CSSProperties}>
            <TextReveal
              as="span"
              text="Services"
              className="mb-4 block text-[#5d5f5f] tracking-[0.22em]"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 600 }}
          />
            <TextReveal
              as="h2"
              text={"How can\nI help?"}
            className="text-[#1a1c1c] tracking-tight"
            style={{
              fontFamily: "Epilogue, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(38px, 12vw, 82px)",
              lineHeight: "0.92",
            }}
            wordDelay={58}
            lineDelay={160}
          />
          <a
            href="https://cal.com/sricharan-anbalagan"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex h-12 items-center gap-3 rounded-full border border-[#1a1c1c]/15 bg-[#1a1c1c] px-5 text-white transition duration-300 hover:-translate-y-0.5 hover:bg-black"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 700 }}
          >
            Connect
            <ArrowUpRight aria-hidden="true" size={17} strokeWidth={2.5} />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {HELP_ITEMS.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="reveal-item group min-h-[230px] rounded-[26px] border border-black/10 bg-white/70 p-5 shadow-[0_18px_48px_rgba(0,0,0,0.08)] backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-black/18 hover:bg-white md:p-6"
                style={{ "--reveal-index": index + 1 } as CSSProperties}
              >
            <div className="mb-8 flex items-start justify-between gap-4 md:mb-10">
                  <span
                    className="text-black/35 transition-colors"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 700 }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-black/[0.04] text-[#1a1c1c] transition-colors group-hover:bg-black group-hover:text-white">
                    <Icon aria-hidden="true" size={19} strokeWidth={2.3} />
                  </span>
                </div>
                <TextReveal
                  as="h3"
                  text={item.title}
                  className="service-card-title"
                  style={{
                    fontFamily: "Epilogue, sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(22px, 3vw, 27px)",
                    lineHeight: "1.05",
                  }}
                  wordDelay={42}
                />
                <p
                  className="mt-4 text-[#5d5f5f] transition-colors group-hover:text-black/62"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: "1.65" }}
                >
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
