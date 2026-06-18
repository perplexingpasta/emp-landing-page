import { FileSpreadsheet, Users, DollarSign, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const painPoints = [
  {
    icon: <FileSpreadsheet className="h-5 w-5" />,
    title: "Google Forms chaos",
    description:
      "One form for delegates, another for events, a third for payments. Data scattered across 10 different sheets. Someone always messes up a formula.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Duplicate registrations",
    description:
      "Same person registers twice with different emails. No way to catch it. Payment reconciliation becomes a nightmare when you can't tell who paid.",
  },
  {
    icon: <DollarSign className="h-5 w-5" />,
    title: "Payment tracking hell",
    description:
      "Screenshot-based payment verification. Screenshots get lost in WhatsApp groups. Someone has to manually check every single one against a bank statement.",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Hours lost to admin work",
    description:
      "Exporting CSVs, merging sheets, sending confirmation emails one by one, printing ID cards manually. Your organising team spends more time on admin than on the actual fest.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="py-20 md:py-28">
      <div className="mx-auto max-w-265 px-4 md:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full border border-red-200 bg-red-50 px-3 py-1 font-sans text-xs font-medium tracking-wider text-red-600 uppercase">
            The problem
          </span>
          <h2 className="font-heading text-3xl font-bold text-stone-900 md:text-4xl">
            Managing a college fest shouldn't feel like running a{" "}
            <span className="italic">startup</span>
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-stone-500 md:text-lg">
            Every medical college fest faces the same headaches. You're here
            because you've felt them too.
          </p>
        </div>

        {/* Pain points — asymmetric 5fr 3fr split */}
        <ScrollReveal>
          <div className="mt-14 grid gap-8 md:mt-20 md:grid-cols-[5fr_3fr] md:gap-12">
            {/* Left: pain list */}
            <div className="space-y-5">
              {painPoints.map((point) => (
                <div
                  key={point.title}
                  className="flex gap-4 rounded-xl border border-stone-200/80 bg-white p-4 transition-colors hover:border-red-200/50 md:p-5"
                  style={{
                    transition:
                      "border-color 250ms cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-stone-800 tracking-wide">
                      {point.title}
                    </h3>
                    <p className="mt-1 font-sans text-sm leading-relaxed text-stone-500">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: stark stat */}
            <div className="flex flex-col justify-center rounded-2xl border border-stone-200 bg-white p-6 md:p-8">
              <p className="font-sans text-sm text-stone-400">The reality</p>
              <div className="mt-2 font-heading text-5xl font-bold text-stone-900 md:text-6xl">
                40+ hours
              </div>
              <p className="mt-2 font-sans text-sm leading-relaxed text-stone-500">
                The average organising committee spends over 40 hours on manual
                registration management — time that should have gone into making
                the fest better.
              </p>
              <div className="mt-6 border-t border-stone-100 pt-4">
                <p className="font-heading text-lg font-semibold italic text-amber-700">
                  "There has to be a better way."
                </p>
                <p className="mt-1 font-sans text-xs text-stone-400">
                  — Every fest coordinator, ever
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
