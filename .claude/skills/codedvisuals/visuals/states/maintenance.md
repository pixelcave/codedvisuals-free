---
name: codedvisuals-states-maintenance
description: A stack of service tiles with one lifted out and being worked on, hovering over its empty slot while a progress sweep runs underneath. The Maintenance visual in the States category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# States / Maintenance

A stack of service tiles with one lifted out and being worked on, hovering over its empty slot while a progress sweep runs underneath.

- **Registry name:** `@codedvisuals/states-maintenance`
- **Import path:** `@/components/codedvisuals/states/maintenance`

## Install if it is not in the project yet

Look for `components/codedvisuals/states/maintenance.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/states-maintenance
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`), the presentation modifier (`isometric`), and `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `tiles` | `number` | `3` |
| `glow` | `boolean` | `true` |

## Examples

Give the visual a sized container, then drop it in:

```tsx
import StatesMaintenance from "@/components/codedvisuals/states/maintenance";

// default
<StatesMaintenance />

// isometric
<StatesMaintenance isometric />

// default · no glow
<StatesMaintenance glow={false} />

// isometric · no glow
<StatesMaintenance isometric glow={false} />

// two tiles
<StatesMaintenance tiles={2} />

// four tiles · isometric
<StatesMaintenance tiles={4} isometric />
```
