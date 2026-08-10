---
name: codedvisuals-sections-hero
description: A marketing hero section with heading, copy, and buttons. The Hero visual in the Sections category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Sections / Hero

A marketing hero section with heading, copy, and buttons.

- **Registry name:** `@codedvisuals/sections-hero`
- **Import path:** `@/components/codedvisuals/sections/hero`

## Install if it is not in the project yet

Look for `components/codedvisuals/sections/hero.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/sections-hero
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"The ultimate solution"` |

## Examples

Give the visual a sized container, then drop it in:

```tsx
import SectionsHero from "@/components/codedvisuals/sections/hero";

// default
<SectionsHero />

// fadeOut
<SectionsHero fadeOut />

// custom title · default
<SectionsHero title="Inspiring stories from our customers" />

// custom title · isometric
<SectionsHero title="Working from home is the new normal" isometric />

// custom title · isometric · no gradient
<SectionsHero
  title="These are the 10 best AI tools for developers"
  gradient={false}
  isometric
/>
```
