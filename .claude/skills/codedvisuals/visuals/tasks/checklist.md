---
name: codedvisuals-tasks-checklist
description: A checklist with items completing one by one. The Checklist visual in the Tasks category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Tasks / Checklist

A checklist with items completing one by one.

- **Registry name:** `@codedvisuals/tasks-checklist`
- **Import path:** `@/components/codedvisuals/tasks/checklist`

## Install if it is not in the project yet

Look for `components/codedvisuals/tasks/checklist.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/tasks-checklist
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Today's tasks"` |
| `items` | `TaskItem[]` | see Default content below |

## Types

```ts
interface TaskItem {
  title: string;
  detail?: string;
  done?: boolean;
  priority?: Priority;
}

type Priority = "low" | "med" | "high";
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_ITEMS: TaskItem[] = [
  {
    title: "Review onboarding spec",
    detail: "v3 · final pass",
    done: true,
    priority: "high",
  },
  {
    title: "Reply to design feedback",
    detail: "Sarah · #design-review",
    done: true,
    priority: "med",
  },
  {
    title: "Ship notification center",
    detail: "Deploy v2.4 · production",
    done: false,
    priority: "high",
  },
  {
    title: "Draft Q2 OKRs",
    detail: "Due Friday",
    done: false,
    priority: "med",
  },
  {
    title: "Refactor billing module",
    detail: "Split into 3 PRs",
    done: false,
    priority: "low",
  },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import TasksChecklist from "@/components/codedvisuals/tasks/checklist";

// default
<TasksChecklist />

// fadeOut
<TasksChecklist fadeOut />

// all done · custom items
<TasksChecklist
  title="Sprint wrap-up"
  items={[
    {
      title: "Ship notification center",
      detail: "Deployed v2.4",
      done: true,
      priority: "high",
    },
    {
      title: "Review onboarding spec",
      detail: "v3 · merged",
      done: true,
      priority: "med",
    },
    {
      title: "Update changelog",
      detail: "Published",
      done: true,
      priority: "low",
    },
    {
      title: "Reply to design feedback",
      done: true,
      priority: "low",
    },
  ]}
/>

// all pending · custom items
<TasksChecklist
  title="This week"
  items={[
    { title: "Draft Q2 OKRs", detail: "Due Friday" },
    {
      title: "Refactor billing module",
      detail: "Split into 3 PRs",
    },
    {
      title: "Sync with design on v3 tokens",
      detail: "Thursday · 30 min",
    },
    {
      title: "Audit onboarding metrics",
      detail: "Drop-off in step 2",
    },
  ]}
/>
```
