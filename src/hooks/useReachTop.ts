import { useEffect, useRef, useState } from 'react';

export function useReachedTop<T extends HTMLElement>(offset = 0) {
  const ref = useRef<T | null>(null);
  const [reachedTop, setReachedTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const { top } = ref.current.getBoundingClientRect();

      setReachedTop(top <= offset);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

  return { ref, reachedTop };
}
