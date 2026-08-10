import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import type { Variants } from "motion/react";
import { useId, useRef } from "react";
import { cn } from "@/lib/utils";

interface SparklineProps {
  title?: string;
  value?: string;
  change?: string;
  points?: number[];
  animated?: boolean;
  trigger?: "mount" | "inView" | "inViewRepeat";
  isometric?: boolean;
  gradient?: boolean;
  className?: string;
}

const DEFAULT_COPY = {
  title: "Active users",
  value: "1,284",
  change: "+12.5%",
  points: [0.3, 0.42, 0.28, 0.5, 0.45, 0.62, 0.55, 0.78, 0.7, 0.92],
};

/* ------------------------------------------------------------------ */
/*  Path helpers                                                      */
/* ------------------------------------------------------------------ */

const CHART_WIDTH = 80;
const CHART_HEIGHT = 30;

function getCoordinates(points: number[]): [number, number][] {
  const step = CHART_WIDTH / (points.length - 1);

  return points.map((v, i) => [i * step, 3 + (1 - v) * (CHART_HEIGHT - 6)]);
}

function buildSmoothPath(coords: [number, number][]): string {
  if (coords.length < 2) {
    return "";
  }

  let path = `M ${coords[0][0]},${coords[0][1]}`;

  for (let i = 1; i < coords.length; i++) {
    const [x, y] = coords[i];
    const [px, py] = coords[i - 1];
    const cx = (px + x) / 2;
    path += ` C ${cx},${py} ${cx},${y} ${x},${y}`;
  }

  return path;
}

function buildAreaPath(coords: [number, number][]): string {
  return `${buildSmoothPath(coords)} L ${CHART_WIDTH},${CHART_HEIGHT} L 0,${CHART_HEIGHT} Z`;
}

/* ------------------------------------------------------------------ */
/*  Animation variants                                                */
/* ------------------------------------------------------------------ */

const cardVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25, ease: "easeOut" } },
};

const isometricCardVariants: Variants = {
  hidden: { opacity: 0, transform: "rotateX(0deg) rotateZ(0deg)" },
  visible: {
    opacity: 1,
    transform: "rotateX(45deg) rotateZ(-45deg)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 4 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: 0.2, ease: "easeOut" },
  },
};

const valueVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: 0.3, ease: "easeOut" },
  },
};

const pillVariants: Variants = {
  hidden: { scale: 0.6, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 360, damping: 18, delay: 0.4 },
  },
};

const lineVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 0.9, delay: 0.5, ease: "easeOut" },
      opacity: { duration: 0.15, delay: 0.5 },
    },
  },
};

const areaVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, delay: 1, ease: "easeOut" },
  },
};

const dotVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 420, damping: 14, delay: 1.3 },
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

export default function Sparkline({
  title = DEFAULT_COPY.title,
  value = DEFAULT_COPY.value,
  change = DEFAULT_COPY.change,
  points = DEFAULT_COPY.points,
  animated = false,
  trigger = "inView",
  isometric = false,
  gradient = true,
  className,
}: SparklineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inViewOnce = useInView(ref, { once: true, amount: 0.5 });
  const inViewRepeat = useInView(ref, { once: false, amount: 0.5 });
  const fillId = useId();
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

  const isNegative = change.startsWith("-");
  const ChangeIcon = isNegative ? ArrowDownRight : ArrowUpRight;

  const coords = getCoordinates(points);
  const linePath = buildSmoothPath(coords);
  const areaPath = buildAreaPath(coords);
  const lastPoint = coords[coords.length - 1];

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
        className="relative w-full max-w-64"
        style={
          !animated && isometric
            ? { transform: "rotateX(45deg) rotateZ(-45deg)" }
            : undefined
        }
        variants={
          animated
            ? isometric
              ? isometricCardVariants
              : cardVariants
            : undefined
        }
        {...motionProps}
      >
        {/* Background gradient */}
        {gradient && (
          <>
            <motion.div
              className="absolute inset-x-1 bottom-0 h-6 origin-center rounded-full bg-[linear-gradient(to_right,var(--color-red-500),var(--color-orange-500),var(--color-yellow-500),var(--color-green-500),var(--color-blue-500),var(--color-indigo-500),var(--color-violet-500))] opacity-60 blur-sm"
              variants={animated ? gradientVariants : undefined}
              {...motionProps}
            />
            <motion.div
              className="absolute -inset-x-0.5 -bottom-0.5 h-12 rounded-b-xl bg-background/95 mask-t-from-50%"
              variants={animated ? gradientMaskVariants : undefined}
              {...motionProps}
            />
          </>
        )}
        {/* END Background gradient */}

        {/* Card */}
        <div className="relative flex items-center gap-3 rounded-xl border bg-card px-3.5 py-3 shadow-xs">
          {/* Stats */}
          <div className="flex min-w-0 flex-1 flex-col gap-0.5">
            <motion.span
              className="truncate text-[10px] font-medium tracking-wide text-muted-foreground"
              variants={animated ? titleVariants : undefined}
              {...motionProps}
            >
              {title}
            </motion.span>
            <motion.span
              className="text-base font-semibold tracking-tight text-foreground tabular-nums"
              variants={animated ? valueVariants : undefined}
              {...motionProps}
            >
              {value}
            </motion.span>
            <motion.span
              className={`inline-flex w-fit items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[9px] font-semibold tabular-nums ring-1 ring-inset ${
                isNegative
                  ? "bg-red-500/10 text-red-600 ring-red-500/15 dark:text-red-400"
                  : "bg-emerald-500/10 text-emerald-600 ring-emerald-500/15 dark:text-emerald-400"
              }`}
              variants={animated ? pillVariants : undefined}
              {...motionProps}
            >
              <ChangeIcon className="size-2.5" strokeWidth={2.75} />
              {change}
            </motion.span>
          </div>
          {/* END Stats */}

          {/* Sparkline */}
          <div className="relative shrink-0">
            <svg
              viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
              preserveAspectRatio="none"
              className="block h-10 w-20"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor="var(--color-chart-1)"
                    stopOpacity="0.3"
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--color-chart-1)"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>

              <motion.path
                d={areaPath}
                fill={`url(#${fillId})`}
                variants={animated ? areaVariants : undefined}
                {...motionProps}
              />

              <motion.path
                d={linePath}
                fill="none"
                stroke="var(--color-chart-1)"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={animated ? lineVariants : undefined}
                {...motionProps}
              />
            </svg>

            <motion.div
              className="absolute size-2 -translate-1/2 rounded-full border-[1.75px] bg-card"
              style={{
                left: `${(lastPoint[0] / CHART_WIDTH) * 100}%`,
                top: `${(lastPoint[1] / CHART_HEIGHT) * 100}%`,
                borderColor: "var(--color-chart-1)",
              }}
              variants={animated ? dotVariants : undefined}
              {...motionProps}
            />
          </div>
          {/* END Sparkline */}
        </div>
        {/* END Card */}
      </motion.div>
    </div>
  );
}
