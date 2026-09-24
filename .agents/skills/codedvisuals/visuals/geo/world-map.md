---
name: codedvisuals-geo-world-map
description: A dotted world map that blooms outward from a chosen city, with pinging location markers, tinted coverage regions, and connection arcs that draw between cities. The World Map visual in the Geo category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Geo / World Map

A dotted world map that blooms outward from a chosen city, with pinging location markers, tinted coverage regions, and connection arcs that draw between cities.

- **Registry name:** `@codedvisuals/geo-world-map`
- **Import path:** `@/components/codedvisuals/geo/world-map`

## Install if it is not in the project yet

Look for `components/codedvisuals/geo/world-map.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/geo-world-map
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `markers` | `WorldMapMarker[]` | see Default content below |
| `regions` | `WorldMapRegion[]` | see Default content below |
| `arcs` | `boolean` | `true` |
| `arcPairs` | `[number, number][]` | see Default content below |
| `labels` | `boolean` | `false` |
| `density` | `WorldMapDensity` | `"normal"` |
| `reveal` | `WorldMapReveal` | `"bloom"` |
| `revealFrom` | `number` | `0` |
| `wrapperClassName` | `string` | - |

## Types

```ts
interface WorldMapMarker {
  lat: number;
  lng: number;
  label?: string;
  color?: string;
  active?: boolean;
}

interface WorldMapRegion {
  lat: [number, number];
  lng: [number, number];
  color?: string;
}

type WorldMapDensity = "sparse" | "normal" | "dense";

type WorldMapReveal = "bloom" | "split" | "sweep";
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_MARKERS: WorldMapMarker[] = [
  { lat: 37.77, lng: -122.42, label: "San Francisco" },
  { lat: 40.71, lng: -74.0, label: "New York" },
  { lat: 51.51, lng: -0.13, label: "London" },
  { lat: -23.55, lng: -46.63, label: "Sao Paulo" },
  { lat: 1.35, lng: 103.82, label: "Singapore" },
  { lat: 35.68, lng: 139.69, label: "Tokyo" },
  { lat: -33.87, lng: 151.21, label: "Sydney" },
];

const DEFAULT_REGIONS: WorldMapRegion[] = [];

const DEFAULT_ARC_PAIRS: [number, number][] = [
  [0, 1],
  [1, 2],
  [1, 3],
  [2, 4],
  [4, 5],
  [4, 6],
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import GeoWorldMap from "@/components/codedvisuals/geo/world-map";

// default
<GeoWorldMap />

// hover
<GeoWorldMap hover />

// labels
<GeoWorldMap labels />

// split reveal
<GeoWorldMap reveal="split" />

// sweep reveal
<GeoWorldMap reveal="sweep" />

// bloom from Singapore
<GeoWorldMap revealFrom={4} labels />

// no arcs
<GeoWorldMap arcs={false} />

// active marker
<GeoWorldMap
  markers={[
    { lat: 37.77, lng: -122.42, label: "San Francisco" },
    { lat: 51.51, lng: -0.13, label: "London", active: true },
    { lat: 1.35, lng: 103.82, label: "Singapore" },
    { lat: -33.87, lng: 151.21, label: "Sydney" },
  ]}
  arcPairs={[
    [0, 1],
    [1, 2],
    [2, 3],
  ]}
  labels
/>

// regions
<GeoWorldMap
  arcs={false}
  regions={[
    {
      lat: [-56, 78],
      lng: [-170, -28],
      color: "text-indigo-600 dark:text-indigo-500",
    },
    {
      lat: [-40, 78],
      lng: [-28, 62],
      color: "text-emerald-600 dark:text-emerald-500",
    },
    {
      lat: [-50, 78],
      lng: [62, 180],
      color: "text-amber-600 dark:text-amber-500",
    },
  ]}
/>

// sparse
<GeoWorldMap density="sparse" />
```
