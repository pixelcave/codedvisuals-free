---
name: codedvisuals-sections-contact
description: A contact section with a form and details. The Contact visual in the Sections category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Sections / Contact

A contact section with a form and details.

- **Registry name:** `@codedvisuals/sections-contact`
- **Import path:** `@/components/codedvisuals/sections/contact`

## Install if it is not in the project yet

Look for `components/codedvisuals/sections/contact.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/sections-contact
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Get in Touch"` |

## Examples

Give the visual a sized container, then drop it in:

```tsx
import SectionsContact from "@/components/codedvisuals/sections/contact";

// default
<SectionsContact />

// fadeOut
<SectionsContact fadeOut />

// custom title · default
<SectionsContact title="Contact us" />

// custom title · isometric
<SectionsContact title="We reply within 24 hours" isometric />

// custom title · isometric · no gradient
<SectionsContact title="We really care about your feedback" gradient={false} isometric />
```
