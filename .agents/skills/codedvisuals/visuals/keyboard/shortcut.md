---
name: codedvisuals-keyboard-shortcut
description: A keyboard shortcut rendered as labeled keycaps. The Shortcut visual in the Keyboard category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Keyboard / Shortcut

A keyboard shortcut rendered as labeled keycaps.

- **Registry name:** `@codedvisuals/keyboard-shortcut`
- **Import path:** `@/components/codedvisuals/keyboard/shortcut`

## Install if it is not in the project yet

Look for `components/codedvisuals/keyboard/shortcut.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/keyboard-shortcut
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `keys` | `string[]` | see Default content below |

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_KEYS = ["⌘", "K"];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import KeyboardShortcut from "@/components/codedvisuals/keyboard/shortcut";

// default
<KeyboardShortcut />

// isometric
<KeyboardShortcut isometric />

// Ctrl + Shift + P · custom keys
<KeyboardShortcut keys={["Ctrl", "Shift", "P"]} />

// ⌘ + Shift + F · custom keys
<KeyboardShortcut keys={["⌘", "Shift", "F"]} />

// Ctrl + Z · custom keys
<KeyboardShortcut keys={["Ctrl", "Z"]} />

// Ctrl + Z · custom keys · isometric
<KeyboardShortcut keys={["Ctrl", "Z"]} isometric />
```
