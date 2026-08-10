---
name: codedvisuals-files-simple
description: A simple file card with name, type, and size. The Simple visual in the Files category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Files / Simple

A simple file card with name, type, and size.

- **Registry name:** `@codedvisuals/files-simple`
- **Import path:** `@/components/codedvisuals/files/simple`

## Install if it is not in the project yet

Look for `components/codedvisuals/files/simple.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/files-simple
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `extension` | `FileExtension` | `"docx"` |

## Types

```ts
type FileExtension = keyof typeof FILE_TYPES;
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import FilesSimple from "@/components/codedvisuals/files/simple";
```
