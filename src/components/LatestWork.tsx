import { useState, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Lightbox from './Lightbox';
import { ThumbnailCard } from './Portfolio';

const LATEST_VIDEO_ID = 'mTlTI1qKbcQ';

const DETAILS: [string, string][] = [
  ['project', '1981'],
  ['artist', 'ACCVSED'],
  ['genre', 'Modern Metalcore'],
  ['label', 'Arising Empire'],
  ['release date', '12. November 2026'],
  ['format', 'Performance Musicvideo (03:43 Min)'],
];

const CREDITS = [
  'directed by PASCAL KLEBE\ndop THILO JÄGER\nBTS & set assistance HENRIK SCHMALE\nlightshow JAKOB HIRLINGER-ALEXANDER\npost-production PASCAL KLEBE',
  'a MALICEVISUALS production',
  'special thanks to HALLE7, DARKHALL RENTALS, MARIO WAGNER & CHRISTIAN AẞMANN',
];

export default function LatestWork() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const headingVisible = useIntersectionObserver(headingRef);

  return (
    <section id="latest-work" className="bg-black pb-24 px-6 md:px-12 lg:px-20">
      <div
        ref={headingRef}
        className="max-w-7xl mx-auto mb-16"
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
          LATEST WORK
        </p>
        <h2
          className="text-4xl md:text-6xl font-black text-white leading-none"
          style={{ letterSpacing: '0.15em' }}
        >
          NEWS:
        </h2>
        <p className="text-off-white/70 text-base md:text-lg leading-relaxed max-w-2xl mt-8">
          The official video for ACCVSED's new single "1981", directed and produced by MALICEVISUALS.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <ThumbnailCard videoId={LATEST_VIDEO_ID} index={0} onPlay={setActiveVideo} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mt-16">
          <dl className="space-y-4">
            {DETAILS.map(([label, value]) => (
              <div key={label} className="flex flex-col sm:flex-row sm:gap-6 border-b border-white/10 pb-4">
                <dt className="text-blood-red text-xs font-bold uppercase w-40 shrink-0 pt-1" style={{ letterSpacing: '0.2em' }}>
                  {label}
                </dt>
                <dd className="text-off-white text-base">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="text-off-white/70 text-sm leading-relaxed space-y-4 whitespace-pre-line">
            {CREDITS.map((group, i) => (
              <p key={i}>{group}</p>
            ))}
          </div>
        </div>
      </div>

      {activeVideo && (
        <Lightbox videoId={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </section>
  );
}
