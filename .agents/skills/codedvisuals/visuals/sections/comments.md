---
name: codedvisuals-sections-comments
description: A comments thread with avatars, replies, and votes. The Comments visual in the Sections category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Sections / Comments

A comments thread with avatars, replies, and votes.

- **Registry name:** `@codedvisuals/sections-comments`
- **Import path:** `@/components/codedvisuals/sections/comments`

## Install if it is not in the project yet

Look for `components/codedvisuals/sections/comments.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/sections-comments
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Comments"` |
| `count` | `number` | `12` |

## Examples

Give the visual a sized container, then drop it in:

```tsx
import SectionsComments from "@/components/codedvisuals/sections/comments";

// default
<SectionsComments />

// fadeOut
<SectionsComments fadeOut />

// custom title · custom count
<SectionsComments title="Discussion" count={48} />

// custom title · isometric
<SectionsComments title="Replies" count={7} isometric />

// custom title · isometric · no gradient
<SectionsComments
  title="Feedback"
  count={120}
  gradient={false}
  isometric
/>
```
