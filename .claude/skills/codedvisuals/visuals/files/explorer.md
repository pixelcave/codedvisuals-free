---
name: codedvisuals-files-explorer
description: A file explorer with a folder tree and file list. The Explorer visual in the Files category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Files / Explorer

A file explorer with a folder tree and file list.

- **Registry name:** `@codedvisuals/files-explorer`
- **Import path:** `@/components/codedvisuals/files/explorer`

## Install if it is not in the project yet

Look for `components/codedvisuals/files/explorer.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/files-explorer
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

This visual has no data props of its own. Control it entirely through the shared animation props and presentation modifiers.

## Examples

Give the visual a sized container, then drop it in:

```tsx
import FilesExplorer from "@/components/codedvisuals/files/explorer";

// default
<FilesExplorer />

// fadeOut
<FilesExplorer fadeOut />
```
