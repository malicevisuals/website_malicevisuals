import { useState, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Lightbox from './Lightbox';
import { ThumbnailCard } from './Portfolio';

const LATEST_VIDEO_ID = 'mTlTI1qKbcQ';

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
      </div>

      <div className="max-w-7xl mx-auto">
        <ThumbnailCard videoId={LATEST_VIDEO_ID} index={0} onPlay={setActiveVideo} />
      </div>

      {activeVideo && (
        <Lightbox videoId={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </section>
  );
}
