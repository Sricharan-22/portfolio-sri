import { HERO_IMAGE, HERO_SOCIALS, HERO_STATS } from "./homeSectionData";

export function HeroSection() {
  return (
    <section className="bg-[#f9f9f9] pt-32 pb-16 md:pb-0 px-6 md:px-12 min-h-screen grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
      <div className="flex flex-col gap-10 md:gap-12 md:order-first order-last text-center md:text-left">
        <div className="flex flex-col gap-6">
          <div
            className="text-black uppercase tracking-tighter"
            style={{
              fontFamily: "Epilogue, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(50px, 7vw, 90px)",
              lineHeight: "0.85",
            }}
          >
            <p>CODE</p>
            <p>CRAFT</p>
          </div>
          <p
            className="text-[#5d5f5f] max-w-md mx-auto md:mx-0"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "18px",
              fontStyle: "italic",
              lineHeight: "1.7",
            }}
          >
            I build scalable web applications and interactive interfaces with clean
            code, performance in mind, and a focus on real-world impact.
          </p>
        </div>

        <div className="flex items-center justify-center md:justify-start gap-0">
          {HERO_SOCIALS.map((social) => (
            <div
              key={social}
              className="border border-black w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-colors"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "10px" }}
            >
              {social}
            </div>
          ))}
          <div className="ml-4 h-px w-16 md:w-24 bg-[#c6c6c6]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 pt-4">
          {HERO_STATS.map((stat) => (
            <div key={stat.title}>
              <p
                className="text-[#1a1c1c] tracking-tight"
                style={{
                  fontFamily: "Epilogue, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(32px, 4vw, 48px)",
                }}
              >
                {stat.title}
              </p>
              <p
                className="text-[#5d5f5f] uppercase mt-2"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "1.5",
                }}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[400px] md:h-[620px] overflow-hidden order-first md:order-last border border-black/10">
        <img src={HERO_IMAGE} alt="Hero" className="w-full h-full object-cover grayscale" />
      </div>
    </section>
  );
}
