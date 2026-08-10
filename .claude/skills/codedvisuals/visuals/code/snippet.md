---
name: codedvisuals-code-snippet
description: A copyable code snippet card with a language label. The Snippet visual in the Code category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Code / Snippet

A copyable code snippet card with a language label.

- **Registry name:** `@codedvisuals/code-snippet`
- **Import path:** `@/components/codedvisuals/code/snippet`

## Install if it is not in the project yet

Look for `components/codedvisuals/code/snippet.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/code-snippet
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `language` | `SnippetLanguage` | `"tsx"` |
| `filename` | `string` | - |
| `lines` | `SnippetLine[]` | - |
| `lineNumbers` | `boolean` | `true` |
| `caret` | `boolean` | `true` |

## Types

```ts
type SnippetLanguage = "tsx" | "bash" | "json" | "css" | "sql" | "yaml" | "md";

interface SnippetLine {
  indent: number;
  tokens: SnippetToken[];
  diff?: "add" | "remove";
  highlight?: boolean;
}

interface SnippetToken {
  width: number;
  color: TokenKey;
}

type TokenKey = keyof typeof TOKEN;
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import CodeSnippet from "@/components/codedvisuals/code/snippet";

// default
<CodeSnippet />

// isometric
<CodeSnippet isometric />

// no line numbers
<CodeSnippet lineNumbers={false} />

// highlighted line
<CodeSnippet
  lines={[
    {
      indent: 0,
      tokens: [
        { width: 18, color: "keyword" },
        { width: 26, color: "variable" },
        { width: 10, color: "punct" },
        { width: 32, color: "string" },
      ],
    },
    {
      indent: 0,
      tokens: [
        { width: 14, color: "keyword" },
        { width: 24, color: "func" },
        { width: 12, color: "type" },
        { width: 10, color: "punct" },
      ],
    },
    {
      indent: 1,
      tokens: [
        { width: 14, color: "keyword" },
        { width: 18, color: "punct" },
        { width: 22, color: "tag" },
        { width: 20, color: "prop" },
        { width: 16, color: "string" },
      ],
      highlight: true,
    },
    { indent: 0, tokens: [{ width: 10, color: "punct" }] },
  ]}
/>

// diff
<CodeSnippet
  lines={[
    {
      indent: 0,
      tokens: [
        { width: 18, color: "keyword" },
        { width: 26, color: "variable" },
        { width: 10, color: "punct" },
        { width: 32, color: "string" },
      ],
    },
    {
      indent: 0,
      tokens: [
        { width: 14, color: "keyword" },
        { width: 24, color: "func" },
        { width: 12, color: "type" },
      ],
      diff: "remove",
    },
    {
      indent: 0,
      tokens: [
        { width: 14, color: "keyword" },
        { width: 28, color: "func" },
        { width: 16, color: "type" },
        { width: 10, color: "punct" },
      ],
      diff: "add",
    },
    { indent: 0, tokens: [{ width: 10, color: "punct" }] },
  ]}
/>

// bash
<CodeSnippet language="bash" />

// json
<CodeSnippet language="json" />

// css
<CodeSnippet language="css" />

// sql
<CodeSnippet language="sql" />

// yaml
<CodeSnippet language="yaml" />
```
