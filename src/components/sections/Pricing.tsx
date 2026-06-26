import { MessageCircle, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { cn } from '@/lib/utils';

const whatsappNumber = '+918123655765';
const whatsappMessage = encodeURIComponent(
  "Hi! Can you tell me more about how you can make our upcoming fest 10x better?",
);

interface TierProps {
  name: string;
  bestFor: string;
  includes: string[];
  price: string;
  highlighted?: boolean;
}

function PricingTier({
  name,
  bestFor,
  includes,
  price,
  highlighted = false,
}: TierProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col rounded-2xl border p-6 md:p-8',
        highlighted
          ? 'border-amber-300 bg-linear-to-b from-amber-50/50 to-white shadow-lg shadow-amber-100/30'
          : 'border-stone-200 bg-white',
      )}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-amber-200 bg-amber-100 px-4 py-1 font-sans text-xs font-medium text-amber-700">
          Most popular
        </span>
      )}
      <h3 className="font-heading text-xl font-bold text-stone-900">{name}</h3>
      <p className="mt-1 font-sans text-sm text-stone-500">{bestFor}</p>
      <div className="mt-5">
        <span className="font-heading text-[2.2rem] font-bold text-stone-900">
          {price}
        </span>
      </div>
      <ul className="mt-6 flex-1 space-y-3">
        {includes.map(item => (
          <li key={item} className="flex items-start gap-3">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
            <span className="font-sans text-sm text-stone-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-16 px-2 md:py-20">
      <div className="mx-auto max-w-265 px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <span className="mb-3 inline-block rounded-full border border-amber-200 bg-amber-50 px-3 py-1 font-sans text-xs font-medium tracking-wider text-amber-700 uppercase">
              PRICING
            </span>
            <h2 className="font-heading text-[2.2rem] font-bold text-stone-900 md:text-4xl">
              Simple, transparent{' '}
              <span className="italic text-amber-600">pricing</span>.
            </h2>
            <p className="mt-3 font-sans text-base text-stone-500">
              No hidden charges. No surprises.
            </p>
            <p className="mt-8 font-sans px-2 text-base text-stone-400">
              Your team spends 300+ hours on manual admin every fest. At even
              ₹300/hour of your team's time, that's ₹90,000 of invisible cost —
              before the errors.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto mt-10 grid max-w-3xl gap-6 md:mt-14 md:grid-cols-2">
            {/*
              PRICE_TIER_1: Replace "₹—" with the actual starting price for the Essentials tier.
              Example format: "Starting from ₹XX,XXX"
            */}
            <PricingTier
              name="Essentials"
              bestFor="Smaller fests, first-time organisers"
              includes={[
                'Unique Delegate IDs',
                'Registration Tiers & Kits',
                'Event Registration & Checkout',
                'WhatsApp Group Auto-Routing',
                'Confirmation Emails',
                'Live Fest Schedule',
                'Google Sheets Auto-Sync',
                'Basic Admin Dashboard',
              ]}
              price="₹49,997"
            />
            {/*
              PRICE_TIER_2: Replace "₹—" with the actual starting price for the Full Platform tier.
              Example format: "Starting from ₹XX,XXX"
            */}
            <PricingTier
              name="Full Platform"
              bestFor="Large intercollegiate fests, flagship annual events"
              includes={[
                'Everything in Essentials',
                'Merch Store with payment tracking',
                'Full Data Export (cultural, sports, merch)',
                'Payment Verification System',
                'Marketing Email Campaigns',
                'Advanced Admin Dashboard',
                'Custom Domain Setup',
                'Real-time Support During Fest',
              ]}
              price="₹1,09,997"
              highlighted
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mx-auto mt-10 max-w-xl text-center md:mt-12">
            <p className="mb-4 font-sans text-base text-stone-500">
              Not sure which is right for you?
            </p>
            <Button
              variant="outline"
              size="lg"
              className="group w-full rounded-xl border-2 border-amber-600! bg-amber-50/50 font-sans text-base font-semibold text-stone-900 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:border-amber-400! hover:bg-amber-100 md:w-auto"
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
            <p className="mt-4 font-sans px-4 text-sm text-stone-400">
              50% upfront, 50% on launch.
              <br />
              Not happy before your fest? Full refund on the upfront. No
              questions.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
