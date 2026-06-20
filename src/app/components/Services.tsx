import { motion } from "motion/react";
import { Sparkles, Instagram, BookOpen, Camera } from "lucide-react";
import { services } from "../data";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Instagram,
  BookOpen,
  Camera,
};

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-28 bg-[#001524]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-[#FF7D00] uppercase tracking-[0.3em] text-xs">Services</span>
          <h2
            className="mt-3 text-white"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em" }}
          >
            How we can work together.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#15616D]/30">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Sparkles;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative bg-[#001524] p-8 hover:bg-[#15616D] transition-colors"
              >
                <div className="w-12 h-12 grid place-items-center bg-[#FF7D00] text-[#001524]">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="absolute top-6 right-7 text-white/20 group-hover:text-[#FF7D00]/40 transition-colors" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "2.5rem" }}>
                  0{i + 1}
                </span>
                <h3 className="mt-5 text-white" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>{s.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
