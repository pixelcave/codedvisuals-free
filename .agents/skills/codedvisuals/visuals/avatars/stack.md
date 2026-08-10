---
name: codedvisuals-avatars-stack
description: An overlapping avatar stack with a remaining count badge. The Stack visual in the Avatars category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Avatars / Stack

An overlapping avatar stack with a remaining count badge.

- **Registry name:** `@codedvisuals/avatars-stack`
- **Import path:** `@/components/codedvisuals/avatars/stack`

## Install if it is not in the project yet

Look for `components/codedvisuals/avatars/stack.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/avatars-stack
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `avatars` | `Avatar[]` | see Default content below |
| `status` | `StatusConfig \| false` | see Default content below |

## Types

```ts
interface Avatar {
  initials: string;
  tint?: string;
  image?: string;
}

interface StatusConfig {
  count: number;
  label: string;
  dot?: DotVariant | false;
}

type DotVariant = "online" | "away" | "busy";
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_AVATARS: Avatar[] = [
  {
    initials: "JC",
    tint: "bg-sky-200/80 text-sky-700 dark:bg-sky-950/80 dark:text-sky-300",
  },
  {
    initials: "AM",
    tint: "bg-rose-200/80 text-rose-700 dark:bg-rose-950/80 dark:text-rose-300",
  },
  {
    initials: "KL",
    tint: "bg-emerald-200/80 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300",
  },
  {
    initials: "DP",
    tint: "bg-violet-200/80 text-violet-700 dark:bg-violet-950/80 dark:text-violet-300",
  },
  {
    initials: "SR",
    tint: "bg-amber-200/80 text-amber-700 dark:bg-amber-950/80 dark:text-amber-300",
  },
];

const DEFAULT_STATUS: StatusConfig = { count: 1284, label: "members online" };
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import AvatarsStack from "@/components/codedvisuals/avatars/stack";

// default
<AvatarsStack />

// isometric
<AvatarsStack isometric />

// no status
<AvatarsStack status={false} />

// dot · away
<AvatarsStack status={{ count: 37, label: "users away", dot: "away" }} />

// dot · busy
<AvatarsStack status={{ count: 5, label: "in a meeting", dot: "busy" }} />

// no dot
<AvatarsStack status={{ count: 0, label: "Trusted by 1200+ founders", dot: false }} />

// custom roster
<AvatarsStack
  avatars={[
    {
      initials: "MK",
      tint: "bg-pink-200/80 text-pink-700 dark:bg-pink-950/80 dark:text-pink-300",
    },
    {
      initials: "RA",
      tint: "bg-orange-200/80 text-orange-700 dark:bg-orange-950/80 dark:text-orange-300",
    },
    {
      initials: "LS",
      tint: "bg-indigo-200/80 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300",
    },
    {
      initials: "FW",
      tint: "bg-teal-200/80 text-teal-700 dark:bg-teal-950/80 dark:text-teal-300",
    },
  ]}
  status={{ count: 48, label: "reviewers" }}
/>

// three avatars · custom copy
<AvatarsStack
  avatars={[
    {
      initials: "HZ",
      tint: "bg-cyan-200/80 text-cyan-700 dark:bg-cyan-950/80 dark:text-cyan-300",
    },
    {
      initials: "OB",
      tint: "bg-fuchsia-200/80 text-fuchsia-700 dark:bg-fuchsia-950/80 dark:text-fuchsia-300",
    },
    {
      initials: "TN",
      tint: "bg-lime-200/80 text-lime-700 dark:bg-lime-950/80 dark:text-lime-300",
    },
  ]}
  status={{ count: 3, label: "founding designers" }}
/>
```
