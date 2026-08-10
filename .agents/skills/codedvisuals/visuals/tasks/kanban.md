---
name: codedvisuals-tasks-kanban
description: A kanban board with columns and draggable cards. The Kanban visual in the Tasks category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Tasks / Kanban

A kanban board with columns and draggable cards.

- **Registry name:** `@codedvisuals/tasks-kanban`
- **Import path:** `@/components/codedvisuals/tasks/kanban`

## Install if it is not in the project yet

Look for `components/codedvisuals/tasks/kanban.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/tasks-kanban
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Kanban board"` |
| `meta` | `string` | - |
| `columns` | `KanbanColumn[]` | see Default content below |

## Types

```ts
interface KanbanColumn {
  id: string;
  title: string;
  dot?: ColumnDot;
  cards: KanbanCard[];
}

type ColumnDot = "neutral" | "active" | "success" | "warning" | "destructive";

interface KanbanCard {
  title: string;
  comments?: number;
  attachments?: number;
}
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_COLUMNS: KanbanColumn[] = [
  {
    id: "backlog",
    title: "Backlog",
    dot: "neutral",
    cards: [
      { title: "Audit empty states", comments: 4 },
      { title: "Fix billing tax calc", attachments: 2 },
      { title: "Add CSV export" },
    ],
  },
  {
    id: "progress",
    title: "Progress",
    dot: "active",
    cards: [
      { title: "Notification center v2", comments: 7 },
      { title: "Refactor billing module" },
    ],
  },
  {
    id: "done",
    title: "Done",
    dot: "success",
    cards: [
      { title: "Onboarding spec v3", comments: 12 },
      { title: "Hotfix · login redirect" },
    ],
  },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import TasksKanban from "@/components/codedvisuals/tasks/kanban";

// default
<TasksKanban />

// fadeOut
<TasksKanban fadeOut />

// content pipeline · custom
<TasksKanban
  title="Content pipeline"
  meta="Q1 2026"
  columns={[
    {
      id: "drafts",
      title: "Drafts",
      dot: "neutral",
      cards: [
        { title: "How we designed our pricing page" },
        {
          title: "10 patterns we use for empty states",
          comments: 3,
        },
        { title: "Behind the scenes · v3 launch" },
      ],
    },
    {
      id: "review",
      title: "In review",
      dot: "active",
      cards: [
        { title: "Why we rewrote our onboarding", comments: 5 },
        { title: "Hiring our first designer", attachments: 1 },
      ],
    },
    {
      id: "published",
      title: "Published",
      dot: "success",
      cards: [
        { title: "Launching CodedVisuals", comments: 24 },
        { title: "From 0 to 1k stars" },
      ],
    },
  ]}
/>

// hiring pipeline · custom
<TasksKanban
  title="Hiring · Engineering"
  meta="6 open roles"
  columns={[
    {
      id: "applied",
      title: "Applied",
      dot: "neutral",
      cards: [
        { title: "Maya Patel · Senior Frontend" },
        { title: "Tomás Ruiz · Full-stack", attachments: 2 },
        { title: "Lena Köhler · Design Engineer" },
        { title: "Owen Hart · Backend" },
      ],
    },
    {
      id: "interviewing",
      title: "Interviewing",
      dot: "active",
      cards: [
        { title: "Priya Shah · Onsite Thu", comments: 4 },
        { title: "Daniel Cho · Tech screen" },
      ],
    },
    {
      id: "offer",
      title: "Offer sent",
      dot: "success",
      cards: [{ title: "Iris Müller · Senior Frontend", comments: 8 }],
    },
  ]}
/>
```
