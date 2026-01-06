import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  fadeIn?: boolean;
  delay?: number;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className,
  fadeIn = true,
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
        'transition-all duration-700 ease-out',
        fadeIn && !isVisible ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0',
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
