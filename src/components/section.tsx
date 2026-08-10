import { cn } from "@/lib/utils";

export function Section({
  className,
  mini = false,
  compact = false,
  borderTop = false,
  featuredBottom = false,
  featured = false,
  children,
  ...props
}: React.ComponentProps<"section"> & {
  mini?: boolean;
  compact?: boolean;
  borderTop?: boolean;
  featuredBottom?: boolean;
  featured?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative",
        mini ? "py-4 md:py-8" : compact ? "py-8 md:py-16" : "py-12 md:py-24",
        className,
      )}
      {...props}
    >
      {featured && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 mx-auto w-full max-w-7xl"
        >
          <div className="absolute inset-x-2 top-2 h-150 rounded-xl bg-primary/2 mask-b-from-50% mask-radial-[50%_90%] mask-radial-from-80% ring-1 ring-primary/5 ring-inset dark:bg-primary/5" />
        </div>
      )}
      {featuredBottom && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 mx-auto w-full max-w-7xl"
        >
          <div className="absolute inset-2 rounded-xl bg-primary/2 mask-t-from-50% mask-radial-[50%_90%] mask-radial-from-80% ring-1 ring-primary/5 ring-inset dark:bg-primary/5" />
        </div>
      )}
      {borderTop && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 mx-auto w-full max-w-7xl border-t border-border/60"
        />
      )}
      {children}
    </section>
  );
}
