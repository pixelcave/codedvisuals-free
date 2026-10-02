---
name: codedvisuals-ai-writer
description: A document where an AI rewrites a selection, autocompletes ghost text, or answers a slash command inline behind a labeled AI caret, over an ambient glow and particle field. The Writer visual in the AI category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# AI / Writer

A document where an AI rewrites a selection, autocompletes ghost text, or answers a slash command inline behind a labeled AI caret, over an ambient glow and particle field.

- **Registry name:** `@codedvisuals/ai-writer`
- **Import path:** `@/components/codedvisuals/ai/writer`

## Install if it is not in the project yet

Look for `components/codedvisuals/ai/writer.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/ai-writer
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`), the presentation modifier (`isometric`), and `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `mode` | `WriterMode` | `"rewrite"` |
| `title` | `string` | `"Q3 launch plan"` |
| `paragraphs` | `string[]` | see Default content below |
| `selection` | `string` | `"We really need to make sure that every single person on the team is fully aware of the timeline well ahead of the launch."` |
| `output` | `string` | - |
| `actions` | `WriterAction[]` | - |
| `agent` | `string` | `"AI"` |
| `glow` | `boolean` | `true` |
| `particles` | `boolean` | `true` |

## Types

```ts
type WriterMode = "rewrite" | "continue" | "slash";

interface WriterAction {
  label: string;
  icon?: React.ReactNode;
}
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_PARAGRAPHS = [
  "The new onboarding flow ships to every workspace on October 14, rolling out region by region over one week.",
  "Beta teams finished their setup twice as fast as before.",
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import AiWriter from "@/components/codedvisuals/ai/writer";
import { Languages, ListChecks, Maximize2, Minimize2, Sparkles, Zap } from "lucide-react";

// default
<AiWriter />

// hover
<AiWriter hover />

// rewrite · custom copy
<AiWriter
  title="Release notes 2.4"
  paragraphs={["Version 2.4 brings faster exports, a refreshed sidebar, and dozens of small fixes across the editor.", "Everything is live for all plans today."]}
  selection="Exports that used to take a really long time on big projects are now a whole lot quicker than they were."
  output="Large project exports now run up to 3x faster."
  actions={[
    { label: "Make it punchier", icon: <Zap /> },
    { label: "Simplify", icon: <Minimize2 /> },
    { label: "Add detail", icon: <Maximize2 /> },
  ]}
  agent="Assistant"
/>

// continue
<AiWriter mode="continue" />

// slash
<AiWriter mode="slash" />

// continue · isometric
<AiWriter mode="continue" isometric />

// slash · isometric
<AiWriter mode="slash" isometric />

// slash · custom copy
<AiWriter
  mode="slash"
  title="Weekly sync"
  paragraphs={["Design wraps the pricing page by Thursday. Engineering needs final copy before the freeze.", "Marketing will draft the launch email once pricing is locked."]}
  actions={[
    { label: "Action items", icon: <ListChecks /> },
    { label: "Summarize", icon: <Sparkles /> },
    { label: "Translate", icon: <Languages /> },
  ]}
  output="Design ships pricing by Thursday. Marketing drafts the launch email after."
/>

// no glow
<AiWriter glow={false} />

// no particles
<AiWriter particles={false} />
```
