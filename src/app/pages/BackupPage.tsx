import React from 'react';

// Placeholder images for films
const imgFilm1 = "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80";
const imgFilm2 = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80";
const imgFilm3 = "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=80";
const imgFilm4 = "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80";
const imgFilm6 = "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80";

/* ──────────────────────────────────────────────────────────
   CLIENT GRID
────────────────────────────────────────────────────────── */
function ClientGrid() {
  const clients = ["VOGUE", "LEICA", "BMW", "SQUARE"];
  return (
    <section className="bg-[#e8e8e8] px-12 py-20">
      <div className="flex items-end justify-between mb-12">
        <span
          className="text-[#1a1c1c] uppercase tracking-widest"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "12px" }}
        >
          Collaborators
        </span>
        <span
          className="text-[#1a1c1c]"
          style={{ fontFamily: "'Playfair Display', serif", fontStyle: "normal", fontSize: "12px" }}
        >
          SELECTED CLIENTS 2018-2024
        </span>
      </div>
      <div className="grid grid-cols-4 border border-black">
        {clients.map((client, i) => (
          <div
            key={client}
            className={`flex items-center justify-center py-12 ${i < 3 ? "border-r border-black" : ""}`}
          >
            <span
              className="text-[#1a1c1c]"
              style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "20px" }}
            >
              {client}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   FRAME BY FRAME (Hobbies & Editing)
────────────────────────────────────────────────────────── */
function FrameByFrame() {
  const films = [imgFilm1, imgFilm2, imgFilm3, imgFilm4, imgFilm6];
  return (
    <section className="bg-black px-12 py-[100px]">
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-5 flex flex-col gap-8">
          <div
            className="text-white uppercase tracking-tight"
            style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "clamp(36px, 4vw, 60px)", lineHeight: "1.05" }}
          >
            <p>FRAME BY</p>
            <p>FRAME</p>
          </div>
          <p
            className="text-white/60"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "normal", fontSize: "18px", lineHeight: "1.7" }}
          >
            Outside of code, I explore the world through 24 frames per second.
            Video editing is my rhythmic meditation.
          </p>
        </div>
        <div className="col-span-7 grid grid-cols-3 gap-1">
          {films.slice(0, 3).map((src, i) => (
            <div key={i} className="h-[220px] overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          ))}
          <div className="h-[220px] overflow-hidden">
            <img src={films[3]} alt="" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="h-[220px] border border-white/20 flex items-center justify-center">
            <div className="w-8 h-8 border border-white/40 flex items-center justify-center rotate-45">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 0V12M0 6H12" stroke="white" strokeWidth="1" />
              </svg>
            </div>
          </div>
          <div className="h-[220px] overflow-hidden">
            <img src={films[4]} alt="" className="w-full h-full object-cover grayscale" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BackupPage() {
  return (
    <div className="min-h-screen pt-[72px]">
      <ClientGrid />
      <FrameByFrame />
    </div>
  );
}
