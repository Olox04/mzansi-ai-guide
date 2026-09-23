import { cn } from "@/lib/utils";

/** Mzansi Travel AI identity mark: a chat bubble tracing a route across a horizon. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "brand-surface inline-flex shrink-0 items-center justify-center rounded-xl text-primary-foreground shadow-soft",
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="none" className="size-[62%]">
        <path
          d="M4 11.2C4 7.2 7.3 4.5 12 4.5s8 2.7 8 6.7c0 4-3.3 6.7-8 6.7c-.9 0-1.8-.1-2.6-.3L5.4 19.4a.5.5 0 0 1-.7-.6l.8-2.4C4.9 15.2 4 13.3 4 11.2Z"
          fill="currentColor"
          opacity="0.18"
        />
        <path
          d="M4 11.2C4 7.2 7.3 4.5 12 4.5s8 2.7 8 6.7c0 4-3.3 6.7-8 6.7c-.9 0-1.8-.1-2.6-.3L5.4 19.4a.5.5 0 0 1-.7-.6l.8-2.4C4.9 15.2 4 13.3 4 11.2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M8 13c1.6-2.2 3-3.3 4.2-3.3c1.5 0 1.6 1.7 3 1.7c.9 0 1.7-.5 2.5-1.6"
          stroke="var(--gold)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="12.2" cy="9.7" r="1.1" fill="var(--gold)" />
      </svg>
    </span>
  );
}
