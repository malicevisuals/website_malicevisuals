import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen bg-black flex items-center py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-0"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 1s ease, transform 1s ease',
          }}
        >
          <div className="flex flex-col justify-center items-end pr-0 md:pr-12 lg:pr-16 order-2 md:order-1 mt-12 md:mt-0">
            <div className="text-right max-w-lg">
              <p
                className="text-blood-red text-xs font-bold mb-6"
                style={{ letterSpacing: '0.4em' }}
              >
                ABOUT
              </p>
              <h2
                className="text-3xl md:text-4xl font-black text-off-white mb-3 leading-tight"
                style={{ letterSpacing: '0.12em' }}
              >
                PASCAL
              </h2>
              <p
                className="text-off-white/50 text-sm font-semibold mb-10"
                style={{ letterSpacing: '0.3em' }}
              >
                DIRECTOR. CINEMATOGRAPHER. EDITOR.
              </p>
              <p className="text-off-white/80 text-base md:text-lg leading-relaxed font-light mb-6">
                As the bassist of{' '}
                <span className="text-blood-red font-semibold">ACCVSED</span>, I
                bridge the gap between sound and sight. I know exactly how to visualize
                the energy your project demands.
              </p>
              <p className="text-off-white/80 text-base md:text-lg leading-relaxed font-light mb-3">
                From inception to the final cut —
              </p>
              <p className="text-off-white/80 text-base md:text-lg leading-relaxed font-light">
                <span className="text-blood-red font-semibold">I bring your vision to life.</span>
              </p>
              <div className="mt-12 w-16 h-px bg-blood-red ml-auto" />
            </div>
          </div>

          <div className="relative order-1 md:order-2 flex justify-center md:justify-start">
            <div className="relative overflow-hidden w-64 md:w-full" style={{ aspectRatio: '3/4' }}>
              <img
                src="/src/assets/Me_with_Camera.jpg"
                alt="Pascal — Cinematographer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div
                className="absolute bottom-0 left-0 w-1 bg-blood-red"
                style={{ height: '40%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
