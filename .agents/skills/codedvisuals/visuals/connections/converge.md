---
name: codedvisuals-connections-converge
description: Multiple sources converging into a single destination node. The Converge visual in the Connections category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Connections / Converge

Multiple sources converging into a single destination node.

- **Registry name:** `@codedvisuals/connections-converge`
- **Import path:** `@/components/codedvisuals/connections/converge`

## Install if it is not in the project yet

Look for `components/codedvisuals/connections/converge.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/connections-converge
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `nodes` | `React.ReactNode[]` | see Default content below |
| `pulse` | `"dot" \| "spike"` | `"dot"` |

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_NODES: React.ReactNode[] = [
  <FileText className="size-4" strokeWidth={2} />,
  <Image className="size-4" strokeWidth={2} />,
  <Database className="size-4" strokeWidth={2} />,
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import ConnectionsConverge from "@/components/codedvisuals/connections/converge";

// default
<ConnectionsConverge />

// hover
<ConnectionsConverge hover />

// spike
<ConnectionsConverge pulse="spike" />
```
