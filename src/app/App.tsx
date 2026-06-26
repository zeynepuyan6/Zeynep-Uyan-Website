import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { ProjectDetail } from "./pages/ProjectDetail";

// Google Analytics helper — gtag is loaded globally via index.html
declare function gtag(...args: unknown[]): void;

// Scroll to top on route change + send GA pageview
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // Send pageview to Google Analytics on every route change
    if (typeof gtag !== "undefined") {
      gtag("config", "G-LJ2V3JJBJC", {
        page_path: pathname,
      });
    }
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#EDEDE9] text-[#001524]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
        <Toaster position="bottom-right" theme="light" richColors />
      </div>
    </BrowserRouter>
  );
}
