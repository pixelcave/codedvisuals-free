---
name: codedvisuals-notifications-list
description: A list of notifications with icons and timestamps. The List visual in the Notifications category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Notifications / List

A list of notifications with icons and timestamps.

- **Registry name:** `@codedvisuals/notifications-list`
- **Import path:** `@/components/codedvisuals/notifications/list`

## Install if it is not in the project yet

Look for `components/codedvisuals/notifications/list.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/notifications-list
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `items` | `NotificationItem[]` | see Default content below |

## Types

```ts
interface NotificationItem {
  icon: ItemIcon;
  title: string;
  detail: string;
  time: string;
  unread?: boolean;
}

type ItemIcon = "message" | "heart" | "follow" | "pr" | "star";
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_ITEMS: NotificationItem[] = [
  {
    icon: "message",
    title: "Sarah commented",
    detail: "Looks great, ready to ship.",
    time: "2m",
    unread: true,
  },
  {
    icon: "pr",
    title: "Alex opened a PR",
    detail: "feat: add notification center",
    time: "18m",
    unread: true,
  },
  {
    icon: "heart",
    title: "Mia liked your post",
    detail: "Building in public update #12",
    time: "1h",
  },
  {
    icon: "follow",
    title: "Ben started following you",
    detail: "Design engineer, Berlin",
    time: "3h",
  },
  {
    icon: "star",
    title: "New star on your repo",
    detail: "coded-visuals · 1.2k stars",
    time: "1d",
  },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import NotificationsList from "@/components/codedvisuals/notifications/list";

// default
<NotificationsList />

// fadeOut
<NotificationsList fadeOut />
```
