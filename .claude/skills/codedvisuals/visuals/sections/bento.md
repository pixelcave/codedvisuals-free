---
name: codedvisuals-sections-bento
description: A bento grid section with a featured tile and mixed-size cards. The Bento visual in the Sections category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Sections / Bento

A bento grid section with a featured tile and mixed-size cards.

- **Registry name:** `@codedvisuals/sections-bento`
- **Import path:** `@/components/codedvisuals/sections/bento`

## Install if it is not in the project yet

Look for `components/codedvisuals/sections/bento.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/sections-bento
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Everything you need"` |

## Examples

Give the visual a sized container, then drop it in:

```tsx
import SectionsBento from "@/components/codedvisuals/sections/bento";

// default
<SectionsBento />

// fadeOut
<SectionsBento fadeOut />

// custom title · default
<SectionsBento title="One platform, every tool" />

// custom title · isometric
<SectionsBento title="Built for scale" isometric />

// custom title · isometric · no gradient
<SectionsBento title="All your work, together" gradient={false} isometric />
```
