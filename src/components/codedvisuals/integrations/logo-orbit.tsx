import { motion, useInView } from "motion/react";
import type { Variants } from "motion/react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface LogoOrbitProps {
  outerLogos?: React.ReactNode[];
  innerLogos?: React.ReactNode[];
  outerRadius?: number;
  innerRadius?: number;
  logo?: React.ReactNode | null;
  animated?: boolean;
  trigger?: "mount" | "inView" | "inViewRepeat";
  hover?: boolean;
  isometric?: boolean;
  orbit?: boolean;
  className?: string;
}

const DEFAULT_OUTER_RADIUS = 125;
const DEFAULT_INNER_RADIUS = 60;

function polar(angle: number, radius: number) {
  const rad = ((angle - 90) * Math.PI) / 180;

  return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius };
}

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

const logoVariants: Variants = {
  hidden: { scale: 0.6, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 320, damping: 18, delay: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (delay: number) => ({
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 380, damping: 16, delay },
  }),
};

const DOT_INNER_ANGLES = [0, 90, 180, 270];
const DOT_OUTER_ANGLES = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5];

const DEFAULT_LOGO: React.ReactNode = (
  <svg viewBox="0 0 24 24" className="size-7 text-primary" fill="currentColor">
    <circle cx={12} cy={12} r={1.5} />
    {DOT_INNER_ANGLES.map((a) => {
      const rad = (a * Math.PI) / 180;

      return (
        <circle
          key={`i${a}`}
          cx={12 + Math.cos(rad) * 4.5}
          cy={12 + Math.sin(rad) * 4.5}
          r={1.1}
        />
      );
    })}
    {DOT_OUTER_ANGLES.map((a) => {
      const rad = (a * Math.PI) / 180;

      return (
        <circle
          key={`o${a}`}
          cx={12 + Math.cos(rad) * 8.5}
          cy={12 + Math.sin(rad) * 8.5}
          r={0.9}
        />
      );
    })}
  </svg>
);

const DEFAULT_OUTER_LOGOS: React.ReactNode[] = [
  /* GitHub */
  <svg viewBox="0 0 24 24" className="size-4.5 fill-current text-foreground">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>,
  /* X */
  <svg viewBox="0 0 24 24" className="size-4.5 fill-current text-foreground">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>,
  /* Dropbox */
  <svg viewBox="0 0 24 24" className="size-4.5 fill-current text-foreground">
    <path d="M6 2l6 3.75L6 9.5 0 5.75zm12 0l6 3.75-6 3.75-6-3.75zM0 13.25L6 9.5l6 3.75L6 17zm12 0L18 9.5l6 3.75L18 17zM6 18.25l6-3.75 6 3.75L12 22z" />
  </svg>,
  /* Slack */
  <svg viewBox="0 0 24 24" className="size-4.5 fill-current text-foreground">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.163 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.163 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.163 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.27a2.527 2.527 0 0 1-2.52-2.523 2.527 2.527 0 0 1 2.52-2.52h6.315A2.528 2.528 0 0 1 24 15.163a2.528 2.528 0 0 1-2.522 2.523h-6.315z" />
  </svg>,
  /* Figma */
  <svg viewBox="0 0 24 24" className="size-4.5 fill-current text-foreground">
    <path
      fillRule="evenodd"
      d="M8.5 2A3.5 3.5 0 0 0 5 5.5 3.5 3.5 0 0 0 8.5 9H12V2H8.5Zm3.5 7h3.5a3.5 3.5 0 1 0 0-7H12v7ZM5 12a3.5 3.5 0 0 1 3.5-3.5H12v7H8.5A3.5 3.5 0 0 1 5 12Zm7 3.5V19a3.5 3.5 0 1 1-3.5-3.5H12Zm3.5-3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
    />
  </svg>,
  /* Discord */
  <svg viewBox="0 0 24 24" className="size-4.5 fill-current text-foreground">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>,
];

export default function LogoOrbit({
  outerLogos = DEFAULT_OUTER_LOGOS,
  innerLogos = [],
  outerRadius = DEFAULT_OUTER_RADIUS,
  innerRadius = DEFAULT_INNER_RADIUS,
  logo = DEFAULT_LOGO,
  animated = false,
  trigger = "inView",
  hover = false,
  isometric = false,
  orbit = false,
  className,
}: LogoOrbitProps) {
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

  const loopActive = orbit && (hover ? hovered : entranceActive);

  const entranceState = entranceActive ? "visible" : "hidden";
  const motionProps = animated
    ? { initial: "hidden" as const, animate: entranceState }
    : {};

  const orbitEnabled = animated && orbit;
  const playState = loopActive ? "" : " paused";

  const outerOrbitClass = orbitEnabled
    ? "animate-[spin_120s_linear_infinite]" + playState
    : "";
  const outerCounterClass = orbitEnabled
    ? "animate-[spin_120s_linear_infinite_reverse]" + playState
    : "";
  const innerOrbitClass = orbitEnabled
    ? "animate-[spin_80s_linear_infinite_reverse]" + playState
    : "";
  const innerCounterClass = orbitEnabled
    ? "animate-[spin_80s_linear_infinite]" + playState
    : "";

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
        className="relative flex size-72 items-center justify-center"
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
        {/* Background pattern grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-muted)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-muted)_1px,transparent_1px)] mask-[radial-gradient(ellipse_35%_35%_at_50%_50%,#000_60%,transparent_100%)] bg-size-[36px_36px]" />
        {/* END Background pattern grid */}

        {/* Decorative rings */}
        <div className="absolute size-28 rounded-full border border-border/50" />
        <div className="absolute size-56 rounded-full border border-border/35" />
        <div className="absolute size-64 rounded-full border border-border/20" />
        {/* END Decorative rings */}

        {/* Outer orbit */}
        <div className={`absolute inset-0 ${outerOrbitClass}`}>
          {outerLogos.map((node, i) => {
            const angle = (360 / outerLogos.length) * i;
            const { x, y } = polar(angle, outerRadius);

            return (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
              >
                <div className={outerCounterClass}>
                  <motion.div
                    className="flex size-11 items-center justify-center rounded-full border bg-card shadow-xs ring-2 ring-background"
                    variants={animated ? itemVariants : undefined}
                    custom={i * 0.08 + 0.4}
                    {...motionProps}
                  >
                    {node}
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
        {/* END Outer orbit */}

        {/* Inner orbit */}
        {innerLogos.length > 0 && (
          <div className={`absolute inset-0 ${innerOrbitClass}`}>
            {innerLogos.map((node, i) => {
              const angle = (360 / innerLogos.length) * i;
              const { x, y } = polar(angle, innerRadius);

              return (
                <div
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  <div className={innerCounterClass}>
                    <motion.div
                      className="flex size-10 items-center justify-center rounded-full border bg-card shadow-xs ring-2 ring-background"
                      variants={animated ? itemVariants : undefined}
                      custom={i * 0.08 + 0.25}
                      {...motionProps}
                    >
                      {node}
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {/* END Inner orbit */}

        {/* Logo */}
        {logo && (
          <motion.div
            className="relative z-1 flex size-14 items-center justify-center rounded-full border bg-card shadow-[0_0_2rem_var(--color-primary)]/15 dark:shadow-[0_0_2rem_var(--color-primary)]/30"
            variants={animated ? logoVariants : undefined}
          >
            {logo}
          </motion.div>
        )}
        {/* END Logo */}
      </motion.div>
    </div>
  );
}
