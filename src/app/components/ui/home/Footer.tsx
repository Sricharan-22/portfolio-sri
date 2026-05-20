import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { FOOTER_WORDMARK, HOME_SECTION_IDS } from "./homeSectionData";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [wordmarkHovered, setWordmarkHovered] = useState(false);
  const [mobileWordmarkHover, setMobileWordmarkHover] = useState<"build" | "with" | "sri" | null>(null);
  const scrollCheckRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      document.documentElement.classList.remove("is-returning-to-hero");

      if (scrollCheckRef.current) {
        window.clearTimeout(scrollCheckRef.current);
      }
    };
  }, []);

  const clearReturnBlurWhenReady = () => {
    if (window.scrollY <= 8) {
      document.documentElement.classList.remove("is-returning-to-hero");
      scrollCheckRef.current = null;
      return;
    }

    scrollCheckRef.current = window.setTimeout(clearReturnBlurWhenReady, 80);
  };

  const scrollToTop = () => {
    if (scrollCheckRef.current) {
      window.clearTimeout(scrollCheckRef.current);
    }

    document.documentElement.classList.add("is-returning-to-hero");
    window.scrollTo({ top: 0, behavior: "smooth" });
    scrollCheckRef.current = window.setTimeout(clearReturnBlurWhenReady, 120);
  };

  return (
    <footer
      id={HOME_SECTION_IDS.contact}
      className="relative overflow-hidden border-t border-white/10 bg-[#070b14] text-white"
      style={{ scrollMarginTop: "96px" }}
    >
      <style>
        {`
          @keyframes footerArrowLift {
            0%, 100% { transform: translate3d(0, 0, 0); }
            45% { transform: translate3d(0, -8px, 0); }
          }

          @keyframes footerArrowSweep {
            0% { transform: translateY(18px); opacity: 0; }
            35% { opacity: 0.55; }
            100% { transform: translateY(-18px); opacity: 0; }
          }

          @keyframes footerArrowRing {
            0%, 100% { transform: scale(1); opacity: 0.35; }
            50% { transform: scale(1.18); opacity: 0.08; }
          }

          .is-returning-to-hero main > *:not(:first-child) {
            filter: blur(5px);
            opacity: 0.84;
            transform: scale(0.996);
            transition:
              filter 420ms ease,
              opacity 420ms ease,
              transform 420ms ease;
          }

          .is-returning-to-hero main > :first-child {
            filter: blur(0);
            opacity: 1;
          }

          main > * {
            transition:
              filter 420ms ease,
              opacity 420ms ease,
              transform 420ms ease;
          }
        `}
      </style>

      <div className="relative z-10 px-6 pb-8 pt-16 md:px-12 md:pt-24">
        <div>
          <div className="relative flex justify-center pb-8 md:pb-10">
            <button
              type="button"
              onClick={scrollToTop}
              className="relative inline-flex max-w-full items-end justify-center overflow-visible text-center leading-none tracking-[-0.055em]"
              aria-label={FOOTER_WORDMARK.hover}
              onMouseEnter={() => setWordmarkHovered(true)}
              onMouseLeave={() => setWordmarkHovered(false)}
              onFocus={() => setWordmarkHovered(true)}
              onBlur={() => setWordmarkHovered(false)}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none hidden select-none opacity-0 md:inline"
                style={{
                  fontFamily: "Epilogue, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(76px, 18vw, 236px)",
                }}
              >
                {FOOTER_WORDMARK.hover}
              </span>

              <span
                className="pointer-events-none select-none text-[#f7efe4] md:hidden"
                style={{
                  fontFamily: "Epilogue, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(74px, 22vw, 104px)",
                  lineHeight: "0.82",
                }}
              >
                <span
                  className="pointer-events-auto block"
                  onMouseEnter={() => setMobileWordmarkHover("build")}
                  onMouseLeave={() => setMobileWordmarkHover(null)}
                  onFocus={() => setMobileWordmarkHover("build")}
                >
                  build
                  <span
                    className="inline-block overflow-hidden align-baseline transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      width: mobileWordmarkHover === "build" ? "0.56ch" : "0px",
                      opacity: mobileWordmarkHover === "build" ? 1 : 0,
                    }}
                  >
                    ',
                  </span>
                </span>
                <span
                  className="pointer-events-auto block"
                  onMouseEnter={() => setMobileWordmarkHover("with")}
                  onMouseLeave={() => setMobileWordmarkHover(null)}
                  onFocus={() => setMobileWordmarkHover("with")}
                >
                  with
                  <span
                    className="inline-block overflow-hidden align-baseline transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      width: mobileWordmarkHover === "with" ? "0.34ch" : "0px",
                      opacity: mobileWordmarkHover === "with" ? 1 : 0,
                    }}
                  >
                    ,
                  </span>
                </span>
                <span
                  className="pointer-events-auto block"
                  onMouseEnter={() => setMobileWordmarkHover("sri")}
                  onMouseLeave={() => setMobileWordmarkHover(null)}
                  onFocus={() => setMobileWordmarkHover("sri")}
                >
                  sri
                  <span
                    className="inline-block overflow-hidden align-baseline transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      width: mobileWordmarkHover === "sri" ? "0.92ch" : "0px",
                      opacity: mobileWordmarkHover === "sri" ? 1 : 0,
                    }}
                  >
                    !!
                  </span>
                </span>
              </span>

              <span className="absolute inset-0 hidden items-end justify-center md:flex">
                <span
                  className="relative inline-flex items-end whitespace-nowrap text-[#f7efe4]"
                  style={{
                    fontFamily: "Epilogue, sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(76px, 18vw, 236px)",
                  }}
                >
                  <span>{FOOTER_WORDMARK.prefix}</span>
                  <span>{FOOTER_WORDMARK.middle}</span>
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
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              title="Back to top"
              className="group absolute bottom-0 right-0 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-white/16 bg-white/8 text-white backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#f7efe4]/70 hover:bg-[#f7efe4] hover:text-[#070b14] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70 md:h-20 md:w-20"
            >
              <span
                aria-hidden="true"
                className="absolute inset-1 rounded-full border border-white/20 transition-colors duration-500 group-hover:border-[#070b14]/15"
                style={{ animation: "footerArrowRing 2.4s ease-in-out infinite" }}
              />
              <span
                aria-hidden="true"
                className="absolute h-8 w-px bg-gradient-to-b from-transparent via-current to-transparent opacity-50"
                style={{ animation: "footerArrowSweep 1.6s ease-in-out infinite" }}
              />
              <ArrowUp
                aria-hidden="true"
                size={24}
                strokeWidth={2.6}
                className="relative z-10"
                style={{ animation: "footerArrowLift 1.35s ease-in-out infinite" }}
              />
            </button>
          </div>

          <div className="mx-auto max-w-3xl px-2 pb-14 text-center md:px-0 md:pb-20">
            <div className="mx-auto mb-7 h-px w-full max-w-[420px] bg-gradient-to-r from-transparent via-white/18 to-transparent" />
            <p
              className="text-[#f7efe4]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "normal",
                fontSize: "clamp(20px, 3vw, 30px)",
                lineHeight: "1.55",
              }}
            >
              "Pressure is a privilege."
            </p>
            <div className="mt-7 flex items-center justify-center gap-3 md:gap-4">
              <div className="h-px w-8 bg-white/24 md:w-12" />
              <span
                className="text-white/48 uppercase tracking-[0.22em] text-[9px] md:text-[11px]"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
              >
                Billie Jean King
              </span>
              <div className="h-px w-8 bg-white/24 md:w-12" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p
            className="w-full text-center text-white/52 md:w-auto md:text-left"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", letterSpacing: "0.08em" }}
          >
            {`(c) ${currentYear} Sri Charan. Crafted with intent.`}
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
              style={{ background: "rgba(255,255,255,0.42)" }}
          />
        </div>
      </div>
    </footer>
  );
}
