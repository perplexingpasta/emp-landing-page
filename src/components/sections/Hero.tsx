import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Compare } from "@/components/ui/compare";

export function Hero() {
  const scrollToCTA = () => {
    const el = document.querySelector("#cta");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden pt-20"
    >
      <div className="relative mx-auto max-w-[1060px] px-4 pb-16 pt-[88px] md:px-6 md:pb-24 md:pt-[120px]">
        {/* Headline */}
        <div className="mx-auto max-w-3xl text-center">
          {/*<span className="mb-4 inline-block rounded-full border border-amber-300/60 bg-amber-100/60 px-3 py-1 font-sans text-xs font-medium tracking-wider text-amber-700 uppercase">
            Trusted by 1700+ delegates at JSS Medical College
          </span>*/}
          <h1 className="font-heading text-4xl font-bold leading-tight text-stone-800 md:text-5xl lg:text-6xl">
            Your college fest deserves{" "}
            <span className="italic text-amber-600">better</span> than Google
            Forms
          </h1>
          <p className="mt-6 font-sans text-base leading-relaxed text-stone-500 md:text-lg">
            <span>Presenting FestFlow</span>
            <br />
            <span>
              The all-in-one fest management platform for Indian medical
              colleges.
            </span>
          </p>
          {/*<p className="mt-6 font-sans text-base leading-relaxed text-stone-500 md:text-lg">
            The all-in-one fest management platform. Registrations, payments,
            merch, live dashboards, and QR check-ins — everything handled
            seamlessly. Built by a medic, for medics.
          </p>*/}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="group w-full bg-amber-600 font-sans text-base text-white hover:bg-amber-700 sm:w-auto"
              onClick={scrollToCTA}
            >
              Get This for Your Fest
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full border-stone-300 font-sans text-base text-stone-600 hover:bg-stone-100 hover:text-stone-800 sm:w-auto"
              asChild
            >
              <a
                href="https://www.tatvam2026.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Live Demo
              </a>
            </Button>
          </div>
        </div>

        {/* Before/After Comparison */}
        <div className="mx-auto mt-14 flex max-w-5xl flex-col items-center gap-4 md:mt-20">
          <p className="font-sans text-sm font-medium text-stone-400">
            Drag the slider to compare
          </p>
          <Compare
            firstImage="https://placehold.co/900x600/e5e0d8/78716c?text=Old+Fest+Website"
            secondImage="https://placehold.co/900x600/d4f0e8/0d9488?text=Tatvam+2026+Platform"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            slideMode="hover"
            showHandlebar
            autoplay
            autoplayDuration={4000}
            className="h-[220px] w-full max-w-[900px] rounded-2xl border border-stone-200 shadow-xl sm:h-[320px] md:h-[450px]"
          />
          <div className="mt-2 flex w-full max-w-[900px] justify-between px-2">
            <span className="font-sans text-xs text-stone-400 line-through">
              Typical fest website
            </span>
            <span className="font-sans text-xs font-medium text-amber-700">
              FestFlow powered
            </span>
          </div>
        </div>

        {/* Quick trust stats */}
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-4 rounded-2xl border border-stone-200/80 bg-white/60 p-6 backdrop-blur-sm md:mt-16 md:gap-8 md:p-8">
          {[
            { value: "1,700+", label: "Delegates" },
            { value: "50+", label: "Events" },
            { value: "₹10L+", label: "Payments" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-2xl font-bold text-stone-800 md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 font-sans text-xs text-stone-500 md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
