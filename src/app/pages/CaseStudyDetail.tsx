import React from "react";
import { useParams, Link } from "react-router";

// Mock data (could be moved to a separate file later)
const caseStudiesData: Record<string, any> = {
  "barakat": {
    title: "Barakat",
    tag: "Website",
    img: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=1200&q=80",
    client: "Barakat Foods",
    year: "2024",
    role: "Full Stack Development",
    description: "A complete structural overhaul of the main e-commerce platform, optimizing for performance and conversions.",
    details: [
      "Rebuilt the core storefront architecture. Performance and accessibility were focal points.",
      "The result is a lightning-fast experience with fluid animations and a stark, modern aesthetic.",
    ],
  },
  "finance-tale": {
    title: "Finance tale",
    tag: "Application",
    img: "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=1200&q=80",
    client: "Finance Tale Inc.",
    year: "2023",
    role: "Frontend Architecture",
    description: "An interactive, data-heavy dashboard transforming numbers into narrative.",
    details: [
      "Designed complex data visualizations with seamless micro-interactions.",
      "The goal was making dense financial data feel accessible through whitespace and deliberate typography.",
    ],
  },
  "desisle": {
    title: "Desisle",
    tag: "Website",
    img: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=1200&q=80",
    client: "Desisle Collective",
    year: "2024",
    role: "Design & Development",
    description: "Visual identity and digital flagship for a new architecture firm.",
    details: [
      "Built with brutalist design principles and raw typographic elements.",
      "Emphasizes the imagery of unbuilt spaces through large-format scrolling panels.",
    ],
  },
  "hokshaksam": {
    title: "Hokshaksam",
    tag: "Website",
    img: "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=1200&q=80",
    client: "Hokshaksam",
    year: "2023",
    role: "Motion & UI",
    description: "An experimental brand experience utilizing continuous scroll animations.",
    details: [
      "Focuses on a cinematic journey where every scroll action drives a 3D or visual transition.",
      "Stripped of color to focus purely on geometry and movement.",
    ],
  },
};

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = slug ? caseStudiesData[slug.toLowerCase().replace(/\s+/g, '-')] : null;

  if (!study) {
    return (
      <div className="pt-32 px-12 pb-24 min-h-screen">
        <h1 className="text-4xl" style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900 }}>Case Study Not Found</h1>
        <Link to="/" className="text-blue-500 underline mt-4 block">Return Home</Link>
      </div>
    );
  }

  return (
    <article className="bg-[#f9f9f9] min-h-screen pt-[72px]">
      {/* Header section */}
      <header className="px-12 py-24 max-w-6xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[#5d5f5f] hover:text-black mb-12 uppercase tracking-widest text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
          <span>←</span> Back to Work
        </Link>
        <span className="text-[#5d5f5f] uppercase tracking-widest block mb-4" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "11px" }}>
          {study.tag}
        </span>
        <h1
          className="text-[#1a1c1c] uppercase tracking-tight mb-8"
          style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "clamp(48px, 6vw, 90px)", lineHeight: "1" }}
        >
          {study.title}
        </h1>
        <p className="text-[#5d5f5f] max-w-2xl" style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontStyle: "italic", lineHeight: "1.7" }}>
          {study.description}
        </p>
      </header>

      {/* Hero Image */}
      <div className="w-full h-[60vh] max-h-[800px] overflow-hidden border-y border-black/10">
        <img src={study.img} alt={study.title} className="w-full h-full object-cover grayscale" />
      </div>

      {/* Content & Details */}
      <section className="px-12 py-24 max-w-6xl mx-auto grid grid-cols-12 gap-12">
        <div className="col-span-4 flex flex-col gap-8">
          <div className="border-t border-black/10 pt-4">
            <span className="text-[#5d5f5f] uppercase tracking-widest block mb-1" style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}>Client</span>
            <span className="text-[#1a1c1c]" style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 700, fontSize: "16px" }}>{study.client}</span>
          </div>
          <div className="border-t border-black/10 pt-4">
            <span className="text-[#5d5f5f] uppercase tracking-widest block mb-1" style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}>Role</span>
            <span className="text-[#1a1c1c]" style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 700, fontSize: "16px" }}>{study.role}</span>
          </div>
          <div className="border-t border-black/10 pt-4">
            <span className="text-[#5d5f5f] uppercase tracking-widest block mb-1" style={{ fontFamily: "Inter, sans-serif", fontSize: "10px" }}>Year</span>
            <span className="text-[#1a1c1c]" style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 700, fontSize: "16px" }}>{study.year}</span>
          </div>
        </div>
        <div className="col-span-8">
          <h2 className="text-[#1a1c1c] uppercase tracking-tight mb-8" style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "32px" }}>Overview</h2>
          <div className="flex flex-col gap-6 text-[#5d5f5f]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", lineHeight: "1.8" }}>
            {study.details.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project / Footer Callout */}
      <div className="bg-black text-white px-12 py-32 text-center group cursor-pointer hover:bg-[#111] transition-colors">
        <Link to="/" className="block">
          <span className="text-white/40 uppercase tracking-widest block mb-4" style={{ fontFamily: "Inter, sans-serif", fontSize: "11px" }}>Return to Archive</span>
          <span className="uppercase" style={{ fontFamily: "Epilogue, sans-serif", fontWeight: 900, fontSize: "40px" }}>View All Work</span>
        </Link>
      </div>
    </article>
  );
}
