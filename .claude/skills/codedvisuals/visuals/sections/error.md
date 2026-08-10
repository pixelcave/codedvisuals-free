---
name: codedvisuals-sections-error
description: An error state section with code, message, and action. The Error visual in the Sections category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Sections / Error

An error state section with code, message, and action.

- **Registry name:** `@codedvisuals/sections-error`
- **Import path:** `@/components/codedvisuals/sections/error`

## Install if it is not in the project yet

Look for `components/codedvisuals/sections/error.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/sections-error
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"404"` |

## Examples

Give the visual a sized container, then drop it in:

```tsx
import SectionsError from "@/components/codedvisuals/sections/error";

// default
<SectionsError />

// fadeOut
<SectionsError fadeOut />

// custom title · default
<SectionsError title="Page not found" />

// custom title · isometric
<SectionsError title="Not allowed" isometric />

// custom title · isometric · no gradient
<SectionsError title="Forbidden" gradient={false} isometric />
```
