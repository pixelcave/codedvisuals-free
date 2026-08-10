---
name: codedvisuals-sections-faq
description: A frequently asked questions section with expandable items. The FAQ visual in the Sections category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Sections / FAQ

A frequently asked questions section with expandable items.

- **Registry name:** `@codedvisuals/sections-faq`
- **Import path:** `@/components/codedvisuals/sections/faq`

## Install if it is not in the project yet

Look for `components/codedvisuals/sections/faq.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/sections-faq
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Frequently asked questions"` |

## Examples

Give the visual a sized container, then drop it in:

```tsx
import SectionsFaq from "@/components/codedvisuals/sections/faq";

// default
<SectionsFaq />

// fadeOut
<SectionsFaq fadeOut />

// custom title · default
<SectionsFaq title="Need help? Check our FAQ" />

// custom title · isometric
<SectionsFaq title="Answered questions" isometric />

// custom title · isometric · no gradient
<SectionsFaq title="Everything you need to know" gradient={false} isometric />
```
