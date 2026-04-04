import { useState } from "react";
import { Link } from "react-router";
import {
  FOOTER_INTRO,
  FOOTER_LINKS,
  FOOTER_NAV_LINKS,
  FOOTER_WORDMARK,
  HOME_SECTION_IDS,
} from "./homeSectionData";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [wordmarkHovered, setWordmarkHovered] = useState(false);

  return (
    <footer
      id={HOME_SECTION_IDS.contact}
      className="relative overflow-hidden border-t border-white/10 bg-[#070b14] text-white"
      style={{ scrollMarginTop: "96px" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle at top left, rgba(255,255,255,0.08), transparent 36%), linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "auto, 80px 80px, 80px 80px",
          backgroundPosition: "top left, center, center",
        }}
      />

      <div className="relative z-10 px-6 md:px-12 pt-14 md:pt-20 pb-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_0.45fr_0.45fr] lg:gap-10">
          <div className="max-w-xl">
            <p
              className="text-[#f8f1e8]"
              style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 700, fontSize: "clamp(22px, 2vw, 28px)" }}
            >
              {FOOTER_INTRO.name}
            </p>
            <p
              className="mt-2 text-white/72"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "clamp(16px, 1.6vw, 19px)",
                lineHeight: "1.65",
              }}
            >
              {FOOTER_INTRO.role}
            </p>
            <p
              className="mt-2 text-white/62"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(15px, 1.4vw, 17px)",
                lineHeight: "1.75",
              }}
            >
              {FOOTER_INTRO.availability}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span
              className="text-[#f8f1e8] uppercase tracking-[0.18em]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "11px" }}
            >
              Explore
            </span>
            <div className="flex flex-col gap-3">
              {FOOTER_NAV_LINKS.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="w-fit text-white/64 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  style={{
                    fontFamily: "Epilogue, sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(18px, 1.5vw, 24px)",
                    lineHeight: "1.15",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span
              className="text-[#f8f1e8] uppercase tracking-[0.18em]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "11px" }}
            >
              Connect
            </span>
            <div className="flex flex-col gap-3">
              {FOOTER_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="w-fit text-white/64 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  style={{
                    fontFamily: "Epilogue, sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(18px, 1.5vw, 24px)",
                    lineHeight: "1.15",
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10 md:mt-24 md:pt-14">
          <div className="flex justify-center">
            <Link
              to="/"
              className="relative inline-flex max-w-full items-end justify-center overflow-visible text-center leading-none tracking-[-0.055em]"
              aria-label={FOOTER_WORDMARK.hover}
              onMouseEnter={() => setWordmarkHovered(true)}
              onMouseLeave={() => setWordmarkHovered(false)}
              onFocus={() => setWordmarkHovered(true)}
              onBlur={() => setWordmarkHovered(false)}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none select-none opacity-0"
                style={{
                  fontFamily: "Epilogue, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(76px, 18vw, 236px)",
                }}
              >
                {FOOTER_WORDMARK.hover}
              </span>

              <span className="absolute inset-0 flex items-end justify-center">
                <span
                  className="relative inline-flex items-end whitespace-nowrap text-[#f7efe4]"
                  style={{
                    fontFamily: "Epilogue, sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(76px, 18vw, 236px)",
                  }}
                >
                  <span>{FOOTER_WORDMARK.prefix}</span>
                  <span
                    className="inline-block overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      width: wordmarkHovered ? "0.42ch" : "0px",
                      opacity: wordmarkHovered ? 1 : 0,
                    }}
                  >
                    <span
                      className="inline-block"
                      style={{
                        transform: wordmarkHovered ? "translateX(0)" : "translateX(0.4em)",
                        transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
                      }}
                    >
                      {FOOTER_WORDMARK.comma}
                    </span>
                  </span>
                  <span>{FOOTER_WORDMARK.middle}</span>
                  <span
                    aria-hidden="true"
                    className="inline-block overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      width: wordmarkHovered ? "0.24ch" : "0px",
                      opacity: wordmarkHovered ? 1 : 0,
                    }}
                  >
                    <span
                      className="inline-block"
                      style={{
                        transform: wordmarkHovered ? "translateX(0)" : "translateX(-0.2em)",
                        transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
                      }}
                    >
                      {FOOTER_WORDMARK.spacer}
                    </span>
                  </span>
                  <span>{FOOTER_WORDMARK.suffix}</span>
                  <span
                    className="inline-block overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      width: wordmarkHovered ? "1.04ch" : "0px",
                      opacity: wordmarkHovered ? 1 : 0,
                    }}
                  >
                    <span
                      className="inline-block"
                      style={{
                        transform: wordmarkHovered ? "translateX(0)" : "translateX(-0.72em)",
                        transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
                      }}
                    >
                      {FOOTER_WORDMARK.exclamations}
                    </span>
                  </span>
                </span>
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-6 md:mt-16 md:flex-row md:items-center md:justify-between">
          <p
            className="text-white/52"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", letterSpacing: "0.08em" }}
          >
            {`© ${currentYear} SRICHARAN`}
          </p>

          <div className="flex items-center gap-4 self-start md:self-auto">
            <div className="h-px w-16 bg-white/12 md:w-24" />
            <span
              className="text-white/40 uppercase tracking-[0.22em]"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}
            >
              Built In Code
            </span>
          </div>

          <div
            aria-hidden="true"
            className="h-[6px] w-28 rounded-full md:w-40"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(78,103,255,0.75) 42%, rgba(247,239,228,0.95) 76%, rgba(248,127,42,0.9) 100%)",
            }}
          />
        </div>
      </div>
    </footer>
  );
}
