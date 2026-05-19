import React from 'react';
import { Link } from 'react-router';

// Placeholder images
const imgArticle1 = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80";
const imgArticle2 = "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80";
const imgArticle3 = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80";

const journalPosts = [
  {
    date: "MARCH 2026",
    category: "Interface & Design Thinking",
    title: "The Silent Space: Minimalism in 2026",
    summary:
      "Restraint is not a style. It is a structural decision with measurable consequences. In 2026, the interfaces that hold attention are the ones that chose not to fill every pixel - and understood why.",
    img: imgArticle1,
  },
  {
    date: "FEBRUARY 2026",
    category: "Frontend Engineering",
    title: "Code as Architecture",
    summary:
      "The choices made in the first three days of a codebase are rarely documented and almost never revisited. They become the foundation everything else is built on top of.",
    img: imgArticle2,
  },
  {
    date: "JANUARY 2026",
    category: "Web Culture",
    title: "Digital Noir: A New Aesthetic",
    summary:
      "Something shifted in how the web chose to present itself. Dark, controlled, precise. This is an attempt to understand why the shift happened and what it asks of developers.",
    img: imgArticle3,
  },
];

export default function BlogPage() {
  return (
    <div className="bg-[#f7efe4] min-h-screen pt-[72px]">
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
          <p className="text-[#5d5f5f]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontStyle: "normal", maxWidth: "250px" }}>
            Writing is the process of finding out whether you understand something or
            whether you merely believe you do. Working notes from someone actively
            building.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {journalPosts.map((post) => (
            <article key={post.title} className="flex flex-col gap-4 group cursor-pointer">
              <div className="h-[256px] overflow-hidden bg-[#e2e2e2]">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
              </div>
              <span className="text-[#5d5f5f] uppercase" style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}>
                {post.date} / {post.category}
              </span>
              <h3
                className="text-[#1a1c1c] uppercase group-hover:opacity-60 transition-opacity"
                style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "1.4" }}
              >
                {post.title}
              </h3>
              <p className="text-[#5d5f5f]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", lineHeight: "1.7" }}>
                {post.summary}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
