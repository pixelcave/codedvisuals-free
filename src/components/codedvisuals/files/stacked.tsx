import { motion, useInView } from "motion/react";
import type { Variants } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Category config                                                   */
/* ------------------------------------------------------------------ */

const CATEGORIES = {
  default: "border-primary bg-primary text-primary-foreground",
  documents: "border-blue-800/20 bg-blue-500 text-white",
  spreadsheets: "border-green-800/20 bg-green-600 text-white",
  images: "border-purple-800/20 bg-purple-500 text-white",
  design: "border-cyan-800/20 bg-cyan-600 text-white",
  code: "border-yellow-800/20 bg-yellow-600 text-white",
  fonts: "border-indigo-800/20 bg-indigo-500 text-white",
  media: "border-rose-800/20 bg-rose-500 text-white",
  video: "border-red-800/20 bg-red-500 text-white",
  audio: "border-pink-800/20 bg-pink-500 text-white",
  archives: "border-amber-800/20 bg-amber-600 text-white",
  mixed: "border-zinc-800/20 bg-zinc-500 text-white",
} as const satisfies Record<string, string>;

type FileCategory = keyof typeof CATEGORIES;

interface StackedProps {
  category?: FileCategory;
  label?: string;
  count?: 3 | 5 | 7 | 9;
  animated?: boolean;
  trigger?: "mount" | "inView" | "inViewRepeat";
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  Animation variants                                                */
/* ------------------------------------------------------------------ */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const fanVariants: Variants = {
  hidden: { rotate: 0, opacity: 0 },
  visible: (angle: number) => ({
    rotate: angle,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  }),
};

const badgeVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 420, damping: 14 },
  },
};

/* ------------------------------------------------------------------ */
/*  Fan configuration                                                 */
/* ------------------------------------------------------------------ */

const FAN_SPREADS: Record<number, number> = {
  3: 36,
  5: 46,
  7: 60,
  9: 76,
};

function buildFan(count: number) {
  const spread = FAN_SPREADS[count] ?? 46;
  const half = (count - 1) / 2;
  const step = count > 1 ? spread / (count - 1) : 0;
  const angles = Array.from({ length: count }, (_, i) => (i - half) * step);
  const frontIndex = Math.floor(count / 2);
  const zIndices = angles.map(
    (_, i) => frontIndex - Math.abs(i - frontIndex) + 1,
  );

  return { angles, zIndices, frontIndex };
}

/* ------------------------------------------------------------------ */
/*  Illustration internals                                            */
/* ------------------------------------------------------------------ */

function FileLine({ width }: { width: number }) {
  return (
    <div className="h-1 rounded-full bg-muted" style={{ width: `${width}%` }} />
  );
}

function DocumentIllustration() {
  return (
    <div className="flex flex-col gap-1">
      <div className="h-1.5 w-2/3 rounded-full bg-muted-foreground/30" />
      <FileLine width={89} />
      <FileLine width={70} />
      <FileLine width={88} />
      <FileLine width={67} />
      <FileLine width={87} />
      <FileLine width={78} />
    </div>
  );
}

function SpreadsheetIllustration() {
  return (
    <div className="flex flex-col gap-0.5">
      {[...Array(5)].map((_, row) => (
        <div key={row} className="flex gap-0.5">
          {[...Array(3)].map((_, col) => (
            <div
              key={col}
              className={`h-2.5 flex-1 rounded-xs ${
                row === 0 ? "bg-green-300/30" : "bg-muted"
              }`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function ImageIllustration() {
  return (
    <div className="flex flex-col gap-1">
      <div className="relative h-8 overflow-hidden rounded-xs bg-linear-to-br from-purple-200/40 to-indigo-300/40">
        <div className="absolute bottom-0.5 left-0.75 size-3 rounded-full bg-purple-300/50" />
        <div className="absolute right-1 bottom-0 h-4 w-5 rounded-t-full bg-purple-400/30" />
      </div>
      <FileLine width={100} />
      <FileLine width={75} />
    </div>
  );
}

function DesignIllustration() {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="flex gap-0.5">
        <div className="size-2.5 rounded-xs bg-cyan-400/30" />
        <div className="size-2.5 rounded-full bg-cyan-300/40" />
        <div className="size-2.5 rounded-xs bg-cyan-400/30" />
      </div>
      <div className="h-4 w-full rounded-xs border border-dashed border-cyan-300/40" />
      <FileLine width={100} />
      <FileLine width={75} />
    </div>
  );
}

function CodeIllustration() {
  return (
    <div className="flex flex-col gap-1">
      <div className="h-1.5 w-1/6 rounded-full bg-yellow-300/40" />
      <div className="flex flex-col gap-1 pl-2">
        <div className="flex gap-1">
          <div className="h-1 w-1/4 rounded-full bg-yellow-300/30" />
          <div className="h-1 w-2/5 rounded-full bg-muted" />
        </div>
        <div className="flex gap-1">
          <div className="h-1 w-1/3 rounded-full bg-yellow-300/30" />
          <div className="h-1 w-1/4 rounded-full bg-muted" />
        </div>
        <div className="flex gap-1">
          <div className="h-1 w-1/5 rounded-full bg-yellow-300/30" />
          <div className="h-1 w-1/3 rounded-full bg-muted" />
        </div>
      </div>
      <div className="h-1.5 w-1/6 rounded-full bg-yellow-300/40" />
    </div>
  );
}

function MediaIllustration() {
  return (
    <div className="flex flex-col gap-1">
      <div className="relative flex h-8 items-center justify-center overflow-hidden rounded-xs bg-linear-to-br from-rose-200/30 to-rose-400/20">
        <div className="size-0 border-t-4 border-b-4 border-l-[7px] border-t-transparent border-b-transparent border-l-rose-400/60" />
      </div>
      <div className="flex items-center gap-0.5">
        <div className="h-1 flex-1 rounded-full bg-rose-300/30" />
        <div className="size-1.5 rounded-full bg-rose-400/40" />
      </div>
    </div>
  );
}

function VideoIllustration() {
  return (
    <div className="flex flex-col gap-1">
      <div className="relative flex h-10 items-center justify-center overflow-hidden rounded-xs bg-linear-to-br from-red-200/30 to-red-400/20">
        <div className="size-0 border-t-5 border-b-5 border-l-[9px] border-t-transparent border-b-transparent border-l-red-400/60" />
      </div>
      <div className="flex items-center gap-0.5">
        <div className="h-1 flex-1 rounded-full bg-red-300/30" />
        <div className="size-1.5 rounded-full bg-red-400/40" />
      </div>
    </div>
  );
}

function AudioIllustration() {
  return (
    <div className="flex h-full items-end justify-center gap-0.5 py-1">
      {[40, 70, 55, 85, 45, 75, 50].map((h, i) => (
        <div
          key={i}
          className="w-1 rounded-full bg-pink-300/40"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

function FontsIllustration() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-1.5">
      <div className="font-serif text-3xl leading-none font-bold text-indigo-500/70">
        Aa
      </div>
      <FileLine width={70} />
      <FileLine width={50} />
    </div>
  );
}

function ArchiveIllustration() {
  return (
    <div className="flex flex-col items-center gap-px">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="flex w-full gap-0.5">
          <div
            className={`h-1.5 flex-1 rounded-xs ${
              i % 2 === 0 ? "bg-amber-300/35" : "bg-muted"
            }`}
          />
          <div
            className={`h-1.5 flex-1 rounded-xs ${
              i % 2 === 0 ? "bg-muted" : "bg-amber-300/35"
            }`}
          />
        </div>
      ))}
    </div>
  );
}

function MixedIllustration() {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex gap-1">
        <div className="size-3 rounded-xs bg-blue-400/50" />
        <div className="size-3 rounded-xs bg-green-500/50" />
        <div className="size-3 rounded-full bg-purple-400/50" />
      </div>
      <div className="flex items-center gap-1">
        <div className="h-2 w-1/3 rounded-xs bg-rose-400/40" />
        <div className="h-2 w-1/3 rounded-xs bg-amber-400/40" />
        <div className="h-2 w-1/3 rounded-xs bg-cyan-400/40" />
      </div>
      <FileLine width={90} />
      <FileLine width={70} />
    </div>
  );
}

const ILLUSTRATIONS: Record<FileCategory, React.FC> = {
  default: DocumentIllustration,
  documents: DocumentIllustration,
  spreadsheets: SpreadsheetIllustration,
  images: ImageIllustration,
  design: DesignIllustration,
  code: CodeIllustration,
  fonts: FontsIllustration,
  media: MediaIllustration,
  video: VideoIllustration,
  audio: AudioIllustration,
  archives: ArchiveIllustration,
  mixed: MixedIllustration,
};

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function Stacked({
  category = "default",
  label,
  count = 5,
  animated = false,
  trigger = "inView",
  className,
}: StackedProps) {
  const { angles, zIndices, frontIndex } = buildFan(count);
  const badgeClasses = CATEGORIES[category];
  const Illustration = ILLUSTRATIONS[category];
  const badgeText = label ?? `${count} files`;

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
        className="relative"
        variants={animated ? containerVariants : undefined}
        {...motionProps}
      >
        {/* Fan cards */}
        {angles.map((angle, i) => (
          <motion.div
            key={i}
            className={i > 0 ? "absolute top-0 left-0" : ""}
            style={{
              transformOrigin: "bottom center",
              zIndex: zIndices[i],
              ...(!animated ? { transform: `rotate(${angle}deg)` } : {}),
            }}
            custom={angle}
            variants={animated ? fanVariants : undefined}
          >
            <div
              className={`flex flex-col rounded-lg rounded-tr-2xl border p-0.75 shadow-xs dark:shadow-none ${
                i === frontIndex
                  ? "border-muted bg-muted"
                  : "border-muted/25 bg-muted/25"
              }`}
            >
              <div
                className={`flex h-22 w-16 flex-col rounded-md rounded-tr-xl p-3 shadow-sm dark:shadow-none dark:ring-1 dark:ring-border/50 ${
                  i === frontIndex ? "bg-card" : "bg-card/75"
                }`}
              >
                {i === frontIndex && (
                  <div className="h-full">
                    <Illustration />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
        {/* END Fan cards */}

        {/* Category badge */}
        <motion.div
          className={`absolute -bottom-3 left-1/2 z-5 max-w-32 -translate-x-1/2 truncate rounded-lg border px-1.5 py-0.75 text-xs font-medium shadow-sm ${badgeClasses}`}
          variants={animated ? badgeVariants : undefined}
        >
          {badgeText}
        </motion.div>
        {/* END Category badge */}
      </motion.div>
    </div>
  );
}
