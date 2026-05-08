import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ServiceProps {
  index: number;
  tag: string;
  title: string;
  description: string;
}

function ServiceItem({ index, tag, title, description }: ServiceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-6"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`,
      }}
    >
      <div
        className="bg-dark-card border border-white/5 overflow-hidden"
        style={{ aspectRatio: '3/4' }}
      >
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-dark-surface to-black" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139,0,0,0.3) 2px, rgba(139,0,0,0.3) 3px)',
              backgroundSize: '100% 60px',
            }}
          />
          <span
            className="relative z-10 text-off-white/10 font-black text-3xl md:text-4xl text-center px-4"
            style={{ letterSpacing: '0.2em' }}
          >
            {tag}
          </span>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-blood-red/30" />
          <div className="absolute top-0 left-0 w-px h-full bg-blood-red/20" />
        </div>
      </div>

      <div>
        <p
          className="text-blood-red text-xs font-bold mb-2"
          style={{ letterSpacing: '0.4em' }}
        >
          0{index + 1} — {tag}
        </p>
        <h3
          className="text-xl md:text-2xl font-black text-off-white mb-3 leading-tight"
          style={{ letterSpacing: '0.12em' }}
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

const SERVICES = [
  {
    tag: 'MUSIC VIDEOS',
    title: 'MUSIC VIDEOS.',
    description:
      'Conceptual storytelling and performance videos. From one-man sets to full-scale crews.',
  },
  {
    tag: 'LIVE EXPERIENCE',
    title: 'LIVE EXPERIENCE.',
    description:
      'High-energy live music videos or multicam setups that capture the chaos on stage.',
  },
  {
    tag: 'SOCIAL CONTENT',
    title: 'SOCIAL CONTENT.',
    description:
      '9:16 vertical content, teasers, and cinematic vlogs tailored for maximum impact.',
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
          transform: headingVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        <p
          className="text-blood-red text-xs font-bold mb-4"
          style={{ letterSpacing: '0.4em' }}
        >
          WHAT I DO
        </p>
        <h2
          className="text-4xl md:text-6xl font-black text-off-white leading-none"
          style={{ letterSpacing: '0.15em' }}
        >
          SERVICES.
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
        {SERVICES.map((service, i) => (
          <ServiceItem
            key={service.tag}
            index={i}
            tag={service.tag}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
