import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageCarouselProps {
  images: string[];
  speed?: 'fast' | 'normal' | 'slow';
  className?: string;
}

export function ImageCarousel({
  images,
  speed = 'normal',
  className,
}: ImageCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach(item => {
        const clone = item.cloneNode(true);
        scrollerRef.current?.appendChild(clone);
      });

      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }

      setStart(true);
    }
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={cn('scroller relative z-20 w-full overflow-hidden', className)}
    >
      <div
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
          start && 'animate-scroll',
          'hover:[animation-play-state:paused]',
        )}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="h-72 w-48 shrink-0 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm md:h-96 md:w-64"
          >
            <img
              src={src}
              alt={`Testimonial ${idx + 1}`}
              className="h-full w-full object-cover"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
