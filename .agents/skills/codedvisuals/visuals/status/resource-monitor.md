---
name: codedvisuals-status-resource-monitor
description: A live resource monitor streaming CPU and memory usage across a gridded plot, with a legend showing the current reading for each series. The Resource Monitor visual in the Status category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Status / Resource Monitor

A live resource monitor streaming CPU and memory usage across a gridded plot, with a legend showing the current reading for each series.

- **Registry name:** `@codedvisuals/status-resource-monitor`
- **Import path:** `@/components/codedvisuals/status/resource-monitor`

## Install if it is not in the project yet

Look for `components/codedvisuals/status/resource-monitor.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/status-resource-monitor
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`), presentation modifiers (`gradient`, `fadeOut`, `isometric`), and `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"App"` |
| `series` | `MonitorSeries[]` | see Default content below |
| `samples` | `number` | `48` |
| `interval` | `number` | `600` |
| `showGrid` | `boolean` | `true` |
| `showAxis` | `boolean` | `true` |

## Types

```ts
interface MonitorSeries {
  label: string;
  color: string;
  points: number[];
  jitter?: number;
}
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_SERIES: MonitorSeries[] = [
  {
    label: "MEM",
    color: "var(--color-emerald-500)",
    points: [0.52, 0.57, 0.5, 0.58, 0.53, 0.49, 0.56, 0.51, 0.57, 0.54],
    jitter: 0.05,
  },
  {
    label: "CPU",
    color: "var(--color-primary)",
    points: [0.16, 0.21, 0.19, 0.27, 0.34, 0.47, 0.6, 0.73, 0.85, 0.9],
    jitter: 0.045,
  },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import StatusResourceMonitor from "@/components/codedvisuals/status/resource-monitor";

// default
<StatusResourceMonitor />

// hover
<StatusResourceMonitor hover />

// custom copy
<StatusResourceMonitor
  title="api-prod-01"
  series={[
    {
      label: "DISK",
      color: "var(--color-amber-500)",
      points: [0.3, 0.34, 0.31, 0.38, 0.35, 0.33, 0.37, 0.34],
      jitter: 0.04,
    },
    {
      label: "NET",
      color: "var(--color-primary)",
      points: [0.62, 0.55, 0.68, 0.6, 0.72, 0.64, 0.7, 0.66],
      jitter: 0.07,
    },
  ]}
/>

// single series · isometric
<StatusResourceMonitor
  title="Queue throughput"
  isometric
  series={[
    {
      label: "JOBS",
      color: "var(--color-primary)",
      points: [0.2, 0.35, 0.28, 0.5, 0.44, 0.66, 0.58, 0.78],
      jitter: 0.06,
    },
  ]}
/>

// fast · 96 samples
<StatusResourceMonitor samples={96} interval={260} />

// no grid
<StatusResourceMonitor showGrid={false} />

// no axis
<StatusResourceMonitor showAxis={false} />
```
