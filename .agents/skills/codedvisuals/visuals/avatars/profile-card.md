---
name: codedvisuals-avatars-profile-card
description: A compact profile card with avatar, name, and key stats. The Profile Card visual in the Avatars category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Avatars / Profile Card

A compact profile card with avatar, name, and key stats.

- **Registry name:** `@codedvisuals/avatars-profile-card`
- **Import path:** `@/components/codedvisuals/avatars/profile-card`

## Install if it is not in the project yet

Look for `components/codedvisuals/avatars/profile-card.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/avatars-profile-card
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `initials` | `string` | `"SR"` |
| `image` | `string` | - |
| `name` | `string` | `"Sara Ruiz"` |
| `role` | `string` | `"Design Lead"` |
| `status` | `Status` | `"online"` |
| `tint` | `string` | `"bg-primary text-primary-foreground"` |

## Types

```ts
type Status = "online" | "away" | "busy" | "offline";
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import AvatarsProfileCard from "@/components/codedvisuals/avatars/profile-card";

// default
<AvatarsProfileCard />

// isometric
<AvatarsProfileCard isometric />

// online · custom copy
<AvatarsProfileCard
  initials="JC"
  name="James Chen"
  role="Engineering Lead"
  tint="bg-sky-200/80 text-sky-700 dark:bg-sky-950/80 dark:text-sky-300"
/>

// away
<AvatarsProfileCard status="away" />

// busy
<AvatarsProfileCard status="busy" />

// offline
<AvatarsProfileCard status="offline" />

// away · isometric · custom copy
<AvatarsProfileCard
  isometric
  status="away"
  initials="OB"
  name="Olivia Bay"
  role="Brand Designer"
  tint="bg-pink-200/80 text-pink-700 dark:bg-pink-950/80 dark:text-pink-300"
/>
```
