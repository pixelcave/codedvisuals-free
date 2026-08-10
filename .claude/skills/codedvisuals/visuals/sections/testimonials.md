---
name: codedvisuals-sections-testimonials
description: A testimonials section with quotes and authors. The Testimonials visual in the Sections category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Sections / Testimonials

A testimonials section with quotes and authors.

- **Registry name:** `@codedvisuals/sections-testimonials`
- **Import path:** `@/components/codedvisuals/sections/testimonials`

## Install if it is not in the project yet

Look for `components/codedvisuals/sections/testimonials.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/sections-testimonials
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `quote` | `string` | `"I loved it the very moment I used it. Would highly recommend."` |

## Examples

Give the visual a sized container, then drop it in:

```tsx
import SectionsTestimonials from "@/components/codedvisuals/sections/testimonials";

// default
<SectionsTestimonials />

// fadeOut
<SectionsTestimonials fadeOut />

// custom quote · default
<SectionsTestimonials quote="An excellent service that exceeded all of my expectations." />

// custom quote · isometric
<SectionsTestimonials
  quote="The attention to detail and support was outstanding."
  isometric
/>

// custom quote · isometric · no gradient
<SectionsTestimonials
  quote="A seamless experience from start to finish, truly impressive."
  gradient={false}
  isometric
/>
```
