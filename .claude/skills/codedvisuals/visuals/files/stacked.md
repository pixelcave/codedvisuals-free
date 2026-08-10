---
name: codedvisuals-files-stacked
description: A stack of overlapping file cards with depth. The Stacked visual in the Files category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Files / Stacked

A stack of overlapping file cards with depth.

- **Registry name:** `@codedvisuals/files-stacked`
- **Import path:** `@/components/codedvisuals/files/stacked`

## Install if it is not in the project yet

Look for `components/codedvisuals/files/stacked.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/files-stacked
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `category` | `FileCategory` | `"default"` |
| `label` | `string` | - |
| `count` | `3 \| 5 \| 7 \| 9` | `5` |

## Types

```ts
type FileCategory = keyof typeof CATEGORIES;
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import FilesStacked from "@/components/codedvisuals/files/stacked";

// files
<FilesStacked count={9} />

// documents
<FilesStacked category="documents" label="7 documents" count={7} />

// spreadsheets
<FilesStacked category="spreadsheets" label="5 sheets" count={5} />

// images
<FilesStacked category="images" label="3 images" count={3} />

// design
<FilesStacked category="design" label="Design" />

// code
<FilesStacked category="code" label="Code" />

// fonts
<FilesStacked category="fonts" label="Fonts" />

// media
<FilesStacked category="media" label="Media" />

// video
<FilesStacked category="video" label="Video" />

// audio
<FilesStacked category="audio" label="Audio" />
```
