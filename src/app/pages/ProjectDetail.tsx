import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useParams, Link } from "react-router";
import { projects } from "../data";
import { ArrowLeft, ArrowUpRight, X, Target, Lightbulb, TrendingUp, Award, ChevronLeft, ChevronRight } from "lucide-react";

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const [imageModal, setImageModal] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32 text-center">
        <p className="text-[#001524]/50 text-lg">Project not found.</p>
        <Link to="/projects" className="mt-4 inline-flex items-center gap-2 text-[#FF7D00] font-semibold hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to all projects
        </Link>
      </div>
    );
  }

  const projectIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  const caseStudySections = [
    {
      icon: Target,
      eyebrow: "The Objective",
      color: "text-[#FF7D00]",
      borderColor: "border-[#FF7D00]/30",
      bgColor: "bg-[#FF7D00]/5",
      content: project.objective,
    },
    {
      icon: Lightbulb,
      eyebrow: "The Challenge",
      color: "text-[#15616D]",
      borderColor: "border-[#15616D]/30",
      bgColor: "bg-[#15616D]/5",
      content: project.challenge,
    },
    {
      icon: TrendingUp,
      eyebrow: "The Method",
      color: "text-[#78290F]",
      borderColor: "border-[#78290F]/30",
      bgColor: "bg-[#78290F]/5",
      content: project.method,
    },
    {
      icon: Award,
      eyebrow: "The Growth",
      color: "text-[#001524]",
      borderColor: "border-[#001524]/20",
      bgColor: "bg-[#001524]/3",
      content: project.growth,
    },
  ];

  const images = project.coverImages || [project.img];

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#001524] min-h-[70vh] flex flex-col justify-end">
        {/* Full bleed background */}
        <div className="absolute inset-0">
          <img
            src={images[0]}
            alt={project.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(0,21,36,0.3) 0%, rgba(0,21,36,0.7) 50%, rgba(0,21,36,1) 100%)" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-10 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              All Projects
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className="text-xs uppercase tracking-widest font-bold px-4 py-2 text-[#FF7D00]"
                style={{
                  background: "rgba(255,125,0,0.12)",
                  border: "1px solid rgba(255,125,0,0.3)",
                  borderRadius: "8px",
                }}
              >
                {project.tag}
              </span>
              <span className="text-xs uppercase tracking-widest text-white/30 border border-white/10 px-4 py-2" style={{ borderRadius: "8px" }}>
                {project.year}
              </span>
              <span className="text-xs uppercase tracking-widest text-white/30 border border-white/10 px-4 py-2" style={{ borderRadius: "8px" }}>
                {project.role}
              </span>
            </div>

            <h1
              className="text-white max-w-4xl"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
              }}
            >
              {project.title}
            </h1>
            <p className="mt-6 text-white/60 max-w-2xl text-lg leading-relaxed">
              {project.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── IMAGES SECTION ── */}
      <section className="bg-[#0a1a28] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className={`grid gap-4 ${images.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1 max-w-3xl mx-auto"}`}>
            {images.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden cursor-zoom-in"
                style={{ borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}
                onClick={() => setImageModal(i)}
              >
                <img
                  src={src}
                  alt={`${project.title} — view ${i + 1}`}
                  className="w-full h-auto max-h-[500px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: "rgba(0,21,36,0.5)" }}
                >
                  <div className="w-12 h-12 bg-[#FF7D00] flex items-center justify-center" style={{ borderRadius: "12px" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY BODY ── */}
      <section className="bg-[#EDEDE9] py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">

          {/* Overview block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-[#FF7D00] uppercase tracking-[0.3em] text-xs font-semibold">Overview</span>
            <p className="mt-4 text-[#001524]/80 leading-relaxed text-xl max-w-3xl" style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>
              {project.overview}
            </p>
          </motion.div>

          {/* 4 Case Study Sections */}
          <div className="space-y-6">
            {caseStudySections.map((s, i) => (
              <motion.div
                key={s.eyebrow}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`border-l-4 ${s.borderColor} ${s.bgColor} p-8`}
                style={{ borderRadius: "0 12px 12px 0" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 flex items-center justify-center ${s.color}`}
                    style={{ background: "rgba(0,0,0,0.05)", borderRadius: "8px" }}
                  >
                    <s.icon className="w-5 h-5" />
                  </div>
                  <span className={`text-xs uppercase tracking-[0.25em] font-bold ${s.color}`}>{s.eyebrow}</span>
                </div>
                <p className="text-[#001524]/75 leading-relaxed text-base">
                  {s.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Result highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-10 p-10 bg-[#001524] text-white"
            style={{ borderRadius: "16px" }}
          >
            <span className="text-[#FF7D00] uppercase tracking-[0.3em] text-xs font-bold">The Result</span>
            <p className="mt-4 text-white/90 leading-relaxed text-lg" style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>
              {project.result}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── NEXT PROJECT ── */}
      <section className="bg-[#001524] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="text-white/30 text-xs uppercase tracking-widest">Next Case Study</span>
              <p className="mt-2 text-white font-bold text-xl" style={{ fontFamily: "var(--font-display)" }}>
                {nextProject.title}
              </p>
              <p className="mt-1 text-white/40 text-sm">{nextProject.tag} · {nextProject.year}</p>
            </div>
            <Link
              to={`/project/${nextProject.id}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF7D00] text-[#001524] font-bold hover:bg-white transition-colors group"
              style={{ borderRadius: "8px" }}
            >
              View case study
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── IMAGE LIGHTBOX ── */}
      <AnimatePresence>
        {imageModal !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,21,36,0.95)", backdropFilter: "blur(24px)" }}
            onClick={() => setImageModal(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setImageModal(null)}
                className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center border border-white/20 text-white/70 hover:border-[#FF7D00] hover:text-[#FF7D00] transition-colors"
                style={{ borderRadius: "10px" }}
              >
                <X className="w-4 h-4" />
              </button>
              <div className="overflow-hidden" style={{ borderRadius: "16px" }}>
                <img
                  src={images[imageModal]}
                  alt={project.title}
                  className="w-full h-auto max-h-[85vh] object-contain bg-[#0a1a28]"
                />
              </div>
              {images.length > 1 && (
                <div className="mt-4 flex justify-center gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImageModal(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${imageModal === i ? "bg-[#FF7D00]" : "bg-white/20 hover:bg-white/40"}`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
