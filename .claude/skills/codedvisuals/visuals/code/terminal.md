---
name: codedvisuals-code-terminal
description: A terminal window with a typing command and output. The Terminal visual in the Code category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Code / Terminal

A terminal window with a typing command and output.

- **Registry name:** `@codedvisuals/code-terminal`
- **Import path:** `@/components/codedvisuals/code/terminal`

## Install if it is not in the project yet

Look for `components/codedvisuals/code/terminal.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/code-terminal
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`), presentation modifiers (`gradient`, `fadeOut`, `isometric`), and `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `variant` | `TerminalVariant` | `"install"` |
| `title` | `string` | - |
| `lines` | `TerminalLine[]` | - |
| `prompt` | `string` | `"$"` |
| `caret` | `boolean` | `true` |

## Types

```ts
type TerminalVariant = "install" | "deploy" | "test";

interface TerminalLine {
  kind: LineKind;
  text: string;
  prompt?: string;
  highlight?: boolean;
}

type LineKind =
  "command" | "output" | "success" | "error" | "warning" | "info" | "muted";
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import CodeTerminal from "@/components/codedvisuals/code/terminal";

// default
<CodeTerminal />

// fadeOut
<CodeTerminal fadeOut />

// no caret
<CodeTerminal caret={false} />

// custom prompt
<CodeTerminal prompt={">"} />

// highlighted line
<CodeTerminal
  title="~/project · git"
  lines={[
    { kind: "command", text: "git status" },
    { kind: "muted", text: "On branch main" },
    { kind: "info", text: "Changes to be committed:" },
    {
      kind: "success",
      text: "  modified:  README.md",
      highlight: true,
    },
    { kind: "success", text: "  new file:  hello.txt" },
    { kind: "command", text: "" },
  ]}
/>

// deploy
<CodeTerminal variant="deploy" />

// test
<CodeTerminal variant="test" />

// deploy · isometric
<CodeTerminal variant="deploy" isometric />
```
