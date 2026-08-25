---
name: codedvisuals-charts-funnel
description: A conversion funnel of tapering stage slabs that pour in one by one, with per stage counts and conversion rates. The Funnel visual in the Charts category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Charts / Funnel

A conversion funnel of tapering stage slabs that pour in one by one, with per stage counts and conversion rates.

- **Registry name:** `@codedvisuals/charts-funnel`
- **Import path:** `@/components/codedvisuals/charts/funnel`

## Install if it is not in the project yet

Look for `components/codedvisuals/charts/funnel.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/charts-funnel
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`), presentation modifiers (`gradient`, `fadeOut`, `isometric`), and `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Signup funnel"` |
| `badge` | `string` | `"30d"` |
| `value` | `string` | - |
| `change` | `string` | `"+2.4%"` |
| `stages` | `FunnelStage[]` | see Default content below |

## Types

```ts
interface FunnelStage {
  label: string;
  value: number;
  color?: string;
}
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_STAGES: FunnelStage[] = [
  { label: "Visitors", value: 24800 },
  { label: "Signups", value: 9420 },
  { label: "Activated", value: 4120 },
  { label: "Paid", value: 1580 },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import ChartsFunnel from "@/components/codedvisuals/charts/funnel";

// default
<ChartsFunnel />

// fadeOut
<ChartsFunnel fadeOut />

// checkout · custom copy
<ChartsFunnel
  title="Checkout funnel"
  badge="7d"
  change="+1.6%"
  stages={[
    { label: "Sessions", value: 61400 },
    { label: "Cart", value: 18320 },
    { label: "Checkout", value: 7940 },
    { label: "Purchase", value: 4260 },
  ]}
/>

// negative change · custom copy
<ChartsFunnel
  title="Onboarding drop-off"
  badge="90d"
  change="-3.1%"
  stages={[
    { label: "Invited", value: 12400 },
    { label: "Accepted", value: 6180 },
    { label: "Profile", value: 3240 },
    { label: "Workspace", value: 1490 },
    { label: "Invites", value: 520 },
  ]}
/>

// highlighted stage · isometric · custom copy
<ChartsFunnel
  isometric
  title="Sales pipeline"
  badge="Q3"
  value="$412k"
  change="+11.9%"
  stages={[
    {
      label: "Leads",
      value: 1840,
      color: "var(--color-chart-2)",
    },
    {
      label: "Qualified",
      value: 780,
      color: "var(--color-chart-2)",
    },
    { label: "Demo", value: 310, color: "var(--color-chart-3)" },
    {
      label: "Closed",
      value: 96,
      color: "var(--color-primary)",
    },
  ]}
/>

// three stages · custom copy
<ChartsFunnel
  title="Trial conversion"
  badge="14d"
  change="+4.8%"
  stages={[
    { label: "Trials", value: 3620 },
    { label: "Active", value: 2140 },
    { label: "Converted", value: 742 },
  ]}
/>
```
