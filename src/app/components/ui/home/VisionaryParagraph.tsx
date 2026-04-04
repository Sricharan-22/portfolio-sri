export function VisionaryParagraph() {
  return (
    <section className="bg-black border-t border-white/10 px-12 py-[80px]">
      <div className="max-w-3xl mx-auto text-center px-6 md:px-0">
        <p
          className="text-white/70 mb-8"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "clamp(18px, 4vw, 26px)",
            lineHeight: "1.8",
          }}
        >
          "Good software starts where curiosity meets clean execution."
        </p>
        <div className="flex items-center justify-center gap-2 md:gap-4">
          <div className="h-px w-8 md:w-12 bg-white/30" />
          <span
            className="text-white/40 uppercase tracking-widest text-[9px] md:text-[11px]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
          >
            Developer Notes - 2026
          </span>
          <div className="h-px w-8 md:w-12 bg-white/30" />
        </div>
      </div>
    </section>
  );
}
