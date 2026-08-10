---
name: codedvisuals-metrics-stat-card
description: A single stat card with a value, label, and trend. The Stat Card visual in the Metrics category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Metrics / Stat Card

A single stat card with a value, label, and trend.

- **Registry name:** `@codedvisuals/metrics-stat-card`
- **Import path:** `@/components/codedvisuals/metrics/stat-card`

## Install if it is not in the project yet

Look for `components/codedvisuals/metrics/stat-card.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/metrics-stat-card
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `icon` | `React.ElementType` | - |
| `label` | `string` | `"Revenue"` |
| `value` | `string` | `"$48,213"` |
| `change` | `string` | `"+12.4%"` |
| `period` | `string` | `"vs last month"` |
| `trend` | `Trend` | see Default content below |

## Types

```ts
type Trend = "up" | "down" | "neutral";
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_COPY = {
  icon: DollarSign as React.ElementType,
  label: "Revenue",
  value: "$48,213",
  change: "+12.4%",
  period: "vs last month",
  trend: "up" as Trend,
};
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import MetricsStatCard from "@/components/codedvisuals/metrics/stat-card";
import { Activity, ShoppingCart, Target, Users } from "lucide-react";

// default
<MetricsStatCard />

// fadeOut
<MetricsStatCard fadeOut />

// users · custom copy
<MetricsStatCard
  icon={Users}
  label="Active Users"
  value="12,481"
  change="+8.1%"
  period="vs last week"
  trend="up"
/>

// orders · custom copy
<MetricsStatCard
  icon={ShoppingCart}
  label="Orders"
  value="1,284"
  change="-3.2%"
  period="vs last month"
  trend="down"
/>

// pageviews · custom copy
<MetricsStatCard
  icon={Activity}
  label="Page Views"
  value="92,418"
  change="+24.7%"
  period="vs last 7d"
  trend="up"
/>

// conversion · custom copy
<MetricsStatCard
  icon={Target}
  label="Conversion"
  value="4.82%"
  change="+0.6pt"
  period="vs last 30d"
  trend="up"
/>
```
