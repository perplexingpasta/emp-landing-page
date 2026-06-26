import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

const stats = [
  { value: 1768, label: 'Delegates registered' },
  { value: 51, label: 'Events managed' },
  { value: 7, prefix: '₹', suffix: '.97L', label: 'Amount handled' },
  { value: 99, suffix: '.9%', label: 'Uptime during fest' },
];

export function Proof() {
  return (
    <section id="proof" className="cv-auto bg-white py-16 md:py-20">
      <div className="mx-auto max-w-265 px-5 md:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-3 inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 font-sans text-xs font-medium tracking-wider text-emerald-600 uppercase">
              The numbers/
            </span>
            <h2 className="font-heading text-[2.2rem] font-bold text-stone-900 md:text-4xl">
              Proven at scale.{' '}
              <span className="text-amber-600 italic">Not a demo.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Framing */}
        {/*<p className="mt-6 px-4 text-center font-sans text-base text-stone-500 md:text-lg">
          My website handled all the registrations for TATVAM 2026, JSS Medical
          College, Mysuru — a real fest, with real stakes.
        </p>*/}

        {/* Animated stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:mt-14 md:grid-cols-4 md:gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08}>
              <div className="rounded-2xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:p-6">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  label={stat.label}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

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
          <div className="mx-auto mt-8 max-w-3xs md:hidden">
            <div className="grid grid-cols-2 divide-x divide-stone-200 rounded-2xl border border-stone-200 bg-white">
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
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
