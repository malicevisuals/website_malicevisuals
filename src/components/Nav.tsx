import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const LINKS = [
  { label: "ABOUT", href: "#about", id: "about" },
  { label: "SERVICES", href: "#services", id: "services" },
  { label: "WORK", href: "#portfolio", id: "portfolio" },
  { label: "CONTACT", href: "#contact", id: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(`#${id}`);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.querySelector(`#${id}`);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(0,0,0,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-5 flex items-center justify-between">
        <Link
          to="/"
          className="text-off-white font-black text-sm"
          style={{ letterSpacing: "0.3em" }}
        >
          MALICE<span className="text-blood-red">VISUALS</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.id)}
              className="text-off-white/50 hover:text-off-white text-xs font-semibold transition-colors duration-200 relative group"
              style={{ letterSpacing: "0.25em" }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-blood-red group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="w-6 h-px bg-off-white/70 transition-all duration-300"
            style={{
              transform: menuOpen ? "rotate(45deg) translateY(3.5px)" : "none",
            }}
          />
          <span
            className="w-6 h-px bg-off-white/70 transition-all duration-300"
            style={{
              transform: menuOpen
                ? "rotate(-45deg) translateY(-3.5px)"
                : "none",
            }}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/20 border-t border-white/5 px-6 py-8 flex flex-col gap-6">
          {LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.id)}
              className="text-off-white/70 hover:text-blood-red text-sm font-semibold text-left transition-colors"
              style={{ letterSpacing: "0.25em" }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
