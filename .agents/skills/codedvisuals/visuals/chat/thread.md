---
name: codedvisuals-chat-thread
description: A threaded message view with replies and reactions. The Thread visual in the Chat category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Chat / Thread

A threaded message view with replies and reactions.

- **Registry name:** `@codedvisuals/chat-thread`
- **Import path:** `@/components/codedvisuals/chat/thread`

## Install if it is not in the project yet

Look for `components/codedvisuals/chat/thread.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/chat-thread
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `parentUser` | `string` | `"Alex Park"` |
| `parentInitials` | `string` | `"AP"` |
| `parentTime` | `string` | `"10:24 AM"` |
| `parentText` | `string` | `"Just shipped the new onboarding flow. Conversion is already up 18%."` |
| `replies` | `ThreadReply[]` | see Default content below |
| `likes` | `number` | `24` |
| `actions` | `boolean` | `true` |

## Types

```ts
interface ThreadReply {
  user: string;
  initials: string;
  text: string;
  time: string;
}
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_REPLIES: ThreadReply[] = [
  {
    user: "Sarah Chen",
    initials: "SC",
    text: "Massive. The progress indicator was the move.",
    time: "10:31",
  },
  {
    user: "Mia Lee",
    initials: "ML",
    text: "Can we A/B test the welcome step next?",
    time: "10:42",
  },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import ChatThread from "@/components/codedvisuals/chat/thread";

// default
<ChatThread />

// fadeOut
<ChatThread fadeOut />

// no actions
<ChatThread actions={false} />

// custom likes
<ChatThread likes={142} />
```
