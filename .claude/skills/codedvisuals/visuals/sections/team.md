---
name: codedvisuals-sections-team
description: A team section with member cards and roles. The Team visual in the Sections category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Sections / Team

A team section with member cards and roles.

- **Registry name:** `@codedvisuals/sections-team`
- **Import path:** `@/components/codedvisuals/sections/team`

## Install if it is not in the project yet

Look for `components/codedvisuals/sections/team.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/sections-team
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Our team"` |

## Examples

Give the visual a sized container, then drop it in:

```tsx
import SectionsTeam from "@/components/codedvisuals/sections/team";

// default
<SectionsTeam />

// fadeOut
<SectionsTeam fadeOut />

// custom title · default
<SectionsTeam title="Working with us" />

// custom title · isometric
<SectionsTeam title="Our special guests" isometric />

// custom title · isometric · no gradient
<SectionsTeam title="Team from the future" gradient={false} isometric />
```
