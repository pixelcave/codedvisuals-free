---
name: codedvisuals-search-command-palette
description: A command palette with a typed query, grouped commands, keyboard hints, and a selection that walks the list. The Command Palette visual in the Search category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Search / Command Palette

A command palette with a typed query, grouped commands, keyboard hints, and a selection that walks the list.

- **Registry name:** `@codedvisuals/search-command-palette`
- **Import path:** `@/components/codedvisuals/search/command-palette`

## Install if it is not in the project yet

Look for `components/codedvisuals/search/command-palette.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/search-command-palette
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`), presentation modifiers (`gradient`, `fadeOut`, `isometric`), and `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `query` | `string` | `"new"` |
| `groups` | `CommandGroup[]` | see Default content below |
| `caret` | `boolean` | `true` |

## Types

```ts
interface CommandGroup {
  label: string;
  items: CommandItem[];
}

interface CommandItem {
  icon?: React.ReactNode;
  label: string;
  shortcut?: string[];
}
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_GROUPS: CommandGroup[] = [
  {
    label: "Actions",
    items: [
      {
        icon: <Plus className="size-3" strokeWidth={2.5} />,
        label: "New project",
        shortcut: ["⌘", "N"],
      },
      {
        icon: <FileText className="size-3" strokeWidth={2.5} />,
        label: "New document",
        shortcut: ["⌘", "D"],
      },
      {
        icon: <UserPlus className="size-3" strokeWidth={2.5} />,
        label: "Invite teammate",
        shortcut: ["⌘", "I"],
      },
    ],
  },
  {
    label: "Recent",
    items: [
      {
        icon: <Rocket className="size-3" strokeWidth={2.5} />,
        label: "Launch checklist",
      },
      {
        icon: <Settings className="size-3" strokeWidth={2.5} />,
        label: "Workspace settings",
      },
    ],
  },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import SearchCommandPalette from "@/components/codedvisuals/search/command-palette";

// default
<SearchCommandPalette />

// fadeOut
<SearchCommandPalette fadeOut />

// no caret
<SearchCommandPalette caret={false} />
```
