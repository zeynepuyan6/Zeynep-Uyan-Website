import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { skills, tools } from "../data";

const designWorks = [
  { src: "/assets/design_showcase_2.png",  label: "Design Work",           tool: "Adobe InDesign", category: "Graphic Design" },
  { src: "/assets/design_showcase_22.png", label: "Design Work II",        tool: "Adobe InDesign", category: "Graphic Design" },
  { src: "/assets/design_3.png",           label: "Pricing Cards — Dark",  tool: "Photoshop",      category: "UI Design"      },
  { src: "/assets/design_4.png",           label: "Pricing Cards — Vivid", tool: "Photoshop",      category: "UI Design"      },
];

export function Skills() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="skills" className="relative py-24 lg:py-28 bg-[#FFECD1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Header ── */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#FF7D00] uppercase tracking-[0.3em] text-xs">Skills & Tools</span>
          <h2
            className="mt-3 text-[#001524]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em" }}
          >
            What I bring to every project.
          </h2>
        </motion.div>

        {/* ── Skill bars + Toolbox ── */}
        <div className="mt-14 grid lg:grid-cols-2 gap-10">

          {/* Skill bars */}
          <div className="space-y-5">
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className="flex justify-between text-sm text-[#001524]/80">
                  <span style={{ fontWeight: 500 }}>{s.name}</span>
                  <span className="text-[#FF7D00]" style={{ fontWeight: 600 }}>{s.level}%</span>
                </div>
                <div className="mt-2 h-1.5 bg-[#001524]/10 overflow-hidden" style={{ borderRadius: "2px" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
                    className="h-full bg-[#FF7D00]"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Toolbox */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#001524] p-8 text-white"
          >
            <h3 className="text-white" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>Toolbox</h3>
            <p className="text-white/40 text-sm mt-1">My preferred tools for daily craft.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {tools.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ backgroundColor: "rgba(255,125,0,0.15)", borderColor: "rgba(255,125,0,0.6)" }}
                  className="px-4 py-2 border border-white/15 text-white text-sm cursor-default"
                  style={{ display: "inline-block" }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
            <div className="mt-8 p-5 border border-white/10">
              <div className="text-white/40 text-xs uppercase tracking-widest">Languages</div>
              <div className="mt-3 space-y-2">
                {[["Turkish", "Native"], ["English", "Intermediate"]].map(([lang, level]) => (
                  <div key={lang} className="flex items-center justify-between text-sm">
                    <span className="text-white/80">{lang}</span>
                    <span className="text-[#FF7D00]" style={{ fontWeight: 600 }}>{level}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Design Showcase ── */}
        <div className="mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <span className="text-[#FF7D00] uppercase tracking-[0.3em] text-xs">Design Showcase</span>
            <h2
              className="mt-2 text-[#001524]"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em" }}
            >
              Work made with Adobe Tools.
            </h2>
          </motion.div>

          {/* 2-column equal grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {designWorks.map((item, i) => {
              const isHovered = hoveredCard === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative overflow-hidden cursor-pointer"
                  style={{ borderRadius: "14px", height: "340px" }}
                  onClick={() => setLightbox(i)}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Image zoom on hover */}
                  <motion.img
                    src={item.src}
                    alt={`${item.label} — ${item.tool}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    animate={{ scale: isHovered ? 1.07 : 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />

                  {/* Base gradient — always visible */}
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(0,21,36,0.88) 0%, rgba(0,21,36,0.3) 50%, rgba(0,21,36,0.0) 100%)" }}
                  />

                  {/* Hover gradient */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ background: "linear-gradient(to top, rgba(0,21,36,0.96) 0%, rgba(0,21,36,0.55) 60%, rgba(255,125,0,0.12) 100%)" }}
                  />

                  {/* Orange left accent line */}
                  <motion.div
                    className="absolute left-0 top-0 w-0.5 bg-[#FF7D00]"
                    animate={{ height: isHovered ? "100%" : "0%" }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  />

                  {/* Inner glow border on hover */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ borderRadius: "14px", boxShadow: "inset 0 0 0 1.5px rgba(255,125,0,0.45)" }}
                  />

                  {/* Arrow icon top-right */}
                  <motion.div
                    className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center"
                    animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 6, y: isHovered ? 0 : -6 }}
                    transition={{ duration: 0.35 }}
                    style={{ background: "#FF7D00", borderRadius: "9px" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </motion.div>

                  {/* Caption */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-6"
                    animate={{ y: isHovered ? 0 : 6 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-[#FF7D00] text-[10px] uppercase tracking-[0.2em] px-2 py-0.5"
                        style={{ fontWeight: 700, background: "rgba(255,125,0,0.14)", borderRadius: "4px" }}
                      >
                        {item.category}
                      </span>
                      <span className="text-white/40 text-[10px] uppercase tracking-[0.15em]" style={{ fontWeight: 500 }}>
                        {item.tool}
                      </span>
                    </div>
                    <h4
                      className="text-white leading-tight"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem" }}
                    >
                      {item.label}
                    </h4>
                    <motion.p
                      className="text-white/50 text-sm overflow-hidden"
                      animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0, marginTop: isHovered ? "6px" : 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      Click to view full image
                    </motion.p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
            style={{ background: "rgba(0,21,36,0.94)", backdropFilter: "blur(24px)" }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors flex items-center gap-2 text-sm"
              >
                <span>Close</span>
                <div className="w-8 h-8 flex items-center justify-center border border-white/20 hover:border-[#FF7D00] transition-colors" style={{ borderRadius: "8px" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </div>
              </button>

              <div className="overflow-hidden" style={{ borderRadius: "16px", boxShadow: "0 40px 80px rgba(0,0,0,0.5)" }}>
                <motion.img
                  key={lightbox}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  src={designWorks[lightbox].src}
                  alt={designWorks[lightbox].label}
                  className="w-full h-auto max-h-[80vh] object-contain bg-[#0a1a28]"
                />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white text-lg" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
                    {designWorks[lightbox].label}
                  </h3>
                  <p className="text-white/40 text-sm mt-0.5">{designWorks[lightbox].category} · {designWorks[lightbox].tool}</p>
                </div>
                <div className="flex gap-2">
                  {([-1, 1] as const).map((dir) => (
                    <button
                      key={dir}
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightbox((lightbox + dir + designWorks.length) % designWorks.length);
                      }}
                      className="w-10 h-10 flex items-center justify-center border border-white/15 text-white/60 hover:border-[#FF7D00] hover:text-[#FF7D00] transition-colors"
                      style={{ borderRadius: "10px" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        {dir === -1 ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dot indicators */}
              <div className="mt-3 flex justify-center gap-1.5">
                {designWorks.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                    style={{
                      width: i === lightbox ? "24px" : "6px",
                      height: "6px",
                      borderRadius: "3px",
                      background: i === lightbox ? "#FF7D00" : "rgba(255,255,255,0.2)",
                      transition: "all 0.3s",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
