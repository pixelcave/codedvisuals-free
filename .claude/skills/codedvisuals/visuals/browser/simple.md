---
name: codedvisuals-browser-simple
description: A clean browser window frame for showcasing any screenshot or UI. The Simple visual in the Browser category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Browser / Simple

A clean browser window frame for showcasing any screenshot or UI.

- **Registry name:** `@codedvisuals/browser-simple`
- **Import path:** `@/components/codedvisuals/browser/simple`

## Install if it is not in the project yet

Look for `components/codedvisuals/browser/simple.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/browser-simple
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `url` | `string` | `"codedvisuals.com"` |
| `variant` | `"landing" \| "dashboard"` | `"landing"` |

## Examples

Give the visual a sized container, then drop it in:

```tsx
import BrowserSimple from "@/components/codedvisuals/browser/simple";

// landing
<BrowserSimple />

// dashboard
<BrowserSimple variant="dashboard" />

// landing · fadeOut
<BrowserSimple fadeOut />

// dashboard · fadeOut
<BrowserSimple variant="dashboard" fadeOut />

// dashboard · isometric
<BrowserSimple variant="dashboard" isometric />

// dashboard · isometric · fadeOut
<BrowserSimple variant="dashboard" isometric fadeOut />

// landing · custom url
<BrowserSimple url="acme.io" />

// dashboard · custom url
<BrowserSimple variant="dashboard" url="app.acme.io/overview" />
```
