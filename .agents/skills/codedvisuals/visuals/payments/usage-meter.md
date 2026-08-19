---
name: codedvisuals-payments-usage-meter
description: A metered billing summary with a usage bar against quota, itemized metered charges, and an estimated total. The Usage Meter visual in the Payments category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Payments / Usage Meter

A metered billing summary with a usage bar against quota, itemized metered charges, and an estimated total.

- **Registry name:** `@codedvisuals/payments-usage-meter`
- **Import path:** `@/components/codedvisuals/payments/usage-meter`

## Install if it is not in the project yet

Look for `components/codedvisuals/payments/usage-meter.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/payments-usage-meter
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`), presentation modifiers (`gradient`, `fadeOut`, `isometric`), and `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Usage this month"` |
| `period` | `string` | `"18 days left"` |
| `meterLabel` | `string` | `"API requests"` |
| `meterUsage` | `string` | `"1.24M / 2M"` |
| `meterCaption` | `string` | `"62% of included quota used"` |
| `usedRatio` | `number` | `0.62` |
| `items` | `UsageItem[]` | see Default content below |
| `total` | `string` | `"$248.60"` |
| `totalLabel` | `string` | `"Estimated total"` |
| `trend` | `string` | `"+12%"` |

## Types

```ts
interface UsageItem {
  label: string;
  detail: string;
  amount: string;
  color?: string;
}
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_ITEMS: UsageItem[] = [
  {
    label: "API requests",
    detail: "1.24M calls",
    amount: "$124.00",
    color: "bg-chart-1",
  },
  {
    label: "Bandwidth",
    detail: "820 GB",
    amount: "$82.00",
    color: "bg-chart-2",
  },
  {
    label: "Compute",
    detail: "42 hrs",
    amount: "$42.60",
    color: "bg-chart-4",
  },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import PaymentsUsageMeter from "@/components/codedvisuals/payments/usage-meter";

// default
<PaymentsUsageMeter />

// fadeOut
<PaymentsUsageMeter fadeOut />

// near limit · custom copy
<PaymentsUsageMeter
  meterLabel="Seats"
  meterUsage="19 / 20"
  meterCaption="95% of included seats used"
  usedRatio={0.95}
  total="$1,140.00"
  trend="+8%"
  items={[
    {
      label: "Team seats",
      detail: "20 members",
      amount: "$980.00",
      color: "bg-chart-1",
    },
    {
      label: "Overage",
      detail: "3 guests",
      amount: "$120.00",
      color: "bg-chart-3",
    },
    {
      label: "Add-ons",
      detail: "SSO, audit log",
      amount: "$40.00",
      color: "bg-chart-4",
    },
  ]}
/>
```
