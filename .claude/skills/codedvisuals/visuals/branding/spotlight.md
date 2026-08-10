---
name: codedvisuals-branding-spotlight
description: An app icon spotlit over a fading dock of placeholder apps, with ambient glow and a particle field. The Spotlight visual in the Branding category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Branding / Spotlight

An app icon spotlit over a fading dock of placeholder apps, with ambient glow and a particle field.

- **Registry name:** `@codedvisuals/branding-spotlight`
- **Import path:** `@/components/codedvisuals/branding/spotlight`

## Install if it is not in the project yet

Look for `components/codedvisuals/branding/spotlight.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/branding-spotlight
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `logo` | `React.ReactNode` | - |
| `image` | `string` | - |
| `iconClassName` | `string` | - |
| `glow` | `boolean` | `true` |
| `particles` | `boolean` | `true` |

## Examples

Give the visual a sized container, then drop it in:

```tsx
import BrandingSpotlight from "@/components/codedvisuals/branding/spotlight";

// default
<BrandingSpotlight />

// hover
<BrandingSpotlight hover />

// no glow
<BrandingSpotlight glow={false} />

// no particles
<BrandingSpotlight particles={false} />

// custom color
<BrandingSpotlight iconClassName="bg-indigo-700 dark:bg-indigo-400" />
```
