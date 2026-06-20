import { Link, useLocation } from "react-router";
import { profile } from "../data";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const location = useLocation();
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#EDEDE9]/95 border-b border-[#78290F]/20">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid place-items-center w-9 h-9 bg-[#001524] text-white text-xs tracking-widest">
            ZU
          </span>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700 }} className="text-[#001524] tracking-tight">
            zeynep<span className="text-[#FF7D00]">.</span>
          </span>
        </Link>
        <ul className="hidden md:flex items-center gap-7 text-sm text-[#001524]/70">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`hover:text-[#FF7D00] transition-colors ${
                  location.pathname === l.href ? "text-[#FF7D00]" : ""
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#001524] text-white text-sm hover:bg-[#FF7D00] hover:text-[#001524] transition-colors"
        >
          LinkedIn
        </a>
      </nav>
    </header>
  );
}
