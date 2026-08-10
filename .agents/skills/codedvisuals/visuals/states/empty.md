---
name: codedvisuals-states-empty
description: An empty grid of dashed placeholder slots where an add action ripples out and one slot briefly materializes before dissolving back. The Empty visual in the States category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# States / Empty

An empty grid of dashed placeholder slots where an add action ripples out and one slot briefly materializes before dissolving back.

- **Registry name:** `@codedvisuals/states-empty`
- **Import path:** `@/components/codedvisuals/states/empty`

## Install if it is not in the project yet

Look for `components/codedvisuals/states/empty.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/states-empty
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `slots` | `number` | `4` |

## Examples

Give the visual a sized container, then drop it in:

```tsx
import StatesEmpty from "@/components/codedvisuals/states/empty";

// default
<StatesEmpty />

// fadeOut
<StatesEmpty fadeOut />

// two slots
<StatesEmpty slots={2} />

// three slots
<StatesEmpty slots={3} />

// six slots · hover
<StatesEmpty slots={6} hover />
```
