---
name: codedvisuals-media-audio-waveform
description: An audio player with an animated waveform and controls. The Audio Waveform visual in the Media category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Media / Audio Waveform

An audio player with an animated waveform and controls.

- **Registry name:** `@codedvisuals/media-audio-waveform`
- **Import path:** `@/components/codedvisuals/media/audio-waveform`

## Install if it is not in the project yet

Look for `components/codedvisuals/media/audio-waveform.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/media-audio-waveform
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `icon` | `React.ElementType` | - |
| `title` | `string` | `"Midnight in Lisbon"` |
| `subtitle` | `string` | `"Léo Marques · Single"` |
| `current` | `string` | `"1:42"` |
| `duration` | `string` | `"3:28"` |
| `progress` | `number` | `48` |
| `state` | `"play" \| "pause"` | `"play"` |
| `hint` | `string` | - |
| `meta` | `string` | `"Hi-Fi · 320kbps"` |
| `bars` | `number` | `36` |

## Examples

Give the visual a sized container, then drop it in:

```tsx
import MediaAudioWaveform from "@/components/codedvisuals/media/audio-waveform";
import { Headphones, Mic } from "lucide-react";

// default
<MediaAudioWaveform />

// isometric
<MediaAudioWaveform isometric />

// custom copy
<MediaAudioWaveform
  title="Sunset drive"
  subtitle="Ada Lovelace · EP"
  current="2:14"
  duration="4:08"
  progress={54}
/>

// pause state
<MediaAudioWaveform state="pause" />

// custom meta
<MediaAudioWaveform meta="Lossless · 24-bit" />

// voice note · custom icon · custom meta
<MediaAudioWaveform
  icon={Mic}
  title="Voice memo · Tuesday"
  subtitle="Recording"
  current="0:18"
  duration="0:42"
  progress={42}
  meta="Mono · 96kbps"
/>

// podcast · pause · isometric
<MediaAudioWaveform
  isometric
  state="pause"
  icon={Headphones}
  title="On building in public"
  subtitle="Highlight · 10:35"
  current="2:03"
  duration="10:35"
  progress={20}
  meta="Episode 47"
/>

// bars · 26
<MediaAudioWaveform bars={26} />

// bars · 42
<MediaAudioWaveform bars={42} />

// bars · 56
<MediaAudioWaveform bars={56} />
```
