import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { projects } from "../data";

export function Projects() {
  return (
    <main className="min-h-screen bg-[#001524]">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 30% 50%, rgba(255,125,0,0.07) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#FF7D00] uppercase tracking-[0.3em] text-xs">Portfolio</span>
            <h1
              className="mt-4 text-white"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.6rem, 6vw, 4.5rem)", fontWeight: 900, letterSpacing: "-0.03em" }}
            >
              Case Studies.
            </h1>
            <p className="mt-5 text-white/50 max-w-xl leading-relaxed">
              Not 50 projects — 3 strong ones. Each one tells the full story: what the problem was,
              how I thought through it, and what was achieved.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Cards */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-28 space-y-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to={`/project/${p.id}`}
              className="group block relative overflow-hidden"
              style={{ borderRadius: "16px", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="relative h-[380px] md:h-[460px] overflow-hidden bg-[#0a1a28]">
                <img
                  src={p.img}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Gradient */}
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, rgba(0,21,36,0.92) 0%, rgba(0,21,36,0.45) 60%, rgba(0,21,36,0.7) 100%)" }}
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(135deg, rgba(0,21,36,0.96) 0%, rgba(0,21,36,0.55) 60%, rgba(255,125,0,0.18) 100%)" }}
                />

                {/* Orange left border animation */}
                <div className="absolute left-0 top-0 w-1 h-0 bg-[#FF7D00] group-hover:h-full transition-all duration-500 ease-out" />

                {/* Large ghost number */}
                <div
                  className="absolute right-6 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "clamp(8rem, 18vw, 16rem)",
                    lineHeight: 1,
                    color: "white",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className="text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 text-[#FF7D00]"
                        style={{
                          fontWeight: 700,
                          background: "rgba(255,125,0,0.1)",
                          border: "1px solid rgba(255,125,0,0.25)",
                          borderRadius: "6px",
                        }}
                      >
                        {p.tag}
                      </span>
                      <span className="text-white/25 text-xs">{p.year}</span>
                    </div>
                    <div
                      className="w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all duration-400"
                      style={{ background: "#FF7D00", borderRadius: "10px" }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-[#001524]" strokeWidth={2.5} />
                    </div>
                  </div>

                  <div className="max-w-2xl">
                    <div className="text-white/30 text-xs uppercase tracking-[0.2em] mb-2" style={{ fontWeight: 600 }}>
                      {p.role}
                    </div>
                    <h2
                      className="text-white leading-tight"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 800,
                        fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {p.title}
                    </h2>
                    <p className="mt-3 text-white/45 text-sm md:text-base leading-relaxed max-w-lg">
                      {p.blurb}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {["Objective", "Challenge", "Method", "Result"].map((label) => (
                        <span
                          key={label}
                          className="text-[10px] uppercase tracking-widest px-3 py-1 text-white/30 border border-white/10"
                          style={{ borderRadius: "4px", fontWeight: 600 }}
                        >
                          {label}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 inline-flex items-center gap-2 text-white group-hover:text-[#FF7D00] transition-colors text-sm font-semibold">
                      Read full case study <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
