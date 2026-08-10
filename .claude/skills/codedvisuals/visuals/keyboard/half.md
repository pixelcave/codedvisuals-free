---
name: codedvisuals-keyboard-half
description: A half keyboard showing a key combination press. The Half visual in the Keyboard category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Keyboard / Half

A half keyboard showing a key combination press.

- **Registry name:** `@codedvisuals/keyboard-half`
- **Import path:** `@/components/codedvisuals/keyboard/half`

## Install if it is not in the project yet

Look for `components/codedvisuals/keyboard/half.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/keyboard-half
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `keys` | `string[] \| null` | `null` |
| `layout` | `"mac" \| "windows"` | `"mac"` |

## Examples

Give the visual a sized container, then drop it in:

```tsx
import KeyboardHalf from "@/components/codedvisuals/keyboard/half";

// default
<KeyboardHalf />

// isometric
<KeyboardHalf isometric />

// windows layout
<KeyboardHalf layout="windows" />

// ⌘ + S · shortcut
<KeyboardHalf keys={["⌘", "S"]} />

// ⌘ + Shift + A · shortcut
<KeyboardHalf keys={["⌘", "Shift", "A"]} />

// ⌘ + S · hover
<KeyboardHalf keys={["⌘", "S"]} hover />

// ⌘ + C · isometric
<KeyboardHalf keys={["⌘", "C"]} isometric />

// Ctrl + Z · windows
<KeyboardHalf keys={["Ctrl", "Z"]} layout="windows" />

// Ctrl + C · windows · isometric
<KeyboardHalf keys={["Ctrl", "C"]} layout="windows" isometric />
```
