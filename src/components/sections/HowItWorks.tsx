import {
  MessageCircle,
  Settings,
  Eye,
  Rocket,
  Headphones,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const steps = [
  {
    step: "01",
    icon: <MessageCircle className="h-5 w-5" />,
    title: "You reach out",
    description:
      "WhatsApp me. We'll discuss your fest — dates, expected delegates, number of events, and any special requirements your college has.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    step: "02",
    icon: <Settings className="h-5 w-5" />,
    title: "I set up your platform",
    description:
      "Within 24 hours, your fully branded platform is ready. College name, fest dates, delegate tiers, event list — all configured via the onboarding wizard.",
    color: "bg-stone-100 text-stone-700",
  },
  {
    step: "03",
    icon: <Eye className="h-5 w-5" />,
    title: "Your team reviews",
    description:
      "Test the platform end-to-end. Register as a delegate, try the event cart, check the admin dashboard. I'll walk you through everything on a call.",
    color: "bg-stone-100 text-stone-700",
  },
  {
    step: "04",
    icon: <Rocket className="h-5 w-5" />,
    title: "Launch & go live",
    description:
      "Platform deployed on your custom domain. Registration links shared. Payment gateway live. Emails flowing. You focus on the fest, the platform handles the rest.",
    color: "bg-stone-100 text-stone-700",
  },
  {
    step: "05",
    icon: <Headphones className="h-5 w-5" />,
    title: "Real-time support",
    description:
      "I monitor the platform throughout your fest. Any issue? WhatsApp me — I respond in minutes. Post-fest, you get all data exported neatly.",
    color: "bg-amber-100 text-amber-700",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 md:py-[84px]"
    >
      <div className="mx-auto max-w-[1060px] px-4 md:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full border border-stone-200 bg-stone-100 px-3 py-1 font-sans text-xs font-medium tracking-wider text-stone-600 uppercase">
            How it works
          </span>
          <h2 className="font-heading text-3xl font-bold text-stone-900 md:text-4xl">
            From first message to{" "}
            <span className="italic">live platform</span> in days
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-stone-500 md:text-lg">
            Simple, transparent process. No technical knowledge needed from your
            side.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-3xl md:mt-16">
          {/* Connector line */}
          <div className="absolute top-8 bottom-8 left-[23px] w-px bg-stone-200 md:left-1/2 md:-translate-x-px" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.08}>
              <div
                key={step.step}
                className={cn(
                  "relative flex gap-6 md:gap-0",
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                )}
              >
                {/* Step circle */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white bg-white shadow-sm md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2">
                  <div
                    className={cn(
                      "flex h-full w-full items-center justify-center rounded-full",
                      step.color,
                    )}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={cn(
                    "flex-1 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm md:w-[calc(50%-2rem)] md:flex-none",
                    i % 2 === 0 ? "md:mr-auto" : "md:ml-auto",
                  )}
                  style={{
                    transition:
                      "border-color 180ms cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  <span className="font-heading text-xs font-bold tracking-wider text-amber-600 uppercase">
                    Step {step.step}
                  </span>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-stone-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-stone-500">
                    {step.description}
                  </p>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
