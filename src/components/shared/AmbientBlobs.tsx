import { cn } from '@/lib/utils';

interface AmbientBlobsProps {
  className?: string;
  /** Override top blob color (Tailwind bg class). Default: amber. */
  colorTop?: string;
  /** Override bottom blob color (Tailwind bg class). Default: rose. */
  colorBottom?: string;
}

/**
 * Low-opacity floating gradient orbs for subtle background atmosphere.
 * Pure CSS animation — no JavaScript runtime cost.
 * Position this inside a `relative` container.
 */
export function AmbientBlobs({
  className,
  colorTop = 'bg-amber-600',
  colorBottom = 'bg-rose-400',
}: AmbientBlobsProps) {
  return (
    <div
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      aria-hidden="true"
    >
      <div
        className={`absolute top-1/4 -left-20 h-80 w-80 rounded-full opacity-[0.04] ${colorTop}`}
        style={{ filter: 'blur(80px)', animation: 'blob-drift 22s ease-in-out infinite' }}
      />
      <div
        className={`absolute bottom-1/3 -right-20 h-96 w-96 rounded-full opacity-[0.04] ${colorBottom}`}
        style={{
          filter: 'blur(80px)',
          animation: 'blob-drift-slow 28s ease-in-out infinite',
        }}
      />
    </div>
  );
}
