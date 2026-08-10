---
name: codedvisuals-ai-presence
description: Live multiplayer cursors roaming a shared canvas, one carrying your avatar and the rest labeled AI agents, over an ambient glow and particle field. The Presence visual in the AI category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# AI / Presence

Live multiplayer cursors roaming a shared canvas, one carrying your avatar and the rest labeled AI agents, over an ambient glow and particle field.

- **Registry name:** `@codedvisuals/ai-presence`
- **Import path:** `@/components/codedvisuals/ai/presence`

## Install if it is not in the project yet

Look for `components/codedvisuals/ai/presence.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/ai-presence
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `collaborators` | `Collaborator[]` | see Default content below |
| `glow` | `boolean` | `true` |
| `particles` | `boolean` | `true` |

## Types

```ts
interface Collaborator {
  name: string;
  kind?: "user" | "agent";
  color?: string;
  initials?: string;
  avatar?: string;
}
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_COLLABORATORS: Collaborator[] = [
  { name: "You", kind: "user", color: "text-primary", initials: "JC" },
  {
    name: "Research Agent",
    kind: "agent",
    color: "text-purple-600 dark:text-purple-500",
  },
  {
    name: "Coding Agent",
    kind: "agent",
    color: "text-sky-600 dark:text-sky-500",
  },
  {
    name: "Review Agent",
    kind: "agent",
    color: "text-pink-600 dark:text-pink-500",
  },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import AiPresence from "@/components/codedvisuals/ai/presence";

// default
<AiPresence />

// hover
<AiPresence hover />

// no glow
<AiPresence glow={false} />

// no particles
<AiPresence particles={false} />

// custom collaborators
<AiPresence
  collaborators={[
    { name: "Sarah", kind: "user", initials: "SR" },
    {
      name: "Planner",
      kind: "agent",
      color: "text-violet-600 dark:text-violet-500",
    },
    {
      name: "Builder",
      kind: "agent",
      color: "text-teal-600 dark:text-teal-500",
    },
  ]}
/>

// solo agent team
<AiPresence
  collaborators={[
    { name: "You", kind: "user", initials: "JC" },
    {
      name: "Support Agent",
      kind: "agent",
      color: "text-sky-600 dark:text-sky-500",
    },
  ]}
/>
```
