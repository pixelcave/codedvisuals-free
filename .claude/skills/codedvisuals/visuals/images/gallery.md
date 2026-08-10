---
name: codedvisuals-images-gallery
description: A responsive image gallery grid with hover states. The Gallery visual in the Images category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Images / Gallery

A responsive image gallery grid with hover states.

- **Registry name:** `@codedvisuals/images-gallery`
- **Import path:** `@/components/codedvisuals/images/gallery`

## Install if it is not in the project yet

Look for `components/codedvisuals/images/gallery.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/images-gallery
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `items` | `GalleryItem[]` | see Default content below |
| `title` | `string` | `"Gallery"` |
| `description` | `string` | - |
| `columns` | `number` | `3` |
| `badge` | `boolean` | `true` |

## Types

```ts
interface GalleryItem {
  kind?: ImageKind;
  src?: string;
  title: string;
}

type ImageKind =
  | "mountain"
  | "sunset"
  | "ocean"
  | "forest"
  | "desert"
  | "city"
  | "aurora"
  | "blossom"
  | "geometric";
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_ITEMS: GalleryItem[] = [
  { kind: "mountain", title: "Alpine" },
  { kind: "sunset", title: "Dusk" },
  { kind: "ocean", title: "Pacific" },
  { kind: "forest", title: "Pines" },
  { kind: "desert", title: "Dunes" },
  { kind: "city", title: "Skyline" },
  { kind: "aurora", title: "Aurora" },
  { kind: "blossom", title: "Blossom" },
  { kind: "geometric", title: "Studio" },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import ImagesGallery from "@/components/codedvisuals/images/gallery";

// default
<ImagesGallery />

// fadeOut
<ImagesGallery fadeOut />

// custom copy
<ImagesGallery title="Recent shots" description="Last 24 hours" />

// landscapes only
<ImagesGallery
  title="Landscapes"
  items={[
    { kind: "mountain", title: "Alpine" },
    { kind: "ocean", title: "Pacific" },
    { kind: "forest", title: "Pines" },
    { kind: "desert", title: "Dunes" },
    { kind: "sunset", title: "Dusk" },
    { kind: "aurora", title: "Aurora" },
  ]}
/>
```
