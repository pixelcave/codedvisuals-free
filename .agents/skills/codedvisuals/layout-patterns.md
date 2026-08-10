---
name: codedvisuals-layout-patterns
description: Ready-to-paste containers, feature cards, and bento grids for placing CodedVisuals compositions when the host project has no existing grid or card layout to drop a visual into. Use when a project lacks its own feature-section, card, or bento scaffolding and you need a sized wrapper to put a visual in.
---

# CodedVisuals layout patterns

A visual brings its own height, so it always renders, but it settles best inside a wrapper that defines one. Without a container height it sits edge to edge, top and bottom, with no room to breathe; with a height (or a `min-h-*`) it gets vertical space to settle into. If the host project already has its own grid, card, or feature-section components, use those and just put the visual inside one of their sized slots. Reach for this file **only when the project has no such layout to drop a visual into**, and you need a container to build from.

Every pattern below uses shadcn/ui semantic tokens (`bg-card`, `border-border`, `text-muted-foreground`), Tailwind v4 utility shorthands, and assumes the visual is imported as `{Category}{File}` in PascalCase (for example `ChartsLine`). Each visual already clips its own content, so these frames omit `overflow-hidden`. The visual also isolates itself from assistive tech (its outer container is `aria-hidden`), so the wrapper is purely presentational. Pair every visual with real text in the surrounding section.

## The height rule (read first)

A visual carries its own height, so it always shows up. But in a container with no height of its own, it sits flush against the top and bottom edges with no breathing room. Give the container an explicit height (or a `min-h-*`) so the visual has vertical space to settle into.

```tsx
// Tight: no container height, so the visual is edge to edge, top and bottom.
<div className="rounded-2xl border bg-card">
  <ChartsLine animated />
</div>

// Better: a height (or min-height) gives the visual room to breathe.
<div className="h-96 rounded-2xl border bg-card">
  <ChartsLine animated />
</div>
```

Use a fixed height (`h-72`, `h-96`) for most cards, a `min-h-*` when you want the container to grow with taller content, or `aspect-video` / `aspect-square` when the wrapper width is fluid and you want the height to track it.

Keep the container padding-free. Each visual clips its own content, so it fills the frame edge to edge and tucks itself away neatly when space is tight. Padding would shrink the visual and leave gaps inside the frame.

## Base frame

The canonical container: a rounded, bordered, muted card. Everything else here builds on it.

```tsx
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

function VisualCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        // Default
        "h-96 rounded-2xl border bg-card",
        // Or, for a more subtle surface:
        // "h-96 rounded-2xl border border-border/50 bg-muted/20 dark:bg-muted/15",
        className,
      )}
    >
      {children}
    </div>
  );
}
```

The visual clips its own content (including `isometric` tilt and `fadeOut` edges), so the frame skips `overflow-hidden`. Keep it padding-free so the visual fills to the edges. Override the height per use with `className="h-72"` etc.

## Bare visual card

Just the visual in a sized frame, no text. Good for decorative spots and grid cells.

```tsx
<div className="h-96 rounded-2xl border border-border/50 bg-muted/20 dark:bg-muted/15">
  <ChartsLine animated />
</div>
```

## Edge fade (optional)

To soften a visual against its frame, pass mask utilities straight to the visual's `className`. This fades the visual toward whichever edges you list, which reads nicely inside a card.

```tsx
<div className="h-96 rounded-2xl border border-border/50 bg-muted/20 dark:bg-muted/15">
  <ChartsLine
    animated
    className="mask-t-from-85% mask-r-from-85% mask-b-from-85% mask-l-from-85%"
  />
</div>
```

List all four edges for an all-around vignette, or drop the ones you do not want (for example keep only `mask-b-from-85%` to fade just the bottom). It is purely cosmetic and works alongside `fadeOut`.

## Feature card (visual + title + description)

The visual sits on top in its own sized region, with copy underneath. An optional icon chip sits above the title.

```tsx
<div className="rounded-2xl border border-border/50 bg-card">
  <div className="h-80 border-b border-border/50">
    <ChartsLine animated fadeOut />
  </div>
  <div className="p-5">
    <h3 className="text-sm font-semibold text-card-foreground">
      Real-time analytics
    </h3>
    <p className="mt-1 text-sm/relaxed text-muted-foreground">
      Track growth and conversions the moment they happen.
    </p>
  </div>
</div>
```

The visual region (`h-80`) carries the height; the text region grows with its content. Drop the icon `span` if you do not want a chip.

## Split feature row (visual beside copy)

Visual on one side, heading and copy on the other. Stacks on mobile, sits side by side from `md` up.

```tsx
<div className="flex flex-col gap-8 md:flex-row md:items-center">
  <div className="md:w-1/2">
    <h3 className="text-3xl font-semibold tracking-tight text-foreground">
      Connect every tool
    </h3>
    <p className="mt-3 max-w-xs text-base/relaxed text-muted-foreground">
      Bring your stack together and let work flow between apps
      automatically.
    </p>
  </div>
  <div className="h-96 w-full rounded-2xl border border-border/50 bg-muted/20 md:w-1/2 dark:bg-muted/15">
    <IntegrationsHub animated />
  </div>
</div>
```

Swap the child order (put the visual `div` first) to alternate sides down a page.

## Bento grid (mixed tile sizes)

A 12-column grid where tiles span different widths. One column count, many layouts. Each cell is a base frame.

```tsx
<div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-12">
  <div className="h-96 rounded-2xl border border-border/50 bg-muted/20 dark:bg-muted/15 lg:col-span-7">
    <ChatAiChat animated isometric />
  </div>
  <div className="h-96 rounded-2xl border border-border/50 bg-muted/20 dark:bg-muted/15 lg:col-span-5">
    <PaymentCreditCard animated isometric stacked />
  </div>
  <div className="h-96 rounded-2xl border border-border/50 bg-muted/20 dark:bg-muted/15 lg:col-span-6">
    <GeoGlobe animated />
  </div>
  <div className="h-96 rounded-2xl border border-border/50 bg-muted/20 dark:bg-muted/15 lg:col-span-6">
    <IntegrationsLogoOrbit animated orbit />
  </div>
</div>
```

The `col-span` values in each row should add up to 12. Adjust the split (`7 + 5`, `8 + 4`, `4 + 4 + 4`) to feature one tile or balance them.

**With titles and descriptions:** give each tile a visual region plus copy underneath, the same way the feature card does. Tiles in a row stretch to match the tallest, so the text stays aligned.

```tsx
<div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-12">
  <div className="rounded-2xl border border-border/50 bg-card lg:col-span-7">
    <div className="h-96 border-b border-border/50">
      <ChatAiChat animated isometric />
    </div>
    <div className="p-5">
      <h3 className="text-sm font-semibold text-card-foreground">
        Answers in seconds
      </h3>
      <p className="mt-1 text-sm/relaxed text-muted-foreground">
        Ask anything and get a streamed reply drawn from your own docs.
      </p>
    </div>
  </div>
  <div className="rounded-2xl border border-border/50 bg-card lg:col-span-5">
    <div className="h-96 border-b border-border/50">
      <PaymentCreditCard animated isometric stacked />
    </div>
    <div className="p-5">
      <h3 className="text-sm font-semibold text-card-foreground">
        Payments built in
      </h3>
      <p className="mt-1 text-sm/relaxed text-muted-foreground">
        Take cards on day one with a checkout your customers trust.
      </p>
    </div>
  </div>
  <div className="rounded-2xl border border-border/50 bg-card lg:col-span-6">
    <div className="h-96 border-b border-border/50">
      <GeoGlobe animated />
    </div>
    <div className="p-5">
      <h3 className="text-sm font-semibold text-card-foreground">
        Global by default
      </h3>
      <p className="mt-1 text-sm/relaxed text-muted-foreground">
        Serve every region from edge locations close to your users.
      </p>
    </div>
  </div>
  <div className="rounded-2xl border border-border/50 bg-card lg:col-span-6">
    <div className="h-96 border-b border-border/50">
      <IntegrationsLogoOrbit animated orbit />
    </div>
    <div className="p-5">
      <h3 className="text-sm font-semibold text-card-foreground">
        Connected to your stack
      </h3>
      <p className="mt-1 text-sm/relaxed text-muted-foreground">
        Plug into the tools your team already runs on.
      </p>
    </div>
  </div>
</div>
```

**A tall feature tile (`row-span-2`):** add row tracks with `lg:grid-rows-2` and let one tile span both rows. The tall tile stretches to the combined height of the two tiles beside it, so give it a height for mobile and reset it at `lg` with `lg:h-auto`.

```tsx
<div className="grid grid-cols-1 gap-3 lg:grid-cols-12 lg:grid-rows-2">
  <div className="h-96 rounded-2xl border border-border/50 bg-muted/20 lg:col-span-5 lg:row-span-2 lg:h-auto dark:bg-muted/15">
    <GeoGlobe animated />
  </div>
  <div className="h-80 rounded-2xl border border-border/50 bg-muted/20 lg:col-span-7 dark:bg-muted/15">
    <ChartsLine animated isometric />
  </div>
  <div className="h-80 rounded-2xl border border-border/50 bg-muted/20 lg:col-span-7 dark:bg-muted/15">
    <KeyboardHalf animated isometric />
  </div>
</div>
```

The tall tile is placed first, so it claims columns 1 to 5 across both rows; the two `col-span-7` tiles flow into the right column, one per row.

**With titles and descriptions:** the same layout with copy in each tile. Make the tall tile a flex column so its visual region grows (`lg:flex-1`) while the text sits at the bottom.

```tsx
<div className="grid grid-cols-1 gap-3 lg:grid-cols-12 lg:grid-rows-2">
  <div className="flex flex-col rounded-2xl border border-border/50 bg-card lg:col-span-5 lg:row-span-2">
    <div className="min-h-80 border-b border-border/50 lg:h-auto lg:flex-1">
      <GeoGlobe animated />
    </div>
    <div className="p-5">
      <h3 className="text-sm font-semibold text-card-foreground">
        Global reach
      </h3>
      <p className="mt-1 text-sm/relaxed text-muted-foreground">
        Reach customers in every region from infrastructure near
        them.
      </p>
    </div>
  </div>
  <div className="rounded-2xl border border-border/50 bg-card lg:col-span-7">
    <div className="h-80 border-b border-border/50">
      <ChartsLine animated isometric />
    </div>
    <div className="p-5">
      <h3 className="text-sm font-semibold text-card-foreground">
        Live analytics
      </h3>
      <p className="mt-1 text-sm/relaxed text-muted-foreground">
        Watch metrics update the moment activity happens.
      </p>
    </div>
  </div>
  <div className="rounded-2xl border border-border/50 bg-card lg:col-span-7">
    <div className="h-80 border-b border-border/50">
      <KeyboardHalf animated isometric />
    </div>
    <div className="p-5">
      <h3 className="text-sm font-semibold text-card-foreground">
        Built for speed
      </h3>
      <p className="mt-1 text-sm/relaxed text-muted-foreground">
        Fly through the app with a shortcut for every action.
      </p>
    </div>
  </div>
</div>
```

## Showcase bento (padded tray with a featured tile)

A richer marketing bento: the whole grid sits in a padded "tray" surface, one tall tile is featured with its own copy and call-to-action, and the rest flow around it. Tiles are `bg-card` cards nested inside the tray, so their `rounded-[0.875rem]` corners sit concentrically inside the tray's `rounded-[1.25rem]` radius (the tile radius plus the `p-1.5` tray padding lands on the tray radius, so the curves stay parallel). Three things set this apart from the plain bento above:

- **The tray.** Wrap the grid in `rounded-[1.25rem] bg-secondary/75 p-1.5` with a tight `gap-1.5`, so the tiles look inset into one surface instead of floating on the page.
- **A featured tile with a CTA.** The tall tile is a flex column whose visual region grows (`min-h-96 lg:flex-1`) while a heading, description, and buttons sit pinned to the bottom in a `shrink-0` block.
- **Visual regions grow, copy stays pinned.** Every tile is a flex column: the visual region takes `min-h-96 lg:flex-1` (or `py-6 lg:flex-1` for tiny visuals like a single file card, so they size to their content but still stretch on large screens), and the copy block below uses `shrink-0`. Because tiles in a row stretch to the tallest, the growing visual regions keep each visual centered and line the copy up across the row.

The grid drives layout off `md:grid-cols-12`, so tiles carry both an `md:` and an `lg:` span and rearrange at each breakpoint.

```tsx
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

<div className="grid grid-cols-1 gap-1.5 rounded-[1.25rem] bg-secondary/75 p-1.5 md:grid-cols-12">
  {/* Featured tile: tall, with copy and CTAs */}
  <div className="flex flex-col overflow-hidden rounded-[0.875rem] border bg-card text-card-foreground shadow-xs md:col-span-12 lg:col-span-7 lg:row-span-2">
    <div className="flex min-h-96 items-center justify-center lg:flex-1">
      <BrowserSimple animated isometric />
    </div>
    <div className="flex shrink-0 flex-col gap-2.5 p-6">
      <h3 className="text-lg/6 font-semibold tracking-tight">
        A complete development experience
      </h3>
      <p className="text-sm/relaxed text-muted-foreground">
        A pre-configured environment with TypeScript, Tailwind v4,
        and instant hot reload built in from day one.
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-3">
        <Button>
          Start today
          <ArrowRight className="opacity-60 transition-opacity group-hover:opacity-100" />
        </Button>
        <Button variant="outline">Learn more</Button>
      </div>
    </div>
  </div>

  {/* Auto-height tile: small visual sizes to content */}
  <div className="flex flex-col overflow-hidden rounded-[0.875rem] border bg-card text-card-foreground shadow-xs md:col-span-6 lg:col-span-5">
    <div className="flex items-center justify-center py-6 lg:flex-1">
      <FilesSimple animated extension="ts" />
    </div>
    <div className="flex shrink-0 flex-col gap-2.5 p-6">
      <h3 className="text-lg/6 font-semibold tracking-tight">
        TypeScript support
      </h3>
      <p className="text-sm/relaxed text-muted-foreground">
        Strict TypeScript with path aliases and full type safety
        across every component.
      </p>
    </div>
  </div>

  <div className="flex flex-col overflow-hidden rounded-[0.875rem] border bg-card text-card-foreground shadow-xs md:col-span-6 lg:col-span-5">
    <div className="flex items-center justify-center py-6 lg:flex-1">
      <FilesSimple animated extension="json" />
    </div>
    <div className="flex shrink-0 flex-col gap-2.5 p-6">
      <h3 className="text-lg/6 font-semibold tracking-tight">
        JSON output
      </h3>
      <p className="text-sm/relaxed text-muted-foreground">
        Export any block as JSON and build your own custom blocks on
        top.
      </p>
    </div>
  </div>

  {/* Standard tiles: fixed-height visual region + copy */}
  <div className="flex flex-col overflow-hidden rounded-[0.875rem] border bg-card text-card-foreground shadow-xs md:col-span-6 lg:col-span-5">
    <div className="min-h-96 lg:flex-1">
      <NotificationsList animated />
    </div>
    <div className="flex shrink-0 flex-col gap-2.5 p-6">
      <h3 className="text-lg/6 font-semibold tracking-tight">
        Notification patterns
      </h3>
      <p className="text-sm/relaxed text-muted-foreground">
        Drop-in notification center layouts for SaaS landing pages.
      </p>
    </div>
  </div>

  <div className="flex flex-col overflow-hidden rounded-[0.875rem] border bg-card text-card-foreground shadow-xs md:col-span-6 lg:col-span-7">
    <div className="min-h-96 lg:flex-1">
      <DashboardWidgetGrid animated isometric />
    </div>
    <div className="flex shrink-0 flex-col gap-2.5 p-6">
      <h3 className="text-lg/6 font-semibold tracking-tight">
        Dashboard widgets
      </h3>
      <p className="text-sm/relaxed text-muted-foreground">
        Animated stat panels and metric grids that come to life on
        scroll.
      </p>
    </div>
  </div>

  <div className="flex flex-col overflow-hidden rounded-[0.875rem] border bg-card text-card-foreground shadow-xs md:col-span-6 lg:col-span-6">
    <div className="min-h-96 lg:flex-1">
      <FilesUpload animated variant="image" />
    </div>
    <div className="flex shrink-0 flex-col gap-2.5 p-6">
      <h3 className="text-lg/6 font-semibold tracking-tight">
        File upload flows
      </h3>
      <p className="text-sm/relaxed text-muted-foreground">
        Polished upload illustrations for any media type.
      </p>
    </div>
  </div>

  <div className="flex flex-col overflow-hidden rounded-[0.875rem] border bg-card text-card-foreground shadow-xs md:col-span-6 lg:col-span-6">
    <div className="min-h-96 lg:flex-1">
      <DevicesTablet animated isometric />
    </div>
    <div className="flex shrink-0 flex-col gap-2.5 p-6">
      <h3 className="text-lg/6 font-semibold tracking-tight">
        Device showcases
      </h3>
      <p className="text-sm/relaxed text-muted-foreground">
        Phone, tablet, and laptop visuals to frame your product in
        context.
      </p>
    </div>
  </div>
</div>
```

The featured tile is placed first and claims `lg:col-span-7 lg:row-span-2`, so it holds the left column across two rows while the rest flow into the remaining space: the two file tiles (`lg:col-span-5`) stack on the right, then the bottom rows balance to 12 (`5 + 7`, `6 + 6`). Every tile is a flex column whose visual region grows (`min-h-96 lg:flex-1`) while the copy block stays `shrink-0` at the bottom, so cards in a row stretch to match the tallest and their text lines up.

## Simple even grid

Equal cards in a responsive grid: one column on mobile, two from `sm`, three from `lg`.

```tsx
<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
  <div className="h-72 rounded-2xl border border-border/50 bg-muted/20 dark:bg-muted/15">
    <SecurityLock animated trigger="inViewRepeat" />
  </div>
  <div className="h-72 rounded-2xl border border-border/50 bg-muted/20 dark:bg-muted/15">
    <FilesUpload animated trigger="inViewRepeat" />
  </div>
  <div className="h-72 rounded-2xl border border-border/50 bg-muted/20 dark:bg-muted/15">
    <MediaAudioWaveform animated trigger="inViewRepeat" />
  </div>
</div>
```

**With titles and descriptions:** stack a visual region and copy inside each card so every cell carries its own message.

```tsx
<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
  <div className="rounded-2xl border border-border/50 bg-card">
    <div className="h-64 border-b border-border/50">
      <SecurityLock animated trigger="inViewRepeat" />
    </div>
    <div className="p-5">
      <h3 className="text-sm font-semibold text-card-foreground">
        Secure by default
      </h3>
      <p className="mt-1 text-sm/relaxed text-muted-foreground">
        Encryption and access controls on every account from day
        one.
      </p>
    </div>
  </div>
  <div className="rounded-2xl border border-border/50 bg-card">
    <div className="h-64 border-b border-border/50">
      <FilesUpload animated trigger="inViewRepeat" />
    </div>
    <div className="p-5">
      <h3 className="text-sm font-semibold text-card-foreground">
        Drag, drop, done
      </h3>
      <p className="mt-1 text-sm/relaxed text-muted-foreground">
        Upload files of any size with resumable, reliable transfers.
      </p>
    </div>
  </div>
  <div className="rounded-2xl border border-border/50 bg-card">
    <div className="h-64 border-b border-border/50">
      <MediaAudioWaveform animated trigger="inViewRepeat" />
    </div>
    <div className="p-5">
      <h3 className="text-sm font-semibold text-card-foreground">
        Crystal-clear audio
      </h3>
      <p className="mt-1 text-sm/relaxed text-muted-foreground">
        Stream and scrub recordings with a responsive waveform.
      </p>
    </div>
  </div>
</div>
```

## Hero single visual

One large framed visual, padded and centered, for the top of a page.

```tsx
<div className="mx-auto mt-14 max-w-6xl">
  <div className="rounded-3xl border border-border/60 p-1.5">
    <div className="aspect-video rounded-2xl bg-muted/20 dark:bg-muted/15">
      <GeoGlobe
        animated
        half
        arcs={false}
        spinSpeed={-6}
        startAt="atlantic"
        wrapperClassName="max-w-full"
        markers={[
          { lat: 37.77, lng: -122.42, label: "San Francisco" },
          { lat: 40.71, lng: -74, label: "New York" },
          { lat: 51.51, lng: -0.13, label: "London" },
          { lat: 1.35, lng: 103.82, label: "Singapore" },
          { lat: 35.68, lng: 139.69, label: "Tokyo" },
        ]}
      />
    </div>
  </div>
</div>
```

The outer `p-1.5` ring gives the "framed screenshot" look. `aspect-video` keeps the visual a clean 16:9 as the container width changes.

Most visuals cap their own wrapper with a `max-w-*` so they stay sensibly sized inside normal cards, which means not every visual is ideal for a wide hero out of the box. The library is growing, and some already expose a `wrapperClassName` prop to override that cap. `geo/globe` and `geo/pin-drop`, for example, accept `wrapperClassName="max-w-full"` to drop the max width and stretch into a hero or other large container (as in the example above). Check a visual's reference file or its `.tsx` for a `wrapperClassName` prop before relying on it.

## Customization notes

- **Heights:** `h-72` for compact cells, `h-96` for standard feature cards, `aspect-video` for hero or wide media frames. Match the visual's content density (dense visuals like tables want more height). Reach for `min-h-*` when the container should grow with taller content.
- **No container padding:** leave the frame padding-free. Each visual clips its own content, so it fills to the rounded corners and tucks its edges out of sight when space is tight; padding would shrink it and leave gaps.
- **Edge fade:** pass `mask-t-from-85% mask-r-from-85% mask-b-from-85% mask-l-from-85%` to the visual's `className` for a soft vignette on all four sides (drop any edges you do not want).
- **`fadeOut`:** good when a visual butts against text below it, so its bottom edge melts into the section instead of ending on a hard line.
- **`gradient={false}`:** drop the brand glow when several visuals sit close together, or inside busy bento grids where the glows would stack.
- **`isometric`:** adds a subtle 3D tilt; the visual clips the tilt to its own bounds, so the frame needs nothing extra.
- **Dark mode:** the `dark:bg-muted/15` on the muted frames keeps the surface from washing out in dark mode. Token-colored visuals follow the project's `.dark` class on their own.
- **Triggers:** `trigger="inView"` (the default) plays once on scroll; `trigger="inViewRepeat"` replays each time, which suits grids a visitor scrolls past more than once; `trigger="mount"` fits above-the-fold hero spots.
