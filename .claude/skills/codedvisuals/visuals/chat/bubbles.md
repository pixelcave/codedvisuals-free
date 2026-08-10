---
name: codedvisuals-chat-bubbles
description: A conversation of chat bubbles between two people. The Bubbles visual in the Chat category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Chat / Bubbles

A conversation of chat bubbles between two people.

- **Registry name:** `@codedvisuals/chat-bubbles`
- **Import path:** `@/components/codedvisuals/chat/bubbles`

## Install if it is not in the project yet

Look for `components/codedvisuals/chat/bubbles.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/chat-bubbles
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `name` | `string` | `"Sarah Chen"` |
| `status` | `string` | `"Online"` |
| `initials` | `string` | `"SC"` |
| `messages` | `ChatMessage[]` | see Default content below |
| `typing` | `boolean` | `false` |

## Types

```ts
interface ChatMessage {
  from: BubbleFrom;
  text: string;
  time?: string;
  receipt?: Receipt;
}

type BubbleFrom = "them" | "me";

type Receipt = "sent" | "delivered" | "read";
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_MESSAGES: ChatMessage[] = [
  {
    from: "them",
    text: "Hey! Just pushed the new design changes.",
    time: "10:24",
  },
  {
    from: "me",
    text: "Looks great, loving the gradient.",
    time: "10:25",
    receipt: "read",
  },
  {
    from: "them",
    text: "Thanks! When can we ship?",
    time: "10:26",
  },
  {
    from: "me",
    text: "Tomorrow morning works for me.",
    time: "10:27",
    receipt: "read",
  },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import ChatBubbles from "@/components/codedvisuals/chat/bubbles";

// default
<ChatBubbles />

// fadeOut
<ChatBubbles fadeOut />

// typing
<ChatBubbles
  status="Typing…"
  messages={[
    {
      from: "them",
      text: "Want to grab coffee tomorrow?",
      time: "08:12",
    },
    {
      from: "me",
      text: "Yes! 10am at the usual?",
      time: "08:14",
    },
  ]}
  typing
/>

// read receipts
<ChatBubbles
  messages={[
    { from: "me", text: "Sending the updated specs now." },
    {
      from: "me",
      text: "Let me know what you think.",
      time: "14:04",
      receipt: "read",
    },
    {
      from: "them",
      text: "Got it, reviewing now.",
      time: "14:05",
    },
    {
      from: "me",
      text: "Let me know if have any questions.",
      time: "14:06",
      receipt: "delivered",
    },
    {
      from: "me",
      text: "Thanks!",
      time: "14:07",
      receipt: "sent",
    },
  ]}
/>
```
