import { Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-14 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <img
          src="/LogoTransp.png"
          alt="MALICEVISUALS"
          className="h-40 w-auto object-contain opacity-80"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const fallback = document.createElement("span");
            fallback.textContent = "MALICEVISUALS";
            fallback.className =
              "text-off-white/60 text-sm font-black tracking-widest";
            target.parentNode?.insertBefore(fallback, target.nextSibling);
          }}
        />

        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com/malicevisuals"
            target="_blank"
            rel="noopener noreferrer"
            className="text-off-white/40 hover:text-blood-red transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={20} strokeWidth={1.5} />
          </a>

          <a
            href="mailto:malicevisuals@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-off-white/40 hover:text-blood-red transition-colors duration-300"
            aria-label="Instagram"
          >
            <Mail size={20} strokeWidth={1.5} />
          </a>
        </div>

        <div
          className="flex items-center gap-6 text-off-white/30 text-xs font-light"
          style={{ letterSpacing: "0.15em" }}
        >
          <Link
            to="/legal"
            className="hover:text-off-white/60 transition-colors duration-200"
          >
            LEGAL
          </Link>
          <span className="text-white/10">|</span>
          <Link
            to="/privacy-policy"
            className="hover:text-off-white/60 transition-colors duration-200"
          >
            PRIVACY POLICY
          </Link>
        </div>

        <p
          className="text-white/15 text-xs font-light"
          style={{ letterSpacing: "0.1em" }}
        >
          &copy; {new Date().getFullYear()} MALICEVISUALS. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
