---
name: codedvisuals-files-upload
description: A file upload area with progress and drag and drop. The Upload visual in the Files category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Files / Upload

A file upload area with progress and drag and drop.

- **Registry name:** `@codedvisuals/files-upload`
- **Import path:** `@/components/codedvisuals/files/upload`

## Install if it is not in the project yet

Look for `components/codedvisuals/files/upload.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/files-upload
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `variant` | `UploadVariant` | `"document"` |

## Types

```ts
type UploadVariant =
  | "document"
  | "pdf"
  | "image"
  | "video"
  | "audio"
  | "spreadsheet"
  | "code"
  | "archive";
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import FilesUpload from "@/components/codedvisuals/files/upload";

// document
<FilesUpload />

// hover
<FilesUpload hover />

// pdf
<FilesUpload variant="pdf" />

// image
<FilesUpload variant="image" />

// video
<FilesUpload variant="video" />

// audio
<FilesUpload variant="audio" />

// spreadsheet
<FilesUpload variant="spreadsheet" />

// code
<FilesUpload variant="code" />

// archive
<FilesUpload variant="archive" />
```
