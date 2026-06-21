import { MessageCircle, Settings, Eye, Rocket, Headphones, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const whatsappNumber = "+919XXXXXXXXX";
const whatsappMessage = encodeURIComponent(
  "Hi! I'm interested in getting FestFlow for our college fest. Can you share more details?",
);

const steps = [
  {
    step: "01",
    icon: <MessageCircle className="h-5 w-5" />,
    title: "You Reach Out on WhatsApp",
    description:
      "We'll talk about your fest — how many delegates you're expecting, what events you're running, anything unique about your college.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    step: "02",
    icon: <Settings className="h-5 w-5" />,
    title: "I Set Up Your Platform",
    description:
      "Give me 4-6 weeks and I'll have your branded platform ready. Fest name, dates, delegate tiers, event list — everything in place.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    step: "03",
    icon: <Eye className="h-5 w-5" />,
    title: "Your Team Reviews",
    description:
      "Take it for a spin. Register as a delegate, try the event cart, check out the merch. I'll hop on a call and walk your team through everything.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    step: "04",
    icon: <Rocket className="h-5 w-5" />,
    title: "Launch & Go Live",
    description:
      "Your platform goes live on your domain. Registration links shared, emails flowing. You focus on making the fest amazing — I'll keep the platform up & running.",
    color: "bg-stone-100 text-stone-700",
  },
  {
    step: "05",
    icon: <Headphones className="h-5 w-5" />,
    title: "Real-Time Support",
    description:
      "I'll be active and monitoring throughout the fest. If anything breaks, we coordinate on WhatsApp and I'll fix it in minutes.",
    color: "bg-amber-100 text-amber-700",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-21">
      <div className="mx-auto max-w-265 px-4 md:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full border border-stone-200 bg-stone-100 px-3 py-1 font-sans text-xs font-medium tracking-wider text-stone-600 uppercase">
            How it works
          </span>
          <h2 className="font-heading text-3xl font-bold text-stone-900 md:text-4xl">
            From first message to{" "}
            <span className="italic text-amber-600">live platform</span> in days
          </h2>
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
                    {step.step === "01" && (
                      <div className="mt-3">
                        <Button
                          className="group w-full font-sans text-sm"
                          asChild
                        >
                          <a
                            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MessageCircle className="h-5 w-5" />
                            Chat on WhatsApp
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                          </a>
                        </Button>
                      </div>
                    )}
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
