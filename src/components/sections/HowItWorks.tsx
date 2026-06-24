import {
  MessageCircle,
  Settings,
  Eye,
  Rocket,
  Headphones,
  ArrowRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

const whatsappNumber = '+916362840780';
const whatsappMessage = encodeURIComponent(
  "Hi! I'm interested in getting FestFlow for our college fest. Can you share more details?"
);

const steps = [
  {
    step: '01',
    icon: <MessageCircle className="h-5 w-5" />,
    title: 'You tell me about your fest',
    description:
      "We talk about your fest — how many delegates you're expecting, what events you're running, your fest requirements.",
    color: 'bg-amber-100 text-amber-700',
  },
  {
    step: '02',
    icon: <Settings className="h-5 w-5" />,
    title: 'I build everything',
    description:
      'Your branded platform takes shape — registration, events, schedule, merch. Give me 4-6 weeks. You focus on the fest. I handle the tech.',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    step: '03',
    icon: <Eye className="h-5 w-5" />,
    title: 'You see it. Your committee is impressed.',
    description:
      "I walk your team through the platform on a quick call. It's beautiful. It's fast. It just works.",
    color: 'bg-amber-100 text-amber-700',
  },
  {
    step: '04',
    icon: <Rocket className="h-5 w-5" />,
    title: 'Registration opens. Delegates pour in.',
    description:
      "Your platform goes live. Registrations come in clean. Payments are logged. You don't touch a single spreadsheet.",
    color: 'bg-amber-100 text-amber-700',
  },
  {
    step: '05',
    icon: <Headphones className="h-5 w-5" />,
    title: 'You actually enjoy your own fest',
    description:
      "I monitor everything throughout the fest. If anything needs fixing, I handle it. You're in the auditorium, watching it all come together.",
    color: 'bg-amber-100 text-amber-700',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#faf5ed] px-2 py-16 md:py-20">
      <div className="mx-auto max-w-265 px-4 md:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full border border-sky-200 bg-sky-50 px-3 py-1 font-sans text-xs tracking-wider text-sky-600 uppercase">
            How it works
          </span>
          <h2 className="font-heading mt-2 text-3xl font-bold text-stone-900 md:text-4xl">
            From first message to{' '}
            <span className="text-amber-600 italic">live platform</span> in days
          </h2>
        </div>

        <div className="relative mx-auto mt-12 max-w-3xl md:mt-14">
          {/* Connector line */}
          <div className="absolute top-8 bottom-8 left-5.75 w-px bg-stone-200 md:left-1/2 md:-translate-x-px" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.08}>
                <div
                  key={step.step}
                  className={cn(
                    'relative flex gap-6 md:gap-0',
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  )}
                >
                  {/* Step circle */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white bg-white shadow-sm md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2">
                    <div
                      className={cn(
                        'flex h-full w-full items-center justify-center rounded-full',
                        step.color
                      )}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={cn(
                      'flex-1 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm md:w-[calc(50%-2rem)] md:flex-none',
                      i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                    )}
                    style={{
                      transition:
                        'border-color 180ms cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  >
                    <span className="font-heading text-base font-bold tracking-wider text-amber-600 uppercase">
                      Step {step.step}
                    </span>
                    <h3 className="font-heading mt-1 text-xl font-semibold text-stone-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 font-sans text-base leading-relaxed text-stone-500">
                      {step.description}
                    </p>
                    {step.step === '01' && (
                      <div className="mt-3">
                        <Button
                          className="group w-full rounded-xl bg-linear-to-r from-amber-500 to-amber-600 font-sans text-sm text-white shadow-md shadow-amber-500/20 transition-all duration-200 hover:scale-[1.02] hover:from-amber-600 hover:to-amber-700 hover:shadow-lg hover:shadow-amber-500/30"
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
