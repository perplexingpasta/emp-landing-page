import { Users, LayoutDashboard, CheckCircle2, XCircle } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const delegateFeatures: { text: string; negative?: boolean }[] = [
  { text: "Unique Delegate Registration IDs" },
  { text: "Delegate Registration Tiers/Kits" },
  { text: "Event Registration Cart Checkout" },
  { text: "WhatsApp Groups & Community" },
  { text: "Blazing Fast & Responsive Website" },
  { text: "Confirmation Emails" },
  { text: "Live Fest Schedule" },
  { text: "Merch Store" },
  { text: "Duplicate Delegate Registrations", negative: true },
  { text: "Duplicate Event Registrations", negative: true },
];

const organiserFeatures: { text: string; negative?: boolean }[] = [
  { text: "Data Export for Cultural, Sports & Merch Registrations" },
  { text: "Google Sheets Auto-Sync" },
  { text: "Payment Verification" },
  { text: "Marketing Emails" },
  { text: "Data Analytics" },
  { text: "Zero Data Loss" },
  { text: "Custom Domain" },
  { text: "Live Admin Dashboard" },
  { text: "System Health & Diagnostics" },
  { text: "Event Organization Headache", negative: true },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="mx-auto max-w-265 px-4 md:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full border border-amber-200 bg-amber-50 px-3 py-1 font-sans text-xs font-medium tracking-wider text-amber-700 uppercase">
            The solution
          </span>
          <h2 className="font-heading text-3xl font-bold text-stone-900 md:text-4xl">
            Everything your fest needs,{" "}
            <span className="italic text-amber-600">in one place</span>
          </h2>
        </div>

        {/* Two-column feature lists */}
        <ScrollReveal>
          <div className="mt-14 pl-4 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-16">
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
              <ul className="space-y-3.5 pl-6">
                {delegateFeatures.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3">
                    {feature.negative ? (
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    ) : (
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    )}
                    <span className="font-sans text-sm max-w-68 text-stone-600">
                      {feature.text}
                    </span>
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
              <ul className="space-y-3.5 pl-6">
                {organiserFeatures.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3">
                    {feature.negative ? (
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    ) : (
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    )}
                    <span className="font-sans text-sm max-w-68 text-stone-600">
                      {feature.text}
                    </span>
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
