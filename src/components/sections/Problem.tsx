import { FileSpreadsheet, Users, DollarSign, Clock } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

const painPoints = [
  {
    icon: <FileSpreadsheet className="h-5 w-5" />,
    title: 'Google Forms chaos',
    description:
      'Ten sheets, three forms, zero coherence. Someone always breaks a formula.',
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: 'Duplicate registrations',
    description:
      'Same person, different emails — no way to tell who actually paid.',
  },
  {
    icon: <DollarSign className="h-5 w-5" />,
    title: 'Payment tracking hell',
    description:
      'Screenshots buried in WhatsApp. Manual bank statement cross-checking. Every. Single. Student.',
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: 'Hours lost to admin work',
    description:
      'Your team spends more time on spreadsheets than on the actual fest.',
  },
];

export function Problem() {
  return (
    <section id="problem" className="bg-[#faf5ed] py-16 md:py-20">
      <div className="mx-auto max-w-265 px-6 md:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full border border-red-200 bg-red-50 px-3 py-1 font-sans text-xs font-medium tracking-wider text-red-600 uppercase">
            The problem
          </span>
          <h2 className="font-heading text-[2.2rem] font-bold text-stone-900 md:text-4xl">
            Last year's fest cost your team 50+ hours of{' '}
            <span className="text-amber-600 italic">spreadsheet hell</span>
          </h2>
        </div>

        {/* Compact stat callout */}
        {/*<p className="mt-4 text-center font-sans text-sm font-medium text-red-600 md:text-base">
          40+ hours lost to manual admin. Every. Single. Fest.
        </p>*/}

        {/* Pain points — 2×2 grid */}
        <ScrollReveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-12 md:gap-5">
            {painPoints.map(point => (
              <div
                key={point.title}
                className="flex gap-4 rounded-xl border border-stone-200/80 bg-white p-4 transition-colors hover:border-red-200/50 md:p-5"
                style={{
                  transition:
                    'border-color 250ms cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500">
                  {point.icon}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold tracking-wide text-stone-800">
                    {point.title}
                  </h3>
                  <p className="mt-1 font-sans text-base leading-relaxed text-stone-500">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Bridge transition */}
        <p className="mt-8 px-4 text-center font-sans text-base font-light text-stone-600 italic md:mt-10 md:text-lg">
          This year, you can walk into the auditorium knowing every delegate,
          every payment, every event is handled. Automatically.
        </p>
      </div>
    </section>
  );
}
