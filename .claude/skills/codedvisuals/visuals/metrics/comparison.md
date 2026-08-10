---
name: codedvisuals-metrics-comparison
description: A before and after metric comparison with deltas. The Comparison visual in the Metrics category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Metrics / Comparison

A before and after metric comparison with deltas.

- **Registry name:** `@codedvisuals/metrics-comparison`
- **Import path:** `@/components/codedvisuals/metrics/comparison`

## Install if it is not in the project yet

Look for `components/codedvisuals/metrics/comparison.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/metrics-comparison
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Conversion Rate"` |
| `before` | `string` | `"2.4%"` |
| `after` | `string` | `"4.8%"` |
| `improvement` | `string` | `"+100% lift"` |
| `beforeBar` | `number` | `50` |
| `afterBar` | `number` | `100` |

## Examples

Give the visual a sized container, then drop it in:

```tsx
import MetricsComparison from "@/components/codedvisuals/metrics/comparison";

// default
<MetricsComparison />

// isometric
<MetricsComparison isometric />

// speed · custom copy
<MetricsComparison
  title="Page Load Time"
  before="3.8s"
  after="1.4s"
  improvement="2.7× faster"
  beforeBar={100}
  afterBar={37}
/>

// cost · custom copy
<MetricsComparison
  title="Cost per Lead"
  before="$24.50"
  after="$8.20"
  improvement="66% cheaper"
  beforeBar={100}
  afterBar={33}
/>

// latency · custom copy
<MetricsComparison
  title="API Latency"
  before="842ms"
  after="187ms"
  improvement="4.5× faster"
  beforeBar={100}
  afterBar={22}
/>

// churn · custom copy
<MetricsComparison
  title="Monthly Churn"
  before="5.2%"
  after="1.8%"
  improvement="65% drop"
  beforeBar={100}
  afterBar={35}
/>
```
