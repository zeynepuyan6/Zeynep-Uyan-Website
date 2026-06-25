import { Link, useLocation, useNavigate } from "react-router";
import { profile } from "../data";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // Hash link targeting a section on home page (e.g. /#about)
    if (href.startsWith("/#")) {
      const id = href.slice(2);

      if (location.pathname !== "/") {
        navigate("/");
        // Wait for home page to render, then scroll
        requestAnimationFrame(() => {
          setTimeout(() => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 50);
        });
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    // Home link — go to / and scroll to top
    if (href === "/") {
      if (location.pathname !== "/") {
        navigate("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    // Other routes (e.g. /projects) — just navigate, ScrollToTop handles scroll
    navigate(href);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#FFECD1]/95 border-b border-[#78290F]/20">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group" onClick={(e) => handleNavClick(e as any, "/")}>
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
                onClick={(e) => handleNavClick(e, l.href)}
                className={`hover:text-[#FF7D00] transition-colors cursor-pointer ${
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
