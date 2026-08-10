---
name: codedvisuals-metrics-trend
description: A metric with a trend line and period over period change. The Trend visual in the Metrics category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Metrics / Trend

A metric with a trend line and period over period change.

- **Registry name:** `@codedvisuals/metrics-trend`
- **Import path:** `@/components/codedvisuals/metrics/trend`

## Install if it is not in the project yet

Look for `components/codedvisuals/metrics/trend.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/metrics-trend
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `label` | `string` | `"Visitors"` |
| `value` | `string` | `"12,481"` |
| `change` | `string` | `"+18.2%"` |
| `direction` | `Direction` | see Default content below |
| `points` | `number[]` | see Default content below |
| `stacked` | `boolean` | `false` |

## Types

```ts
type Direction = "primary" | "up" | "down" | "warning";
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_COPY = {
  label: "Visitors",
  value: "12,481",
  change: "+18.2%",
  direction: "primary" as Direction,
  points: [0.32, 0.28, 0.45, 0.4, 0.58, 0.55, 0.7, 0.82, 0.88],
};
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import MetricsTrend from "@/components/codedvisuals/metrics/trend";

// default
<MetricsTrend />

// fadeOut
<MetricsTrend fadeOut />

// stacked
<MetricsTrend stacked />

// isometric · stacked
<MetricsTrend isometric stacked />

// conversions · primary · custom copy
<MetricsTrend
  label="Conversions"
  value="1,284"
  change="+22.6%"
  direction="primary"
  points={[0.28, 0.32, 0.4, 0.45, 0.5, 0.58, 0.68, 0.74, 0.82]}
  gradient={false}
/>

// revenue · up · custom copy
<MetricsTrend
  label="MRR"
  value="$24.8k"
  change="+12.4%"
  direction="up"
  points={[0.4, 0.42, 0.38, 0.5, 0.55, 0.62, 0.7, 0.78, 0.85]}
  gradient={false}
/>

// bounce · down · custom copy
<MetricsTrend
  label="Bounce Rate"
  value="24.3%"
  change="-8.4%"
  direction="down"
  points={[0.85, 0.78, 0.82, 0.7, 0.65, 0.58, 0.5, 0.42, 0.38]}
  gradient={false}
/>

// errors · warning · custom copy
<MetricsTrend
  label="Error Rate"
  value="4.2%"
  change="+0.8pt"
  direction="warning"
  points={[0.25, 0.22, 0.3, 0.28, 0.42, 0.5, 0.62, 0.7, 0.78]}
  gradient={false}
/>
```
