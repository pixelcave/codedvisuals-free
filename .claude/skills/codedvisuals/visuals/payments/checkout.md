---
name: codedvisuals-payments-checkout
description: A checkout summary with line items and a pay button. The Checkout visual in the Payments category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Payments / Checkout

A checkout summary with line items and a pay button.

- **Registry name:** `@codedvisuals/payments-checkout`
- **Import path:** `@/components/codedvisuals/payments/checkout`

## Install if it is not in the project yet

Look for `components/codedvisuals/payments/checkout.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/payments-checkout
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `amount` | `string` | `"$42.00"` |
| `buttonLabel` | `string` | `"Pay"` |
| `name` | `string` | `"JOHN T. DOE"` |
| `brand` | `string` | `"PLATINUM"` |
| `cardNumber` | `string` | `"4242 4242 4242 4242"` |
| `expiry` | `string` | see Default content below |
| `cvc` | `string` | `"•••"` |
| `card` | `boolean` | `false` |

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
import PaymentsCheckout from "@/components/codedvisuals/payments/checkout";

// default
<PaymentsCheckout />

// fadeOut
<PaymentsCheckout fadeOut />

// custom amount
<PaymentsCheckout amount="$129.00" buttonLabel="Subscribe for" />

// card
<PaymentsCheckout card />

// card · fadeOut
<PaymentsCheckout card fadeOut />

// card · isometric
<PaymentsCheckout card isometric />

// card · isometric · fadeOut
<PaymentsCheckout card isometric fadeOut />

// card · no gradient
<PaymentsCheckout card gradient={false} />

// card · isometric · no gradient
<PaymentsCheckout card isometric gradient={false} />

// card · custom content
<PaymentsCheckout
  card
  name="ADA LOVELACE"
  cardNumber="4000 0566 5566 5556"
  expiry="06/30"
  cvc="456"
  brand="GOLD"
/>
```
