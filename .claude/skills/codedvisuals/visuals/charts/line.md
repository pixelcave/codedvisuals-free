---
name: codedvisuals-charts-line
description: An animated line chart with a value, trend badge, and gradient fill. The Line visual in the Charts category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Charts / Line

An animated line chart with a value, trend badge, and gradient fill.

- **Registry name:** `@codedvisuals/charts-line`
- **Import path:** `@/components/codedvisuals/charts/line`

## Install if it is not in the project yet

Look for `components/codedvisuals/charts/line.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/charts-line
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Active users"` |
| `badge` | `string` | `"YTD"` |
| `value` | `string` | `"12,481"` |
| `change` | `string` | `"+24.1%"` |
| `points` | `number[]` | see Default content below |
| `ticks` | `string[]` | see Default content below |

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_COPY = {
  title: "Active users",
  badge: "YTD",
  value: "12,481",
  change: "+24.1%",
  points: [
    0.18, 0.3, 0.22, 0.42, 0.36, 0.55, 0.48, 0.68, 0.62, 0.82, 0.78, 0.95,
  ],
  ticks: ["Jan", "Mar", "May", "Jul", "Sep", "Nov"],
};
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import ChartsLine from "@/components/codedvisuals/charts/line";

// default
<ChartsLine />

// fadeOut
<ChartsLine fadeOut />

// revenue · custom copy
<ChartsLine
  title="Revenue"
  badge="10w"
  value="$84,210"
  change="+18.9%"
  points={[0.2, 0.32, 0.28, 0.45, 0.52, 0.48, 0.65, 0.72, 0.68, 0.85]}
  ticks={["W1", "W3", "W5", "W7", "W9"]}
/>

// negative change · custom copy
<ChartsLine
  title="Page views"
  badge="30d"
  value="8,412"
  change="-12.3%"
  points={[0.9, 0.85, 0.78, 0.8, 0.72, 0.65, 0.6, 0.55, 0.5, 0.42]}
  ticks={["W1", "W2", "W3", "W4", "W5"]}
/>

// conversions · isometric · custom copy
<ChartsLine
  isometric
  title="Conversions"
  badge="7d"
  value="4.82%"
  change="+0.6pp"
  points={[0.42, 0.5, 0.46, 0.6, 0.58, 0.72, 0.7, 0.85]}
  ticks={["Mon", "Wed", "Fri", "Sun"]}
/>

// isometric · no gradient · custom copy
<ChartsLine
  isometric
  gradient={false}
  title="Latency"
  badge="24h"
  value="142ms"
  change="-8.3%"
  points={[0.7, 0.65, 0.72, 0.6, 0.55, 0.58, 0.48, 0.42, 0.45, 0.38]}
  ticks={["00:00", "06:00", "12:00", "18:00", "Now"]}
/>
```
