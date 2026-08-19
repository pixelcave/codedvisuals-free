---
name: codedvisuals-ai-tools
description: An agent working through its tool calls one at a time, each row running with a spinner then settling into a result and a duration. The Tools visual in the AI category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# AI / Tools

An agent working through its tool calls one at a time, each row running with a spinner then settling into a result and a duration.

- **Registry name:** `@codedvisuals/ai-tools`
- **Import path:** `@/components/codedvisuals/ai/tools`

## Install if it is not in the project yet

Look for `components/codedvisuals/ai/tools.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/ai-tools
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`), presentation modifiers (`gradient`, `fadeOut`, `isometric`), and `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Tool calls"` |
| `tools` | `Tool[]` | see Default content below |
| `glow` | `boolean` | `true` |
| `particles` | `boolean` | `true` |

## Types

```ts
interface Tool {
  name: string;
  args: string;
  result: string;
  duration: string;
  icon?: React.ReactNode;
}
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_TOOLS: Tool[] = [
  {
    name: "search_docs",
    args: 'query: "refund policy"',
    result: "3 matches",
    duration: "142ms",
    icon: <Search className="size-3.5" strokeWidth={2} />,
  },
  {
    name: "create_ticket",
    args: 'priority: "high"',
    result: "#4821",
    duration: "310ms",
    icon: <Ticket className="size-3.5" strokeWidth={2} />,
  },
  {
    name: "send_email",
    args: 'to: "customer"',
    result: "delivered",
    duration: "88ms",
    icon: <Mail className="size-3.5" strokeWidth={2} />,
  },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import AiTools from "@/components/codedvisuals/ai/tools";

// default
<AiTools />

// fadeOut
<AiTools fadeOut />

// no glow
<AiTools glow={false} />

// no particles
<AiTools particles={false} />

// no glow · no particles
<AiTools glow={false} particles={false} />
```
