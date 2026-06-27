import { Mail, MapPin } from "lucide-react";
import { profile } from "../data";

export function Footer() {
  return (
    <footer className="bg-[#001524] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            <span className="w-8 h-8 bg-[#FF7D00] text-[#001524] grid place-items-center text-xs">ZU</span>
            <span>{profile.name}</span>
          </div>
          <p className="mt-3 text-sm text-white/60 max-w-xs leading-relaxed">
            Graphic designer, brand strategist and freelance photographer based in İstanbul.
          </p>
        </div>
        <div className="text-sm text-white/70 space-y-2">
          <h4 className="text-white mb-3 uppercase tracking-widest text-xs">Get in touch</h4>
          <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#FF7D00]" /> {profile.email}</p>
          <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#FF7D00]" /> {profile.location}</p>
        </div>
        <div className="text-sm text-white/70">
          <h4 className="text-white mb-3 uppercase tracking-widest text-xs">Elsewhere</h4>
          <ul className="space-y-1.5">
            <li><a className="hover:text-[#FF7D00] transition-colors" href="#">Instagram</a></li>
            <li><a className="hover:text-[#FF7D00] transition-colors" href="#">Behance</a></li>
            <li><a className="hover:text-[#FF7D00] transition-colors" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a className="hover:text-[#FF7D00] transition-colors" href="#">Dribbble</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
