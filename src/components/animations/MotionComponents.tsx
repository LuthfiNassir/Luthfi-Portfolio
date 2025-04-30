import React, { useEffect, useRef } from 'react';

interface MotionProps {
  children: React.ReactNode;
  initial?: { [key: string]: number };
  whileInView?: { [key: string]: number };
  transition?: { 
    duration?: number;
    delay?: number;
  };
  viewport?: { once?: boolean };
  className?: string;
}

// A simplified implementation of framer-motion-like animation
export const motion = {
  div: ({ 
    children, 
    initial = {}, 
    whileInView = {}, 
    transition = {}, 
    viewport = {}, 
    className = '' 
  }: MotionProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const element = ref.current;
      if (!element) return;

      // Set initial styles
      if (initial.opacity !== undefined) {
        element.style.opacity = initial.opacity.toString();
      }
      if (initial.y !== undefined) {
        element.style.transform = `translateY(${initial.y}px)`;
      }
      if (initial.x !== undefined) {
        element.style.transform = `translateX(${initial.x}px)`;
      }
      if (initial.scale !== undefined) {
        element.style.transform = `scale(${initial.scale})`;
      }

      element.style.transition = `opacity ${transition.duration || 0.5}s ease-out ${transition.delay || 0}s, transform ${transition.duration || 0.5}s ease-out ${transition.delay || 0}s`;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Apply whileInView styles
              if (whileInView.opacity !== undefined) {
                element.style.opacity = whileInView.opacity.toString();
              }
              if (whileInView.y !== undefined || whileInView.x !== undefined) {
                element.style.transform = `translate(${whileInView.x || 0}px, ${whileInView.y || 0}px)`;
              }
              if (whileInView.scale !== undefined) {
                element.style.transform = `scale(${whileInView.scale})`;
              }

              if (viewport.once) {
                observer.unobserve(element);
              }
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(element);

      return () => {
        observer.unobserve(element);
      };
    }, []);

    return <div ref={ref} className={className}>{children}</div>;
  }
};