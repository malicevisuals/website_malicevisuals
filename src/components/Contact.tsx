import { useState, useRef, FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { submitContactForm } from '../lib/supabase';

type FormState = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  band_name: string;
  message: string;
}

const INITIAL: FormData = { name: '', email: '', band_name: '', message: '' };

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);
  const [formData, setFormData] = useState<FormData>(INITIAL);
  const [state, setState] = useState<FormState>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setState('loading');
    try {
      await submitContactForm(formData);
      setState('success');
      setFormData(INITIAL);
    } catch {
      setState('error');
    }
  };

  const inputClass =
    'w-full bg-dark-input border border-white/10 text-off-white placeholder-white/25 px-5 py-4 text-sm font-light outline-none transition-all duration-300 focus:border-blood-red focus:bg-black';

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
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.9s ease, transform 0.9s ease',
        }}
      >
        <div className="text-right mb-16">
          <p
            className="text-blood-red text-xs font-bold mb-4"
            style={{ letterSpacing: '0.4em' }}
          >
            GET IN TOUCH
          </p>
          <h2
            className="text-4xl md:text-6xl font-black text-off-white leading-none"
            style={{ letterSpacing: '0.15em' }}
          >
            SUBMIT YOUR VISION.
          </h2>
        </div>

        <div className="max-w-2xl ml-auto">
          {state === 'success' ? (
            <div className="flex flex-col items-end gap-4 py-16">
              <CheckCircle size={48} className="text-blood-red" strokeWidth={1} />
              <p
                className="text-off-white text-xl font-light text-right"
                style={{ letterSpacing: '0.05em' }}
              >
                Your vision has been received.
              </p>
              <p className="text-off-white/40 text-sm text-right">
                I'll be in touch shortly.
              </p>
              <button
                onClick={() => setState('idle')}
                className="mt-4 text-blood-red text-xs font-semibold border border-blood-red/30 px-6 py-2 hover:border-blood-red transition-colors"
                style={{ letterSpacing: '0.2em' }}
              >
                SUBMIT ANOTHER
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-px">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
                <input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  style={{ letterSpacing: '0.08em' }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  style={{ letterSpacing: '0.08em' }}
                />
              </div>
              <input
                type="text"
                name="band_name"
                placeholder="BAND / PROJECT NAME"
                value={formData.band_name}
                onChange={handleChange}
                required
                className={inputClass}
                style={{ letterSpacing: '0.08em' }}
              />
              <textarea
                name="message"
                placeholder="DESCRIBE YOUR VISION"
                value={formData.message}
                onChange={handleChange}
                required
                rows={7}
                className={`${inputClass} resize-none`}
                style={{ letterSpacing: '0.05em' }}
              />

              {state === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm py-2">
                  <AlertCircle size={16} />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={state === 'loading'}
                className="mt-1 bg-blood-red hover:bg-blood-red-hover text-white font-bold py-5 px-8 flex items-center justify-center gap-3 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ letterSpacing: '0.25em' }}
              >
                {state === 'loading' ? (
                  <span>SENDING...</span>
                ) : (
                  <>
                    <span>SUBMIT YOUR VISION</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
