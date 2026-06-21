import { ImageCarousel } from "@/components/shared/ImageCarousel";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

// Placeholder images — replace with actual testimonial screenshots
const testimonialImages = [
  "https://placehold.co/600x400/f5f0e8/78716c?text=Testimonial+1",
  "https://placehold.co/600x400/f0f0f0/78716c?text=Testimonial+2",
  "https://placehold.co/600x400/f5f0e8/78716c?text=Testimonial+3",
  "https://placehold.co/600x400/f0f0f0/78716c?text=Testimonial+4",
  "https://placehold.co/600x400/f5f0e8/78716c?text=Testimonial+5",
  "https://placehold.co/600x400/f0f0f0/78716c?text=Testimonial+6",
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-20 md:py-[72px]"
    >
      <div className="mx-auto max-w-[1060px] px-4 md:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full border border-stone-200 bg-stone-100 px-3 py-1 font-sans text-xs font-medium tracking-wider text-stone-600 uppercase">
            Social proof
          </span>
          <h2 className="font-heading text-3xl font-bold text-stone-900 md:text-4xl">
            What people are{" "}
            <span className="italic text-amber-600">saying</span>
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-stone-500 md:text-lg">
            Real feedback from delegates, organisers, and faculty at JSS Medical
            College, Mysuru.
          </p>
        </div>
      </div>

      {/* Edge-to-edge carousel */}
      <ScrollReveal>
        <div className="relative mt-12 md:mt-14">
          {/* Gradient fades on edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-r from-transparent to-white md:w-32" />

          <ImageCarousel
            images={testimonialImages}
            speed="normal"
            className="[mask-image:none]"
          />
        </div>
      </ScrollReveal>

      <p className="mt-8 text-center font-sans text-sm text-stone-400">
        Want to see more?{" "}
        <a
          href="https://www.tatvam2026.in"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-amber-600 underline underline-offset-2 hover:text-amber-700"
        >
          Visit the live platform
        </a>
      </p>
    </section>
  );
}
