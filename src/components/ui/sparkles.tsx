"use client";
import { cn } from "@/lib/utils";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = (props: ParticlesProps) => {
  const { className } = props;

  return (
    <div className={cn("opacity-50", className)}>
      <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-amber-400/20 via-transparent to-transparent" />
      <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-amber-300/10 via-transparent to-transparent" style={{ animationDelay: "0.3s" }} />
    </div>
  );
};
