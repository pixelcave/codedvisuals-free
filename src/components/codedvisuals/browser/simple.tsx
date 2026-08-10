import { ArrowRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import type { Variants } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SimpleProps {
  url?: string;
  animated?: boolean;
  trigger?: "mount" | "inView" | "inViewRepeat";
  variant?: "landing" | "dashboard";
  fadeOut?: boolean;
  isometric?: boolean;
  gradient?: boolean;
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  Animation variants                                                */
/* ------------------------------------------------------------------ */

const frameVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const isometricFrameVariants: Variants = {
  hidden: { opacity: 0, transform: "rotateX(0deg) rotateZ(0deg)" },
  visible: {
    opacity: 1,
    transform: "rotateX(45deg) rotateZ(-45deg)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const toolbarVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: 0.2, ease: "easeOut" },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.25, delay: 0.2, ease: "easeOut" },
  },
};

const gradientVariants: Variants = {
  hidden: { opacity: 0, scaleX: 0.6 },
  visible: {
    opacity: 0.6,
    scaleX: 1,
    transition: { duration: 0.5, delay: 0.5, ease: "easeOut" },
  },
};

const gradientMaskVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, delay: 0.5, ease: "easeOut" },
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function Simple({
  url = "codedvisuals.com",
  animated = false,
  trigger = "inView",
  variant = "landing",
  fadeOut = false,
  isometric = false,
  gradient = true,
  className,
}: SimpleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inViewOnce = useInView(ref, { once: true, amount: 0.5 });
  const inViewRepeat = useInView(ref, { once: false, amount: 0.5 });
  const isActive =
    trigger === "mount"
      ? true
      : trigger === "inViewRepeat"
        ? inViewRepeat
        : inViewOnce;

  const state = isActive ? "visible" : "hidden";
  const motionProps = animated
    ? { initial: "hidden" as const, animate: state }
    : {};

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        "relative isolate flex size-full items-center justify-center overflow-hidden px-2",
        className,
      )}
    >
      <motion.div
        className={`relative w-full max-w-90 rounded-2xl border border-border/50 bg-muted/75 px-1.5 pb-1.5 ${
          fadeOut ? "mask-b-from-60%" : ""
        }`}
        style={
          !animated && isometric
            ? { transform: "rotateX(45deg) rotateZ(-45deg)" }
            : undefined
        }
        variants={
          animated
            ? isometric
              ? isometricFrameVariants
              : frameVariants
            : undefined
        }
        {...motionProps}
      >
        {/* Background gradient */}
        {gradient && !fadeOut && (
          <>
            <motion.div
              className="absolute inset-x-1.25 bottom-0 h-20 origin-center rounded-t-full rounded-b-xl bg-[linear-gradient(to_right,var(--color-red-500),var(--color-orange-500),var(--color-yellow-500),var(--color-green-500),var(--color-blue-500),var(--color-indigo-500),var(--color-violet-500))] opacity-60 blur-sm"
              variants={animated ? gradientVariants : undefined}
              {...motionProps}
            />
            <motion.div
              className="absolute inset-x-0 bottom-0 h-16 rounded-b-2xl bg-background/75 mask-t-from-50% shadow-xs"
              variants={animated ? gradientMaskVariants : undefined}
              {...motionProps}
            />
          </>
        )}
        {/* END Background gradient */}

        <div className="relative flex flex-col">
          {/* Toolbar */}
          <div className="flex items-center gap-2 px-1.5 py-1.5">
            {/* Buttons */}
            <div className="flex gap-1.5">
              <div className="size-2 rounded-full bg-rose-400" />
              <div className="size-2 rounded-full bg-amber-400" />
              <div className="size-2 rounded-full bg-emerald-400" />
            </div>
            {/* END Buttons */}

            {/* Address bar */}
            <motion.div
              className="flex h-5 min-w-40 flex-1 items-center rounded-xl bg-background/75 px-2"
              variants={animated ? toolbarVariants : undefined}
            >
              <span className="truncate text-[10px] text-muted-foreground">
                {url}
              </span>
            </motion.div>
            {/* END Address bar */}

            {/* Go button */}
            <motion.button
              type="button"
              className="flex size-5 items-center justify-center rounded-full bg-background/75 shadow-sm hover:bg-background"
              variants={animated ? toolbarVariants : undefined}
              tabIndex={-1}
              onMouseDown={(e) => e.preventDefault()}
            >
              <ArrowRight className="size-2.5" />
            </motion.button>
            {/* END Go button */}
          </div>
          {/* END Toolbar */}

          {/* Content area */}
          <motion.div
            className="h-56 rounded-xl border bg-background p-3"
            variants={animated ? contentVariants : undefined}
          >
            {variant === "landing" ? (
              <div className="mx-auto flex h-full w-full max-w-56 flex-col gap-2">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="size-2.5 rounded-full bg-primary" />
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-4 rounded-full bg-muted-foreground/20" />
                    <div className="h-1 w-4 rounded-full bg-muted-foreground/20" />
                    <div className="h-1 w-4 rounded-full bg-muted-foreground/20" />
                  </div>
                  <div className="h-2.5 w-6 rounded-md bg-primary" />
                </div>
                {/* END Header */}

                {/* Hero block */}
                <div className="flex flex-col items-center gap-1 pt-3">
                  <div className="h-1.5 w-3/5 rounded-full bg-muted-foreground/25" />
                  <div className="h-1 w-2/5 rounded-full bg-muted-foreground/15" />
                  <div className="h-1 w-1/3 rounded-full bg-muted-foreground/15" />
                  <div className="mt-1 flex gap-1">
                    <div className="h-3 w-8 rounded-md bg-primary" />
                    <div className="h-3 w-8 rounded-md border border-muted-foreground/15" />
                  </div>
                </div>
                {/* END Hero block */}

                {/* Feature grid */}
                <div className="mt-auto grid grid-cols-3 gap-1.5">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex flex-col gap-1 rounded-lg bg-muted/60 p-1.5"
                    >
                      <div className="size-2 rounded-full bg-muted-foreground/25" />
                      <div className="h-1 w-4/5 rounded-full bg-muted-foreground/20" />
                      <div className="h-0.5 w-3/5 rounded-full bg-muted-foreground/15" />
                    </div>
                  ))}
                </div>
                {/* END Feature grid */}

                {/* Logo strip */}
                <div className="flex items-center justify-between gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-1 w-6 rounded-full bg-muted-foreground/10"
                    />
                  ))}
                </div>
                {/* END Logo strip */}
              </div>
            ) : (
              <div className="flex h-full gap-1.5">
                {/* Sidebar */}
                <div className="flex w-8 flex-col gap-1 border-r border-muted pr-1.5">
                  <div className="h-1.5 w-full rounded-full bg-primary" />
                  <div className="h-1.5 w-4/5 rounded-full bg-muted-foreground/15" />
                  <div className="h-1.5 w-3/5 rounded-full bg-muted-foreground/15" />
                  <div className="h-1.5 w-4/5 rounded-full bg-muted-foreground/15" />
                  <div className="h-1.5 w-3/5 rounded-full bg-muted-foreground/15" />
                </div>
                {/* END Sidebar */}

                {/* Main */}
                <div className="flex flex-1 flex-col gap-1.5">
                  {/* Stat cards */}
                  <div className="grid grid-cols-3 gap-1">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex flex-col gap-0.5 rounded-md bg-muted/60 p-1"
                      >
                        <div className="h-0.5 w-3/5 rounded-full bg-muted-foreground/20" />
                        <div className="h-1.5 w-4/5 rounded-full bg-muted-foreground/35" />
                      </div>
                    ))}
                  </div>
                  {/* END Stat cards */}

                  {/* Chart */}
                  <div className="flex flex-1 items-end justify-between gap-0.5 rounded-md bg-muted/60 p-1.5">
                    {[
                      50, 75, 40, 90, 60, 80, 55, 95, 70, 45, 85, 65, 35, 78,
                    ].map((h, i) => (
                      <div
                        key={i}
                        className="w-1 rounded-sm bg-chart-3"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  {/* END Chart */}

                  {/* Table rows */}
                  <div className="flex flex-col gap-0.5">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="flex items-center gap-1">
                        <div className="size-1.25 rounded-full bg-primary" />
                        <div className="h-1.25 flex-1 rounded-full bg-muted-foreground/15" />
                        <div className="h-1.25 w-6 rounded-full bg-muted-foreground/15" />
                        <div className="h-1.25 w-6 rounded-full bg-muted-foreground/15" />
                        <div className="h-1.25 w-6 rounded-full bg-muted-foreground/15" />
                      </div>
                    ))}
                  </div>
                  {/* END Table rows */}
                </div>
                {/* END Main */}
              </div>
            )}
          </motion.div>
          {/* END Content area */}
        </div>
      </motion.div>
    </div>
  );
}
