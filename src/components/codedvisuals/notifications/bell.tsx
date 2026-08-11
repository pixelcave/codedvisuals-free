import { Bell as BellIcon } from "lucide-react";
import { motion, useInView } from "motion/react";
import type { Variants } from "motion/react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface BellProps {
  count?: number;
  animated?: boolean;
  trigger?: "mount" | "inView" | "inViewRepeat";
  hover?: boolean;
  fadeOut?: boolean;
  isometric?: boolean;
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  Animation variants                                                */
/* ------------------------------------------------------------------ */

const frameVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25, ease: "easeOut" } },
};

const isometricFrameVariants: Variants = {
  hidden: { opacity: 0, transform: "rotateX(0deg) rotateZ(0deg)" },
  visible: {
    opacity: 1,
    transform: "rotateX(45deg) rotateZ(-45deg)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const bellVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.35, delay: 0.15, ease: "easeOut" },
  },
};

const bellSwingVariants: Variants = {
  hidden: { rotate: 0 },
  visible: {
    rotate: [0, -14, 12, -10, 8, -5, 0],
    transition: {
      duration: 1.2,
      delay: 0.45,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1.35,
    },
  },
};

const badgeVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 420,
      damping: 14,
      delay: 0.55,
    },
  },
};

const ringVariants: Variants = {
  hidden: { scale: 0.6, opacity: 0 },
  visible: {
    scale: [0.6, 0.6, 1.4],
    opacity: [0, 0.5, 0],
    transition: {
      duration: 1.6,
      delay: 0.5,
      ease: "easeOut",
      times: [0, 0.001, 1],
      repeat: Infinity,
      repeatDelay: 0.95,
    },
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function Bell({
  count = 3,
  animated = false,
  trigger = "inView",
  hover = false,
  fadeOut = false,
  isometric = false,
  className,
}: BellProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inViewOnce = useInView(ref, { once: true, amount: 0.5 });
  const inViewRepeat = useInView(ref, { once: false, amount: 0.5 });
  const [hovered, setHovered] = useState(false);

  const entranceActive =
    trigger === "mount"
      ? true
      : trigger === "inViewRepeat"
        ? inViewRepeat
        : inViewOnce;

  const loopActive = hover ? hovered : entranceActive;

  const entranceState = entranceActive ? "visible" : "hidden";
  const motionProps = animated
    ? { initial: "hidden" as const, animate: entranceState }
    : {};

  const display = count > 99 ? "99+" : String(count);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        "relative isolate flex size-full items-center justify-center overflow-hidden px-2",
        className,
      )}
      onMouseEnter={animated && hover ? () => setHovered(true) : undefined}
      onMouseLeave={animated && hover ? () => setHovered(false) : undefined}
    >
      <motion.div
        className={`relative flex size-44 items-center justify-center ${
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
        {/* Radiating rings */}
        {animated ? (
          <>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ opacity: loopActive ? 0 : 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div
                className="absolute size-24 rounded-full border-2 border-primary/25 opacity-25"
                style={{ transform: "scale(1.05)" }}
              />
              <div
                className="absolute size-28 rounded-full border-2 border-primary/15 opacity-20"
                style={{ transform: "scale(1.15)" }}
              />
              <div
                className="absolute size-32 rounded-full border-2 border-primary/10 opacity-15"
                style={{ transform: "scale(1.25)" }}
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ opacity: loopActive ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="absolute size-32 rounded-full border-2 border-primary/25"
                variants={ringVariants}
                initial="hidden"
                animate="visible"
              />
              <motion.div
                className="absolute size-32 rounded-full border-2 border-primary/15"
                variants={{
                  ...ringVariants,
                  visible: {
                    ...(ringVariants.visible as object),
                    transition: {
                      duration: 1.6,
                      delay: 0.9,
                      ease: "easeOut",
                      times: [0, 0.001, 1],
                      repeat: Infinity,
                      repeatDelay: 0.95,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
              />
              <motion.div
                className="absolute size-32 rounded-full border-2 border-primary/10"
                variants={{
                  ...ringVariants,
                  visible: {
                    ...(ringVariants.visible as object),
                    transition: {
                      duration: 1.6,
                      delay: 1.3,
                      ease: "easeOut",
                      times: [0, 0.001, 1],
                      repeat: Infinity,
                      repeatDelay: 0.95,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
              />
            </motion.div>
          </>
        ) : (
          <>
            <div
              className="absolute size-24 rounded-full border-2 border-primary/25 opacity-25"
              style={{ transform: "scale(1.05)" }}
            />
            <div
              className="absolute size-28 rounded-full border-2 border-primary/15 opacity-20"
              style={{ transform: "scale(1.15)" }}
            />
            <div
              className="absolute size-32 rounded-full border-2 border-primary/10 opacity-15"
              style={{ transform: "scale(1.25)" }}
            />
          </>
        )}
        {/* END Radiating rings */}

        {/* Bell disc */}
        <motion.div
          className="relative flex size-17 items-center justify-center rounded-3xl border border-muted bg-card shadow-sm ring-3 ring-muted dark:shadow-none dark:ring-border/50"
          variants={animated ? bellVariants : undefined}
        >
          <motion.div
            className="origin-top text-foreground"
            style={{ transformOrigin: "50% 15%" }}
            variants={animated ? bellSwingVariants : undefined}
            animate={animated && loopActive ? "visible" : "hidden"}
          >
            <BellIcon className="size-6" strokeWidth={1.5} />
          </motion.div>

          {/* Count badge */}
          {count > 0 && (
            <motion.div
              className="absolute -top-2 -right-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-primary px-1.5 text-xs font-semibold text-primary-foreground shadow-md ring-2 ring-background"
              variants={animated ? badgeVariants : undefined}
              {...motionProps}
            >
              {display}
            </motion.div>
          )}
          {/* END Count badge */}
        </motion.div>
        {/* END Bell disc */}
      </motion.div>
    </div>
  );
}
