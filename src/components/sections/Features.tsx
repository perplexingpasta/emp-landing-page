import {
  Users,
  ShoppingCart,
  Shirt,
  QrCode,
  LayoutDashboard,
  CheckCircle,
  Sheet,
  ToggleLeft,
  Search,
  TrendingUp,
  Wand2,
  Palette,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  variant?: "default" | "highlight";
}

function FeatureCard({
  icon,
  title,
  description,
  className,
  variant = "default",
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group rounded-2xl border p-5 transition-all duration-300 hover:shadow-md md:p-6",
        variant === "highlight"
          ? "border-amber-200 bg-amber-50/50 hover:border-amber-300 hover:shadow-amber-100/50"
          : "border-stone-200 bg-white hover:border-stone-300",
        className,
      )}
    >
      <div
        className={cn(
          "mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors",
          variant === "highlight"
            ? "bg-amber-100 text-amber-700 group-hover:bg-amber-200"
            : "bg-stone-100 text-stone-600 group-hover:bg-stone-200 group-hover:text-stone-700",
        )}
      >
        {icon}
      </div>
      <h3 className="font-heading text-base font-semibold text-stone-900 md:text-lg">
        {title}
      </h3>
      <p className="mt-1.5 font-sans text-sm leading-relaxed text-stone-500">
        {description}
      </p>
    </div>
  );
}

const participantFeatures = [
  {
    icon: <Users className="h-4 w-4" />,
    title: "Delegate Registration — 3 Tiers",
    description:
      "Parampara, Pratishta, Anushasan. Auto-saved drafts, duplicate detection, college ID upload. Works on slow networks.",
  },
  {
    icon: <ShoppingCart className="h-4 w-4" />,
    title: "Event Cart Checkout",
    description:
      "Browse 50+ events, add to cart, enter delegate IDs once, check out. No typing the same thing twice.",
  },
  {
    icon: <Shirt className="h-4 w-4" />,
    title: "Merch Store",
    description:
      "Jerseys, hoodies, varsity jackets with custom printing. Independent cart — no delegate ID needed.",
  },
  {
    icon: <QrCode className="h-4 w-4" />,
    title: "Digital Pass + QR Check-in",
    description:
      "Personalized pass with photo, tier badge, scannable QR. Flash at venue, staff scan, you're in. Zero paper.",
  },
];

const organiserFeatures = [
  {
    icon: <LayoutDashboard className="h-4 w-4" />,
    title: "Live Admin Dashboard",
    description:
      "Total delegates, revenue by tier, top colleges, conversion funnel, merch sales — all in real time.",
  },
  {
    icon: <CheckCircle className="h-4 w-4" />,
    title: "Payment Verification",
    description:
      "One-click approve/reject with undo. Bulk verify up to 100. Auto-emails on verification.",
  },
  {
    icon: <Sheet className="h-4 w-4" />,
    title: "Google Sheets Auto-Sync",
    description:
      "Every registration mirrored to Sheets in real time. Delegates, events, sports, merch — separate tabs. Auto-retry on failures.",
  },
  {
    icon: <ToggleLeft className="h-4 w-4" />,
    title: "Registration Toggles",
    description:
      "Independent kill switches per category. Custom messages, deadline countdowns. Emergency close-all.",
  },
  {
    icon: <Search className="h-4 w-4" />,
    title: "Global Search (Cmd+K)",
    description:
      "Search across delegates, registrations, and merch orders instantly. Jump to any detail page.",
  },
  {
    icon: <TrendingUp className="h-4 w-4" />,
    title: "Data Export & Analytics",
    description:
      "Export to XLSX. Audit log tracks every admin action. Health dashboard for sync monitoring.",
  },
];

const whiteLabelFeatures = [
  {
    icon: <Wand2 className="h-4 w-4" />,
    title: "6-Step Onboarding Wizard",
    description:
      "Set fest name, dates, tiers, branding, contacts. Platform ready to launch in minutes, not days.",
  },
  {
    icon: <Palette className="h-4 w-4" />,
    title: "No-Code Branding",
    description:
      "Edit everything from the admin panel — colors, pricing, contacts, FAQs. No redeploys needed.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          label="Features"
          title="Everything your fest needs, in one place"
          description="Built from real experience managing a 50+ event medical college festival. No feature bloat — just what actually matters."
        />

        {/* Category: For Participants */}
        <div className="mb-16">
          <ScrollReveal>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-100">
                <Users className="h-4 w-4 text-stone-600" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-stone-800">
                For Participants
              </h3>
            </div>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {participantFeatures.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.1}>
                <FeatureCard {...feature} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Category: For Organisers */}
        <div className="mb-16">
          <ScrollReveal>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100">
                <LayoutDashboard className="h-4 w-4 text-amber-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-stone-800">
                For Organisers
              </h3>
            </div>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {organiserFeatures.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.1}>
                <FeatureCard
                  {...feature}
                  variant={i === 0 ? "highlight" : "default"}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Category: White-Label Ready */}
        <div>
          <ScrollReveal>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-100">
                <Palette className="h-4 w-4 text-stone-600" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-stone-800">
                White-Label Ready
              </h3>
            </div>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {whiteLabelFeatures.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.1}>
                <FeatureCard {...feature} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
