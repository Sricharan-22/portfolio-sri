import { useEffect } from "react";
import { useLocation } from "react-router";
import { HeroSection } from "./HeroSection";
import { MeetTheVisionarySection } from "./MeetTheVisionarySection";
import { VisionaryParagraph } from "./VisionaryParagraph";
import { AboutSection } from "./AboutSection";
import { TheCraftSection } from "./project";
import { CaseStudiesSection } from "./CaseStudiesSection";
import { InstagramSection } from "./InstagramSection";
import { LinkedInSection } from "./LinkedInSection";
import { TestimonialsSection } from "./TestimonialsSection";

const FIXED_HEADER_OFFSET = 96;

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const sectionId = location.hash.replace("#", "");
    const element = document.getElementById(sectionId);

    if (!element) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      const top = element.getBoundingClientRect().top + window.scrollY - FIXED_HEADER_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [location.hash]);

  return (
    <main>
      <HeroSection />
      <MeetTheVisionarySection />
      <VisionaryParagraph />
      <AboutSection />
      <TheCraftSection />
      <CaseStudiesSection />
      <InstagramSection />
      <LinkedInSection />
      <TestimonialsSection />
    </main>
  );
}
