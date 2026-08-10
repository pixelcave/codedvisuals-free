---
name: codedvisuals-code-editor
description: A code editor mockup with syntax highlighting and a file tab. The Editor visual in the Code category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Code / Editor

A code editor mockup with syntax highlighting and a file tab.

- **Registry name:** `@codedvisuals/code-editor`
- **Import path:** `@/components/codedvisuals/code/editor`

## Install if it is not in the project yet

Look for `components/codedvisuals/code/editor.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/code-editor
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `language` | `EditorLanguage` | `"tsx"` |
| `tabs` | `EditorTab[]` | - |
| `lines` | `CodeLine[]` | - |
| `lineNumbers` | `boolean` | `true` |
| `caret` | `boolean` | `true` |

## Types

```ts
type EditorLanguage = "tsx" | "js" | "py" | "php" | "html" | "css" | "go";

interface EditorTab {
  name: string;
  active?: boolean;
}

type CodeLine = {
  indent: number;
  tokens: CodeToken[];
  blank?: boolean;
  diff?: "add" | "remove";
  highlight?: boolean;
};

interface CodeToken {
  width: number;
  color: TokenKey;
}

type TokenKey = keyof typeof TOKEN;
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import CodeEditor from "@/components/codedvisuals/code/editor";

// default
<CodeEditor />

// fadeOut
<CodeEditor fadeOut />

// no line numbers
<CodeEditor lineNumbers={false} />

// no caret
<CodeEditor caret={false} />

// highlighted line
<CodeEditor
  lines={[
    {
      indent: 0,
      tokens: [
        { width: 18, color: "keyword" },
        { width: 24, color: "variable" },
        { width: 10, color: "punct" },
        { width: 32, color: "string" },
      ],
    },
    {
      indent: 0,
      tokens: [
        { width: 18, color: "keyword" },
        { width: 30, color: "func" },
        { width: 24, color: "variable" },
        { width: 14, color: "type" },
      ],
    },
    { indent: 0, tokens: [], blank: true },
    {
      indent: 0,
      tokens: [
        { width: 14, color: "keyword" },
        { width: 22, color: "keyword" },
        { width: 32, color: "func" },
        { width: 10, color: "punct" },
      ],
      highlight: true,
    },
    {
      indent: 1,
      tokens: [
        { width: 12, color: "keyword" },
        { width: 14, color: "punct" },
        { width: 18, color: "tag" },
        { width: 22, color: "prop" },
      ],
    },
    { indent: 0, tokens: [{ width: 10, color: "punct" }] },
  ]}
/>

// diff
<CodeEditor
  lines={[
    {
      indent: 0,
      tokens: [
        { width: 18, color: "keyword" },
        { width: 24, color: "variable" },
        { width: 10, color: "punct" },
        { width: 32, color: "string" },
      ],
    },
    { indent: 0, tokens: [], blank: true },
    {
      indent: 0,
      tokens: [
        { width: 14, color: "keyword" },
        { width: 22, color: "func" },
        { width: 16, color: "type" },
      ],
      diff: "remove",
    },
    {
      indent: 0,
      tokens: [
        { width: 14, color: "keyword" },
        { width: 28, color: "func" },
        { width: 20, color: "type" },
        { width: 10, color: "punct" },
      ],
      diff: "add",
    },
    {
      indent: 1,
      tokens: [
        { width: 14, color: "keyword" },
        { width: 22, color: "variable" },
      ],
    },
    { indent: 0, tokens: [{ width: 10, color: "punct" }] },
  ]}
/>

// js
<CodeEditor language="js" />

// py
<CodeEditor language="py" />

// php
<CodeEditor language="php" />

// html
<CodeEditor language="html" />
```
