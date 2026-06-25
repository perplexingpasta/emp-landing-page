import { lazy, Suspense } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { ImagineThis } from '@/components/sections/ImagineThis';
import { Prestige } from '@/components/sections/Prestige';

// Lazy-load below-fold sections for performance
const Problem = lazy(() =>
  import('@/components/sections/Problem').then(m => ({ default: m.Problem }))
);
const Features = lazy(() =>
  import('@/components/sections/Features').then(m => ({
    default: m.Features,
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
    <div className="flex min-h-[400px] items-center justify-center py-24">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-amber-200 border-t-amber-600" />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-amber-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none"
      >
        Skip to content
      </a>
      <Navbar />

      <main id="main-content">
        <Hero />
        <ImagineThis />
        <Suspense fallback={<SectionFallback />}>
          <Problem />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Features />
        </Suspense>
        <Prestige />
        <Suspense fallback={<SectionFallback />}>
          <Proof />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <AboutFounder />
        </Suspense>
        {/*
        <Suspense fallback={<SectionFallback />}>
          <Pricing />
        </Suspense>*/}
        <Suspense fallback={<SectionFallback />}>
          <CTA />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
