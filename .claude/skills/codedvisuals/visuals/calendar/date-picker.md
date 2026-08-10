---
name: codedvisuals-calendar-date-picker
description: A calendar date picker with a selected day and range highlight. The Date Picker visual in the Calendar category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Calendar / Date Picker

A calendar date picker with a selected day and range highlight.

- **Registry name:** `@codedvisuals/calendar-date-picker`
- **Import path:** `@/components/codedvisuals/calendar/date-picker`

## Install if it is not in the project yet

Look for `components/codedvisuals/calendar/date-picker.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/calendar-date-picker
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `month` | `number` | - |
| `year` | `number` | - |
| `highlighted` | `number \| null` | - |
| `selected` | `number \| null` | - |
| `rangeStart` | `number \| null` | `null` |
| `rangeEnd` | `number \| null` | `null` |
| `weekStartsOn` | `0 \| 1` | `1` |

## Examples

Give the visual a sized container, then drop it in:

```tsx
import CalendarDatePicker from "@/components/codedvisuals/calendar/date-picker";

// default
<CalendarDatePicker />

// fadeOut
<CalendarDatePicker fadeOut />

// range
<CalendarDatePicker selected={null} rangeStart={12} rangeEnd={22} />

// range · isometric
<CalendarDatePicker
  selected={null}
  rangeStart={11}
  rangeEnd={18}
  isometric
/>

// highlighted · selected
<CalendarDatePicker highlighted={11} selected={18} />

// specific month
<CalendarDatePicker month={6} year={2028} selected={1} />

// Sunday start
<CalendarDatePicker weekStartsOn={0} />
```
