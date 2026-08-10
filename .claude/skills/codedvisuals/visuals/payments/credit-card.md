---
name: codedvisuals-payments-credit-card
description: A credit card visual with brand, number, and chip. The Credit Card visual in the Payments category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Payments / Credit Card

A credit card visual with brand, number, and chip.

- **Registry name:** `@codedvisuals/payments-credit-card`
- **Import path:** `@/components/codedvisuals/payments/credit-card`

## Install if it is not in the project yet

Look for `components/codedvisuals/payments/credit-card.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/payments-credit-card
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `name` | `string` | `"JOHN T. DOE"` |
| `number` | `string` | `"•••• •••• •••• 4242"` |
| `expiry` | `string` | see Default content below |
| `cvc` | `string` | `"123"` |
| `brand` | `string` | `"PLATINUM"` |
| `stacked` | `boolean` | `false` |
| `flipped` | `boolean` | `false` |

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_EXPIRY = `12/${((new Date().getFullYear() + 3) % 100)
  .toString()
  .padStart(2, "0")}`;
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import PaymentsCreditCard from "@/components/codedvisuals/payments/credit-card";

// default
<PaymentsCreditCard />

// stacked
<PaymentsCreditCard stacked />

// isometric
<PaymentsCreditCard isometric />

// isometric · stacked
<PaymentsCreditCard isometric stacked />

// custom content
<PaymentsCreditCard
  name="ADA LOVELACE"
  number="•••• •••• •••• 1815"
  expiry="06/30"
  brand="GOLD"
/>

// alternate custom content
<PaymentsCreditCard
  name="GRACE HOPPER"
  number="1234 5678 9012 3456"
  expiry="12/52"
  brand="VISA"
/>

// flipped
<PaymentsCreditCard flipped />

// stacked · flipped
<PaymentsCreditCard stacked flipped />

// isometric · flipped
<PaymentsCreditCard isometric flipped />

// isometric · stacked · flipped
<PaymentsCreditCard isometric stacked flipped />
```
