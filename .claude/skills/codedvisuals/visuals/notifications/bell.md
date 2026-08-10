---
name: codedvisuals-notifications-bell
description: A notification bell with an unread badge and pop. The Bell visual in the Notifications category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Notifications / Bell

A notification bell with an unread badge and pop.

- **Registry name:** `@codedvisuals/notifications-bell`
- **Import path:** `@/components/codedvisuals/notifications/bell`

## Install if it is not in the project yet

Look for `components/codedvisuals/notifications/bell.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/notifications-bell
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `count` | `number` | `3` |

## Examples

Give the visual a sized container, then drop it in:

```tsx
import NotificationsBell from "@/components/codedvisuals/notifications/bell";

// default
<NotificationsBell />

// hover
<NotificationsBell hover />

// count={0}
<NotificationsBell count={0} />

// count={12}
<NotificationsBell count={12} />

// count={150}
<NotificationsBell count={150} />

// fadeOut
<NotificationsBell count={15} fadeOut />

// isometric
<NotificationsBell count={15} fadeOut isometric />

// isometric · fadeOut
<NotificationsBell count={15} fadeOut isometric />
```
