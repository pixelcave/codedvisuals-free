---
name: codedvisuals-charts-sparkline
description: A compact inline sparkline for tight spaces and stat cards. The Sparkline visual in the Charts category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Charts / Sparkline

A compact inline sparkline for tight spaces and stat cards.

- **Registry name:** `@codedvisuals/charts-sparkline`
- **Import path:** `@/components/codedvisuals/charts/sparkline`

## Install if it is not in the project yet

Look for `components/codedvisuals/charts/sparkline.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/charts-sparkline
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Active users"` |
| `value` | `string` | `"1,284"` |
| `change` | `string` | `"+12.5%"` |
| `points` | `number[]` | see Default content below |

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_COPY = {
  title: "Active users",
  value: "1,284",
  change: "+12.5%",
  points: [0.3, 0.42, 0.28, 0.5, 0.45, 0.62, 0.55, 0.78, 0.7, 0.92],
};
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import ChartsSparkline from "@/components/codedvisuals/charts/sparkline";

// default
<ChartsSparkline />

// isometric
<ChartsSparkline isometric />

// negative change · custom copy
<ChartsSparkline
  title="Churn rate"
  value="2.4%"
  change="-1.1%"
  points={[0.85, 0.78, 0.82, 0.7, 0.72, 0.58, 0.6, 0.45, 0.42, 0.3]}
/>

// negative change · isometric · custom copy
<ChartsSparkline
  isometric
  title="Bounce rate"
  value="38.2%"
  change="-4.6%"
  points={[0.9, 0.82, 0.85, 0.7, 0.68, 0.58, 0.5, 0.42, 0.38, 0.25]}
/>

// custom copy
<ChartsSparkline title="MRR" value="$12.4k" change="+8.2%" />

// isometric · no gradient · custom copy
<ChartsSparkline
  isometric
  gradient={false}
  title="Requests"
  value="842k"
  change="+31.4%"
  points={[0.15, 0.28, 0.22, 0.4, 0.38, 0.55, 0.52, 0.7, 0.68, 0.88]}
/>
```
