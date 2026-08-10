---
name: codedvisuals-notifications-toast
description: An animated toast notification that slides in. The Toast visual in the Notifications category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Notifications / Toast

An animated toast notification that slides in.

- **Registry name:** `@codedvisuals/notifications-toast`
- **Import path:** `@/components/codedvisuals/notifications/toast`

## Install if it is not in the project yet

Look for `components/codedvisuals/notifications/toast.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/notifications-toast
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `variant` | `ToastVariant` | `"success"` |
| `title` | `string` | - |
| `description` | `string` | - |

## Types

```ts
type ToastVariant = "success" | "warning" | "info";
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import NotificationsToast from "@/components/codedvisuals/notifications/toast";

// success
<NotificationsToast />

// warning
<NotificationsToast variant="warning" />

// info
<NotificationsToast variant="info" />

// success · isometric
<NotificationsToast isometric />

// warning · isometric
<NotificationsToast variant="warning" isometric />

// info · isometric
<NotificationsToast variant="info" isometric />

// success · custom copy
<NotificationsToast
  title="Payment received"
  description="$240.00 from Acme Inc. has cleared and was added to your balance."
/>

// warning · isometric · custom copy
<NotificationsToast
  variant="warning"
  isometric
  title="API limit nearing"
  description="You've used 4,820 of 5,000 monthly requests. Upgrade to avoid throttling."
/>
```
