import { useEffect } from "react";
import { useLocation } from "react-router";
import { HeroSection } from "./HeroSection";
// import { MeetTheVisionarySection } from "./MeetTheVisionarySection";
import { AboutSection } from "./AboutSection";
import { HelpSection } from "./HelpSection";
import { ProcessExpertiseSection } from "./ProcessExpertiseSection";
import { CaseStudiesSection } from "./CaseStudiesSection";
// import { LinkedInSection } from "./LinkedInSection";

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
      <CaseStudiesSection />
      <ProcessExpertiseSection />
      <AboutSection />
      <HelpSection />
      {/* <LinkedInSection /> */}
      {/* <MeetTheVisionarySection /> */}
    </main>
  );
}
