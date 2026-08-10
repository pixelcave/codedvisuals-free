---
name: codedvisuals-charts-donut
description: An animated donut chart with a center total and legend. The Donut visual in the Charts category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Charts / Donut

An animated donut chart with a center total and legend.

- **Registry name:** `@codedvisuals/charts-donut`
- **Import path:** `@/components/codedvisuals/charts/donut`

## Install if it is not in the project yet

Look for `components/codedvisuals/charts/donut.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/charts-donut
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Storage"` |
| `badge` | `string` | `"Pro Plan"` |
| `centerValue` | `string` | `"82%"` |
| `centerLabel` | `string` | `"of 100GB"` |
| `segments` | `Segment[]` | see Default content below |

## Types

```ts
interface Segment {
  label: string;
  value: number;
  color: string;
}
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_SEGMENTS: Segment[] = [
  { label: "Documents", value: 38, color: "var(--color-chart-1)" },
  { label: "Media", value: 26, color: "var(--color-chart-2)" },
  { label: "Apps", value: 18, color: "var(--color-chart-3)" },
  { label: "Free", value: 18, color: "var(--color-primary)" },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import ChartsDonut from "@/components/codedvisuals/charts/donut";

// default
<ChartsDonut />

// fadeOut
<ChartsDonut fadeOut />

// traffic · custom copy
<ChartsDonut
  title="Traffic sources"
  badge="30d"
  centerValue="48k"
  centerLabel="visits"
  segments={[
    {
      label: "Organic",
      value: 52,
      color: "var(--color-chart-1)",
    },
    {
      label: "Direct",
      value: 24,
      color: "var(--color-chart-2)",
    },
    {
      label: "Referral",
      value: 14,
      color: "var(--color-chart-3)",
    },
    {
      label: "Social",
      value: 10,
      color: "var(--color-chart-4)",
    },
  ]}
/>

// plans · isometric · custom copy
<ChartsDonut
  isometric
  title="Plans"
  badge="1,340+ Accounts"
  centerValue="1,284"
  centerLabel="customers"
  segments={[
    {
      label: "Free",
      value: 60,
      color: "var(--color-muted-foreground)",
    },
    { label: "Pro", value: 28, color: "var(--color-chart-1)" },
    { label: "Team", value: 12, color: "var(--color-chart-2)" },
  ]}
/>
```
