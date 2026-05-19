export function TestimonialsSection() {
  return (
    <section className="border-b border-black bg-[#f7efe4] px-6 py-16 md:px-48 md:py-[100px]">
      <div className="max-w-3xl mx-auto text-center px-6 md:px-0">
        <p
          className="text-[#1a1c1c] mb-8"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "normal",
            fontSize: "clamp(18px, 4vw, 26px)",
            lineHeight: "1.8",
          }}
        >
          "Pressure is a privilege."
        </p>
        <div className="flex items-center justify-center gap-2 md:gap-4">
          <div className="h-px w-8 md:w-12 bg-[#1a1c1c]/30" />
          <span
            className="text-[#1a1c1c]/60 uppercase tracking-widest text-[9px] md:text-[11px]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
          >
            Billie Jean King
          </span>
          <div className="h-px w-8 md:w-12 bg-[#1a1c1c]/30" />
        </div>
      </div>
    </section>
  );
}
