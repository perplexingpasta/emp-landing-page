import { Users, LayoutDashboard, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { AmbientBlobs } from '@/components/shared/AmbientBlobs';

const organiserFeatures: { headline: string; body: string }[] = [
  {
    headline: 'One person. One entry. Always.',
    body: 'The system flags duplicates automatically. You never chase the same person or payment twice.',
  },
  {
    headline: 'Your Google Sheet fills itself automatically',
    body: 'Every new registration appears in your sheet without you touching anything. No manual data entry. No errors.',
  },
  {
    headline: 'Know exactly how your fest is performing',
    body: 'Live registrations, delegate counts, payment status. All from your phone.',
  },
  {
    headline: "You send ONE report to your HOD. And it's correct.",
    body: 'Export all registrations in one click. No copy-pasting from ten different Google Forms.',
  },
  {
    headline: 'You stop being the human payment detective',
    body: 'Every payment is logged and verified. No digging through WhatsApp screenshots.',
  },
];

const delegateFeatures: { headline: string; body: string }[] = [
  {
    headline: 'Your delegates register for everything in one go',
    body: "Events, sports, merch — one checkout. Done. No ten forms, no confusion, no 'which link do I click?' messages.",
  },
  {
    headline: 'Your delegates find their WhatsApp groups automatically',
    body: 'Delegates get routed to the right group/community on registration. You stop sending WhatsApp links manually.',
  },
  {
    headline: 'Merch sold out during pre-registration',
    body: "Orders come in online, payments are tracked. No cash handling, no haggling, no 'I already paid' arguments on fest day.",
  },
  {
    headline: 'The website loads instantly on any device',
    body: "No one waits. No one pinches to zoom. No one complains that the form 'isn't working on my phone.'",
  },
  {
    headline: 'Every delegate gets a confirmation email instantly',
    body: "The moment they register, it's confirmed. Your inbox stays quiet — because nobody needs to ask 'did it go through?'",
  },
];

export function Features() {
  return (
    <section id="features" className="cv-auto relative bg-white py-16 md:py-20">
      <AmbientBlobs colorTop="bg-amber-500" colorBottom="bg-emerald-500" />
      <div className="relative mx-auto max-w-265 px-4 md:px-6">
        {/* Section header */}
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-3 inline-block rounded-full border border-amber-200 bg-amber-50 px-3 py-1 font-sans text-xs font-medium tracking-wider text-amber-700 uppercase md:text-sm">
              The solution
            </span>
            <h2 className="font-heading text-[2.2rem] font-bold text-stone-900 md:text-[2.5rem]">
              Everything handled.{' '}
              <span className="text-amber-600 italic">
                Nothing left to chance.
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Two-column feature lists */}
        <div className="mt-12 grid gap-10 md:mt-14 md:gap-16 lg:grid-cols-2">
          {/* Organisers (buyer) — first column */}
          <div>
            <ScrollReveal>
              <div className="mb-5 flex items-start gap-2.5 md:justify-center">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                  <LayoutDashboard className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-stone-800 md:text-[1.75rem]">
                    For organisers
                  </h3>
                  <div className="mt-1.5 h-0.5 w-14 rounded-full bg-linear-to-r from-amber-400 to-amber-600" />
                </div>
              </div>
            </ScrollReveal>
            <ul className="mx-auto max-w-md space-y-6 px-2.5 md:max-w-xl md:px-1">
              {organiserFeatures.map((feature, i) => (
                <ScrollReveal as="li" key={feature.headline} delay={i * 0.06}>
                  <div className="flex items-start gap-3 rounded-lg transition-colors duration-200 hover:bg-amber-50/60">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
                    <div>
                      <p className="font-sans text-base font-semibold text-stone-800 md:text-xl">
                        {feature.headline}
                      </p>
                      <p className="mt-1 font-sans text-base leading-relaxed text-stone-500 md:text-lg">
                        {feature.body}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </ul>
          </div>

          {/* Delegates — second column, framed as what your delegates experience */}
          <div>
            <ScrollReveal delay={0.12}>
              <div className="mb-5 flex items-start gap-2.5 md:justify-center">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-stone-800 md:text-[1.75rem]">
                    For delegates
                  </h3>
                  <div className="mt-1.5 h-0.5 w-14 rounded-full bg-linear-to-r from-amber-400 to-amber-600" />
                </div>
              </div>
            </ScrollReveal>
            <ul className="mx-auto max-w-md space-y-6 px-2.5 md:max-w-xl md:px-1">
              {delegateFeatures.map((feature, i) => (
                <ScrollReveal
                  as="li"
                  key={feature.headline}
                  delay={0.12 + i * 0.06}
                >
                  <div className="flex items-start gap-3 rounded-lg transition-colors duration-200 hover:bg-amber-50/60">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
                    <div>
                      <p className="font-sans text-base font-semibold text-stone-800 md:text-xl">
                        {feature.headline}
                      </p>
                      <p className="mt-1 font-sans text-base leading-relaxed text-stone-500 md:text-lg">
                        {feature.body}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
