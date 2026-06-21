import { Users, LayoutDashboard, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const delegateFeatures = [
  "3-Tier Delegate Registration",
  "Event Registration Cart Checkout",
  "WhatsApp Groups & Community",
  "Gallery + Results Pages",
  "Confirmation Emails",
  "Live Fest Schedule",
  "Merch Store",
];

const organiserFeatures = [
  "Unique Delegate ID to prevent Duplicate Registrations",
  "Payment Verification",
  "Google Sheets Auto-Sync",
  "Data Analytics",
  "Data Export for Cultural, Sports & Merch Registrations",
  "Live Admin Dashboard",
  "System Health & Diagnostics",
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
            <span className="italic">in one place</span>
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
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    <span className="font-sans text-sm text-stone-600 max-w-68">
                      {feature}
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
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    <span className="font-sans text-sm text-stone-600 max-w-68">
                      {feature}
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
