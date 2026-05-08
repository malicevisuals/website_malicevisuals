import { useRef } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function Impressum() {
  const contentRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(contentRef);

  return (
    <section className="bg-black min-h-screen py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <div
          ref={contentRef}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <h1
            className="text-4xl md:text-5xl font-black text-off-white mb-12 leading-tight"
            style={{ letterSpacing: "0.12em" }}
          >
            LEGAL
          </h1>

          <div className="space-y-12 text-off-white/80">
            <section>
              <h2
                className="text-lg font-semibold text-off-white mb-4"
                style={{ letterSpacing: "0.08em" }}
              >
                RESPONSIBLE PERSON
              </h2>
              <div className="space-y-2 text-base leading-relaxed font-light">
                <p>Pascal Klebe</p>
                <p>MALICEVISUALS</p>
                <p>[Your Address]</p>
                <p>[Your City]</p>
              </div>
            </section>

            <section>
              <h2
                className="text-lg font-semibold text-off-white mb-4"
                style={{ letterSpacing: "0.08em" }}
              >
                CONTACT INFORMATION
              </h2>
              <div className="space-y-2 text-base leading-relaxed font-light">
                <p>Email: [your-email@example.com]</p>
                <p>Phone: [Your Phone Number]</p>
              </div>
            </section>

            <section>
              <h2
                className="text-lg font-semibold text-off-white mb-4"
                style={{ letterSpacing: "0.08em" }}
              >
                LIABILITY DISCLAIMER
              </h2>
              <p className="text-base leading-relaxed font-light">
                The contents of this website have been compiled with great care.
                However, MALICEVISUALS cannot guarantee the accuracy,
                completeness, or timeliness of the information provided. The use
                of the information is at your own risk. MALICEVISUALS is not
                liable for any direct or indirect damages resulting from the use
                of this website.
              </p>
            </section>

            <section>
              <h2
                className="text-lg font-semibold text-off-white mb-4"
                style={{ letterSpacing: "0.08em" }}
              >
                LINKS TO EXTERNAL WEBSITES
              </h2>
              <p className="text-base leading-relaxed font-light">
                This website contains links to external websites. MALICEVISUALS
                is not responsible for the contents of these external websites.
                The operators of the linked websites are solely responsible for
                their contents.
              </p>
            </section>

            <section>
              <h2
                className="text-lg font-semibold text-off-white mb-4"
                style={{ letterSpacing: "0.08em" }}
              >
                COPYRIGHT
              </h2>
              <p className="text-base leading-relaxed font-light">
                All content on this website, including text, images, and videos,
                is protected by copyright. Reproduction, distribution, or
                transmission of any content without prior written permission is
                strictly prohibited.
              </p>
            </section>

            <div className="border-t border-white/10 pt-12 mt-12">
              <p
                className="text-sm text-off-white/40"
                style={{ letterSpacing: "0.05em" }}
              >
                Last updated: {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
