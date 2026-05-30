import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);
  const [consentChecked, setConsentChecked] = useState(false);

  const inputClass =
    "w-full bg-dark-input border border-white/10 text-off-white placeholder-white/25 px-5 py-4 text-sm font-light outline-none transition-all duration-300 focus:border-blood-red focus:bg-black";

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-black py-24 px-6 md:px-12 lg:px-20"
    >
      <div
        className="max-w-7xl mx-auto"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <div className="text-right mb-16">
          <p
            className="text-blood-red text-xs font-bold mb-4"
            style={{ letterSpacing: "0.4em" }}
          >
            GET IN TOUCH
          </p>
          <h2
            className="text-4xl md:text-6xl font-black text-off-white leading-none"
            style={{ letterSpacing: "0.15em" }}
          >
            SUBMIT YOUR VISION.
          </h2>
        </div>

        <div className="max-w-2xl ml-auto">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="flex flex-col gap-px"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
              <input
                type="text"
                name="name"
                placeholder="NAME"
                required
                className={inputClass}
                style={{ letterSpacing: "0.08em" }}
              />
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                required
                className={inputClass}
                style={{ letterSpacing: "0.08em" }}
              />
            </div>
            <input
              type="text"
              name="band_name"
              placeholder="BAND / PROJECT NAME"
              required
              className={inputClass}
              style={{ letterSpacing: "0.08em" }}
            />
            <textarea
              name="message"
              placeholder="DESCRIBE YOUR VISION"
              required
              rows={7}
              className={`${inputClass} resize-none`}
              style={{ letterSpacing: "0.05em" }}
            />

            <label className="flex items-start gap-3 py-4 px-5 bg-dark-input border border-white/10 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                checked={consentChecked}
                onChange={(e) => setConsentChecked(e.target.checked)}
                className="mt-1 w-4 h-4 border border-white/30 bg-black text-blood-red focus:ring-blood-red focus:ring-offset-0 cursor-pointer"
              />
              <span className="text-off-white/60 text-xs font-light leading-relaxed">
                I consent to the processing of my personal data (name, email, message) for the purpose of handling my inquiry. I have read and agree to the{' '}
                <a href="/privacy-policy" className="text-blood-red hover:text-blood-red/80 underline">
                  Privacy Policy
                </a>
                .
              </span>
            </label>

            <button
              type="submit"
              disabled={!consentChecked}
              className="mt-1 bg-blood-red hover:bg-blood-red-hover text-white font-bold py-5 px-8 flex items-center justify-center gap-3 transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-blood-red"
              style={{ letterSpacing: "0.25em" }}
            >
              <span>SUBMIT YOUR VISION</span>
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
