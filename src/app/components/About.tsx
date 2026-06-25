import { motion } from "motion/react";
import { achievements, profile } from "../data";
import { Award, ExternalLink, Camera, Palette, BookOpen } from "lucide-react";

const beliefs = [
  {
    icon: Palette,
    title: "Design is thinking, made visible.",
    desc: "A logo is not just a pretty shape. It's a decision. Every color, every typeface, every margin carries a message. My job is to make sure that message is intentional.",
  },
  {
    icon: Camera,
    title: "Photography is part of the brand, not an add-on.",
    desc: "I don't offer photography as a side service. I integrate it into the branding process itself — because a great logo paired with mismatched photography is still a broken brand.",
  },
  {
    icon: BookOpen,
    title: "Clients deserve to understand what they're buying.",
    desc: "I show my process, my sketches, my reasoning. I believe a client who understands the 'why' behind the design is a client who will use it confidently.",
  },
];

export function About() {
  return (
    <section id="about" className="relative bg-[#001524] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#FF7D00] uppercase tracking-[0.3em] text-xs">About Me</span>
        </motion.div>

        {/* Story Grid */}
        <div className="mt-8 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left — Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <h2
              className="text-white"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 3.8rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}
            >
              About <span className="text-[#FF7D00]">Me.</span>
            </h2>

            <p className="mt-6 text-white/60 leading-relaxed">
              I focus on creating impactful digital experiences through media design, branding, and professional photography. I partner with brands to craft intuitive design templates and strong visual identities that truly tell a story.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed">
              Guided by strategic thinking and creative communication, my goal is always to deliver clean, intentional, and high-quality solutions that elevate your brand's presence.
            </p>

            <div className="mt-8">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white border border-white/30 px-5 py-2.5 hover:bg-white hover:text-[#001524] transition-colors"
                style={{ fontWeight: 600 }}
              >
                <ExternalLink className="w-4 h-4" /> View LinkedIn Profile
              </a>
            </div>
          </motion.div>

          {/* Right — Beliefs & Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 space-y-5"
          >
            {beliefs.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="flex gap-5 border border-white/10 p-6 hover:border-[#FF7D00]/50 transition-colors group"
              >
                <div className="shrink-0 w-10 h-10 bg-[#FF7D00]/10 flex items-center justify-center group-hover:bg-[#FF7D00]/20 transition-colors">
                  <b.icon className="w-5 h-5 text-[#FF7D00]" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1" style={{ fontFamily: "var(--font-display)" }}>{b.title}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}

            <div className="pt-6 border-t border-white/10">
              <span className="text-xs uppercase tracking-widest text-[#FF7D00] font-semibold block mb-4">Recognitions & Achievements</span>
              <div className="grid sm:grid-cols-2 gap-3">
                {achievements.map((a) => (
                  <div
                    key={a}
                    className="flex items-start gap-3 border border-white/10 px-4 py-3 hover:border-[#FF7D00]/50 transition-colors"
                  >
                    <Award className="w-5 h-5 text-[#FF7D00] shrink-0 mt-0.5" />
                    <span className="text-sm text-white/60">{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
