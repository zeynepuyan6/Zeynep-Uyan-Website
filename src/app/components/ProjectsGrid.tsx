import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { projects } from "../data";

export function ProjectsGrid({ showHeader = true }: { showHeader?: boolean }) {
  const list = projects;

  return (
    <section id="projects" className="relative bg-[#001524] py-24 lg:py-32 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #FF7D00 0%, transparent 50%), radial-gradient(circle at 80% 50%, #15616D 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-wrap items-end justify-between gap-6 mb-16"
          >
            <div>
              <span className="text-[#FF7D00] uppercase tracking-[0.3em] text-xs">Case Studies</span>
              <h2
                className="mt-3 text-white"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.02em" }}
              >
                Selected work.
              </h2>
              <p className="mt-3 text-white/40 text-sm max-w-sm">
                4 case studies. Full process, real results.
              </p>
            </div>
          </motion.div>
        )}

        <div className="space-y-6">
          {list.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, index: i }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/project/${p.id}`}
        className="group block relative overflow-hidden"
        style={{
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Full card image as background */}
        <div className="relative h-[400px] md:h-[420px] overflow-hidden bg-[#0a1a28]">
          <img
            src={p.img}
            alt={p.title}
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700 ease-out"
          />

          {/* Gradient overlays */}
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(0,21,36,0.9) 0%, rgba(0,21,36,0.4) 60%, rgba(0,21,36,0.7) 100%)" }}
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: "linear-gradient(135deg, rgba(0,21,36,0.95) 0%, rgba(0,21,36,0.5) 60%, rgba(255,125,0,0.15) 100%)" }}
          />

          {/* Animated orange line on left */}
          <div className="absolute left-0 top-0 w-0.5 h-0 bg-[#FF7D00] group-hover:h-full transition-all duration-500 ease-out" />

          {/* Large background number */}
          <div
            className="absolute right-6 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity duration-500"
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
          <div className="absolute inset-0 flex flex-col justify-between p-6 pb-8 md:p-10">
            {/* Top: tag + year */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  className="text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 text-[#FF7D00]"
                  style={{
                    fontWeight: 700,
                    background: "rgba(255,125,0,0.12)",
                    border: "1px solid rgba(255,125,0,0.25)",
                    borderRadius: "6px",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {p.tag}
                </span>
                <span className="text-white/30 text-xs">{p.year}</span>
              </div>
              {/* Arrow button */}
              <div
                className="w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-400"
                style={{
                  background: "#FF7D00",
                  borderRadius: "10px",
                }}
              >
                <ArrowUpRight className="w-5 h-5 text-[#001524]" strokeWidth={2.5} />
              </div>
            </div>

            {/* Bottom: title + role + blurb */}
            <div className="max-w-2xl">
              <div className="text-white/40 text-xs uppercase tracking-[0.2em] mb-2" style={{ fontWeight: 600 }}>
                {p.role}
              </div>
              <h3
                className="text-white leading-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                {p.title}
              </h3>
              <p className="mt-3 text-white/50 leading-relaxed text-sm md:text-base max-w-lg">
                {p.blurb}
              </p>

              {/* Case study preview pills */}
              <div className="mt-5 flex flex-wrap gap-2">
                {["Problem", "Process", "Result"].map((label) => (
                  <span
                    key={label}
                    className="text-[10px] uppercase tracking-[0.2em] px-3 py-1 text-white/40 border border-white/10"
                    style={{ borderRadius: "4px", fontWeight: 600 }}
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div className="mt-5 inline-flex items-center gap-2 text-white group-hover:text-[#FF7D00] transition-colors text-sm font-semibold">
                Read full case study <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
