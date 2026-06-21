import { Users, LayoutDashboard, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const delegateFeatures: { headline: string; body: string }[] = [
  {
    headline: "No more 'did you register me?'",
    body: "Delegates get their own IDs and can check their status themselves. You stop being the human registration desk.",
  },
  {
    headline: "No kit chaos at the counter",
    body: "Different registration tiers, different kits. The system tracks who gets what — automatically.",
  },
  {
    headline: "No form for every single event",
    body: "Delegates pick everything they want in one go. One checkout. Done.",
  },
  {
    headline: "They find their group. You don't send 800 links.",
    body: "Delegates get directed to the right WhatsApp group automatically on registration.",
  },
  {
    headline: "Opens before they lose interest",
    body: "The site loads instantly on any screen. No one waits. No one pinches to zoom.",
  },
  {
    headline: "No one asks if their registration went through",
    body: "Every delegate gets a confirmation the moment they register. Your WhatsApp doesn't blow up.",
  },
  {
    headline: "You stop being the human timetable",
    body: "The entire schedule is live on the website. Any changes reflect instantly.",
  },
  {
    headline: "Sell merch before the fest begins",
    body: "Orders come in, payments are tracked. No cash counters, no chaos on the day.",
  },
];

const organiserFeatures: { headline: string; body: string }[] = [
  {
    headline: "One click. Every registration. Clean.",
    body: "Export every delegate's data — events, sports, merch — instantly. No copy-pasting from forms.",
  },
  {
    headline: "Your sheet updates itself",
    body: "Every new registration appears in your Google Sheet automatically. No manual data entry.",
  },
  {
    headline: "No more screenshot archaeology",
    body: "Every payment is verified and logged. No digging through WhatsApp to confirm who paid.",
  },
  {
    headline: "Reach every delegate. In one send.",
    body: "Send updates, reminders, and announcements to every registered delegate. No copying email IDs from a spreadsheet.",
  },
  {
    headline: "Know exactly how your fest is performing",
    body: "See which events are filling up, where delegates are coming from, and what's trending — in real time.",
  },
  {
    headline: "Your data. Always safe.",
    body: "Every registration, every payment, every delegate detail is backed up. Even if something goes wrong.",
  },
  {
    headline: "It's your fest. It's your domain.",
    body: "Your website lives at yourcollegefest2026.com — not a subdomain of someone else's platform.",
  },
  {
    headline: "Your entire fest. From your phone.",
    body: "See registrations, delegate counts, payment status — live, from anywhere.",
  },
  {
    headline: "One person. One entry. Always.",
    body: "The system flags duplicates so you never chase the same person twice.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-stone-50 py-16 md:py-20">
      <div className="mx-auto max-w-265 px-4 md:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full border border-amber-200 bg-amber-50 px-3 py-1 font-sans text-xs font-medium tracking-wider text-amber-700 uppercase">
            The solution
          </span>
          <h2 className="font-heading text-3xl font-bold text-stone-900 md:text-4xl">
            Everything handled.{" "}
            <span className="italic text-amber-600">
              Nothing left to chance.
            </span>
          </h2>
        </div>

        {/* Two-column feature lists */}
        <ScrollReveal>
          <div className="mt-12 pl-4 grid gap-10 md:mt-14 md:grid-cols-2 md:gap-16">
            {/* Delegates */}
            <div>
              <div className="mb-5 flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                  <Users className="h-4 w-4" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-stone-800">
                  For delegates
                </h3>
              </div>
              <ul className="space-y-5 pl-6">
                {delegateFeatures.map((feature) => (
                  <li key={feature.headline} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-500" />
                    <div>
                      <p className="font-sans text-sm font-semibold text-stone-800">
                        {feature.headline}
                      </p>
                      <p className="mt-0.5 font-sans text-sm leading-relaxed text-stone-500">
                        {feature.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Organisers */}
            <div>
              <div className="mb-5 flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                  <LayoutDashboard className="h-4 w-4" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-stone-800">
                  For organisers
                </h3>
              </div>
              <ul className="space-y-5 pl-6">
                {organiserFeatures.map((feature) => (
                  <li key={feature.headline} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-500" />
                    <div>
                      <p className="font-sans text-sm font-semibold text-stone-800">
                        {feature.headline}
                      </p>
                      <p className="mt-0.5 font-sans text-sm leading-relaxed text-stone-500">
                        {feature.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
