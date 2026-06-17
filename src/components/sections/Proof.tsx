import { BarChart3, Globe, Zap, Shield } from "lucide-react";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { SectionHeading } from "@/components/shared/SectionHeading";
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
      "The platform served 15,000+ page views across 3 fest days. Peak traffic of 200+ concurrent users — zero crashes.",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Pan-India reach",
    description:
      "Delegates registered from 100+ medical colleges across India. The college autocomplete covers 590+ recognised institutions.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Blazing fast",
    description:
      "Built on Next.js 16, deployed on Vercel's edge network. Pages load in under 1 second, even on 3G mobile networks.",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Battle-tested",
    description:
      "Payment system processed 500+ Razorpay transactions. Google Sheets sync handled 2000+ row updates without a single data loss.",
  },
];

export function Proof() {
  return (
    <section id="proof" className="bg-stone-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          label="The Numbers"
          title="Proven at scale. Not a prototype."
          description="This isn't a side project. It handled a real 3-day medical college festival with 1700+ delegates and zero downtime."
        />

        {/* Animated stats row */}
        <div className="mx-auto mb-16 grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              label={stat.label}
            />
          ))}
        </div>

        {/* Analytics screenshot placeholder */}
        <ScrollReveal>
          <div className="mx-auto mb-16 max-w-4xl overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-lg">
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
        </ScrollReveal>

        {/* Trust points grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, i) => (
            <ScrollReveal key={point.title} delay={i * 0.1}>
              <div
                className={cn(
                  "rounded-2xl border border-stone-200 bg-white p-5 transition-shadow hover:shadow-md",
                )}
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
