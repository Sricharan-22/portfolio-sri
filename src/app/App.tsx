import { Route, Routes } from "react-router";
import { NavBar } from "./components/ui/home/NavBar";
import { Footer } from "./components/ui/home/Footer";
import { StickyConnectBar } from "./components/ui/home/StickyConnectBar";
import HomePage from "./components/ui/home/HomePage";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import BlogPage from "./pages/BlogPage";
import BackupPage from "./pages/BackupPage";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7efe4]">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/backup" element={<BackupPage />} />
      </Routes>
      <Footer />
      <StickyConnectBar />
    </div>
  );
}
