import { ScrollReveal } from '@/components/shared/ScrollReveal';

export function ImagineThis() {
  return (
    <section id="imagine" className="bg-[#faf5ed] py-16 px-2 md:py-20">
      <div className="mx-auto max-w-265 px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            {/*<span className="mb-3 inline-block rounded-full border border-amber-200 bg-amber-50 px-3 py-1 font-sans text-xs font-medium tracking-wider text-amber-700 uppercase">
              THIS COULD BE YOU
            </span>*/}
            <h2 className="font-heading text-3xl font-bold text-stone-900 md:text-4xl">
              Imagine having <br />
              <span className="italic text-amber-600">zero problems</span> on
              the morning of your fest
            </h2>
            {/*<h2 className="font-heading text-3xl font-bold text-stone-900 md:text-4xl">
              Picture the morning of <span className="italic">your fest</span>
            </h2>*/}
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-8 space-y-6 font-sans max-w-88 mx-auto text-base leading-relaxed text-stone-600 md:text-lg">
              <p>
                It's 11 PM, the night before. Your phone has 47 unread WhatsApp
                messages — most of them asking "how do I register?" You're
                staring at a spreadsheet with 800 rows, trying to figure out who
                paid and who didn't. Somewhere, someone registered for the wrong
                event. You won't find out until tomorrow morning, when they show
                up at the wrong venue and then it's all chaos from there on.
              </p>
              <p>
                Now picture this instead. It's 8 AM on Day 1 of your fest. 3,200
                delegates have registered. Every one of them has a delegate ID
                and have received a confirmation email. The schedule is live on
                the website. Merch sold out during pre-fest registration. The
                desk has a clean dashboard — not a printed Excel sheet. Your
                phone isn't buzzing. You're actually at the fest, having fun.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-8 px-2 text-center font-sans text-lg font-bold text-stone-800 md:text-2xl">
              JSS Medical College didn't touch a single spreadsheet for Tatvam
              2026.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
