---
name: codedvisuals-sections-auth
description: A login section with social buttons, fields, and a sign-in button. The Auth visual in the Sections category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Sections / Auth

A login section with social buttons, fields, and a sign-in button.

- **Registry name:** `@codedvisuals/sections-auth`
- **Import path:** `@/components/codedvisuals/sections/auth`

## Install if it is not in the project yet

Look for `components/codedvisuals/sections/auth.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/sections-auth
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Welcome back"` |

## Examples

Give the visual a sized container, then drop it in:

```tsx
import SectionsAuth from "@/components/codedvisuals/sections/auth";

// default
<SectionsAuth />

// fadeOut
<SectionsAuth fadeOut />

// custom title · default
<SectionsAuth title="Sign in to your account" />

// custom title · isometric
<SectionsAuth title="Create an account" isometric />

// custom title · isometric · no gradient
<SectionsAuth title="Log in to continue" gradient={false} isometric />
```
