---
name: codedvisuals-sections-cta
description: A call to action section with heading and buttons. The CTA visual in the Sections category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Sections / CTA

A call to action section with heading and buttons.

- **Registry name:** `@codedvisuals/sections-cta`
- **Import path:** `@/components/codedvisuals/sections/cta`

## Install if it is not in the project yet

Look for `components/codedvisuals/sections/cta.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/sections-cta
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Ready to get started?"` |

## Examples

Give the visual a sized container, then drop it in:

```tsx
import SectionsCta from "@/components/codedvisuals/sections/cta";

// default
<SectionsCta />

// fadeOut
<SectionsCta fadeOut />

// custom title · default
<SectionsCta title="Build your next project with us." />

// custom title · isometric
<SectionsCta title="Grow your business today." isometric />

// custom title · isometric · no gradient
<SectionsCta
  title="Get access to our exclusive features now for 50% off."
  gradient={false}
  isometric
/>
```
