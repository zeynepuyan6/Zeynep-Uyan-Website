import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { ProjectDetail } from "./pages/ProjectDetail";

// Scroll to top on route change (not hash changes)
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FFECD1] text-[#001524]">
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
