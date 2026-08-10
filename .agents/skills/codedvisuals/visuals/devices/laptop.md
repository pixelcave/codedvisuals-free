---
name: codedvisuals-devices-laptop
description: A laptop device frame for presenting a screenshot or UI. The Laptop visual in the Devices category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Devices / Laptop

A laptop device frame for presenting a screenshot or UI.

- **Registry name:** `@codedvisuals/devices-laptop`
- **Import path:** `@/components/codedvisuals/devices/laptop`

## Install if it is not in the project yet

Look for `components/codedvisuals/devices/laptop.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/devices-laptop
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `variant` | `\| "landing"
    \| "dashboard"
    \| "windows"
    \| "mac"
    \| "lockscreen"
    \| "screenshot"` | `"landing"` |
| `image` | `string` | - |
| `time` | `string` | `"9:41"` |
| `date` | `string` | `"Monday, May 25"` |
| `name` | `string` | `"Alex Morgan"` |

## Examples

Give the visual a sized container, then drop it in:

```tsx
import DevicesLaptop from "@/components/codedvisuals/devices/laptop";

// landing
<DevicesLaptop />

// dashboard
<DevicesLaptop variant="dashboard" />

// windows
<DevicesLaptop variant="windows" />

// mac
<DevicesLaptop variant="mac" />

// lockscreen
<DevicesLaptop variant="lockscreen" />
```
