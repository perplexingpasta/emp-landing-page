import { ScrollReveal } from '@/components/shared/ScrollReveal';

export function AboutFounder() {
  return (
    <section id="about" className="cv-auto bg-[#faf5ed] px-3 py-16 md:py-20">
      <div className="mx-auto max-w-265 px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <span className="mb-3 inline-block rounded-full border border-amber-200 bg-amber-50 px-3 py-1 font-sans text-xs font-medium tracking-wider text-amber-700 uppercase md:text-sm">
              MY STORY
            </span>
            <h2 className="font-heading text-[2.2rem] font-bold text-stone-900 italic md:text-[2.5rem]">
              I've been in your shoes
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mx-auto mt-8 max-w-2xl space-y-5 font-sans text-base leading-relaxed text-stone-600 md:text-xl">
              <p>
                I'm Rishabh, a third-year MBBS student at JSS Medical College,
                Mysuru. I taught myself coding in the first two years of med
                school. I built landing pages, brochures, and graphics for
                college fests & events. Over 30 websites later, I know exactly
                what a fest committee needs because I've been on both sides.
              </p>
              <p>
                I started this because I watched my own college's fest committee
                drown in Google Forms every year. Duplicate registrations,
                payment WhatsApp screenshots, spreadsheets that broke mid-fest.
                I knew there had to be a better way, so I built it.
              </p>
              <p>
                This is a tool built by someone who understands that you have
                daily clinical postings, exams every now and then, projects, and
                a fest to organize. I have built this so you can focus on the
                fest and not the backend.
              </p>
            </div>
          </ScrollReveal>

          {/* Avatar + signature */}
          <ScrollReveal delay={0.2}>
            <div className="mt-8 flex flex-col items-center gap-3">
              <img
                src="/pfp.webp"
                alt="Rishabh"
                className="h-16 w-16 rounded-full object-cover ring-4 ring-amber-50 md:h-24 md:w-24"
                loading="lazy"
                width={64}
                height={64}
              />
              <p className="font-heading text-lg font-semibold text-stone-800 md:text-2xl">
                — Rishabh
              </p>
              <p className="font-sans text-sm text-stone-400 md:text-lg">
                3rd Year MBBS, <br /> JSS Medical College, Mysuru
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
