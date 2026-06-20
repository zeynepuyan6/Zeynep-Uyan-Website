import { MemoryRouter, Routes, Route } from "react-router";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { ProjectDetail } from "./pages/ProjectDetail";

export default function App() {
  return (
    <MemoryRouter>
      <div className="min-h-screen bg-[#EDEDE9] text-[#001524]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
        <Toaster position="bottom-right" theme="light" richColors />
      </div>
    </MemoryRouter>
  );
}
