---
name: codedvisuals-sections-timeline
description: A timeline section of milestones and dates. The Timeline visual in the Sections category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Sections / Timeline

A timeline section of milestones and dates.

- **Registry name:** `@codedvisuals/sections-timeline`
- **Import path:** `@/components/codedvisuals/sections/timeline`

## Install if it is not in the project yet

Look for `components/codedvisuals/sections/timeline.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/sections-timeline
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

This visual has no data props of its own. Control it entirely through the shared animation props and presentation modifiers.

## Examples

Give the visual a sized container, then drop it in:

```tsx
import SectionsTimeline from "@/components/codedvisuals/sections/timeline";

// default
<SectionsTimeline />

// fadeOut
<SectionsTimeline fadeOut />
```
