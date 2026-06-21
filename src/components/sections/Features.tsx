import { Users, LayoutDashboard, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const delegateFeatures: { headline: string; body: string }[] = [
  {
    headline: "No more 'did you register me?'",
    body: "A unique Delegate ID gets created for each delegate.",
  },
  {
    headline: "No chaos at the registration counter",
    body: "Different registration tiers, different kits. The system tracks who gets what — automatically.",
  },
  {
    headline: "No google forms for every single event",
    body: "Delegates pick everything they want in one go. One checkout. Done.",
  },
  {
    headline: "You don't send 800 links",
    body: "Delegates get directed to the right WhatsApp group automatically on registration.",
  },
  {
    headline: "Blazing fast to load",
    body: "The site loads instantly on all devices. No one waits. No one pinches to zoom.",
  },
  {
    headline: "'Did my registration go through?'",
    body: "Every delegate gets a confirmation email the moment they register.",
  },
  // {
  //   headline: "You stop being the human timetable",
  //   body: "The entire schedule is live on the website. Any changes reflect instantly.",
  // },
  {
    headline: "Sell merch and make money",
    body: "Orders come in, payments are tracked. No cash counters, no chaos on the day.",
  },
];

const organiserFeatures: { headline: string; body: string }[] = [
  {
    headline: "Every registration is clean",
    body: "Export every delegate's data — events, sports, merch instantly. No copy-pasting from google forms.",
  },
  {
    headline: "Your sheet updates itself",
    body: "Every new registration appears in your Google Sheet automatically. No manual data entry.",
  },
  {
    headline: "No more screenshot hassle",
    body: "Every payment is logged. No digging through WhatsApp to confirm who paid.",
  },
  // {
  //   headline: "Reach every delegate. In one send.",
  //   body: "Send updates, reminders, and announcements to every registered delegate. No copying email IDs from a spreadsheet.",
  // },
  {
    headline: "Know exactly how your fest is performing",
    body: "See which events are filling up, where delegates are coming from, etc.",
  },
  {
    headline: "Your data is always safe",
    body: "Every registration, every payment, every delegate detail is backed up.",
  },
  // {
  //   headline: "It's your fest. It's your domain.",
  //   body: "Your website lives at yourcollegefest2026.com — not a subdomain of someone else's platform.",
  // },
  {
    headline: "Monitor the entire fest from your phone",
    body: "See registrations, delegate counts, payment status — live, from anywhere.",
  },
  {
    headline: "One person. One entry. Always.",
    body: "The system flags duplicates so you never chase the same person or registration twice.",
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
              <div className="mb-5 flex items-start gap-2.5">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                  <Users className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-stone-800">
                    For delegates
                  </h3>
                  <div className="mt-1.5 h-0.5 w-14 rounded-full bg-gradient-to-r from-amber-400 to-amber-600" />
                </div>
              </div>
              <ul className="mx-auto max-w-md space-y-5">
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
              <div className="mb-5 flex items-start gap-2.5">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                  <LayoutDashboard className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-stone-800">
                    For organisers
                  </h3>
                  <div className="mt-1.5 h-0.5 w-14 rounded-full bg-gradient-to-r from-amber-400 to-amber-600" />
                </div>
              </div>
              <ul className="mx-auto max-w-md space-y-5">
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
