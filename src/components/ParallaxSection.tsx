import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
  fadeIn?: boolean;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className,
  speed = 0.3,
  direction = 'up',
  fadeIn = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!ref.current) return;
      
      requestAnimationFrame(() => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const distance = elementCenter - viewportCenter;
        const multiplier = direction === 'up' ? -1 : 1;
        
        setOffset(distance * speed * multiplier * 0.1);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction, isMobile]);

  useEffect(() => {
    if (!fadeIn) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [fadeIn]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-opacity duration-700',
        fadeIn && !isVisible ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0',
        className
      )}
      style={{
        transform: isMobile ? undefined : `translateY(${offset}px)`,
        willChange: isMobile ? undefined : 'transform',
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
