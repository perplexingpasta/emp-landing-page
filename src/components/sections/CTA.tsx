import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export function CTA() {
  const whatsappNumber = '+916362840780'; // Replace with your WhatsApp number
  const whatsappMessage = encodeURIComponent(
    "Hi! Can you tell me more about how you can make our upcoming fest 10x better?"
  );

  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-white py-16 pb-56 md:py-20"
    >
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(217,119,6,0.06)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-265 px-5 md:px-8">
        <div className="mx-auto max-w-2xl">
          <ScrollReveal>
            <div className="rounded-3xl border border-amber-200 bg-linear-to-b from-amber-50/80 to-white p-8 text-center shadow-lg shadow-amber-100/50 md:p-12">
              <span className="mb-4 inline-block rounded-full border border-amber-200 bg-amber-100 px-3 py-1 font-sans text-xs font-medium tracking-wider text-amber-700 uppercase">
                Limited slots only
              </span>

              <h2 className="font-heading text-[2.2rem] font-bold text-stone-900 md:text-4xl">
                Ready to make your fest{' '}
                <span className="text-amber-600 italic">unforgettable</span>?
              </h2>

              <p className="mt-4 font-sans text-base leading-relaxed text-stone-500">
                I take on only a handful of colleges per season to ensure
                quality. Let's talk.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4">
                <Button
                  size="lg"
                  className="group w-full rounded-xl border border-amber-300/40 bg-[#25D366] font-sans text-base text-white shadow-md shadow-amber-500/20 transition-all duration-200 hover:scale-[1.02] hover:bg-[#20bd5a] hover:shadow-lg hover:shadow-amber-500/30 sm:w-auto"
                  asChild
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
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
