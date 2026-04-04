import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { VISIONARY_PEOPLE } from "./homeSectionData";

export function MeetTheVisionarySection() {
  return (
    <section className="bg-black px-6 md:px-12 pt-[60px] md:pt-[80px] pb-[80px] md:pb-[120px]">
      <h2
        className="text-white mb-[50px] md:mb-[80px]"
        style={{
          fontFamily: "Epilogue, sans-serif",
          fontWeight: 400,
          fontSize: "clamp(36px, 5vw, 64px)",
          lineHeight: "1.1",
        }}
      >
        Beyond{" "}
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 400,
          }}
        >
          the
        </span>{" "}
        Build
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-6 md:min-h-[620px] items-start">
        {VISIONARY_PEOPLE.map((person) => (
          <div key={person.id} className={`flex flex-col gap-4 ${person.offsetClassName}`}>
            {Number.parseInt(person.id, 10) <= 2 ? (
              <div className="flex flex-col gap-4">
                <div
                  className="w-full overflow-hidden order-first md:order-last"
                  style={{ height: "auto", minHeight: "280px", maxHeight: "420px", aspectRatio: "4/5" }}
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
                  <span
                    className="text-white"
                    style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "22px" }}
                  >
                    {person.name}
                  </span>
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
                  <span
                    className="text-white"
                    style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "22px" }}
                  >
                    {person.name}
                  </span>
                </div>
                <div
                  className="w-full overflow-hidden"
                  style={{ height: "auto", minHeight: "280px", maxHeight: "420px", aspectRatio: "4/5" }}
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

      <div className="flex justify-center mt-12 md:mt-20">
        <div className="w-8 h-8 border border-white/30 flex items-center justify-center rotate-45 hover:border-white/60 transition-colors cursor-pointer">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 0V12M0 6H12" stroke="white" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  );
}
