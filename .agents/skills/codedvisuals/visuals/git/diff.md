---
name: codedvisuals-git-diff
description: A file diff with added and removed lines, in unified or side by side view, swept line by line as the change counters climb. The Diff visual in the Git category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Git / Diff

A file diff with added and removed lines, in unified or side by side view, swept line by line as the change counters climb.

- **Registry name:** `@codedvisuals/git-diff`
- **Import path:** `@/components/codedvisuals/git/diff`

## Install if it is not in the project yet

Look for `components/codedvisuals/git/diff.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/git-diff
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`), presentation modifiers (`gradient`, `fadeOut`, `isometric`), and `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `view` | `"unified" \| "split"` | `"unified"` |
| `file` | `string` | `"src/checkout/session.ts"` |
| `language` | `string` | `"TS"` |
| `hunk` | `string` | `"@@ -14,7 +14,9 @@"` |
| `startLine` | `number` | `14` |
| `lines` | `DiffLine[]` | - |
| `lineNumbers` | `boolean` | `true` |

## Types

```ts
interface DiffLine {
  type?: DiffLineType;
  indent?: number;
  tokens: DiffToken[];
}

type DiffLineType = "context" | "add" | "remove";

interface DiffToken {
  width: number;
  color: TokenKey;
}

type TokenKey = keyof typeof TOKEN;
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import GitDiff from "@/components/codedvisuals/git/diff";

// default
<GitDiff />

// fadeOut
<GitDiff fadeOut />

// custom copy
<GitDiff
  file="app/Support/Registry.php"
  language="PHP"
  hunk="@@ -82,6 +82,8 @@"
  startLine={82}
/>

// additions only
<GitDiff
  file="resources/js/hooks/use-theme.ts"
  hunk="@@ -3,0 +4,4 @@"
  startLine={3}
  lines={[
    {
      indent: 0,
      tokens: [
        { width: 16, color: "keyword" },
        { width: 24, color: "func" },
      ],
    },
    {
      type: "add",
      indent: 1,
      tokens: [
        { width: 20, color: "variable" },
        { width: 6, color: "punct" },
        { width: 26, color: "string" },
      ],
    },
    {
      type: "add",
      indent: 1,
      tokens: [
        { width: 28, color: "func" },
        { width: 6, color: "punct" },
        { width: 18, color: "prop" },
      ],
    },
    { indent: 0, tokens: [{ width: 10, color: "punct" }] },
  ]}
/>

// split
<GitDiff view="split" />

// split · isometric
<GitDiff view="split" isometric />

// no line numbers
<GitDiff lineNumbers={false} />
```
