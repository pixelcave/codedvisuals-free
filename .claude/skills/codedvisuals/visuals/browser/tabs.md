---
name: codedvisuals-browser-tabs
description: A browser window with switching tabs and an address bar. The Tabs visual in the Browser category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Browser / Tabs

A browser window with switching tabs and an address bar.

- **Registry name:** `@codedvisuals/browser-tabs`
- **Import path:** `@/components/codedvisuals/browser/tabs`

## Install if it is not in the project yet

Look for `components/codedvisuals/browser/tabs.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/browser-tabs
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `tabs` | `string[]` | `["Overview", "Pricing", "Docs"]` |
| `url` | `string` | `"codedvisuals.com"` |

## Examples

Give the visual a sized container, then drop it in:

```tsx
import BrowserTabs from "@/components/codedvisuals/browser/tabs";

// default
<BrowserTabs />

// hover
<BrowserTabs hover />

// custom tabs · custom url
<BrowserTabs tabs={["Inbox", "Sent", "Drafts"]} url="mail.acme.io" />
```
