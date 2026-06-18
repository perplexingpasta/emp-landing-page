import { lazy, Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";

// Lazy-load below-fold sections for performance
const Problem = lazy(() =>
  import("@/components/sections/Problem").then((m) => ({ default: m.Problem })),
);
const Features = lazy(() =>
  import("@/components/sections/Features").then((m) => ({
    default: m.Features,
  })),
);
const Proof = lazy(() =>
  import("@/components/sections/Proof").then((m) => ({ default: m.Proof })),
);
const HowItWorks = lazy(() =>
  import("@/components/sections/HowItWorks").then((m) => ({
    default: m.HowItWorks,
  })),
);
const Testimonials = lazy(() =>
  import("@/components/sections/Testimonials").then((m) => ({
    default: m.Testimonials,
  })),
);
const CTA = lazy(() =>
  import("@/components/sections/CTA").then((m) => ({ default: m.CTA })),
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
        <Suspense fallback={<SectionFallback />}>
          <Problem />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Features />
        </Suspense>
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
          <CTA />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
