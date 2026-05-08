import { useEffect, useState } from 'react';
import { X, Play } from 'lucide-react';

interface LightboxProps {
  videoId: string;
  onClose: () => void;
}

export default function Lightbox({ videoId, onClose }: LightboxProps) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleConsent = () => {
    setShowVideo(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 text-off-white/60 hover:text-off-white transition-colors z-10 p-2"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={28} strokeWidth={1.5} />
      </button>

      <div
        className="w-full max-w-6xl mx-6"
        style={{ aspectRatio: '16/9' }}
        onClick={(e) => e.stopPropagation()}
      >
        {!showVideo ? (
          <div className="w-full h-full bg-black/50 flex flex-col items-center justify-center gap-6 rounded border border-white/10">
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="Video thumbnail"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10 text-center px-6">
              <p className="text-off-white/80 mb-6 text-sm md:text-base leading-relaxed">
                This video is hosted by YouTube. By clicking "Play", you agree to YouTube's terms of service and consent to data processing by Google.
              </p>
              <button
                onClick={handleConsent}
                className="inline-flex items-center gap-3 px-8 py-3 bg-blood-red hover:bg-blood-red/90 text-white font-semibold transition-colors duration-300"
              >
                <Play size={18} fill="white" />
                Play Video
              </button>
              <p className="text-off-white/40 text-xs mt-6" style={{ letterSpacing: '0.05em' }}>
                We do not store your consent. YouTube tracks views directly.
              </p>
            </div>
          </div>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
            title="MALICEVISUALS Video"
          />
        )}
      </div>
    </div>
  );
}
