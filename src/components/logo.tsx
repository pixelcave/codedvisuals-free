import LogoMark from "@/components/logo-mark";
import { cn } from "@/lib/utils";

const WORDMARK_GRADIENT =
  "bg-[linear-gradient(90deg,var(--color-violet-600),var(--color-sky-600),var(--color-fuchsia-600))] dark:bg-[linear-gradient(90deg,var(--color-violet-400),var(--color-sky-400),var(--color-fuchsia-400))]";

export function LogoWordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-semibold tracking-tight", className)}>
      coded
      <span className={cn(WORDMARK_GRADIENT, "bg-clip-text text-transparent")}>
        visuals
      </span>
    </span>
  );
}

export interface LogoProps {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
}

export default function Logo({
  className,
  markClassName,
  wordmarkClassName,
}: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 transition-opacity group-hover:opacity-80",
        className,
      )}
    >
      <LogoMark className={cn("size-6 shrink-0", markClassName)} />
      <LogoWordmark
        className={cn("text-lg text-foreground", wordmarkClassName)}
      />
    </span>
  );
}
