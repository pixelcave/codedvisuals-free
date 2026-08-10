---
name: codedvisuals-ai-prompt-box
description: A wide prompt composer with a typing prompt, model picker, token count, and send, over an ambient glow and particle field. The Prompt Box visual in the AI category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# AI / Prompt Box

A wide prompt composer with a typing prompt, model picker, token count, and send, over an ambient glow and particle field.

- **Registry name:** `@codedvisuals/ai-prompt-box`
- **Import path:** `@/components/codedvisuals/ai/prompt-box`

## Install if it is not in the project yet

Look for `components/codedvisuals/ai/prompt-box.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/ai-prompt-box
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `prompt` | `string` | `"Summarize the key wins from the Q3 report and suggest improvements for next quarter"` |
| `model` | `string` | `"Claude Opus"` |
| `tokens` | `string` | `"1,240"` |
| `contextUsed` | `number` | `0.16` |
| `attachments` | `string[]` | see Default content below |
| `caret` | `boolean` | `true` |
| `glow` | `boolean` | `true` |
| `particles` | `boolean` | `true` |

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_ATTACHMENTS = ["Q3-report.pdf"];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import AiPromptBox from "@/components/codedvisuals/ai/prompt-box";

// default
<AiPromptBox />

// default · no gradient
<AiPromptBox gradient={false} />

// no glow
<AiPromptBox glow={false} />

// no particles
<AiPromptBox particles={false} />

// no attachments
<AiPromptBox attachments={[]} />

// minimal
<AiPromptBox
  glow={false}
  particles={false}
  gradient={false}
  attachments={[]}
/>

// custom copy
<AiPromptBox
  prompt="Summarize this thread and list the action items."
  model="Claude Sonnet"
  tokens="3,920"
  contextUsed={0.52}
  attachments={["thread.eml", "notes.md"]}
/>

// no caret
<AiPromptBox caret={false} />
```
