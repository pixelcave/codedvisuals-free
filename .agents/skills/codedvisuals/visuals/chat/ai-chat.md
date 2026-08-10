---
name: codedvisuals-chat-ai-chat
description: An AI chat interface with streaming responses and a prompt box. The AI Chat visual in the Chat category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Chat / AI Chat

An AI chat interface with streaming responses and a prompt box.

- **Registry name:** `@codedvisuals/chat-ai-chat`
- **Import path:** `@/components/codedvisuals/chat/ai-chat`

## Install if it is not in the project yet

Look for `components/codedvisuals/chat/ai-chat.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/chat-ai-chat
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"AI Assistant"` |
| `prompt` | `string` | `"Summarize Q3 revenue performance."` |
| `response` | `ResponseItem[]` | see Default content below |
| `status` | `string` | `"Ready"` |
| `statusKind` | `StatusKind` | `"online"` |
| `caret` | `boolean` | `true` |
| `actions` | `boolean` | `true` |

## Types

```ts
interface ResponseItem {
  kind: "paragraph" | "bullet";
  text: string;
}

type StatusKind = "online" | "busy" | "offline";
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_RESPONSE: ResponseItem[] = [
  { kind: "paragraph", text: "Here's a quick snapshot of Q3:" },
  { kind: "bullet", text: "Revenue grew 24% year-over-year" },
  { kind: "bullet", text: "Enterprise tier drove 62% of new ARR" },
  { kind: "bullet", text: "Net retention reached an all-time high of 118%" },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import ChatAiChat from "@/components/codedvisuals/chat/ai-chat";

// default
<ChatAiChat />

// fadeOut
<ChatAiChat fadeOut />

// paragraph only
<ChatAiChat
  prompt="What is product-led growth?"
  response={[
    {
      kind: "paragraph",
      text: "Product-led growth is a strategy where the product drives acquisition, expansion, and retention.",
    },
    {
      kind: "paragraph",
      text: "Users experience value before talking to sales, and the product itself becomes the primary growth channel.",
    },
  ]}
/>

// busy status
<ChatAiChat
  status="Thinking…"
  statusKind="busy"
  response={[{ kind: "paragraph", text: "Thinking…" }]}
/>

// offline status
<ChatAiChat status="Offline" statusKind="offline" />

// no caret
<ChatAiChat caret={false} />

// no actions
<ChatAiChat actions={false} />
```
