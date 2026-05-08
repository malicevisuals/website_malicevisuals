import { useRef } from "react";
import { useScrollProgress } from "../hooks/useScrollProgress";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(heroRef);

  const brandingOpacity = Math.max(0, Math.min(1, (progress - 0.25) / 0.45));
  const brandingScale = 0.92 + brandingOpacity * 0.08;
  const indicatorOpacity = Math.max(0, 1 - progress * 4);

  return (
    <div ref={heroRef} style={{ height: "220vh" }} id="hero">
      <div className="sticky top-0 h-screen overflow-hidden">
        <img
          src="giphy.gif"
          className="w-screen h-screen object-cover grayscale brightness-50 contrast-150"
          alt=""
        />
        {/* <video */}
        {/*   autoPlay */}
        {/*   muted */}
        {/*   loop */}
        {/*   playsInline */}
        {/*   className="absolute inset-0 w-full h-full object-cover" */}
        {/* > */}
        {/*   <source src="/assets/showreel.mp4" type="video/mp4" /> */}
        {/* </video> */}

        <div className="absolute inset-0 bg-black/50" />

        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-8"
          style={{
            opacity: brandingOpacity,
            transform: `scale(${brandingScale})`,
            transition: "none",
          }}
        >
          <img
            src="/LogoTransp.png"
            alt="MALICEVISUALS"
            className="w-24 md:w-32 lg:w-40 mb-8 object-contain"
          />
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-black text-off-white text-center leading-none"
            style={{ letterSpacing: "0.18em" }}
          >
            UNRELENTING VISUALS.
          </h1>
          <h2
            className="mt-4 text-lg md:text-2xl lg:text-3xl font-semibold text-center"
            style={{ color: "#8B0000", letterSpacing: "0.3em" }}
          >
            FUELED BY MALICE.
          </h2>
        </div>

        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: indicatorOpacity }}
        >
          <span
            className="text-off-white/50 text-xs font-medium"
            style={{ letterSpacing: "0.35em" }}
          >
            SCROLL
          </span>
          <div className="w-px h-12 bg-off-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-off-white animate-scroll-line" />
          </div>
        </div>
      </div>
    </div>
  );
}
