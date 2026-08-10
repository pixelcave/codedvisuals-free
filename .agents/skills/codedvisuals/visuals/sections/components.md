---
name: codedvisuals-sections-components
description: A showcase grid of UI components and building blocks. The Components visual in the Sections category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Sections / Components

A showcase grid of UI components and building blocks.

- **Registry name:** `@codedvisuals/sections-components`
- **Import path:** `@/components/codedvisuals/sections/components`

## Install if it is not in the project yet

Look for `components/codedvisuals/sections/components.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/sections-components
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Components"` |

## Examples

Give the visual a sized container, then drop it in:

```tsx
import SectionsComponents from "@/components/codedvisuals/sections/components";

// default
<SectionsComponents />

// fadeOut
<SectionsComponents fadeOut />

// custom title · default
<SectionsComponents title="UI Kit" />

// custom title · isometric
<SectionsComponents title="Building blocks" isometric />

// custom title · isometric · no gradient
<SectionsComponents title="Design system" gradient={false} isometric />
```
