---
name: codedvisuals-avatars-grid
description: A grid of user avatars with subtle staggered reveals. The Grid visual in the Avatars category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Avatars / Grid

A grid of user avatars with subtle staggered reveals.

- **Registry name:** `@codedvisuals/avatars-grid`
- **Import path:** `@/components/codedvisuals/avatars/grid`

## Install if it is not in the project yet

Look for `components/codedvisuals/avatars/grid.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/avatars-grid
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `members` | `Member[]` | see Default content below |

## Types

```ts
interface Member {
  initials: string;
  image?: string;
  tint?: string;
}
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_MEMBERS: Member[] = [
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
  {
    initials: "TN",
    tint: "bg-cyan-200/80 text-cyan-700 dark:bg-cyan-950/80 dark:text-cyan-300",
  },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import AvatarsGrid from "@/components/codedvisuals/avatars/grid";

// default
<AvatarsGrid />

// isometric
<AvatarsGrid isometric />

// 4 avatars · custom members
<AvatarsGrid
  members={[
    {
      initials: "SR",
      tint: "bg-amber-200/80 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
    },
    {
      initials: "OB",
      tint: "bg-pink-200/80 text-pink-700 dark:bg-pink-900 dark:text-pink-300",
    },
    {
      initials: "MK",
      tint: "bg-teal-200/80 text-teal-700 dark:bg-teal-900 dark:text-teal-300",
    },
    {
      initials: "JH",
      tint: "bg-indigo-200/80 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300",
    },
  ]}
/>

// 4 avatars · isometric · custom members
<AvatarsGrid
  isometric
  members={[
    {
      initials: "RA",
      tint: "bg-orange-200/80 text-orange-700 dark:bg-orange-900 dark:text-orange-300",
    },
    {
      initials: "LS",
      tint: "bg-lime-200/80 text-lime-700 dark:bg-lime-900 dark:text-lime-300",
    },
    {
      initials: "FW",
      tint: "bg-red-200/80 text-red-700 dark:bg-red-900 dark:text-red-300",
    },
    {
      initials: "HZ",
      tint: "bg-fuchsia-200/80 text-fuchsia-700 dark:bg-fuchsia-900 dark:text-fuchsia-300",
    },
  ]}
/>
```
