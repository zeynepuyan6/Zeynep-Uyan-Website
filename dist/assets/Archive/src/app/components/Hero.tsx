import { motion } from "motion/react";
import { ArrowRight, Camera } from "lucide-react";
import { profile } from "../data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#edede9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-28 lg:pt-32 lg:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#78290F]/20 text-[#001524]/60 text-xs tracking-widest uppercase">
            <Camera className="w-3.5 h-3.5 text-[#FF7D00]" /> Available for freelance & collaborations
          </span>
          <h1
            className="mt-7 text-[#001524] leading-[1.05] max-w-4xl"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.02em" }}
          >
            Hi, I'm <span className="text-[#FF7D00]">Zeynep.</span>
          </h1>
          <p className="mt-6 text-[#001524]/70 max-w-xl leading-relaxed text-lg font-medium">
            A Communication Designer bridging the gap between visual storytelling, digital design, and strategic marketing.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#001524] text-white hover:bg-[#FF7D00] hover:text-[#001524] transition-colors"
            >
              View my work <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#001524] text-[#001524] hover:bg-[#001524] hover:text-white transition-colors"
            >
              Start a project
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 max-w-sm gap-8">
            {[
              { k: "5+", v: "Projects" },
              { k: "3", v: "Awards" },
              { k: "3+", v: "Years exp." },
            ].map((s) => (
              <div key={s.v} className="border-l-2 border-[#FF7D00] pl-4">
                <div className="text-[#001524]" style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700 }}>{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-[#001524]/50 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <Marquee />
    </section>
  );
}

function Marquee() {
  const items = ["Branding", "Editorial", "Social Design", "Photography", "Campaigns", "Visual Identity", "Storytelling", "Art Direction"];
  return (
    <div className="border-y border-[#78290F]/20 bg-[#001524] py-4 overflow-hidden">
      <div className="flex gap-12 animate-[scroll_30s_linear_infinite] whitespace-nowrap text-white/70">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-12" style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>
            <span>{it}</span>
            <span className="text-[#FF7D00]">—</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-33.3333%); } }`}</style>
    </div>
  );
}
