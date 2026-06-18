import { BarChart3, Globe, Zap, Shield } from "lucide-react";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { cn } from "@/lib/utils";

const stats = [
  { value: 1700, suffix: "+", label: "Delegates registered" },
  { value: 50, suffix: "+", label: "Events managed" },
  { value: 10, prefix: "₹", suffix: "L+", label: "Payments processed" },
  { value: 99, suffix: ".9%", label: "Uptime during fest" },
];

const trustPoints = [
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Real analytics",
    description:
      "15,000+ page views across 3 fest days. Peak of 200+ concurrent users — zero crashes.",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Pan-India reach",
    description:
      "Delegates from 100+ medical colleges. College autocomplete covers 590+ recognised institutions.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Blazing fast",
    description:
      "Next.js 16 on Vercel's edge. Pages load under 1 second, even on 3G mobile networks.",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Battle-tested",
    description:
      "500+ Razorpay transactions. 2000+ Google Sheets row updates. Zero data loss.",
  },
];

export function Proof() {
  return (
    <section id="proof" className="py-20 md:py-[96px]">
      <div className="mx-auto max-w-[1060px] px-4 md:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full border border-amber-200 bg-amber-50 px-3 py-1 font-sans text-xs font-medium tracking-wider text-amber-700 uppercase">
            The numbers
          </span>
          <h2 className="font-heading text-3xl font-bold text-stone-900 md:text-4xl">
            Proven at scale.{" "}
            <span className="italic">Not a prototype.</span>
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-stone-500 md:text-lg">
            This handled a real 3-day medical college festival with 1700+
            delegates and zero downtime.
          </p>
        </div>

        {/* Animated stats with glowing borders */}
        <ScrollReveal>
          <div className="mt-14 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-4 md:gap-6">
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

        {/* Analytics screenshot placeholder */}
        <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-lg md:mt-16">
          <div className="flex items-center gap-2 border-b border-stone-100 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-amber-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-3 font-sans text-xs text-stone-400">
              Vercel Analytics — Tatvam 2026
            </span>
          </div>
          <div className="flex items-center justify-center bg-stone-100/50 p-8 md:p-12">
            <div className="text-center">
              <BarChart3 className="mx-auto h-12 w-12 text-stone-300" />
              <p className="mt-3 font-sans text-sm text-stone-400">
                Analytics screenshot placeholder
              </p>
              <p className="mt-1 font-sans text-xs text-stone-300">
                Replace with your Vercel Analytics screenshot
              </p>
            </div>
          </div>
        </div>

        {/* Trust points */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-12">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className={cn(
                "rounded-2xl border border-stone-200 bg-white p-5",
              )}
              style={{
                transition:
                  "box-shadow 180ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                {point.icon}
              </div>
              <h3 className="font-heading text-sm font-semibold text-stone-900">
                {point.title}
              </h3>
              <p className="mt-1.5 font-sans text-sm leading-relaxed text-stone-500">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
