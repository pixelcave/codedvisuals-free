---
name: codedvisuals-media-video-player
description: A video player frame with controls and a progress bar. The Video Player visual in the Media category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Media / Video Player

A video player frame with controls and a progress bar.

- **Registry name:** `@codedvisuals/media-video-player`
- **Import path:** `@/components/codedvisuals/media/video-player`

## Install if it is not in the project yet

Look for `components/codedvisuals/media/video-player.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/media-video-player
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `variant` | `VideoVariant` | `"landscape"` |
| `image` | `string` | - |
| `title` | `string` | `"Mountain skyline · 4K"` |
| `duration` | `string` | `"3:42"` |
| `current` | `string` | `"1:24"` |
| `progress` | `number` | `38` |
| `state` | `"play" \| "pause"` | `"play"` |
| `showInfo` | `boolean` | `true` |
| `showPlayButton` | `boolean` | `true` |

## Types

```ts
type VideoVariant = "landscape" | "tutorial" | "podcast" | "livestream";
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import MediaVideoPlayer from "@/components/codedvisuals/media/video-player";

// default
<MediaVideoPlayer />

// isometric
<MediaVideoPlayer isometric />

// custom copy
<MediaVideoPlayer
  title="Onboarding · 01 Setup"
  current="2:08"
  duration="5:00"
  progress={42}
/>

// pause state
<MediaVideoPlayer state="pause" />

// no play button
<MediaVideoPlayer showPlayButton={false} />

// no info chip
<MediaVideoPlayer showInfo={false} />

// minimal · no chrome
<MediaVideoPlayer showInfo={false} showPlayButton={false} />

// variant · landscape
<MediaVideoPlayer variant="landscape" />

// variant · tutorial
<MediaVideoPlayer
  variant="tutorial"
  title="Getting started in 5 minutes"
  current="2:08"
  duration="5:00"
  progress={42}
/>

// variant · podcast
<MediaVideoPlayer
  variant="podcast"
  title="Episode 24 · Building in public"
  current="12:30"
  duration="48:15"
  progress={26}
/>
```
