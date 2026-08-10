import { motion } from "motion/react";
import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const ENTRANCE = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
};

export function SectionHeading({
  badge,
  badgeSlot,
  title,
  description,
  className,
  as: Heading = "h2",
  align = "left",
  animated = false,
  trigger = "mount",
  classic = false,
}: {
  badge?: string;
  badgeSlot?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  as?: "h1" | "h2";
  align?: "left" | "center";
  animated?: boolean;
  trigger?: "mount" | "inView";
  classic?: boolean;
}) {
  const centered = align === "center";
  const MotionHeading = motion[Heading];

  const entrance = (delay = 0) => {
    if (!animated) {
      return {};
    }

    const transition = { duration: 0.4, delay, ease: "easeOut" as const };

    if (trigger === "inView") {
      return {
        initial: ENTRANCE.initial,
        whileInView: ENTRANCE.animate,
        viewport: { once: true, amount: 0.5 },
        transition,
      };
    }

    return { ...ENTRANCE, transition };
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        centered ? "items-center text-center" : "items-start",
        className,
      )}
    >
      {(badgeSlot ?? badge) ? (
        <motion.div {...entrance(0.3)}>
          {badgeSlot ?? (
            <Badge variant="outline" className="h-7 bg-background px-2.5">
              {badge}
            </Badge>
          )}
        </motion.div>
      ) : null}

      {classic ? (
        <>
          <MotionHeading
            className={cn(
              "max-w-4xl text-4xl font-extrabold tracking-tight text-foreground md:text-5xl",
              centered && "mx-auto",
            )}
            {...entrance()}
          >
            {title}
          </MotionHeading>
          {description ? (
            <motion.p
              className={cn(
                "max-w-2xl text-lg/relaxed text-pretty text-muted-foreground",
                centered && "mx-auto",
              )}
              {...entrance(0.2)}
            >
              {description}
            </motion.p>
          ) : null}
        </>
      ) : (
        <MotionHeading
          className={cn(
            "max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl",
            centered && "mx-auto",
          )}
          {...entrance()}
        >
          {title}
          {description ? (
            <motion.span
              className="font-meidum text-muted-foreground dark:text-muted-foreground/70"
              {...entrance(0.2)}
            >
              {" "}
              {description}
            </motion.span>
          ) : null}
        </MotionHeading>
      )}
    </div>
  );
}
