import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  label,
  duration = 2000,
  className,
}: AnimatedCounterProps) {
  const { ref, isInView } = useIntersectionObserver({ threshold: 0.3 });
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className={cn('text-center', className)}>
      <div className="font-heading text-4xl font-bold text-stone-900 md:text-5xl xl:text-6xl">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="mt-2 text-sm font-medium text-stone-500 md:text-base">
        {label}
      </p>
    </div>
  );
}
