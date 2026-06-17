import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <ScrollReveal
      className={cn(
        "mx-auto mb-12 md:mb-16",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {label && (
        <span className="mb-3 inline-block rounded-full border border-amber-200 bg-amber-50 px-3 py-1 font-sans text-xs font-medium tracking-wider text-amber-700 uppercase">
          {label}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold text-stone-900 md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-stone-500 md:text-lg">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
