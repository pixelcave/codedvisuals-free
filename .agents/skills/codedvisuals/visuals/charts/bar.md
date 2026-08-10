---
name: codedvisuals-charts-bar
description: An animated bar chart with a value, trend badge, and grid. The Bar visual in the Charts category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Charts / Bar

An animated bar chart with a value, trend badge, and grid.

- **Registry name:** `@codedvisuals/charts-bar`
- **Import path:** `@/components/codedvisuals/charts/bar`

## Install if it is not in the project yet

Look for `components/codedvisuals/charts/bar.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/charts-bar
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Revenue"` |
| `badge` | `string` | `"7d"` |
| `value` | `string` | `"$48.2k"` |
| `change` | `string` | `"+18.4%"` |
| `items` | `BarItem[]` | see Default content below |

## Types

```ts
interface BarItem {
  label: string;
  value: number;
}
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_ITEMS: BarItem[] = [
  { label: "Mon", value: 56 },
  { label: "Tue", value: 38 },
  { label: "Wed", value: 72 },
  { label: "Thu", value: 48 },
  { label: "Fri", value: 88 },
  { label: "Sat", value: 30 },
  { label: "Sun", value: 22 },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import ChartsBar from "@/components/codedvisuals/charts/bar";

// default
<ChartsBar />

// fadeOut
<ChartsBar fadeOut />

// signups · custom copy
<ChartsBar
  title="Signups"
  badge="6m"
  value="3,148"
  change="+34.2%"
  items={[
    { label: "Jan", value: 32 },
    { label: "Feb", value: 48 },
    { label: "Mar", value: 60 },
    { label: "Apr", value: 54 },
    { label: "May", value: 78 },
    { label: "Jun", value: 92 },
  ]}
/>

// negative change · custom copy
<ChartsBar
  title="Churn"
  badge="6m"
  value="2.4%"
  change="-0.8%"
  items={[
    { label: "Jan", value: 82 },
    { label: "Feb", value: 68 },
    { label: "Mar", value: 54 },
    { label: "Apr", value: 42 },
    { label: "May", value: 36 },
    { label: "Jun", value: 28 },
  ]}
/>

// quarterly · isometric · custom copy
<ChartsBar
  isometric
  title="ARR by quarter"
  badge="1y"
  value="$1.2M"
  change="+22.8%"
  items={[
    { label: "Q1", value: 62 },
    { label: "Q2", value: 70 },
    { label: "Q3", value: 84 },
    { label: "Q4", value: 96 },
  ]}
/>

// many columns · custom copy
<ChartsBar
  title="Daily active users"
  badge="15d"
  value="12.8k"
  change="+6.1%"
  isometric
  items={[
    { label: "1", value: 42 },
    { label: "2", value: 58 },
    { label: "3", value: 35 },
    { label: "4", value: 72 },
    { label: "5", value: 64 },
    { label: "6", value: 48 },
    { label: "7", value: 80 },
    { label: "8", value: 55 },
    { label: "9", value: 90 },
    { label: "10", value: 68 },
    { label: "11", value: 44 },
    { label: "12", value: 76 },
    { label: "13", value: 52 },
    { label: "14", value: 88 },
    { label: "15", value: 60 },
  ]}
/>
```
