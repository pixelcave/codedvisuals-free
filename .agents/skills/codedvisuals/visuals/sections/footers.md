---
name: codedvisuals-sections-footers
description: A marketing footer with brand, links, and socials. The Footers visual in the Sections category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Sections / Footers

A marketing footer with brand, links, and socials.

- **Registry name:** `@codedvisuals/sections-footers`
- **Import path:** `@/components/codedvisuals/sections/footers`

## Install if it is not in the project yet

Look for `components/codedvisuals/sections/footers.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/sections-footers
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Acme"` |

## Examples

Give the visual a sized container, then drop it in:

```tsx
import SectionsFooters from "@/components/codedvisuals/sections/footers";

// default
<SectionsFooters />

// fadeOut
<SectionsFooters fadeOut />

// custom title · default
<SectionsFooters title="Linear" />

// custom title · isometric
<SectionsFooters title="Vercel" isometric />

// custom title · isometric · no gradient
<SectionsFooters title="Stripe" gradient={false} isometric />
```
