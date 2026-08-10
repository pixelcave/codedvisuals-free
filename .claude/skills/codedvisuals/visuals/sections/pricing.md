---
name: codedvisuals-sections-pricing
description: A pricing section with plan cards and features. The Pricing visual in the Sections category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Sections / Pricing

A pricing section with plan cards and features.

- **Registry name:** `@codedvisuals/sections-pricing`
- **Import path:** `@/components/codedvisuals/sections/pricing`

## Install if it is not in the project yet

Look for `components/codedvisuals/sections/pricing.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/sections-pricing
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Pricing plans"` |

## Examples

Give the visual a sized container, then drop it in:

```tsx
import SectionsPricing from "@/components/codedvisuals/sections/pricing";

// default
<SectionsPricing />

// fadeOut
<SectionsPricing fadeOut />

// custom title · default
<SectionsPricing title="Best value for your money" />

// custom title · isometric
<SectionsPricing title="Simple pricing" isometric />

// custom title · isometric · no gradient
<SectionsPricing title="Get access to all features" gradient={false} isometric />
```
