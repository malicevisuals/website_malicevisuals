import { useState, useEffect, RefObject } from 'react';

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  once?: boolean;
}

export function useIntersectionObserver(
  ref: RefObject<HTMLElement>,
  options: UseIntersectionObserverOptions = {}
) {
  const { once = true, ...observerOptions } = options;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
      if (entry.isIntersecting && once) {
        observer.unobserve(el);
      }
    }, { threshold: 0.15, ...observerOptions });

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, once, JSON.stringify(observerOptions)]);

  return isVisible;
}
