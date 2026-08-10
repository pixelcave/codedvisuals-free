---
name: codedvisuals-security-shield
description: A shield visual conveying protection and trust. The Shield visual in the Security category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Security / Shield

A shield visual conveying protection and trust.

- **Registry name:** `@codedvisuals/security-shield`
- **Import path:** `@/components/codedvisuals/security/shield`

## Install if it is not in the project yet

Look for `components/codedvisuals/security/shield.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/security-shield
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `state` | `ShieldState` | `"secure"` |
| `label` | `string` | - |

## Types

```ts
type ShieldState = "secure" | "warning" | "breached";
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import SecurityShield from "@/components/codedvisuals/security/shield";

// default
<SecurityShield />

// isometric
<SecurityShield isometric />

// label="End-to-end"
<SecurityShield label="End-to-end" />

// no label
<SecurityShield label="" />

// state="warning"
<SecurityShield state="warning" />

// isometric · state="warning"
<SecurityShield state="warning" isometric />

// state="breached"
<SecurityShield state="breached" />

// isometric · state="breached"
<SecurityShield state="breached" isometric />
```
