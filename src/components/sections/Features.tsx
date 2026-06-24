import { Users, LayoutDashboard, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const organiserFeatures: { headline: string; body: string }[] = [
  {
    headline: "You send ONE report to your head. And it's correct.",
    body: "Export every registration in one click. No copy-pasting from ten different Google Forms.",
  },
  {
    headline: "Your Google Sheet fills itself automatically",
    body: "Every new registration appears in your sheet without you touching anything. No manual data entry. No errors.",
  },
  {
    headline: "You stop being the human payment detective",
    body: "Every payment is logged and verified. No digging through WhatsApp screenshots.",
  },
  {
    headline: "Know exactly how your fest is performing",
    body: "Live registrations, delegate counts, payment status. All from your phone.",
  },
  {
    headline: "One person. One entry. Always.",
    body: "The system flags duplicates automatically. You never chase the same person or payment twice.",
  },
];

const delegateFeatures: { headline: string; body: string }[] = [
  {
    headline: "Your delegates register for everything in one go",
    body: "Events, sports, merch — one checkout. Done. No ten forms, no confusion, no 'which link do I click?' messages.",
  },
  {
    headline: "Every delegate gets a confirmation email instantly",
    body: "The moment they register, it's confirmed. Your inbox stays quiet — because nobody needs to ask 'did it go through?'",
  },
  {
    headline: "The website loads instantly on any device",
    body: "No one waits. No one pinches to zoom. No one complains that the form 'isn't working on my phone.'",
  },
  {
    headline: "Your delegates find their WhatsApp groups automatically",
    body: "Delegates get routed to the right group/community on registration. You stop sending WhatsApp links.",
  },
  {
    headline: "Merch sold out during pre-registration",
    body: "Orders come in online, payments are tracked. No cash handling, no haggling, no 'I already paid' arguments on fest day.",
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
          <div className="mt-12 grid gap-10 pl-4 md:mt-14 md:grid-cols-2 md:gap-16">
            {/* Organisers (buyer) — first column */}
            <div>
              <div className="mb-5 flex items-start gap-2.5">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                  <LayoutDashboard className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-stone-800">
                    For organisers
                  </h3>
                  <div className="mt-1.5 h-0.5 w-14 rounded-full bg-linear-to-r from-amber-400 to-amber-600" />
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

            {/* Delegates — second column, framed as what your delegates experience */}
            <div>
              <div className="mb-5 flex items-start gap-2.5">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                  <Users className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-stone-800">
                    For delegates
                  </h3>
                  <div className="mt-1.5 h-0.5 w-14 rounded-full bg-linear-to-r from-amber-400 to-amber-600" />
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
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
