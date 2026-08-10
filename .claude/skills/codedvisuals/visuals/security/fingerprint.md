---
name: codedvisuals-security-fingerprint
description: An animated fingerprint scan with a success state. The Fingerprint visual in the Security category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Security / Fingerprint

An animated fingerprint scan with a success state.

- **Registry name:** `@codedvisuals/security-fingerprint`
- **Import path:** `@/components/codedvisuals/security/fingerprint`

## Install if it is not in the project yet

Look for `components/codedvisuals/security/fingerprint.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/security-fingerprint
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `state` | `FingerprintState` | `"success"` |
| `status` | `string` | - |

## Types

```ts
type FingerprintState = "success" | "scanning" | "error";
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import SecurityFingerprint from "@/components/codedvisuals/security/fingerprint";

// default
<SecurityFingerprint />

// isometric
<SecurityFingerprint isometric />

// status="Authenticated"
<SecurityFingerprint status="Authenticated" />

// no status
<SecurityFingerprint status="" />

// state="scanning"
<SecurityFingerprint state="scanning" />

// isometric · state="scanning"
<SecurityFingerprint state="scanning" isometric />

// state="error"
<SecurityFingerprint state="error" />

// isometric · state="error"
<SecurityFingerprint state="error" isometric />
```
