import { useMemo } from 'react';
// import { ChevronRight } from 'lucide-react';
import { ImageCarousel } from '@/components/shared/ImageCarousel';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
// import { Button } from '@/components/ui/button';

const sourceImages = [
  '/testimonials/1.webp',
  '/testimonials/2.webp',
  '/testimonials/3.webp',
  '/testimonials/4.webp',
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function TestimonialsWhatsApp() {
  const testimonialImages = useMemo(() => shuffle(sourceImages), []);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-16 md:py-20"
    >
      <div className="mx-auto max-w-265 px-4 md:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full border border-violet-200 bg-violet-50 px-3 py-1 font-sans text-xs font-medium tracking-wider text-violet-600 uppercase">
            TRUST
          </span>
          <h2 className="font-heading text-[2.2rem] font-bold text-stone-900 md:text-4xl">
            What people are{' '}
            <span className="text-amber-600 italic">saying</span>
          </h2>
        </div>
      </div>

      {/* Edge-to-edge carousel */}
      <ScrollReveal>
        <div className="relative mt-2 md:mt-12">
          {/* Gradient fades on edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent md:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-r from-transparent to-white md:w-32" />

          <ImageCarousel
            images={testimonialImages}
            speed="normal"
            className="mask-none"
          />
        </div>
      </ScrollReveal>

      <div className="mt-6 px-14 md:flex md:justify-center">
        <p className="text-center font-sans text-base text-stone-600">
          Real feedback from fest organisers from different colleges.
        </p>
        {/*<Button
          variant="outline"
          size="lg"
          className="group w-full rounded-xl border-2 border-amber-600! bg-amber-50/50 font-sans text-base font-semibold text-stone-900 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:border-amber-400! hover:bg-amber-100 md:w-auto"
          asChild
        >
          <a
            href="https://www.tatvam2026.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Live Website
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Button>*/}
      </div>
    </section>
  );
}
