import { useEffect, useState, useCallback } from 'react';

interface ParallaxConfig {
  speed?: number;
  direction?: 'up' | 'down';
  disabled?: boolean;
}

export const useParallax = (config: ParallaxConfig = {}) => {
  const { speed = 0.5, direction = 'up', disabled = false } = config;
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = useCallback(() => {
    if (disabled || isMobile) return;
    
    requestAnimationFrame(() => {
      const scrolled = window.scrollY;
      const multiplier = direction === 'up' ? -1 : 1;
      setOffset(scrolled * speed * multiplier);
    });
  }, [speed, direction, disabled, isMobile]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (disabled || isMobile) return;

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, disabled, isMobile]);

  return { offset, isMobile };
};

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(Math.min(scrollPercent, 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
};
