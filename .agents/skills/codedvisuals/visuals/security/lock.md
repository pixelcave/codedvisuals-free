---
name: codedvisuals-security-lock
description: A lock visual conveying security and access control. The Lock visual in the Security category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Security / Lock

A lock visual conveying security and access control.

- **Registry name:** `@codedvisuals/security-lock`
- **Import path:** `@/components/codedvisuals/security/lock`

## Install if it is not in the project yet

Look for `components/codedvisuals/security/lock.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/security-lock
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `state` | `LockState` | `"locked"` |
| `label` | `string` | - |
| `digits` | `number` | `6` |

## Types

```ts
type LockState = "locked" | "unlocked" | "error";
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import SecurityLock from "@/components/codedvisuals/security/lock";

// default
<SecurityLock />

// isometric
<SecurityLock isometric />

// digits={4}
<SecurityLock digits={4} />

// label="Secure"
<SecurityLock label="Secure" />

// state="unlocked"
<SecurityLock state="unlocked" />

// isometric · state="unlocked"
<SecurityLock state="unlocked" isometric />

// state="error"
<SecurityLock state="error" />

// isometric · state="error"
<SecurityLock state="error" isometric />
```
