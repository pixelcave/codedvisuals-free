---
name: codedvisuals-data-filters
description: A filter builder where each rule lands in turn and narrows a running result count and progress bar. The Filters visual in the Data category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Data / Filters

A filter builder where each rule lands in turn and narrows a running result count and progress bar.

- **Registry name:** `@codedvisuals/data-filters`
- **Import path:** `@/components/codedvisuals/data/filters`

## Install if it is not in the project yet

Look for `components/codedvisuals/data/filters.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/data-filters
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`), presentation modifiers (`gradient`, `fadeOut`, `isometric`), and `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Filters"` |
| `unit` | `string` | `"customers"` |
| `total` | `number` | `2480` |
| `rules` | `FilterRule[]` | see Default content below |
| `addLabel` | `string` | `"Add filter"` |

## Types

```ts
interface FilterRule {
  field: string;
  operator: string;
  value: string;
  matches: number;
}
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_RULES: FilterRule[] = [
  { field: "Plan", operator: "is", value: "Pro", matches: 1640 },
  { field: "Status", operator: "is", value: "Active", matches: 1284 },
  { field: "MRR", operator: "is over", value: "$500", matches: 612 },
  { field: "Signed up", operator: "after", value: "Jan 1", matches: 318 },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import DataFilters from "@/components/codedvisuals/data/filters";

// default
<DataFilters />

// fadeOut
<DataFilters fadeOut />

// custom data · deals
<DataFilters
  title="Segment"
  unit="deals"
  total={1860}
  rules={[
    {
      field: "Stage",
      operator: "is",
      value: "Negotiation",
      matches: 940,
    },
    {
      field: "Owner",
      operator: "is",
      value: "Sales",
      matches: 520,
    },
    {
      field: "Value",
      operator: "is over",
      value: "$10k",
      matches: 186,
    },
  ]}
  addLabel="Add condition"
/>

// custom data · errors · isometric
<DataFilters
  isometric
  gradient={false}
  title="Log filters"
  unit="events"
  total={94200}
  rules={[
    {
      field: "Level",
      operator: "is",
      value: "Error",
      matches: 8140,
    },
    {
      field: "Service",
      operator: "is",
      value: "checkout",
      matches: 2310,
    },
    {
      field: "Seen",
      operator: "after",
      value: "12:00",
      matches: 486,
    },
    {
      field: "Region",
      operator: "is",
      value: "eu-west",
      matches: 92,
    },
  ]}
/>
```
