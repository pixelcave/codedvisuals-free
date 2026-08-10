---
name: codedvisuals-calendar-month-view
description: A full month calendar grid with events placed on days. The Month View visual in the Calendar category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Calendar / Month View

A full month calendar grid with events placed on days.

- **Registry name:** `@codedvisuals/calendar-month-view`
- **Import path:** `@/components/codedvisuals/calendar/month-view`

## Install if it is not in the project yet

Look for `components/codedvisuals/calendar/month-view.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/calendar-month-view
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `month` | `number` | - |
| `year` | `number` | - |
| `highlighted` | `number \| null` | - |
| `weekStartsOn` | `0 \| 1` | `1` |
| `events` | `CalendarEvent[]` | see Default content below |

## Types

```ts
interface CalendarEvent {
  day: number;
  tone: EventTone;
}

type EventTone = "sky" | "rose" | "emerald" | "violet" | "amber";
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_EVENTS: CalendarEvent[] = [
  { day: 4, tone: "sky" },
  { day: 9, tone: "violet" },
  { day: 12, tone: "emerald" },
  { day: 15, tone: "rose" },
  { day: 15, tone: "sky" },
  { day: 21, tone: "amber" },
  { day: 22, tone: "emerald" },
  { day: 27, tone: "violet" },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import CalendarMonthView from "@/components/codedvisuals/calendar/month-view";

// default
<CalendarMonthView />

// fadeOut
<CalendarMonthView fadeOut />

// specific month
<CalendarMonthView
  month={3}
  year={2028}
  highlighted={9}
  events={[
    { day: 2, tone: "violet" },
    { day: 7, tone: "sky" },
    { day: 14, tone: "emerald" },
    { day: 18, tone: "rose" },
    { day: 24, tone: "amber" },
  ]}
/>

// Sunday start
<CalendarMonthView weekStartsOn={0} />
```
