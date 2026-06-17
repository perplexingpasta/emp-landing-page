import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function CTA() {
  const whatsappNumber = "+919XXXXXXXXX"; // Replace with your WhatsApp number
  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in getting FestFlow for our college fest. Can you share more details?",
  );

  return (
    <section id="cta" className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(217,119,6,0.06)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl">
          <ScrollReveal>
            <div className="rounded-3xl border border-amber-200 bg-gradient-to-b from-amber-50/80 to-white p-8 text-center shadow-lg shadow-amber-100/50 md:p-12">
              <span className="mb-4 inline-block rounded-full border border-amber-200 bg-amber-100 px-3 py-1 font-sans text-xs font-medium tracking-wider text-amber-700 uppercase">
                Limited slots per fest season
              </span>

              <h2 className="font-heading text-3xl font-bold text-stone-900 md:text-4xl">
                Ready to make your fest unforgettable?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-stone-500">
                I take on only a handful of colleges per season to ensure
                quality. Let's talk — I'll show you a personalized demo with
                your college's branding.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4">
                <Button
                  size="lg"
                  className="group w-full font-sans text-base sm:w-auto"
                  asChild
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </Button>

                <p className="font-sans text-sm text-stone-400">
                  Typical response time: under 30 minutes
                </p>
              </div>

              <div className="mt-8 border-t border-amber-100 pt-6">
                <p className="font-sans text-xs text-stone-400">
                  Currently serving medical colleges across India. Built by a
                  medic who understands how college fests actually work.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
