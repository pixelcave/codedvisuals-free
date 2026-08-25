---
name: codedvisuals-charts-heatmap
description: A grid heatmap of labeled rows and columns whose cells light up in a diagonal sweep, with an intensity legend. The Heatmap visual in the Charts category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Charts / Heatmap

A grid heatmap of labeled rows and columns whose cells light up in a diagonal sweep, with an intensity legend.

- **Registry name:** `@codedvisuals/charts-heatmap`
- **Import path:** `@/components/codedvisuals/charts/heatmap`

## Install if it is not in the project yet

Look for `components/codedvisuals/charts/heatmap.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/charts-heatmap
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`), presentation modifiers (`gradient`, `fadeOut`, `isometric`), and `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Active hours"` |
| `badge` | `string` | `"4w"` |
| `value` | `string` | `"12.4k"` |
| `change` | `string` | `"+9.2%"` |
| `rows` | `HeatmapRow[]` | see Default content below |
| `columns` | `string[]` | see Default content below |
| `color` | `string` | `"var(--color-primary)"` |
| `legend` | `boolean` | `true` |
| `legendLow` | `string` | `"Less"` |
| `legendHigh` | `string` | `"More"` |

## Types

```ts
interface HeatmapRow {
  label: string;
  values: number[];
}
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_ROWS: HeatmapRow[] = [
  { label: "Mon", values: [8, 4, 0, 6, 24, 62, 88, 96, 84, 58, 30, 14] },
  { label: "Tue", values: [10, 5, 4, 8, 28, 70, 92, 100, 88, 60, 32, 16] },
  { label: "Wed", values: [9, 4, 3, 7, 26, 66, 90, 94, 86, 62, 34, 18] },
  { label: "Thu", values: [11, 6, 4, 9, 30, 68, 86, 92, 82, 56, 28, 15] },
  { label: "Fri", values: [12, 6, 5, 10, 26, 58, 78, 82, 70, 44, 22, 12] },
  { label: "Sat", values: [14, 8, 0, 6, 14, 26, 36, 40, 34, 26, 20, 12] },
  { label: "Sun", values: [10, 0, 0, 5, 12, 22, 30, 34, 30, 24, 18, 10] },
];

const DEFAULT_COLUMNS = [
  "12a",
  "",
  "4a",
  "",
  "8a",
  "",
  "12p",
  "",
  "4p",
  "",
  "8p",
  "",
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import ChartsHeatmap from "@/components/codedvisuals/charts/heatmap";

// default
<ChartsHeatmap />

// fadeOut
<ChartsHeatmap fadeOut />

// cohort retention · custom copy
<ChartsHeatmap
  title="Cohort retention"
  badge="6m"
  value="42.8%"
  change="+5.1%"
  legendLow="Low"
  legendHigh="High"
  columns={["D0", "D1", "D7", "D14", "D30"]}
  rows={[
    { label: "Jan", values: [100, 74, 52, 44, 38] },
    { label: "Feb", values: [100, 78, 58, 48, 41] },
    { label: "Mar", values: [100, 81, 62, 52, 45] },
    { label: "Apr", values: [100, 84, 66, 55, 47] },
    { label: "May", values: [100, 86, 70, 60, 52] },
    { label: "Jun", values: [100, 89, 74, 64, 56] },
  ]}
/>

// contributions · custom copy
<ChartsHeatmap
  title="Contributions"
  badge="14w"
  value="1,842"
  change="+21.6%"
  columns={["Apr", "", "", "", "May", "", "", "", "Jun", "", "", "", "Jul", ""]}
  rows={[
    {
      label: "",
      values: [2, 0, 6, 4, 9, 3, 0, 7, 12, 5, 8, 14, 6, 10],
    },
    {
      label: "Mon",
      values: [8, 12, 4, 16, 6, 11, 18, 9, 5, 14, 20, 7, 12, 16],
    },
    {
      label: "",
      values: [4, 7, 14, 9, 18, 5, 12, 22, 8, 16, 6, 13, 19, 11],
    },
    {
      label: "Wed",
      values: [11, 5, 18, 7, 14, 24, 9, 16, 6, 12, 21, 10, 8, 18],
    },
    {
      label: "",
      values: [6, 16, 9, 21, 4, 13, 7, 18, 11, 24, 8, 15, 5, 13],
    },
    {
      label: "Fri",
      values: [9, 3, 12, 6, 17, 8, 14, 4, 19, 7, 11, 22, 9, 15],
    },
    {
      label: "",
      values: [0, 5, 2, 8, 0, 4, 6, 0, 3, 9, 2, 5, 0, 6],
    },
  ]}
/>

// no legend · custom copy
<ChartsHeatmap
  title="Errors by region"
  badge="1y"
  value="3,208"
  change="-12.4%"
  color="var(--color-chart-2)"
  legend={false}
  columns={["Jan", "", "Mar", "", "May", "", "Jul", "", "Sep", "", "Nov", ""]}
  rows={[
    {
      label: "US",
      values: [64, 58, 72, 48, 40, 36, 30, 44, 26, 22, 18, 14],
    },
    {
      label: "EU",
      values: [48, 52, 44, 38, 34, 46, 28, 24, 20, 30, 16, 12],
    },
    {
      label: "APAC",
      values: [82, 76, 68, 74, 60, 52, 46, 38, 42, 30, 24, 20],
    },
    {
      label: "LATAM",
      values: [30, 26, 34, 22, 28, 18, 24, 16, 20, 12, 14, 8],
    },
    {
      label: "MEA",
      values: [18, 22, 14, 20, 12, 16, 10, 14, 8, 10, 6, 4],
    },
  ]}
/>

// compact grid · isometric · custom copy
<ChartsHeatmap
  isometric
  title="Feature usage"
  badge="30d"
  value="78%"
  change="+6.7%"
  color="var(--color-chart-2)"
  columns={["W1", "W2", "W3", "W4", "W5", "W6"]}
  rows={[
    { label: "Docs", values: [42, 58, 66, 74, 88, 96] },
    { label: "Chat", values: [30, 44, 52, 68, 76, 84] },
    { label: "API", values: [18, 26, 38, 46, 62, 70] },
    { label: "Sync", values: [8, 14, 22, 30, 36, 48] },
  ]}
/>
```
