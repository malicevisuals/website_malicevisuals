import { useState, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "What is the cost of a music video?",
    answer: "Costs are project-based. Whether it's a raw performance clip or a high-end cinematic production, we scale the concept to your budget."
  },
  {
    question: "What is the difference between a one-man set and a full-scale crew?",
    answer: "A one-man set is fast and raw. A full crew allows for complex lighting, professional set design, and significantly higher production value."
  },
  {
    question: "We have a tight budget – can you still work with us?",
    answer: "Yes. If a full music video is out of reach, we start with high-impact social snippets or live recaps to get your project moving."
  },
  {
    question: "Do you travel for live videos or shoots?",
    answer: "Yes. I travel wherever the energy is. Travel and accommodation costs are added to the production budget."
  },
  {
    question: "Can we provide a finished concept, or do you develop the idea?",
    answer: "Both. I can execute your specific script or build a unique vision from scratch based on the energy of your track."
  },
  {
    question: "What if the first edit doesn’t meet our expectations?",
    answer: "Clear communication is key. Every project includes defined revision rounds to make sure you are 100% happy with the final result. We don't stop until the visual sits perfectly."
  },
  {
    question: "Do you offer support with the release and social media strategy?",
    answer: "I don’t just deliver a file and disappear. If we work together, my experience is part of the deal. I want the bands I work with to grow, so I share my knowledge and network for free to ensure the content hits. This includes tactical advice on release dates and delivering the right assets—from 'talking head' clips and teaser trailers to Spotify Canvas and promo-pics."
  }
];

function FAQItem({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-colors hover:text-blood-red"
      >
        <span className="text-sm md:text-base font-bold tracking-[0.1em] uppercase">
          {item.question}
        </span>
        {isOpen ? (
          <ChevronUp size={20} className="text-blood-red shrink-0" />
        ) : (
          <ChevronDown size={20} className="text-white/40 group-hover:text-blood-red shrink-0" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-off-white/60 text-sm md:text-base font-light leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="bg-black py-24 px-6 md:px-12 lg:px-20 border-t border-white/5"
    >
      <div
        className="max-w-4xl mx-auto"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.9s ease, transform 0.9s ease',
        }}
      >
        <div className="mb-16">
          <p
            className="text-blood-red text-xs font-bold mb-4"
            style={{ letterSpacing: '0.4em' }}
          >
            QUESTIONS
          </p>
          <h2
            className="text-4xl md:text-6xl font-black text-off-white leading-none"
            style={{ letterSpacing: '0.15em' }}
          >
            F.A.Q.
          </h2>
        </div>

        <div className="flex flex-col">
          {FAQ_DATA.map((item, index) => (
            <FAQItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
