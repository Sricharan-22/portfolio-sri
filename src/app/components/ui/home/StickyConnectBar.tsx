import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import sriPortfolioCv from "../../../../assets/cv/sri-portfolio.pdf";

const CONNECT_LINKS = [
  {
    label: "CV",
    href: sriPortfolioCv,
    content: <span className="text-[11px] font-black tracking-[-0.08em]">CV</span>,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sricharan-anbalagan/",
    content: <Linkedin aria-hidden="true" size={18} strokeWidth={2.35} />,
  },
  {
    label: "Mail",
    href: "mailto:sricharananbalagan6@gmail.com",
    content: <Mail aria-hidden="true" size={18} strokeWidth={2.35} />,
  },
] as const;

export function StickyConnectBar() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 md:bottom-6">
      <div
        className="relative flex h-[58px] w-auto max-w-[calc(100vw-32px)] items-center gap-3 overflow-hidden rounded-full border px-4 text-white md:h-[62px] md:gap-4 md:px-5"
        style={{
          background:
            "linear-gradient(135deg, rgba(18,24,26,0.78), rgba(18,24,26,0.46))",
          borderColor: "rgba(255,255,255,0.18)",
          boxShadow:
            "0 22px 52px rgba(0,0,0,0.26), inset 0 1px 0 rgba(255,255,255,0.2)",
          backdropFilter: "blur(22px) saturate(160%)",
          WebkitBackdropFilter: "blur(22px) saturate(160%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(255,255,255,0.18), transparent 40%), radial-gradient(circle at bottom right, rgba(255,255,255,0.08), transparent 34%)",
          }}
        />

        <div className="relative z-10 flex shrink-0 items-center gap-2 md:gap-3">
          {CONNECT_LINKS.map((item, index) => (
            <div key={item.label} className="flex items-center gap-2 md:gap-3">
              {index > 0 ? <span className="h-1 w-1 rounded-full bg-white/18" /> : null}
              <a
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                aria-label={item.label}
                title={item.label}
                className="flex h-10 w-10 items-center justify-center rounded-full text-white/68 transition-colors duration-300 hover:bg-white/12 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
                style={{ fontFamily: "Epilogue, sans-serif" }}
              >
                {item.content}
              </a>
            </div>
          ))}
        </div>

        <div className="relative z-10 flex shrink-0 items-center gap-3 border-l border-white/10 pl-3 md:pl-4">
          <a
            href="https://cal.com/sricharan-anbalagan"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex h-10 items-center gap-2 rounded-full border border-white/22 bg-white/72 px-4 text-[#161a1c] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_10px_24px_rgba(0,0,0,0.2)] transition-colors duration-300 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70 md:px-5"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            Connect
            <ArrowUpRight
              aria-hidden="true"
              size={15}
              strokeWidth={2.6}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
