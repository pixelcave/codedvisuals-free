---
name: codedvisuals-images-carousel
description: An image carousel with slides and navigation controls. The Carousel visual in the Images category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Images / Carousel

An image carousel with slides and navigation controls.

- **Registry name:** `@codedvisuals/images-carousel`
- **Import path:** `@/components/codedvisuals/images/carousel`

## Install if it is not in the project yet

Look for `components/codedvisuals/images/carousel.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/images-carousel
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `slides` | `CarouselSlide[]` | see Default content below |
| `count` | `number` | `5` |
| `activeIndex` | `number` | `1` |
| `arrows` | `boolean` | `true` |
| `badge` | `boolean` | `true` |

## Types

```ts
interface CarouselSlide {
  kind?: SlideKind;
  src?: string;
  title: string;
  caption: string;
}

type SlideKind =
  | "mountain"
  | "sunset"
  | "ocean"
  | "forest"
  | "desert"
  | "city"
  | "aurora"
  | "blossom";
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_SLIDES: CarouselSlide[] = [
  { kind: "sunset", title: "Costa Brava", caption: "Sunset over the cliffs" },
  { kind: "mountain", title: "Dolomites", caption: "Above the cloud line" },
  { kind: "ocean", title: "Big Sur", caption: "Pacific morning swell" },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import ImagesCarousel from "@/components/codedvisuals/images/carousel";

// default
<ImagesCarousel />

// fadeOut
<ImagesCarousel fadeOut />

// custom slides · count
<ImagesCarousel
  slides={[
    {
      kind: "aurora",
      title: "Tromsø",
      caption: "Lights at midnight",
    },
    {
      kind: "blossom",
      title: "Kyoto",
      caption: "Cherry blossom season",
    },
    { kind: "city", title: "Tokyo", caption: "Neon after dark" },
  ]}
  count={8}
  activeIndex={3}
/>

// no arrows
<ImagesCarousel arrows={false} />

// active: first
<ImagesCarousel activeIndex={0} />

// active: last
<ImagesCarousel activeIndex={4} />
```
