---
name: codedvisuals-connections-pipeline
description: A linear pipeline of stages with moving progress. The Pipeline visual in the Connections category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Connections / Pipeline

A linear pipeline of stages with moving progress.

- **Registry name:** `@codedvisuals/connections-pipeline`
- **Import path:** `@/components/codedvisuals/connections/pipeline`

## Install if it is not in the project yet

Look for `components/codedvisuals/connections/pipeline.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/connections-pipeline
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `logo` | `React.ReactNode \| null` | see Default content below |
| `inputs` | `React.ReactNode[]` | see Default content below |
| `outputs` | `React.ReactNode[]` | see Default content below |
| `pulse` | `"dot" \| "spike"` | `"dot"` |

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_LOGO: React.ReactNode = (
  <Cpu className="size-5" strokeWidth={1.5} />
);

const DEFAULT_INPUTS: React.ReactNode[] = [
  <Database className="size-4" strokeWidth={2} />,
  <FileText className="size-4" strokeWidth={2} />,
  <Image className="size-4" strokeWidth={2} />,
];

const DEFAULT_OUTPUTS: React.ReactNode[] = [
  <BarChart3 className="size-4" strokeWidth={2} />,
  <Mail className="size-4" strokeWidth={2} />,
  <Cloud className="size-4" strokeWidth={2} />,
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import ConnectionsPipeline from "@/components/codedvisuals/connections/pipeline";

// default
<ConnectionsPipeline />

// hover
<ConnectionsPipeline hover />

// spike
<ConnectionsPipeline pulse="spike" />
```
