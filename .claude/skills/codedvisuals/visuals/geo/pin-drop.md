---
name: codedvisuals-geo-pin-drop
description: Location pins dropping onto an abstract radar field with concentric ripple pings. The Pin Drop visual in the Geo category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Geo / Pin Drop

Location pins dropping onto an abstract radar field with concentric ripple pings.

- **Registry name:** `@codedvisuals/geo-pin-drop`
- **Import path:** `@/components/codedvisuals/geo/pin-drop`

## Install if it is not in the project yet

Look for `components/codedvisuals/geo/pin-drop.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/geo-pin-drop
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `pins` | `Pin[]` | - |
| `wrapperClassName` | `string` | - |

## Types

```ts
interface Pin {
  x: number;
  y: number;
  label?: string;
  color?: string;
  active?: boolean;
}
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import GeoPinDrop from "@/components/codedvisuals/geo/pin-drop";

// default
<GeoPinDrop />

// hover
<GeoPinDrop hover />

// custom colors
<GeoPinDrop
  pins={[
    {
      x: 24,
      y: 50,
      label: "San Francisco",
      color: "text-indigo-700 dark:text-indigo-500",
    },
    {
      x: 40,
      y: 30,
      label: "London",
      color: "text-purple-700 dark:text-purple-500",
    },
    {
      x: 63,
      y: 52,
      label: "Singapore",
      color: "text-pink-700 dark:text-pink-500",
    },
    {
      x: 77,
      y: 35,
      label: "Tokyo",
      color: "text-sky-700 dark:text-sky-500",
    },
  ]}
/>

// single pin
<GeoPinDrop pins={[{ x: 50, y: 38, label: "Headquarters" }]} />

// custom pins
<GeoPinDrop
  pins={[
    { x: 20, y: 30, label: "London" },
    { x: 38, y: 40, label: "Paris" },
    { x: 70, y: 59, label: "Athens" },
  ]}
/>

// custom pins and colors
<GeoPinDrop
  pins={[
    {
      x: 26,
      y: 34,
      color: "text-rose-600 dark:text-rose-500",
      label: "Rome",
    },
    {
      x: 50,
      y: 52,
      color: "text-lime-600 dark:text-lime-500",
      label: "Athens",
    },
    {
      x: 74,
      y: 30,
      color: "text-orange-600 dark:text-orange-500",
      label: "Singapore",
    },
  ]}
/>

// active pin
<GeoPinDrop
  pins={[
    { x: 26, y: 48 },
    { x: 50, y: 30, label: "Headquarters", active: true },
    { x: 74, y: 50 },
  ]}
/>

// custom size
<GeoPinDrop wrapperClassName="max-w-full" />
```
