# CodedVisuals Free

5 free animated marketing visuals for React, from the [CodedVisuals](https://codedvisuals.com) library. Built with Tailwind CSS v4, shadcn/ui tokens, and Motion.

Each visual is a single self-contained file. Copy it into your project, import it, pass it props. Motion and lucide-react are the only dependencies, and there is nothing to configure.

## What is included

| Visual                        | File                                                      |
| ----------------------------- | --------------------------------------------------------- |
| **Browser · Simple**          | `src/components/codedvisuals/browser/simple.tsx`          |
| **Charts · Sparkline**        | `src/components/codedvisuals/charts/sparkline.tsx`        |
| **Files · Stacked**           | `src/components/codedvisuals/files/stacked.tsx`           |
| **Integrations · Logo Orbit** | `src/components/codedvisuals/integrations/logo-orbit.tsx` |
| **Notifications · Bell**      | `src/components/codedvisuals/notifications/bell.tsx`      |

This repo is also a small demo site that renders every variation of all 5, so you can see what the props do before you pick one.

## Run the demo

```bash
npm install
npm run dev
```

## Use a visual in your own project

1. Copy the visual's `.tsx` file into your project, keeping the same folder shape (or any shape you like, the visuals never import each other).
2. Install Motion, plus lucide-react for the icons some visuals use. Everything else the visuals need (the `cn` helper at `@/lib/utils`, the design tokens) already comes with shadcn/ui:

```bash
npm install motion lucide-react
```

3. Import it and render it:

```tsx
import FilesStacked from "@/components/codedvisuals/files/stacked";

<FilesStacked animated trigger="inView" category="documents" count={7} />;
```

## Requirements

- React 19
- Tailwind CSS v4 with shadcn/ui design tokens (`--background`, `--foreground`, `--primary`, `--muted`, and friends)
- [Motion](https://motion.dev) for the animations
- [lucide-react](https://lucide.dev) for the icons in Browser · Simple, Notifications · Bell, and Charts · Sparkline

Every visual is colored with those semantic tokens, so it picks up your theme and dark mode automatically.

## Animation props

All 5 visuals share the same animation API:

| Prop       | Type                                    | What it does                                  |
| ---------- | --------------------------------------- | --------------------------------------------- |
| `animated` | `boolean`                               | Turns the entrance animation on.              |
| `trigger`  | `"mount" \| "inView" \| "inViewRepeat"` | When the entrance plays. Defaults to `mount`. |

Leave `animated` off and you get a static illustration, which is handy for tests and screenshots.

## Accessibility

Every visual is decorative. It is marked `aria-hidden`, its focusable elements are removed from the tab order, and its controls never take focus, so it stays out of the way of assistive tech.

## The shadcn registry

The rest of the library is paid, and it ships from a private shadcn registry. Grab a license at [codedvisuals.com/pricing](https://codedvisuals.com/pricing) and every visual becomes one CLI command away.

This repo already has that registry wired up in [`components.json`](components.json), so once you own a license you can pull any visual straight into it:

```json
"registries": {
  "@codedvisuals": {
    "url": "https://codedvisuals.com/r/{name}.json",
    "headers": { "Authorization": "Bearer ${CODEDVISUALS_TOKEN}" }
  }
}
```

The registry is private, so the only thing left to do is supply your token. Generate it after purchase from **Settings → Registry token** on [codedvisuals.com](https://codedvisuals.com) (it is shown once, so copy it right away), then copy [`.env.example`](.env.example) to `.env.local` and paste it in:

```bash
CODEDVISUALS_TOKEN=your-token-here
```

`.env.local` is covered by `.gitignore`, so your token stays out of version control.

With that in place, add any visual by its registry name, which is `{category}-{file}`:

```bash
npx shadcn@latest add @codedvisuals/charts-line
```

The CLI writes the file into `src/components/codedvisuals/` and installs Motion and lucide-react if they are missing.

## The full library

The 5 visuals in this repo are free. They are a sample of CodedVisuals, a paid library of 100+ coded visuals and 950+ variations across 30+ categories, every one built exactly like these 5: charts, AI, sections, connections, dashboards, chat, code editors, integrations, and more. It is a one-time purchase, and new visuals land all the time.

- 👉 Browse them all at [codedvisuals.com](https://codedvisuals.com/visuals)
- 👉 Grab a license at [codedvisuals.com/pricing](https://codedvisuals.com/pricing)

## License

These 5 visuals are free to use in personal and commercial projects. You may not resell or redistribute them as a visual or component library of your own. The rest of the library requires a [CodedVisuals license](https://codedvisuals.com/pricing).

The license covers the 5 visual files only. The demo site around them, including its design, layout, and copy, is published so you can preview the visuals and read how they are used, not for reuse in your own projects.

See [LICENSE](LICENSE) for the full terms.
