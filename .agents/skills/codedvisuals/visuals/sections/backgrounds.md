---
name: codedvisuals-sections-backgrounds
description: A section preview that cycles through background styles (mesh, grid, dots, rays) with a picker to switch between them. The Backgrounds visual in the Sections category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Sections / Backgrounds

A section preview that cycles through background styles (mesh, grid, dots, rays) with a picker to switch between them.

- **Registry name:** `@codedvisuals/sections-backgrounds`
- **Import path:** `@/components/codedvisuals/sections/backgrounds`

## Install if it is not in the project yet

Look for `components/codedvisuals/sections/backgrounds.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/sections-backgrounds
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`), presentation modifiers (`gradient`, `fadeOut`, `isometric`), and `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Designed to stand out"` |
| `backgrounds` | `BackgroundVariant[]` | see Default content below |
| `interval` | `number` | `2600` |
| `showPicker` | `boolean` | `true` |

## Types

```ts
type BackgroundVariant = "mesh" | "grid" | "dots" | "rays";
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_BACKGROUNDS: BackgroundVariant[] = [
  "mesh",
  "grid",
  "dots",
  "rays",
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import SectionsBackgrounds from "@/components/codedvisuals/sections/backgrounds";

// default
<SectionsBackgrounds />

// hover
<SectionsBackgrounds hover />

// custom copy
<SectionsBackgrounds title="One library, every backdrop" />

// grid first · isometric
<SectionsBackgrounds
  title="Pick a backdrop"
  backgrounds={["grid", "dots", "rays", "mesh"]}
  isometric
/>

// fast cycle
<SectionsBackgrounds interval={1200} />

// rays only · no picker
<SectionsBackgrounds backgrounds={["rays"]} showPicker={false} />

// no picker
<SectionsBackgrounds showPicker={false} />
```
