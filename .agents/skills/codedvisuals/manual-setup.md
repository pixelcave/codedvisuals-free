---
name: codedvisuals-manual-setup
description: Prepare a React + Tailwind CSS v4 + TypeScript project (without shadcn/ui) to use CodedVisuals visual compositions. Use when adding CodedVisuals to a project that does not already have shadcn/ui tokens, the cn() helper, or the @ import alias configured.
---

# CodedVisuals manual setup

CodedVisuals compositions are self-contained React components that expect four things from the host project: the `clsx` + `tailwind-merge` utilities, a `cn()` helper at `@/lib/utils`, the shadcn/ui design-token CSS variables, and an `@` import alias pointing at the source root. On a shadcn/ui project these already exist. On a plain React + Tailwind CSS v4 + TypeScript project, set them up with the steps below, then the user can copy any composition file and it will work unchanged.

This skill assumes the host project already uses React, Tailwind CSS v4, and TypeScript. It only adds the shadcn/ui pieces above, it does not install or configure React, Tailwind CSS v4, or TypeScript. The Step 3 token mapping uses Tailwind v4 syntax (`@theme inline`, `@custom-variant`); if the project is on Tailwind v3 or is JavaScript-only, stop and tell the user before making changes.

Work through the steps in order. Detect what already exists before changing anything, and skip any step that is already satisfied.

## Step 1: Install dependencies

Install Motion (animations), lucide-react (icons), and the class utilities:

```bash
npm install motion lucide-react tailwind-merge clsx
```

Compositions import their icons from `lucide-react`. If the project already uses a different icon library (for example Radix Icons via `"iconLibrary": "radix"` in `components.json`), lucide-react will not be present, so still install it. It can live alongside the existing icon set.

Use the project's package manager if it is not npm (`pnpm add`, `yarn add`, `bun add`).

## Step 2: Create the cn() helper

Compositions import `cn` from `@/lib/utils`. Create `lib/utils.ts` at the source root's `lib/` folder.

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## Step 3: Add the shadcn/ui design tokens

Compositions color brand surfaces with shadcn/ui semantic tokens. Add the default neutral token set to the project's global stylesheet (the file that imports Tailwind). If a `:root` / `.dark` token block already exists, leave it; the user's existing theme will be used.

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.87 0 0);
  --chart-2: oklch(0.556 0 0);
  --chart-3: oklch(0.439 0 0);
  --chart-4: oklch(0.371 0 0);
  --chart-5: oklch(0.269 0 0);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.87 0 0);
  --chart-2: oklch(0.556 0 0);
  --chart-3: oklch(0.439 0 0);
  --chart-4: oklch(0.371 0 0);
  --chart-5: oklch(0.269 0 0);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}
```

Then map the tokens to Tailwind color utilities (Tailwind v4) so classes like `bg-card` and `text-muted-foreground` resolve, and wire dark mode to the `.dark` class:

```css
@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}
```

## Step 4: Configure the @ import alias

Compositions import `@/lib/utils`, and the user imports each composition as `@/components/codedvisuals/<category>/<name>`. The `@` alias must point at the project's source root (the folder containing `lib` and `components`). Set it in BOTH the TypeScript config and the bundler. Copied composition files belong under `components/codedvisuals/<category>/` at that same root, so imports like `@/components/codedvisuals/charts/bar` resolve through the same alias.

`tsconfig.json` (adjust `./src` to the project's actual source root):

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Bundler alias, for example Vite:

```ts
import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

Important: point the alias at whatever the project's real source root is, not blindly `./src`. Inspect the project structure first. For example, a Laravel project maps `@/*` to `./resources/js/*`.

## Step 5: Verify

If the user has already added visual compositions to the project in `components/codedvisuals/...` folder, render one inside a sized container, and confirm it builds with no unresolved `@/lib/utils` import and that brand colors and dark mode respond to the tokens. If the import fails, the `@` alias is wrong. If colors look off, the token variables or the `@theme` mapping are missing.
