import {
  Users,
  ShoppingCart,
  Shirt,
  QrCode,
  LayoutDashboard,
  CheckCircle,
  Sheet,
  ToggleLeft,
  TrendingUp,
  Wand2,
  Palette,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  featured?: boolean;
}

function FeatureCard({
  icon,
  title,
  description,
  className,
  featured,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group rounded-2xl border p-5 md:p-6",
        featured
          ? "border-amber-200 bg-amber-50/40"
          : "border-stone-200 bg-white",
        className,
      )}
      style={{
        transition:
          "border-color 180ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 180ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <div
        className={cn(
          "mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg",
          featured
            ? "bg-amber-100 text-amber-700"
            : "bg-stone-100 text-stone-600",
        )}
        style={{
          transition: "background-color 200ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {icon}
      </div>
      <h3 className="font-heading text-base font-semibold text-stone-900">
        {title}
      </h3>
      <p className="mt-1.5 font-sans text-sm leading-relaxed text-stone-500">
        {description}
      </p>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="relative py-20 md:py-[88px]">
      <div className="mx-auto max-w-[1060px] px-4 md:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full border border-amber-200 bg-amber-50 px-3 py-1 font-sans text-xs font-medium tracking-wider text-amber-700 uppercase">
            The solution
          </span>
          <h2 className="font-heading text-3xl font-bold text-stone-900 md:text-4xl">
            Everything your fest needs,{" "}
            <span className="italic">in one place</span>
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-stone-500 md:text-lg">
            Built from real experience managing a 50+ event medical college
            festival. No feature bloat — just what matters.
          </p>
        </div>

        {/* Asymmetric bento-style grid */}
        <ScrollReveal>
          <div className="mt-14 grid gap-4 md:mt-16 md:grid-cols-[5fr_3fr] md:gap-5">
            {/* Left column: Participant features (2x2) */}
            <div className="grid gap-4 sm:grid-cols-2">
              <FeatureCard
                icon={<Users className="h-4 w-4" />}
                title="Delegate Registration — 3 Tiers"
                description="Auto-saved drafts, duplicate detection, college ID upload. Works on slow mobile networks."
              />
              <FeatureCard
                icon={<ShoppingCart className="h-4 w-4" />}
                title="Event Cart Checkout"
                description="Browse 50+ events, add to cart, enter delegate IDs once. No typing things twice."
              />
              <FeatureCard
                icon={<Shirt className="h-4 w-4" />}
                title="Merch Store"
                description="Jerseys, hoodies, varsity jackets with custom printing. Independent cart."
              />
              <FeatureCard
                icon={<QrCode className="h-4 w-4" />}
                title="Digital Pass + QR Check-in"
                description="Personalized pass with photo, tier badge, scannable QR. Zero paper, zero hassle."
              />
            </div>

            {/* Right column: Featured organiser cards (stacked) */}
            <div className="flex flex-col gap-4">
              <FeatureCard
                featured
                icon={<LayoutDashboard className="h-4 w-4" />}
                title="Live Admin Dashboard"
                description="Total delegates, revenue by tier, top colleges, conversion funnel, merch sales — all real-time. Cmd+K global search across everything."
              />
              <FeatureCard
                icon={<Sheet className="h-4 w-4" />}
                title="Google Sheets Auto-Sync"
                description="Every registration mirrored to Sheets. Delegates, events, sports, merch — separate tabs. Auto-retry on failures. Live sync dashboard."
              />
              <FeatureCard
                icon={<CheckCircle className="h-4 w-4" />}
                title="Payment Verification"
                description="One-click approve/reject with undo. Bulk verify 100 at once. Confirmation emails with one-click digital pass access."
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom row: organiser + white-label */}
        <ScrollReveal delay={0.1}>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 md:mt-5 lg:grid-cols-4">
            <FeatureCard
              icon={<ToggleLeft className="h-4 w-4" />}
              title="Registration Toggles"
              description="Independent kill switches per category. Custom messages, deadline countdowns."
            />
            <FeatureCard
              icon={<TrendingUp className="h-4 w-4" />}
              title="Data Export & Analytics"
              description="Export to XLSX. Audit log tracking every admin action. Health dashboard."
            />
            <FeatureCard
              icon={<Wand2 className="h-4 w-4" />}
              title="6-Step Onboarding"
              description="Set fest name, dates, tiers, branding. Platform ready to launch in minutes."
            />
            <FeatureCard
              icon={<Palette className="h-4 w-4" />}
              title="No-Code Branding"
              description="Edit colors, pricing, contacts, FAQs from admin panel. No redeploys."
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
