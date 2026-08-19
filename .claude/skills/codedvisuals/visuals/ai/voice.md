---
name: codedvisuals-ai-voice
description: A realtime voice assistant orb that cycles through listening, thinking, and speaking states, with pulsing rings, a live equalizer, a status pill, and a transcript, over an ambient glow and particle field. The Voice visual in the AI category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# AI / Voice

A realtime voice assistant orb that cycles through listening, thinking, and speaking states, with pulsing rings, a live equalizer, a status pill, and a transcript, over an ambient glow and particle field.

- **Registry name:** `@codedvisuals/ai-voice`
- **Import path:** `@/components/codedvisuals/ai/voice`

## Install if it is not in the project yet

Look for `components/codedvisuals/ai/voice.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/ai-voice
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `state` | `VoiceState` | - |
| `transcript` | `string` | - |
| `listeningTranscript` | `string` | - |
| `speakingTranscript` | `string` | - |
| `status` | `string` | - |
| `listeningStatus` | `string` | - |
| `thinkingStatus` | `string` | - |
| `speakingStatus` | `string` | - |
| `glow` | `boolean` | `true` |
| `particles` | `boolean` | `true` |

## Types

```ts
type VoiceState = "listening" | "thinking" | "speaking";
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import AiVoice from "@/components/codedvisuals/ai/voice";

// default · cycles states
<AiVoice />

// listening
<AiVoice state="listening" />

// thinking
<AiVoice state="thinking" />

// speaking
<AiVoice state="speaking" />

// hover
<AiVoice hover />

// no glow
<AiVoice glow={false} />

// no particles
<AiVoice particles={false} />

// minimal
<AiVoice glow={false} particles={false} />

// custom copy
<AiVoice
  state="listening"
  transcript="What's on my calendar for the rest of the week?"
  status="Live"
/>

// custom copy per state
<AiVoice
  listeningStatus="Live"
  thinkingStatus="Working"
  speakingStatus="Responding"
  listeningTranscript="Draft a reply to the last email from Emma"
  speakingTranscript="Sent. I kept it short and thanked her for the update."
/>
```
