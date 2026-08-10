import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  stack = false,
  ...props
}: React.ComponentProps<"div"> & {
  stack?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-16",
        stack && "flex flex-col gap-16",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
