import { ImageCarousel } from "@/components/shared/ImageCarousel";
import { SectionHeading } from "@/components/shared/SectionHeading";

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
      className="relative overflow-hidden bg-stone-50 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          label="Social Proof"
          title="What people are saying"
          description="Real feedback from delegates, organisers, and faculty at JSS Medical College, Mysuru."
        />
      </div>

      {/* Edge-to-edge carousel */}
      <div className="relative">
        {/* Gradient fades on edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-stone-50 to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-r from-transparent to-stone-50 md:w-32" />

        <ImageCarousel
          images={testimonialImages}
          speed="normal"
          className="[mask-image:none]"
        />
      </div>

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
