---
name: codedvisuals-ai-agent-flow
description: An agent pipeline of stacked isometric cubes that light up in sequence, revealing each step label as it runs. The Agent Flow visual in the AI category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# AI / Agent Flow

An agent pipeline of stacked isometric cubes that light up in sequence, revealing each step label as it runs.

- **Registry name:** `@codedvisuals/ai-agent-flow`
- **Import path:** `@/components/codedvisuals/ai/agent-flow`

## Install if it is not in the project yet

Look for `components/codedvisuals/ai/agent-flow.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/ai-agent-flow
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `steps` | `string[]` | see Default content below |
| `glow` | `boolean` | `true` |
| `particles` | `boolean` | `true` |

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_STEPS = ["Planning", "Retrieving", "Respond"];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import AiAgentFlow from "@/components/codedvisuals/ai/agent-flow";

// default
<AiAgentFlow />

// hover
<AiAgentFlow hover />

// no glow
<AiAgentFlow glow={false} />

// no particles
<AiAgentFlow particles={false} />

// custom steps
<AiAgentFlow steps={["Classify", "Check policy", "Reply"]} />

// four steps
<AiAgentFlow steps={["Plan", "Retrieve", "Verify", "Respond"]} />
```
