import { type ReactNode, createElement } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** HTML tag to render. Default "div". Use "li" when wrapping list items. */
  as?: 'div' | 'li' | 'span';
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  as: tag = 'div',
}: ScrollRevealProps) {
  const { ref, isInView } = useIntersectionObserver({ threshold: 0.1 });

  return createElement(
    tag,
    {
      ref,
      className,
      style: {
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(24px)',
        filter: isInView ? 'blur(0)' : 'blur(4px)',
        willChange: isInView ? 'auto' : 'opacity, transform, filter',
        transition: `opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, filter 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      },
    } as Record<string, unknown>,
    children
  );
}
