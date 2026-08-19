---
name: codedvisuals-states-error
description: A request pulse traveling into a service card and breaking it, cascading its service tiles to a fault state under an alert badge. The Error visual in the States category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# States / Error

A request pulse traveling into a service card and breaking it, cascading its service tiles to a fault state under an alert badge.

- **Registry name:** `@codedvisuals/states-error`
- **Import path:** `@/components/codedvisuals/states/error`

## Install if it is not in the project yet

Look for `components/codedvisuals/states/error.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/states-error
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`), the presentation modifier (`isometric`), and `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `services` | `number` | `4` |
| `pulse` | `PulseKind` | `"dot"` |
| `glow` | `boolean` | `true` |

## Types

```ts
type PulseKind = "dot" | "line";
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import StatesError from "@/components/codedvisuals/states/error";

// default
<StatesError />

// isometric
<StatesError isometric />

// default · no glow
<StatesError glow={false} />

// isometric · no glow
<StatesError isometric glow={false} />

// line pulse
<StatesError pulse="line" />

// line pulse · isometric
<StatesError pulse="line" isometric />

// two services
<StatesError services={2} />

// five services · isometric
<StatesError services={5} isometric />
```
