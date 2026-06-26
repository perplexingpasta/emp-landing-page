import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { WhatsAppIcon } from '@/components/shared/WhatsAppIcon';

export function CTA() {
  const whatsappNumber = '+916362840780'; // Replace with your WhatsApp number
  const whatsappMessage = encodeURIComponent(
    'Hi! Can you tell me more about how you can make our upcoming fest 10x better?'
  );

  return (
    <section
      id="cta"
      className="cv-auto relative overflow-hidden bg-white py-16 pb-56 md:py-40"
    >
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(217,119,6,0.06)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-265 px-5 md:px-8">
        <div className="mx-auto max-w-2xl">
          <ScrollReveal>
            <div className="rounded-3xl border border-amber-200 bg-linear-to-b from-amber-50/80 to-white p-8 text-center shadow-lg shadow-amber-100/50 md:p-12">
              <span className="mb-4 inline-block rounded-full border border-amber-200 bg-amber-100 px-3 py-1 font-sans text-xs font-medium tracking-wider text-amber-700 uppercase md:text-sm">
                only 3 slots per month
              </span>

              <h2 className="font-heading md:text-[2.5rem text-[2.2rem] font-bold text-stone-900">
                Ready to make your fest{' '}
                <span className="text-amber-600 italic">unforgettable</span>?
              </h2>

              <p className="mt-4 font-sans text-base leading-relaxed text-stone-500 md:text-xl">
                I take on only a handful of colleges per season{' '}
                <br className="hidden md:block" /> to ensure quality. Let's
                talk.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4">
                <Button
                  size="lg"
                  className="group w-full rounded-xl border border-amber-300/40 bg-[#25D366] font-sans text-base text-white shadow-md shadow-amber-500/20 transition-all duration-200 hover:scale-[1.02] hover:bg-[#20bd5a] hover:shadow-lg hover:shadow-amber-500/30 sm:w-auto md:text-xl"
                  asChild
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon />
                    Chat on WhatsApp
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </Button>

                {/*<p className="font-sans text-sm text-stone-400">
                  Typical response time: under 15 minutes
                </p>*/}
              </div>

              {/*<div className="mt-6 border-t border-amber-100 pt-5">
                <p className="font-sans text-xs text-stone-400">
                  Currently helping medical colleges organise fests across
                  India. Built by a medico who understands how college fests
                  actually work.
                </p>
              </div>*/}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
