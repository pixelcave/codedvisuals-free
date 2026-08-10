---
name: codedvisuals-devices-phone
description: A phone device frame for showcasing a mobile screen. The Phone visual in the Devices category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Devices / Phone

A phone device frame for showcasing a mobile screen.

- **Registry name:** `@codedvisuals/devices-phone`
- **Import path:** `@/components/codedvisuals/devices/phone`

## Install if it is not in the project yet

Look for `components/codedvisuals/devices/phone.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/devices-phone
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
    body: "Hey! Are we still on for lunch?",
  },
  { app: "Mail", title: "Team Update", body: "Sprint review moved to 3 PM" },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import DevicesPhone from "@/components/codedvisuals/devices/phone";

// default
<DevicesPhone />

// fadeOut
<DevicesPhone fadeOut />

// home
<DevicesPhone variant="home" />

// home · isometric
<DevicesPhone variant="home" isometric />

// lockscreen
<DevicesPhone variant="lockscreen" />

// lockscreen · isometric
<DevicesPhone variant="lockscreen" isometric />
```
