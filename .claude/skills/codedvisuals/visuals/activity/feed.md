---
name: codedvisuals-activity-feed
description: A live activity feed with avatars, actions, and relative timestamps. The Feed visual in the Activity category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Activity / Feed

A live activity feed with avatars, actions, and relative timestamps.

- **Registry name:** `@codedvisuals/activity-feed`
- **Import path:** `@/components/codedvisuals/activity/feed`

## Install if it is not in the project yet

Look for `components/codedvisuals/activity/feed.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/activity-feed
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Activity"` |
| `meta` | `string` | `"Today"` |
| `items` | `FeedItem[]` | see Default content below |

## Types

```ts
interface FeedItem {
  user: string;
  initials: string;
  action: FeedAction;
  title: string;
  detail: string;
  time: string;
}

type FeedAction = "commit" | "deploy" | "merge" | "publish" | "review";
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_ITEMS: FeedItem[] = [
  {
    user: "Sarah Chen",
    initials: "SC",
    action: "commit",
    title: "pushed to main",
    detail: "3 commits · src/api/auth.ts",
    time: "2m",
  },
  {
    user: "Alex Park",
    initials: "AP",
    action: "deploy",
    title: "deployed v2.4.1",
    detail: "production · 1m 42s",
    time: "18m",
  },
  {
    user: "Mia Lee",
    initials: "ML",
    action: "merge",
    title: "merged PR #142",
    detail: "feat: notification center",
    time: "1h",
  },
  {
    user: "Ben Novak",
    initials: "BN",
    action: "publish",
    title: "published release notes",
    detail: "v2.4 · what's new",
    time: "3h",
  },
  {
    user: "Jordan Liu",
    initials: "JL",
    action: "review",
    title: "approved design specs",
    detail: "Onboarding redesign · v3",
    time: "6h",
  },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import ActivityFeed from "@/components/codedvisuals/activity/feed";

// default
<ActivityFeed />

// fadeOut
<ActivityFeed fadeOut />
```
