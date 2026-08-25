---
name: codedvisuals-charts-gauge
description: A semicircular gauge whose arc sweeps to its value, with an optional zoned track, a center reading, and range labels. The Gauge visual in the Charts category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Charts / Gauge

A semicircular gauge whose arc sweeps to its value, with an optional zoned track, a center reading, and range labels.

- **Registry name:** `@codedvisuals/charts-gauge`
- **Import path:** `@/components/codedvisuals/charts/gauge`

## Install if it is not in the project yet

Look for `components/codedvisuals/charts/gauge.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/charts-gauge
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`), presentation modifiers (`gradient`, `fadeOut`, `isometric`), and `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Health score"` |
| `badge` | `string` | `"Live"` |
| `percent` | `number` | `92` |
| `value` | `string` | - |
| `label` | `string` | `"All systems healthy"` |
| `change` | `string` | `"+4.2%"` |
| `minLabel` | `string` | `"0"` |
| `maxLabel` | `string` | `"100"` |
| `color` | `string` | `"var(--color-primary)"` |
| `zones` | `GaugeZone[]` | - |

## Types

```ts
interface GaugeZone {
  to: number;
  color: string;
}
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import ChartsGauge from "@/components/codedvisuals/charts/gauge";

// default
<ChartsGauge />

// fadeOut
<ChartsGauge fadeOut />

// capacity · custom copy
<ChartsGauge
  title="Storage used"
  badge="Pro"
  percent={68}
  value="68%"
  label="of 100 GB"
  minLabel="0"
  maxLabel="100 GB"
  change="+12.4%"
/>

// zones · custom copy
<ChartsGauge
  title="Error budget"
  badge="30d"
  percent={76}
  value="76%"
  label="budget remaining"
  minLabel="0"
  maxLabel="100%"
  change="-6.2%"
  zones={[
    { to: 40, color: "text-red-300 dark:text-red-400/30" },
    { to: 70, color: "text-amber-300 dark:text-amber-400/30" },
    {
      to: 100,
      color: "text-emerald-300 dark:text-emerald-400/30",
    },
  ]}
/>

// low value · custom copy
<ChartsGauge
  title="Monthly credits"
  badge="Team"
  percent={24}
  value="24%"
  label="of 50k credits used"
  minLabel="0"
  maxLabel="50k"
  change="+3.1%"
  color="var(--color-chart-2)"
/>

// score · isometric · custom copy
<ChartsGauge
  isometric
  title="NPS"
  badge="Q3"
  percent={81}
  value="+62"
  label="promoters minus detractors"
  minLabel="-100"
  maxLabel="100"
  change="+8.0"
/>
```
