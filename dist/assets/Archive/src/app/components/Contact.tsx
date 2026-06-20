import { useState } from "react";
import { Send, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import { profile } from "../data";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong.");
      }

      toast.success("Thank you! I'll get back to you very soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      toast.error(err.message || "Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-28">
      <div className="grid lg:grid-cols-2 border border-[#78290F]/20 overflow-hidden">
        <div className="relative bg-[#001524] text-white p-10 lg:p-14">
          <span className="uppercase tracking-[0.3em] text-xs text-[#FF7D00]">Contact</span>
          <h2 className="mt-3 text-white" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
            Let's create something great together.
          </h2>
          <p className="mt-5 text-white/70 max-w-md leading-relaxed">
            Working on a brand, a campaign or a passion project? Drop a note — I read every message and
            respond with care.
          </p>

          <div className="mt-10 space-y-4 text-white/80">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-[#FF7D00] transition-colors text-sm">
              <Mail className="w-5 h-5 text-[#FF7D00]" /> {profile.email}
            </a>
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="w-5 h-5 text-[#FF7D00]" /> {profile.location}
            </div>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-[#FF7D00] transition-colors text-sm"
            >
              <svg className="w-5 h-5 text-[#FF7D00]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn Profile
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-[#FF7D00] text-xs uppercase tracking-widest">
            Zeynep Uyan — {profile.location}
          </div>
        </div>

        <form onSubmit={submit} className="bg-[#edede9] p-10 lg:p-14 space-y-5">
          <div>
            <label className="text-xs uppercase tracking-widest text-[#001524]/60">Your name</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-2 w-full px-4 py-3 border border-[#78290F]/20 focus:border-[#FF7D00] focus:outline-none transition bg-[#edede9] text-[#001524]"
            // placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-[#001524]/60">Email</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-2 w-full px-4 py-3 border border-[#78290F]/20 focus:border-[#FF7D00] focus:outline-none transition bg-[#edede9] text-[#001524]"
            // placeholder="hello@yours.com"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-[#001524]/60">Tell me about your project</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-2 w-full px-4 py-3 border border-[#78290F]/20 focus:border-[#FF7D00] focus:outline-none transition resize-none bg-[#edede9] text-[#001524]"
            // placeholder="A few sentences about what you have in mind..."
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FF7D00] text-[#001524] hover:bg-[#78290F] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontWeight: 600 }}
          >
            {sending ? "Sending..." : "Send message"} {!sending && <Send className="w-4 h-4" />}
          </button>
        </form>
      </div>
    </section>
  );
}
