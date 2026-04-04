import { useState, type MouseEvent } from "react";
import { Link } from "react-router";
import { NAV_ITEMS } from "./homeSectionData";

const FIXED_HEADER_OFFSET = 96;

function scrollToElement(sectionId: string) {
  const element = document.getElementById(sectionId);

  if (!element) {
    return false;
  }

  const top = element.getBoundingClientRect().top + window.scrollY - FIXED_HEADER_OFFSET;
  window.history.replaceState(null, "", `/#${sectionId}`);
  window.scrollTo({ top, behavior: "smooth" });

  return true;
}

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  const handleSectionClick =
    (sectionId: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      setOpen(false);

      if (scrollToElement(sectionId)) {
        return;
      }

      window.location.assign(`/#${sectionId}`);
    };

  const renderDesktopItem = (item: (typeof NAV_ITEMS)[number]) => {
    const sharedStyle = {
      fontFamily: "Epilogue, sans-serif",
      fontWeight: 700,
      fontSize: "13px",
      letterSpacing: "0.06em",
    };

    if ("to" in item) {
      return (
        <Link
          key={item.label}
          to={item.to}
          onClick={() => setOpen(false)}
          className="rounded-full px-4 py-2 text-black uppercase transition-all duration-300 hover:bg-white/30 hover:opacity-100"
          style={sharedStyle}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <a
        key={item.label}
        href={`/#${item.sectionId}`}
        onClick={handleSectionClick(item.sectionId)}
        className="rounded-full px-4 py-2 text-black uppercase transition-all duration-300 hover:bg-white/30 hover:opacity-100"
        style={sharedStyle}
      >
        {item.label}
      </a>
    );
  };

  const renderMobileItem = (item: (typeof NAV_ITEMS)[number], index: number) => {
    const numberMarkup = (
      <span
        style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "0.55em",
          color: "rgba(255,255,255,0.3)",
          marginRight: "16px",
          verticalAlign: "middle",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    );

    const sharedStyle = {
      fontFamily: "Epilogue, sans-serif",
      fontWeight: 900,
      fontSize: "clamp(36px, 6vw, 72px)",
      color: "#fff",
      textTransform: "uppercase" as const,
      letterSpacing: "-0.03em",
      lineHeight: 1,
      opacity: 0.9,
      textDecoration: "none",
      transition: "opacity 0.2s",
      position: "relative" as const,
    };

    if ("to" in item) {
      return (
        <Link
          key={item.label}
          to={item.to}
          onClick={() => setOpen(false)}
          style={sharedStyle}
          onMouseEnter={(event) => {
            event.currentTarget.style.opacity = "0.4";
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.opacity = "0.9";
          }}
        >
          {numberMarkup}
          {item.label}
        </Link>
      );
    }

    return (
      <a
        key={item.label}
        href={`/#${item.sectionId}`}
        onClick={handleSectionClick(item.sectionId)}
        style={sharedStyle}
        onMouseEnter={(event) => {
          event.currentTarget.style.opacity = "0.4";
        }}
        onMouseLeave={(event) => {
          event.currentTarget.style.opacity = "0.9";
        }}
      >
        {numberMarkup}
        {item.label}
      </a>
    );
  };

  return (
    <>
      <div className="fixed top-3 left-0 right-0 z-50 px-4 md:px-6">
        <nav
          className="relative mx-auto flex h-[60px] max-w-[700px] items-center justify-between overflow-hidden rounded-[22px] border px-4 md:px-[18px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.44), rgba(255,255,255,0.18))",
            borderColor: "rgba(255,255,255,0.3)",
            boxShadow:
              "0 14px 34px rgba(15, 23, 42, 0.1), inset 0 1px 0 rgba(255,255,255,0.34)",
            backdropFilter: "blur(20px) saturate(160%)",
            WebkitBackdropFilter: "blur(20px) saturate(160%)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at top left, rgba(255,255,255,0.34), transparent 42%), radial-gradient(circle at bottom right, rgba(148,163,184,0.18), transparent 36%)",
            }}
          />

          <Link
            to="/"
            className="relative z-10 inline-flex h-8 items-center overflow-hidden text-black tracking-tight transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
            onFocus={() => setLogoHovered(true)}
            onBlur={() => setLogoHovered(false)}
            style={{
              fontFamily: "Epilogue, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(18px, 4vw, 22px)",
              textShadow: "0 1px 10px rgba(255,255,255,0.35)",
              width: logoHovered ? "176px" : "78px",
            }}
          >
            <span
              className="inline-flex items-center whitespace-nowrap"
              style={{ lineHeight: 1 }}
            >
              <span>sri</span>
              <span
                className="inline-block overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  width: logoHovered ? "80px" : "0px",
                  opacity: logoHovered ? 1 : 0,
                }}
              >
                <span
                  className="inline-block"
                  style={{
                    transform: logoHovered ? "translateX(-1px)" : "translateX(12px)",
                    transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
                  }}
                >
                  charan
                </span>
              </span>
              <span style={{ flexShrink: 0 }}>.dev</span>
            </span>
          </Link>

          <div className="relative z-10 ml-auto flex min-w-0 items-center justify-end gap-0">
            <div
              className="hidden md:flex min-w-0 items-center overflow-hidden transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                maxWidth: open ? "min(500px, calc(100vw - 260px))" : "0px",
                opacity: open ? 1 : 0,
                marginLeft: "20px",
                marginRight: open ? "12px" : "0px",
              }}
            >
              <div
                className="flex items-center gap-1 whitespace-nowrap rounded-full px-1.5 py-1.5 transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: open ? "translateX(0)" : "translateX(24px)",
                  background: "rgba(255,255,255,0.2)",
                  border: "1px solid rgba(255,255,255,0.24)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)",
                }}
              >
                {NAV_ITEMS.map(renderDesktopItem)}
              </div>
            </div>

            <button
              id="nav-toggle"
              onClick={() => setOpen((value) => !value)}
              aria-label="Toggle menu"
              className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-[6px] rounded-full border transition-colors md:h-11 md:w-11"
              style={{
                background: open ? "rgba(17,24,39,0.82)" : "rgba(255,255,255,0.26)",
                borderColor: open ? "rgba(15,23,42,0.42)" : "rgba(255,255,255,0.36)",
                boxShadow: open
                  ? "0 10px 20px rgba(15,23,42,0.18), inset 0 1px 0 rgba(255,255,255,0.08)"
                  : "0 8px 16px rgba(15,23,42,0.08), inset 0 1px 0 rgba(255,255,255,0.34)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "18px",
                  height: "1.5px",
                  background: open ? "#fff" : "#0f172a",
                  transform: open ? "translateY(3.75px) rotate(45deg)" : "none",
                  transition: "transform 0.3s, background 0.3s",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "18px",
                  height: "1.5px",
                  background: open ? "#fff" : "#0f172a",
                  transform: open ? "translateY(-3.75px) rotate(-45deg)" : "none",
                  transition: "transform 0.3s, background 0.3s",
                }}
              />
            </button>
          </div>
        </nav>
      </div>

      <div className="md:hidden">
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 49,
            background: "rgba(7,10,18,0.42)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "48px",
            opacity: open ? 1 : 0,
            pointerEvents: open ? "all" : "none",
            transform: open ? "translateY(0)" : "translateY(-16px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "96px 16px 24px",
              borderRadius: "36px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))",
              border: "1px solid rgba(255,255,255,0.16)",
              boxShadow:
                "0 24px 60px rgba(15,23,42,0.28), inset 0 1px 0 rgba(255,255,255,0.18)",
            }}
          />

          <div
            style={{
              width: "1px",
              height: "60px",
              background: "rgba(255,255,255,0.22)",
              position: "relative",
            }}
          />

          {NAV_ITEMS.map(renderMobileItem)}

          <div
            style={{
              width: "1px",
              height: "60px",
              background: "rgba(255,255,255,0.22)",
              position: "relative",
            }}
          />

          <p
            style={{
              position: "relative",
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.32)",
              fontSize: "13px",
              letterSpacing: "2px",
            }}
          >
            SRICHARAN - PORTFOLIO 2026
          </p>
        </div>
      </div>
    </>
  );
}
