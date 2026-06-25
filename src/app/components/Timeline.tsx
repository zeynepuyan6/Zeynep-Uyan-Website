import { motion } from "motion/react";
import { Briefcase, GraduationCap, MapPin, Calendar, ArrowUpRight } from "lucide-react";
import { experience, education } from "../data";

// ─── Types ────────────────────────────────────────────────
type TimelineItem = {
  title: string;
  sub: string;
  date: string;
  place?: string;
  blurb: string;
  logo?: string;
  logoOffset?: string;
};

// ─── Main Section ────────────────────────────────────────
export function Timeline() {
  const expItems: TimelineItem[] = experience.map((e) => ({
    title: e.role,
    sub: e.org,
    date: e.date,
    place: e.place,
    blurb: e.blurb,
    logo: (e as any).logo,
    logoOffset: (e as any).logoOffset,
  }));

  const eduItems: TimelineItem[] = education.map((e) => ({
    title: e.degree,
    sub: e.school,
    date: e.date,
    blurb: e.note,
    logo: (e as any).logo,
    logoOffset: (e as any).logoOffset,
  }));

  return (
    <section id="experience" className="relative bg-[#001524] overflow-hidden py-24 lg:py-32">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 10% 30%, rgba(255,125,0,0.06) 0%, transparent 55%), radial-gradient(ellipse at 85% 70%, rgba(21,97,109,0.1) 0%, transparent 55%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-[#FF7D00] uppercase tracking-[0.3em] text-xs">Journey</span>
          <h2
            className="mt-3 text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
            }}
          >
            Experience & Education.
          </h2>
        </motion.div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          <Column title="Experience" icon={<Briefcase className="w-4 h-4" />} items={expItems} startDelay={0} />
          <Column title="Education"  icon={<GraduationCap className="w-4 h-4" />} items={eduItems} startDelay={0.08} />
        </div>
      </div>
    </section>
  );
}

// ─── Column ──────────────────────────────────────────────
function Column({
  title,
  icon,
  items,
  startDelay,
}: {
  title: string;
  icon: React.ReactNode;
  items: TimelineItem[];
  startDelay: number;
}) {
  return (
    <div>
      {/* Column label */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#FF7D00] mb-8"
        style={{
          fontWeight: 700,
          border: "1px solid rgba(255,125,0,0.25)",
          borderRadius: "6px",
          background: "rgba(255,125,0,0.08)",
        }}
      >
        {icon} {title}
      </motion.div>

      <div className="space-y-4">
        {items.map((item, i) => (
          <TimelineCard key={i} item={item} index={i} delay={startDelay + i * 0.1} />
        ))}
      </div>
    </div>
  );
}

// ─── Individual Card ─────────────────────────────────────
function TimelineCard({
  item,
  index,
  delay,
}: {
  item: TimelineItem;
  index: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover"
      className="group relative overflow-hidden"
      style={{
        borderRadius: "14px",
        border: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(255,255,255,0.03)",
      }}
    >
      {/* Hover orange left line */}
      <motion.div
        className="absolute left-0 top-0 w-0.5 bg-[#FF7D00]"
        initial={{ height: 0 }}
        variants={{ hover: { height: "100%" } }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Hover background glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        variants={{ hover: { opacity: 1 } }}
        transition={{ duration: 0.4 }}
        style={{
          background: "linear-gradient(135deg, rgba(255,125,0,0.04) 0%, transparent 60%)",
          borderRadius: "14px",
        }}
      />

      {/* Inner glow border on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        variants={{ hover: { opacity: 1 } }}
        transition={{ duration: 0.4 }}
        style={{
          borderRadius: "14px",
          boxShadow: "inset 0 0 0 1px rgba(255,125,0,0.3)",
        }}
      />

      <div className="relative p-6">
        <div className="flex items-start gap-4">
          {/* Circular logo */}
          {item.logo && (
            <motion.div
              variants={{ hover: { scale: 1.08, rotate: 2 } }}
              transition={{ duration: 0.4 }}
              className="shrink-0 w-12 h-12 overflow-hidden bg-white/10 flex items-center justify-center"
              style={{ borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.12)" }}
            >
              <img
                src={item.logo}
                alt={item.sub}
                className="w-full h-full object-cover"
                style={{ borderRadius: "50%", objectPosition: item.logoOffset || "center center" }}
              />
            </motion.div>
          )}

          <div className="flex-1 min-w-0">
            {/* Top row: title + date */}
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h3
                className="text-white leading-snug"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.95rem" }}
              >
                {item.title}
              </h3>
              <span
                className="shrink-0 text-[#FF7D00] text-[11px] uppercase tracking-wider px-2.5 py-1"
                style={{
                  fontWeight: 700,
                  background: "rgba(255,125,0,0.1)",
                  borderRadius: "5px",
                  border: "1px solid rgba(255,125,0,0.2)",
                }}
              >
                {item.date}
              </span>
            </div>

            {/* Org + place */}
            <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-white/40">
              <span style={{ fontWeight: 600 }}>{item.sub}</span>
              {item.place && (
                <>
                  <span className="text-white/20">·</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {item.place}
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="mt-3 text-white/50 text-sm leading-relaxed">{item.blurb}</p>
          </div>
        </div>

        {/* Bottom: index number */}
        <div
          className="absolute bottom-4 right-4 text-white/5 pointer-events-none select-none"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "3rem",
            lineHeight: 1,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>
    </motion.div>
  );
}
