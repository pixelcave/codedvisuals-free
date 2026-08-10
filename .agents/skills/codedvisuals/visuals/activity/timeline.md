---
name: codedvisuals-activity-timeline
description: A vertical activity timeline of grouped events and status changes. The Timeline visual in the Activity category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Activity / Timeline

A vertical activity timeline of grouped events and status changes.

- **Registry name:** `@codedvisuals/activity-timeline`
- **Import path:** `@/components/codedvisuals/activity/timeline`

## Install if it is not in the project yet

Look for `components/codedvisuals/activity/timeline.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/activity-timeline
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Release timeline"` |
| `meta` | `string` | `"v3.0"` |
| `steps` | `TimelineStep[]` | see Default content below |

## Types

```ts
interface TimelineStep {
  title: string;
  detail: string;
  time: string;
  status: TimelineStatus;
}

type TimelineStatus = "done" | "active" | "pending";
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_STEPS: TimelineStep[] = [
  {
    title: "Design spec approved",
    detail: "Tokens, typography, motion",
    time: "2w",
    status: "done",
  },
  {
    title: "Frontend implementation",
    detail: "React + Motion components",
    time: "4d",
    status: "done",
  },
  {
    title: "QA & accessibility",
    detail: "ARIA audit, keyboard nav",
    time: "In progress",
    status: "active",
  },
  {
    title: "Staging deployment",
    detail: "Preview environment rollout",
    time: "Up next",
    status: "pending",
  },
  {
    title: "Production launch",
    detail: "Public release v3.0",
    time: "Fri",
    status: "pending",
  },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import ActivityTimeline from "@/components/codedvisuals/activity/timeline";

// default
<ActivityTimeline />

// fadeOut
<ActivityTimeline fadeOut />
```
