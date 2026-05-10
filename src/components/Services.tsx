import { useRef } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface ServiceProps {
  index?: number;
  tag: string;
  title: string;
  description: string;
  videoName: string;
}

function ServiceItem({
  index,
  tag,
  title,
  videoName,
  description,
}: ServiceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref);
  const isFocused = useIntersectionObserver(ref, {
    threshold: 0.6,
    once: false,
  });
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      ref={ref}
      className="flex flex-col gap-6"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s ease, transform 0.8s ease`,
      }}
    >
      <div
        className="bg-black border border-white/5 overflow-hidden"
        style={{ aspectRatio: "3/4" }}
      >
        <div
          className={`w-full h-full flex items-center justify-center relative overflow-hidden grayscale opacity-50 duration-700 ease-in-out transition-all hover:grayscale-0 hover:opacity-100 ${
            isFocused ? "grayscale-0 opacity-100" : ""
          }`}
        >
          <div className="absolute inset-0">
            <video
              autoPlay={!prefersReducedMotion}
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster={`/videos/PLACEHOLDERS/${videoName}.jpg`}
              preload="metadata"
            >
              <source
                src={`/videos/AV1/${videoName}.av1.mp4`}
                type="video/mp4; codecs=av01.0.08M.08"
              />
              <source
                src={`/videos/WEBM/${videoName}.webm`}
                type="video/webm"
              />
            </video>
          </div>
        </div>
      </div>

      <div>
        <p
          className="text-blood-red text-xs font-bold mb-2"
          style={{ letterSpacing: "0.4em" }}
        >
          0{index ?? 0 + 1} — {tag}
        </p>
        <h3
          className="text-xl md:text-2xl font-black text-off-white mb-3 leading-tight"
          style={{ letterSpacing: "0.12em" }}
        >
          {title}
        </h3>
        <p className="text-off-white/60 text-sm leading-relaxed font-light">
          {description}
        </p>
      </div>
    </div>
  );
}

const SERVICES: ServiceProps[] = [
  {
    tag: "MUSIC VIDEOS",
    title: "VISUAL IDENTITY.",
    description:
      "Conceptual storytelling and performance videos. Scalable from one-man sets to full-scale crews. Built to ensure the visual matches the weight of your sound.",
    videoName: "Services_MusicVideo",
  },
  {
    tag: "LIVE EXPERIENCE",
    title: "RAW STAGE.",
    description:
      "No stagnant photo-pit footage. High-energy gig recaps, live music videos or multicam setups that capture the stage chaos.",
    videoName: "Services_Live",
  },
  {
    tag: "SOCIAL CONTENT",
    title: "FAST IMPACT.",
    description:
      "A release is a campaign, not a single post. I provide the assets: music videos & live footage, 9:16 social media teasers & out nows, graphics, promopics EVERYTHING. Strategic coaching and industry network access included.",

    videoName: "Services_Social",
  },
];

export default function Services() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingVisible = useIntersectionObserver(headingRef);

  return (
    <section id="services" className="bg-black py-24 px-6 md:px-12 lg:px-20">
      <div
        ref={headingRef}
        className="max-w-7xl mx-auto mb-20"
        style={{
          opacity: headingVisible ? 1 : 0,
          transform: headingVisible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <p
          className="text-blood-red text-xs font-bold mb-4"
          style={{ letterSpacing: "0.4em" }}
        >
          WHAT I DO
        </p>
        <h2
          className="text-4xl md:text-6xl font-black text-off-white leading-none"
          style={{ letterSpacing: "0.15em" }}
        >
          SERVICES.
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
        {SERVICES.map((service, index) => (
          <ServiceItem
            key={service.tag}
            index={index}
            videoName={service.videoName}
            tag={service.tag}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
