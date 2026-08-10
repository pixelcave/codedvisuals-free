---
name: codedvisuals-devices-tablet
description: A tablet device frame for showcasing an app or page. The Tablet visual in the Devices category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Devices / Tablet

A tablet device frame for showcasing an app or page.

- **Registry name:** `@codedvisuals/devices-tablet`
- **Import path:** `@/components/codedvisuals/devices/tablet`

## Install if it is not in the project yet

Look for `components/codedvisuals/devices/tablet.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/devices-tablet
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `variant` | `"app" \| "home" \| "lockscreen" \| "screenshot"` | `"app"` |
| `image` | `string` | - |
| `time` | `string` | `"9:41"` |
| `date` | `string` | `"Monday, May 25"` |
| `notifications` | `Notification[]` | see Default content below |

## Types

```ts
interface Notification {
  app: string;
  title: string;
  body: string;
}
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_NOTIFICATIONS: Notification[] = [
  {
    app: "Messages",
    title: "Sara Ruiz",
    body: "Hey! Are we still on for lunch today?",
  },
  { app: "Mail", title: "Team Update", body: "Sprint review moved to 3 PM" },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import DevicesTablet from "@/components/codedvisuals/devices/tablet";

// default
<DevicesTablet />

// fadeOut
<DevicesTablet fadeOut />

// home
<DevicesTablet variant="home" />

// home · isometric
<DevicesTablet variant="home" isometric />

// lockscreen
<DevicesTablet variant="lockscreen" />

// lockscreen · isometric
<DevicesTablet variant="lockscreen" isometric />
```
