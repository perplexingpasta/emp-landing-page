import { ScrollReveal } from '@/components/shared/ScrollReveal';

export function ImagineThis() {
  return (
    <section id="imagine" className="bg-white px-2 py-16 md:py-20">
      <div className="mx-auto max-w-265 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            {/*<span className="mb-3 inline-block rounded-full border border-amber-200 bg-amber-50 px-3 py-1 font-sans text-xs font-medium tracking-wider text-amber-700 uppercase">
              THIS COULD BE YOU
            </span>*/}
            <h2 className="font-heading text-[2.2rem] font-bold text-stone-900 md:text-[2.5rem]">
              Imagine having <br className="block md:hidden" />
              <span className="text-amber-600 italic">zero problems</span> on
              the morning of your fest
            </h2>
            {/*<h2 className="font-heading text-[2.2rem] font-bold text-stone-900 md:text-4xl">
              Picture the morning of <span className="italic">your fest</span>
            </h2>*/}
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mx-auto mt-8 space-y-6 font-sans text-base leading-relaxed text-stone-600 md:text-xl">
              <p>
                It's 11 PM, the night before. Your phone has 47 unread WhatsApp
                messages — most of them asking "how do I register?" You're
                staring at a spreadsheet with 800 rows, trying to figure out who
                paid and who didn't. Somewhere, someone registered for the wrong
                event. You won't find out until tomorrow morning, when they show
                up at the wrong venue and then it's all chaos from there on.
              </p>
              <p>
                Now picture this instead. It's 8 AM on Day 1 of your fest. 4,500
                delegates have registered. Every one of them has a delegate ID
                and have received a confirmation email. The schedule is live on
                the website. Merch sold out during pre-fest registration. The
                desk has a clean dashboard — not a printed Excel sheet. Your
                phone isn't buzzing. You're actually at the fest, having fun.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-heading mt-8 px-2 text-center text-xl font-bold text-stone-800 md:text-2xl">
              JSS Medical College didn't touch a single spreadsheet for Tatvam
              2026.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
