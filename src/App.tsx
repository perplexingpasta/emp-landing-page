import { lazy, Suspense } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { SectionDivider } from '@/components/shared/SectionDivider';

// Lazy-load below-fold sections for performance
const Problem = lazy(() =>
  import('@/components/sections/Problem').then(m => ({ default: m.Problem }))
);
const ImagineThis = lazy(() =>
  import('@/components/sections/ImagineThis').then(m => ({
    default: m.ImagineThis,
  }))
);
const Features = lazy(() =>
  import('@/components/sections/Features').then(m => ({
    default: m.Features,
  }))
);
const Prestige = lazy(() =>
  import('@/components/sections/Prestige').then(m => ({
    default: m.Prestige,
  }))
);
const Proof = lazy(() =>
  import('@/components/sections/Proof').then(m => ({ default: m.Proof }))
);
const HowItWorks = lazy(() =>
  import('@/components/sections/HowItWorks').then(m => ({
    default: m.HowItWorks,
  }))
);
// const Testimonials = lazy(() =>
//   import('@/components/sections/Testimonials').then(m => ({
//     default: m.Testimonials,
//   }))
// );
const Testimonials = lazy(() =>
  import('@/components/sections/TestimonialsWhatsApp').then(m => ({
    default: m.TestimonialsWhatsApp,
  }))
);
const AboutFounder = lazy(() =>
  import('@/components/sections/AboutFounder').then(m => ({
    default: m.AboutFounder,
  }))
);
// const Pricing = lazy(() =>
//   import('@/components/sections/Pricing').then(m => ({
//     default: m.Pricing,
//   }))
// );
const CTA = lazy(() =>
  import('@/components/sections/CTA').then(m => ({ default: m.CTA }))
);

function SectionFallback() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-amber-200 border-t-amber-600" />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <SectionDivider />
        <Suspense fallback={<SectionFallback />}>
          <ImagineThis />
        </Suspense>
        <SectionDivider />
        <Suspense fallback={<SectionFallback />}>
          <Problem />
        </Suspense>
        <SectionDivider />
        <Suspense fallback={<SectionFallback />}>
          <Features />
        </Suspense>
        <SectionDivider />
        <Suspense fallback={<SectionFallback />}>
          <Prestige />
        </Suspense>
        <SectionDivider />
        <Suspense fallback={<SectionFallback />}>
          <Proof />
        </Suspense>
        <SectionDivider />
        <Suspense fallback={<SectionFallback />}>
          <HowItWorks />
        </Suspense>
        <SectionDivider />
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
        <SectionDivider />
        <Suspense fallback={<SectionFallback />}>
          <AboutFounder />
        </Suspense>
        {/*<SectionDivider />
        <Suspense fallback={<SectionFallback />}>
          <Pricing />
        </Suspense>*/}
        <SectionDivider />
        <Suspense fallback={<SectionFallback />}>
          <CTA />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
