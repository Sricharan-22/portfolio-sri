import { ImageWithFallback } from "../../figma/ImageWithFallback";
import type { CSSProperties } from "react";
import { TextReveal } from "../TextReveal";
import { VISIONARY_PEOPLE } from "./homeSectionData";

export function MeetTheVisionarySection() {
  return (
    <section className="bg-black px-4 pt-[56px] pb-[76px] sm:px-6 md:px-12 md:pt-[80px] md:pb-[120px]">
      <TextReveal
        as="h2"
        text="There is more to the work than the work"
        className="reveal-item mb-[42px] text-white md:mb-[80px]"
        style={{
          "--reveal-index": 0,
          fontFamily: "Epilogue, sans-serif",
          fontWeight: 400,
          fontSize: "clamp(32px, 10vw, 64px)",
          lineHeight: "1.1",
        } as CSSProperties}
        wordDelay={58}
        lineDelay={150}
      />

      <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-2 sm:gap-6 md:grid-cols-4 md:min-h-[620px]">
        {VISIONARY_PEOPLE.map((person, index) => (
          <div
            key={person.id}
            className={`reveal-item flex flex-col gap-4 ${person.offsetClassName}`}
            style={{ "--reveal-index": index + 1 } as CSSProperties}
          >
            {Number.parseInt(person.id, 10) <= 2 ? (
              <div className="flex flex-col gap-4">
                <div
                  className="w-full overflow-hidden order-first md:order-last"
                  style={{ height: "auto", minHeight: "240px", maxHeight: "420px", aspectRatio: "4/5" }}
                >
                  <ImageWithFallback
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="order-last md:order-first">
                  <span
                    className="text-white/60 block mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px" }}
                  >
                    No. {person.id}
                  </span>
                  <span
                    className="text-white/40 block mb-1"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "12px" }}
                  >
                    {person.discipline}
                  </span>
                  <TextReveal
                    as="span"
                    text={person.name}
                    className="text-white"
                    style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "22px" }}
                    wordDelay={30}
                  />
                  <TextReveal
                    as="p"
                    text={person.description}
                    className="text-white/58 mt-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "14px",
                      lineHeight: "1.7",
                    }}
                    delay={80}
                    wordDelay={17}
                  />
                  {person.note ? (
                    <span
                      className="text-white/76 mt-3 block"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "12px",
                        fontWeight: 700,
                      }}
                    >
                      {person.note}
                    </span>
                  ) : null}
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div>
                  <span
                    className="text-white/60 block mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px" }}
                  >
                    No. {person.id}
                  </span>
                  <span
                    className="text-white/40 block mb-1"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "12px" }}
                  >
                    {person.discipline}
                  </span>
                  <TextReveal
                    as="span"
                    text={person.name}
                    className="text-white"
                    style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "22px" }}
                    wordDelay={30}
                  />
                  <TextReveal
                    as="p"
                    text={person.description}
                    className="text-white/58 mt-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "14px",
                      lineHeight: "1.7",
                    }}
                    delay={80}
                    wordDelay={17}
                  />
                  {person.note ? (
                    <span
                      className="text-white/76 mt-3 block"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "12px",
                        fontWeight: 700,
                      }}
                    >
                      {person.note}
                    </span>
                  ) : null}
                </div>
                <div
                  className="w-full overflow-hidden"
                  style={{ height: "auto", minHeight: "240px", maxHeight: "420px", aspectRatio: "4/5" }}
                >
                  <ImageWithFallback
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="reveal-item flex justify-center mt-12 md:mt-20" style={{ "--reveal-index": 5 } as CSSProperties}>
        <div className="w-8 h-8 border border-white/30 flex items-center justify-center rotate-45 hover:border-white/60 transition-colors cursor-pointer">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 0V12M0 6H12" stroke="white" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  );
}
