---
name: codedvisuals-integrations-hub
description: A central app connected to surrounding integration logos. The Hub visual in the Integrations category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Integrations / Hub

A central app connected to surrounding integration logos.

- **Registry name:** `@codedvisuals/integrations-hub`
- **Import path:** `@/components/codedvisuals/integrations/hub`

## Install if it is not in the project yet

Look for `components/codedvisuals/integrations/hub.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/integrations-hub
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `variant` | `HubVariant` | `"orbit"` |
| `label` | `string` | `"Connected"` |
| `spread` | `Spread` | `"default"` |
| `spin` | `boolean` | `false` |
| `logo` | `React.ReactNode \| null` | see Default content below |
| `satellites` | `React.ReactNode[]` | see Default content below |

## Types

```ts
type HubVariant = "orbit" | "beam";

type Spread = "compact" | "default" | "wide";
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_LOGO: React.ReactNode = (
  <Boxes className="size-6" strokeWidth={1.25} />
);

const DEFAULT_SATELLITES: React.ReactNode[] = [
  <Cloud className="size-4" strokeWidth={2} />,
  <Database className="size-4" strokeWidth={2} />,
  <MessageSquare className="size-4" strokeWidth={2} />,
  <Mail className="size-4" strokeWidth={2} />,
  <Globe className="size-4" strokeWidth={2} />,
  <Code2 className="size-4" strokeWidth={2} />,
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import IntegrationsHub from "@/components/codedvisuals/integrations/hub";

// default
<IntegrationsHub />

// isometric
<IntegrationsHub isometric />

// spin
<IntegrationsHub spin />

// spin · hover
<IntegrationsHub spin hover />

// spin · isometric
<IntegrationsHub spin isometric />

// beam
<IntegrationsHub variant="beam" />

// beam · hover
<IntegrationsHub variant="beam" hover />

// beam · isometric
<IntegrationsHub variant="beam" isometric />

// compact
<IntegrationsHub spread="compact" />

// wide
<IntegrationsHub spread="wide" />
```
