const HEIGHT_BY_SIZE = {
  xs: "h-48",
  sm: "h-64",
  md: "h-96",
  lg: "h-[28rem]",
  xl: "h-[32rem]",
} as const;

export type PreviewVisualSize = keyof typeof HEIGHT_BY_SIZE;

export function PreviewVisual({
  label,
  children,
  className,
  contentClassName,
  size = "md",
}: {
  label?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  size?: PreviewVisualSize;
}) {
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-lg border border-border/50 bg-muted/20 dark:bg-muted/15 ${className || ""}`}
    >
      <div
        className={`flex grow items-center gap-2 ${HEIGHT_BY_SIZE[size]} ${contentClassName || ""}`}
      >
        {children}
      </div>

      {label && (
        <div className="bg-muted/25 px-2 py-2.25 text-center text-xs font-medium text-muted-foreground">
          {label}
        </div>
      )}
    </div>
  );
}

const COLS_BY_SIZE = {
  1: "",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-2 xl:grid-cols-3",
  4: "sm:grid-cols-2 xl:grid-cols-4",
} as const;

export type PreviewVisualGridCols = keyof typeof COLS_BY_SIZE;

export function PreviewVisualGrid({
  children,
  cols = 2,
}: {
  children: React.ReactNode;
  cols?: PreviewVisualGridCols;
}) {
  return (
    <div className={`grid grid-cols-1 gap-2 ${COLS_BY_SIZE[cols]}`}>
      {children}
    </div>
  );
}
