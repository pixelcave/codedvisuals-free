---
name: codedvisuals-calendar-event-list
description: An agenda style list of upcoming calendar events. The Event List visual in the Calendar category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Calendar / Event List

An agenda style list of upcoming calendar events.

- **Registry name:** `@codedvisuals/calendar-event-list`
- **Import path:** `@/components/codedvisuals/calendar/event-list`

## Install if it is not in the project yet

Look for `components/codedvisuals/calendar/event-list.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/calendar-event-list
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Up next"` |
| `items` | `CalendarEvent[]` | see Default content below |

## Types

```ts
interface CalendarEvent {
  category: EventCategory;
  title: string;
  detail: string;
  time: string;
  duration: string;
  group: string;
}

type EventCategory = "meeting" | "team" | "personal" | "focus" | "travel";
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_ITEMS: CalendarEvent[] = [
  {
    category: "meeting",
    title: "Design review",
    detail: "with Sarah, Alex",
    time: "9:30",
    duration: "45m",
    group: "Today",
  },
  {
    category: "focus",
    title: "Deep work · spec draft",
    detail: "Notification center",
    time: "11:00",
    duration: "2h",
    group: "Today",
  },
  {
    category: "team",
    title: "All-hands",
    detail: "Q2 roadmap update",
    time: "10:00",
    duration: "30m",
    group: "Tomorrow",
  },
  {
    category: "travel",
    title: "Flight to Berlin",
    detail: "BER · LH 401",
    time: "16:20",
    duration: "2h 5m",
    group: "Tomorrow",
  },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import CalendarEventList from "@/components/codedvisuals/calendar/event-list";

// default
<CalendarEventList />

// fadeOut
<CalendarEventList fadeOut />

// custom copy
<CalendarEventList
  title="This week"
  items={[
    {
      category: "focus",
      title: "Ship onboarding flow",
      detail: "Final polish pass",
      time: "9:00",
      duration: "3h",
      group: "Monday",
    },
    {
      category: "meeting",
      title: "Customer interview",
      detail: "Acme Co. discovery",
      time: "14:00",
      duration: "30m",
      group: "Tuesday",
    },
    {
      category: "team",
      title: "Sprint retro",
      detail: "Whole engineering",
      time: "11:00",
      duration: "1h",
      group: "Wednesday",
    },
    {
      category: "personal",
      title: "Yoga class",
      detail: "Studio · 5th Ave",
      time: "18:30",
      duration: "1h",
      group: "Wednesday",
    },
  ]}
/>

// single day
<CalendarEventList
  title="Today"
  items={[
    {
      category: "meeting",
      title: "Standup",
      detail: "Engineering sync",
      time: "9:00",
      duration: "15m",
      group: "Today",
    },
    {
      category: "focus",
      title: "Spec review",
      detail: "Calendar v2",
      time: "10:00",
      duration: "1h 30m",
      group: "Today",
    },
    {
      category: "personal",
      title: "Lunch with Maya",
      detail: "Café Lumen",
      time: "12:30",
      duration: "1h",
      group: "Today",
    },
    {
      category: "team",
      title: "Roadmap review",
      detail: "Product + design",
      time: "15:00",
      duration: "45m",
      group: "Today",
    },
  ]}
/>
```
