---
name: codedvisuals-sections-newsletter
description: A newsletter signup section with an email input. The Newsletter visual in the Sections category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Sections / Newsletter

A newsletter signup section with an email input.

- **Registry name:** `@codedvisuals/sections-newsletter`
- **Import path:** `@/components/codedvisuals/sections/newsletter`

## Install if it is not in the project yet

Look for `components/codedvisuals/sections/newsletter.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/sections-newsletter
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Subscribe to our newsletter"` |

## Examples

Give the visual a sized container, then drop it in:

```tsx
import SectionsNewsletter from "@/components/codedvisuals/sections/newsletter";

// default
<SectionsNewsletter />

// fadeOut
<SectionsNewsletter fadeOut />

// custom title · default
<SectionsNewsletter title="Stay updated with our news" />

// custom title · isometric
<SectionsNewsletter title="Subscribe today" isometric />

// custom title · isometric · no gradient
<SectionsNewsletter title="Get the latest updates" gradient={false} isometric />
```
