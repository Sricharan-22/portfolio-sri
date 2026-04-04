export function TestimonialsSection() {
  return (
    <section className="border-b border-black py-16 md:py-[100px] px-6 md:px-48">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 md:gap-8">
        <svg width="40" height="28" viewBox="0 0 40 28" fill="none">
          <path
            d="M0 28V16.8C0 12.2667 1.06667 8.46667 3.2 5.4C5.42667 2.33333 8.98667 0.533333 13.88 0L15.44 3.72C12.8267 4.34667 10.88 5.53333 9.6 7.28C8.41333 8.93333 7.77333 10.8267 7.68 12.96H14.64V28H0ZM24.16 28V16.8C24.16 12.2667 25.2267 8.46667 27.36 5.4C29.5867 2.33333 33.1467 0.533333 38.04 0L39.6 3.72C36.9867 4.34667 35.04 5.53333 33.76 7.28C32.5733 8.93333 31.9333 10.8267 31.84 12.96H38.8V28H24.16Z"
            fill="#1a1c1c"
          />
        </svg>
        <p
          className="text-[#1a1c1c] text-center"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "clamp(20px, 2.5vw, 36px)",
            lineHeight: "1.6",
          }}
        >
          "Pressure is a privilege"
        </p>
        <div className="text-center pt-4">
          <p
            className="text-[#1a1c1c] uppercase tracking-widest"
            style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 700, fontSize: "14px" }}
          >
            BILLIE JEAN KING
          </p>
        </div>
      </div>
    </section>
  );
}
