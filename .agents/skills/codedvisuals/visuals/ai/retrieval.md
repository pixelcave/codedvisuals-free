---
name: codedvisuals-ai-retrieval
description: A query fanning out to ranked source cards that light up as each pulse lands, then converging into a streamed answer, over an ambient glow and particle field. The Retrieval visual in the AI category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# AI / Retrieval

A query fanning out to ranked source cards that light up as each pulse lands, then converging into a streamed answer, over an ambient glow and particle field.

- **Registry name:** `@codedvisuals/ai-retrieval`
- **Import path:** `@/components/codedvisuals/ai/retrieval`

## Install if it is not in the project yet

Look for `components/codedvisuals/ai/retrieval.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/ai-retrieval
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`), the presentation modifier (`isometric`), and `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `query` | `string` | `"How do refunds work?"` |
| `sources` | `Source[]` | see Default content below |
| `answer` | `string` | `"Refunds are issued within 30 days of renewal, to the original payment method."` |
| `pulse` | `PulseKind` | `"dot"` |
| `glow` | `boolean` | `true` |
| `particles` | `boolean` | `true` |

## Types

```ts
interface Source {
  name: string;
  score: number;
}

type PulseKind = "dot" | "line";
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_SOURCES: Source[] = [
  { name: "billing.mdx", score: 0.94 },
  { name: "refunds.pdf", score: 0.87 },
  { name: "terms.md", score: 0.71 },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import AiRetrieval from "@/components/codedvisuals/ai/retrieval";

// default
<AiRetrieval />

// isometric
<AiRetrieval isometric />

// line pulse
<AiRetrieval pulse="line" />

// line · isometric
<AiRetrieval pulse="line" isometric />

// no glow
<AiRetrieval glow={false} />

// no particles
<AiRetrieval particles={false} />

// no glow · no particles
<AiRetrieval glow={false} particles={false} />

// two sources
<AiRetrieval
  query="What is the SLA on the Scale plan?"
  sources={[
    { name: "sla.mdx", score: 0.97 },
    { name: "plans.md", score: 0.83 },
  ]}
  answer="Scale includes a 99.9% uptime SLA, measured monthly."
/>

// support · custom copy
<AiRetrieval
  query="Why was my invoice higher?"
  sources={[
    { name: "invoice.pdf", score: 0.96 },
    { name: "usage.csv", score: 0.82 },
    { name: "pricing.md", score: 0.68 },
  ]}
  answer="Usage rose 38%, so 1.2M overage events were billed."
/>

// docs · isometric
<AiRetrieval
  isometric
  query="How do I rotate an API key?"
  sources={[
    { name: "api-keys.mdx", score: 0.98 },
    { name: "migrate.md", score: 0.9 },
    { name: "changelog.md", score: 0.64 },
  ]}
  answer="Deploy a second key, then revoke the old one."
/>
```
