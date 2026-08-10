---
name: codedvisuals-sections-features
description: A features section with icons, titles, and descriptions. The Features visual in the Sections category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Sections / Features

A features section with icons, titles, and descriptions.

- **Registry name:** `@codedvisuals/sections-features`
- **Import path:** `@/components/codedvisuals/sections/features`

## Install if it is not in the project yet

Look for `components/codedvisuals/sections/features.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/sections-features
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Amazing features"` |

## Examples

Give the visual a sized container, then drop it in:

```tsx
import SectionsFeatures from "@/components/codedvisuals/sections/features";

// default
<SectionsFeatures />

// fadeOut
<SectionsFeatures fadeOut />

// custom title · default
<SectionsFeatures title="Built for scale" />

// custom title · isometric
<SectionsFeatures title="Everything you need" isometric />

// custom title · isometric · no gradient
<SectionsFeatures title="AI-powered features" gradient={false} isometric />
```
