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
  "Hi! Can you tell me more about how you can make our upcoming fest 10x better?"
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
          <h2 className="font-heading mt-2 text-[2.2rem] font-bold text-stone-900 md:text-4xl">
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
                          className="group w-full rounded-xl border border-amber-300/40 bg-[#25D366] font-sans text-sm text-white shadow-md shadow-amber-500/20 transition-all duration-200 hover:scale-[1.02] hover:bg-[#20bd5a] hover:shadow-lg hover:shadow-amber-500/30"
                          asChild
                        >
                          <a
                            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-5 w-5"
                            >
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
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
