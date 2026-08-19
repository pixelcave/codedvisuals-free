---
name: codedvisuals-git-branch-graph
description: A commit rail where feature branches fork off, run their own commits, and merge back, with pulses traveling every path. The Branch Graph visual in the Git category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Git / Branch Graph

A commit rail where feature branches fork off, run their own commits, and merge back, with pulses traveling every path.

- **Registry name:** `@codedvisuals/git-branch-graph`
- **Import path:** `@/components/codedvisuals/git/branch-graph`

## Install if it is not in the project yet

Look for `components/codedvisuals/git/branch-graph.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/git-branch-graph
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`), the presentation modifier (`isometric`), and `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `base` | `string` | `"main"` |
| `commits` | `number` | `7` |
| `branches` | `Branch[]` | - |
| `head` | `string` | `"HEAD"` |
| `pulse` | `"dot" \| "line"` | `"dot"` |

## Types

```ts
interface Branch {
  name: string;
  from: number;
  commits: number;
  merge?: boolean;
  color?: string;
  pulseColor?: string;
}
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import GitBranchGraph from "@/components/codedvisuals/git/branch-graph";

// default
<GitBranchGraph />

// isometric
<GitBranchGraph isometric />

// single branch
<GitBranchGraph
  commits={6}
  branches={[
    {
      name: "feat/billing",
      from: 1,
      commits: 3,
      merge: true,
      color: "text-sky-500",
      pulseColor: "text-sky-800 dark:text-sky-200",
    },
  ]}
/>

// release flow · custom copy
<GitBranchGraph
  base="production"
  head="v2.4"
  commits={7}
  branches={[
    {
      name: "release/2.4",
      from: 0,
      commits: 3,
      merge: true,
      color: "text-emerald-500",
      pulseColor: "text-emerald-800 dark:text-emerald-200",
    },
    {
      name: "hotfix/session",
      from: 4,
      commits: 2,
      color: "text-rose-500",
      pulseColor: "text-rose-800 dark:text-rose-200",
    },
  ]}
/>

// release flow · isometric
<GitBranchGraph
  base="production"
  head="v2.4"
  pulse="line"
  isometric
  branches={[
    {
      name: "release/2.4",
      from: 0,
      commits: 3,
      merge: true,
      color: "text-emerald-500",
      pulseColor: "text-emerald-800 dark:text-emerald-200",
    },
    {
      name: "hotfix/session",
      from: 4,
      commits: 2,
      color: "text-rose-500",
      pulseColor: "text-rose-800 dark:text-rose-200",
    },
  ]}
/>

// short history
<GitBranchGraph
  commits={5}
  head="main"
  branches={[
    {
      name: "docs/readme",
      from: 1,
      commits: 2,
      merge: true,
      color: "text-violet-500",
      pulseColor: "text-violet-800 dark:text-violet-200",
    },
  ]}
/>

// line pulse
<GitBranchGraph pulse="line" />
```
