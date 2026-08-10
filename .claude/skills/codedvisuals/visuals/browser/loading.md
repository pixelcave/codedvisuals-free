---
name: codedvisuals-browser-loading
description: A browser window mockup with an animated page loading state. The Loading visual in the Browser category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Browser / Loading

A browser window mockup with an animated page loading state.

- **Registry name:** `@codedvisuals/browser-loading`
- **Import path:** `@/components/codedvisuals/browser/loading`

## Install if it is not in the project yet

Look for `components/codedvisuals/browser/loading.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/browser-loading
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `url` | `string` | `"codedvisuals.com"` |

## Examples

Give the visual a sized container, then drop it in:

```tsx
import BrowserLoading from "@/components/codedvisuals/browser/loading";

// default
<BrowserLoading />

// hover
<BrowserLoading hover />

// custom url
<BrowserLoading url="app.acme.io/dashboard" />
```
