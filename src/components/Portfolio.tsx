import { useState, useRef } from 'react';
import { Play } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Lightbox from './Lightbox';

const VIDEOS = [
  { id: 'D2PNwg-wHGk' },
  { id: 'p60Wm9eHtYA' },
  { id: '1RLN8A3AGF8' },
  { id: 'u6RGNXrejAY' },
  { id: 'wZO9ItZ-8uM' },
  { id: 'CYFQ6TGqaik' },
];

interface ThumbnailCardProps {
  videoId: string;
  index: number;
  onPlay: (id: string) => void;
}

function ThumbnailCard({ videoId, index, onPlay }: ThumbnailCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden cursor-pointer group"
      style={{
        aspectRatio: '16/9',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.7s ease ${(index % 3) * 0.1}s, transform 0.7s ease ${(index % 3) * 0.1}s`,
      }}
      onClick={() => onPlay(videoId)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt="Video thumbnail"
        className="w-full h-full object-cover grayscale"
        style={{
          filter: hovered ? 'grayscale(0%) contrast(1.05)' : 'grayscale(60%) contrast(1.1)',
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
          transition: 'filter 0.5s ease, transform 0.5s ease',
        }}
      />
      <div
        className="absolute inset-0 bg-black"
        style={{
          opacity: hovered ? 0.3 : 0.5,
          transition: 'opacity 0.4s ease',
        }}
      />
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'scale(1)' : 'scale(0.8)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center border border-blood-red/70"
          style={{ background: 'rgba(139,0,0,0.85)' }}
        >
          <Play size={24} className="text-white ml-1" fill="white" />
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 h-px bg-blood-red w-0 group-hover:w-full"
        style={{ transition: 'width 0.5s ease' }}
      />
    </div>
  );
}

export default function Portfolio() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const headingVisible = useIntersectionObserver(headingRef);

  return (
    <section id="portfolio" className="bg-black py-24 px-6 md:px-12 lg:px-20">
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
          SELECTED WORK
        </p>
        <h2
          className="text-4xl md:text-6xl font-black text-off-white leading-none"
          style={{ letterSpacing: '0.15em' }}
        >
          PORTFOLIO.
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {VIDEOS.map((video, i) => (
          <ThumbnailCard
            key={video.id}
            videoId={video.id}
            index={i}
            onPlay={setActiveVideo}
          />
        ))}
      </div>

      {activeVideo && (
        <Lightbox videoId={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </section>
  );
}
