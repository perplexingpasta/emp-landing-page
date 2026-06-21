import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const stats = [
  { value: 1700, suffix: "+", label: "Delegates registered" },
  { value: 50, suffix: "+", label: "Events managed" },
  { value: 10, prefix: "₹", suffix: "L+", label: "Payments processed" },
  { value: 99, suffix: ".9%", label: "Uptime during fest" },
];

export function Proof() {
  return (
    <section id="proof" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-265 px-4 md:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 font-sans text-xs font-medium tracking-wider text-emerald-600 uppercase">
            The numbers
          </span>
          <h2 className="font-heading text-3xl font-bold text-stone-900 md:text-4xl">
            Proven at scale. <span className="italic text-amber-600">Not a prototype.</span>
          </h2>
        </div>

        {/* Animated stats with glowing borders */}
        <ScrollReveal>
          <div className="mt-12 grid grid-cols-2 gap-4 md:mt-14 md:grid-cols-4 md:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="relative rounded-2xl border border-stone-200 bg-white p-5 md:p-6"
              >
                <GlowingEffect
                  disabled={false}
                  glow
                  blur={15}
                  spread={30}
                  proximity={64}
                  inactiveZone={0.5}
                  borderWidth={1.5}
                  movementDuration={3}
                />
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  label={stat.label}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Analytics */}
        <ScrollReveal>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-lg md:mt-14">
            <div className="flex items-center gap-2 border-b border-stone-100 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-amber-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 font-sans text-xs text-stone-400">
                Analytics — Tatvam 2026
              </span>
            </div>
            <img
              src="/analytics.webp"
              alt="Analytics dashboard showing traffic and performance metrics for Tatvam 2026"
              className="w-full"
              width={1225}
              height={690}
              loading="lazy"
            />
          </div>
          <div className="mt-8 md:hidden max-w-xs mx-auto">
            <div className="grid grid-cols-3 divide-x divide-stone-200 rounded-2xl border border-stone-200 bg-white py-1">
              <div className="flex flex-col items-center py-2">
                <span className="font-sans text-lg font-semibold text-stone-900">
                  8,846
                </span>
                <span className="font-sans text-xs text-stone-500">
                  Visitors
                </span>
              </div>
              <div className="flex flex-col items-center py-2">
                <span className="font-sans text-lg font-semibold text-stone-900">
                  26,036
                </span>
                <span className="font-sans text-xs text-stone-500">
                  Page views
                </span>
              </div>
              <div className="flex flex-col items-center py-2">
                <span className="font-sans text-lg font-semibold text-stone-900">
                  46%
                </span>
                <span className="font-sans text-xs text-stone-500">
                  Bounce rate
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
