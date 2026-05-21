import { ArrowRight, Mail } from "lucide-react";
import sriPortfolioCv from "../../../../assets/cv/frontend-developer-sricharan-cv.pdf";
import { HERO_IMAGE } from "./homeSectionData";

const TECHNOLOGIES = [
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    accent: "#e44d26",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    accent: "#1572b6",
  },
  {
    name: "Bootstrap",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    accent: "#7952b3",
  },
  {
    name: "SCSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    accent: "#cc6699",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    accent: "#61dafb",
  },
  {
    name: "PHP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    accent: "#777bb4",
  },
  {
    name: "Framer",
    logo: "https://cdn.simpleicons.org/framer/000000",
    accent: "#000000",
  },
  {
    name: "WordPress",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
    accent: "#21759b",
  },
];

export function HeroSection() {
  return (
    <section className="grid min-h-screen grid-cols-1 items-center gap-9 bg-[#f7efe4] px-4 pb-14 pt-24 sm:px-6 sm:pt-28 md:grid-cols-2 md:gap-16 md:px-12 md:pb-0 md:pt-32">
      <div className="order-last flex min-w-0 flex-col gap-8 text-center md:order-first md:gap-12 md:text-left">
        <div className="flex min-w-0 flex-col gap-5 md:gap-6">
          <div
            className="break-words text-black uppercase tracking-tighter"
            style={{
              fontFamily: "Epilogue, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(42px, 13vw, 90px)",
              lineHeight: "0.88",
            }}
          >
            <p>FRONTEND</p>
            <p>DEVELOPER.</p>
          </div>
          <p
            className="text-[#5d5f5f] max-w-md mx-auto md:mx-0"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "17px",
              fontStyle: "normal",
              lineHeight: "1.75",
              fontWeight: 400,
            }}
          >
            I'm Sricharan. I build responsive, user-friendly web interfaces that are
            clean, fast, and functional. Currently working at Desisle, turning designs
            into real web experiences.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 pt-1 sm:flex-row md:items-start md:pt-2">
          <a
            href="mailto:sricharananbalagan6@gmail.com"
            className="group relative inline-flex h-14 w-full items-center justify-center overflow-hidden rounded-full bg-[#1a1c1c] px-16 text-white shadow-[0_14px_32px_rgba(0,0,0,0.18)] transition-colors duration-300 hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a1c1c] sm:w-[190px]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "15px",
            }}
          >
            <span className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1a1c1c] transition-all duration-500 ease-out group-hover:left-[calc(100%-48px)]">
              <Mail aria-hidden="true" size={18} strokeWidth={2.5} className="transition-transform duration-500 group-hover:translate-x-0.5" />
            </span>
            <span className="relative z-10 whitespace-nowrap">
              Mail me
            </span>
          </a>
          <a
            href={sriPortfolioCv}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex h-14 w-full items-center justify-center overflow-hidden rounded-full border border-[#1a1c1c]/15 bg-white px-16 text-[#1a1c1c] transition-colors duration-300 hover:border-[#1a1c1c]/35 hover:bg-[#eee4d5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a1c1c] sm:w-[200px]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "15px",
            }}
          >
            <span className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#1a1c1c] text-white transition-all duration-500 ease-out group-hover:left-[calc(100%-48px)]">
              <ArrowRight aria-hidden="true" size={19} strokeWidth={2.5} className="transition-transform duration-500 group-hover:translate-x-0.5" />
            </span>
            <span className="relative z-10 whitespace-nowrap">
              Grab my CV
            </span>
          </a>
        </div>

        <div className="relative flex min-w-0 flex-col items-center gap-5 pt-1 md:items-start md:pt-2">
          <div className="flex w-full max-w-[572px] items-center gap-4">
            <span className="h-px flex-1 bg-[#1a1c1c]/14" aria-hidden="true" />
            <span
              className="text-[#1a1c1c] uppercase tracking-[0.28em]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                fontWeight: 800,
              }}
            >
              Expertise in
            </span>
            <span className="h-px flex-1 bg-[#1a1c1c]/14" aria-hidden="true" />
          </div>

          <div className="relative w-full max-w-[572px] overflow-hidden rounded-[28px] border border-[#1a1c1c]/10 bg-white/55 px-5 py-5 shadow-[0_18px_50px_rgba(26,28,28,0.07)] backdrop-blur sm:w-fit sm:px-7">
            <span
              className="absolute left-5 right-5 top-1/2 h-px bg-gradient-to-r from-transparent via-[#1a1c1c]/16 to-transparent"
              aria-hidden="true"
            />
            <div className="relative grid grid-cols-4 place-items-center gap-4 sm:flex sm:flex-nowrap sm:items-center sm:justify-center sm:gap-5 md:gap-7">
              {TECHNOLOGIES.map((technology) => (
                <span
                  key={technology.name}
                  className="group relative inline-flex h-9 w-9 shrink-0 items-center justify-center transition-transform duration-300 hover:-translate-y-2 sm:h-10 sm:w-10"
                  title={technology.name}
                  aria-label={technology.name}
                >
                  <span
                    className="absolute h-8 w-8 rounded-full opacity-20 blur-xl transition-opacity duration-300 group-hover:opacity-45 sm:h-9 sm:w-9"
                    style={{ backgroundColor: technology.accent }}
                    aria-hidden="true"
                  />
                  <img
                    src={technology.logo}
                    alt={`${technology.name} logo`}
                    className="relative h-9 w-9 object-contain drop-shadow-[0_10px_16px_rgba(26,28,28,0.12)] transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10"
                    loading="lazy"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="order-first h-[360px] overflow-hidden border border-black/10 sm:h-[460px] md:order-last md:h-[620px]">
        <img src={HERO_IMAGE} alt="Hero" className="h-full w-full object-cover object-[center_36%]" />
      </div>
    </section>
  );
}
