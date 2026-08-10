---
name: codedvisuals-connections-sync
description: Two systems syncing with data moving back and forth. The Sync visual in the Connections category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Connections / Sync

Two systems syncing with data moving back and forth.

- **Registry name:** `@codedvisuals/connections-sync`
- **Import path:** `@/components/codedvisuals/connections/sync`

## Install if it is not in the project yet

Look for `components/codedvisuals/connections/sync.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/connections-sync
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `pairs` | `Pair[]` | see Default content below |
| `pulse` | `"dot" \| "spike"` | `"dot"` |

## Types

```ts
type Pair = [left: React.ReactNode, right: React.ReactNode];
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_PAIRS: Pair[] = [
  [
    <Cloud className="size-4" strokeWidth={2} />,
    <Server className="size-4" strokeWidth={2} />,
  ],
  [
    <Database className="size-4" strokeWidth={2} />,
    <HardDrive className="size-4" strokeWidth={2} />,
  ],
  [
    <FileText className="size-4" strokeWidth={2} />,
    <Archive className="size-4" strokeWidth={2} />,
  ],
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import ConnectionsSync from "@/components/codedvisuals/connections/sync";

// default
<ConnectionsSync />

// hover
<ConnectionsSync hover />

// spike
<ConnectionsSync pulse="spike" />
```
