---
name: codedvisuals-data-query
description: A visual query builder that assembles its conditions, sweeps as it runs, then streams the matching rows with a timing readout. The Query visual in the Data category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Data / Query

A visual query builder that assembles its conditions, sweeps as it runs, then streams the matching rows with a timing readout.

- **Registry name:** `@codedvisuals/data-query`
- **Import path:** `@/components/codedvisuals/data/query`

## Install if it is not in the project yet

Look for `components/codedvisuals/data/query.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/data-query
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`), presentation modifiers (`gradient`, `fadeOut`, `isometric`), and `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `source` | `string` | `"orders"` |
| `conditions` | `QueryCondition[]` | see Default content below |
| `columns` | `string[]` | see Default content below |
| `rows` | `string[][]` | see Default content below |
| `duration` | `string` | `"24 ms"` |

## Types

```ts
interface QueryCondition {
  field: string;
  operator: string;
  value: string;
}
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_CONDITIONS: QueryCondition[] = [
  { field: "status", operator: "=", value: "paid" },
  { field: "total", operator: ">", value: "100" },
];

const DEFAULT_COLUMNS: string[] = ["id", "customer", "total"];

const DEFAULT_ROWS: string[][] = [
  ["4291", "Emma Wilson", "$249.00"],
  ["4288", "Lisa Chang", "$512.00"],
  ["4283", "Noah Reyes", "$134.50"],
  ["4279", "Ivy Sandoval", "$408.00"],
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import DataQuery from "@/components/codedvisuals/data/query";

// default
<DataQuery />

// fadeOut
<DataQuery fadeOut />

// custom data · events
<DataQuery
  source="events"
  duration="8 ms"
  conditions={[
    { field: "name", operator: "=", value: "signup" },
    { field: "plan", operator: "!=", value: "free" },
  ]}
  columns={["ts", "user", "plan"]}
  rows={[
    ["12:04", "emma@acme.io", "Pro"],
    ["11:52", "noah@dune.co", "Team"],
    ["11:38", "ivy@northwind.io", "Pro"],
  ]}
/>

// custom data · sessions · isometric
<DataQuery
  isometric
  gradient={false}
  source="sessions"
  duration="112 ms"
  conditions={[
    { field: "country", operator: "in", value: "EU" },
    { field: "duration", operator: ">", value: "30s" },
    { field: "device", operator: "=", value: "mobile" },
  ]}
  columns={["id", "country", "duration"]}
  rows={[
    ["a19f", "Germany", "4m 12s"],
    ["c74b", "France", "2m 48s"],
    ["e02d", "Spain", "1m 09s"],
    ["f5a1", "Italy", "52s"],
  ]}
/>
```
