import React from 'react';
import { Link } from 'react-router';

// Placeholder images
const imgArticle1 = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80";
const imgArticle2 = "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80";
const imgArticle3 = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80";

const journalPosts = [
  { date: "OCT 24, 2026", title: "The Silent Space: Minimalism in 2026", img: imgArticle1 },
  { date: "SEP 12, 2026", title: "Code as Architecture", img: imgArticle2 },
  { date: "AUG 05, 2026", title: "Digital Noir: A New Aesthetic", img: imgArticle3 },
];

export default function BlogPage() {
  return (
    <div className="bg-[#f9f9f9] min-h-screen pt-[72px]">
      <section className="px-12 py-[100px] max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[#5d5f5f] hover:text-black mb-12 uppercase tracking-widest text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
          <span>←</span> Back Home
        </Link>
        <div className="flex items-end justify-between mb-16 border-b border-black pb-8">
          <h1
            className="text-[#1a1c1c] uppercase tracking-tight"
            style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "clamp(60px, 8vw, 120px)", lineHeight: "1" }}
          >
            JOURNAL
          </h1>
          <p className="text-[#5d5f5f]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontStyle: "italic", maxWidth: "250px" }}>
            Thoughts, explorations, and a digital archive of continuous learning.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {journalPosts.map((post) => (
            <article key={post.title} className="flex flex-col gap-4 group cursor-pointer">
              <div className="h-[256px] overflow-hidden bg-[#e2e2e2]">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
              </div>
              <span className="text-[#5d5f5f] uppercase" style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}>
                {post.date}
              </span>
              <h3
                className="text-[#1a1c1c] uppercase group-hover:opacity-60 transition-opacity"
                style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "1.4" }}
              >
                {post.title}
              </h3>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
