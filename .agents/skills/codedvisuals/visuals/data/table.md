---
name: codedvisuals-data-table
description: A data table with sortable columns, rows, and status pills. The Table visual in the Data category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Data / Table

A data table with sortable columns, rows, and status pills.

- **Registry name:** `@codedvisuals/data-table`
- **Import path:** `@/components/codedvisuals/data/table`

## Install if it is not in the project yet

Look for `components/codedvisuals/data/table.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/data-table
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Members"` |
| `columns` | `Column[]` | see Default content below |
| `items` | `TableRow[]` | see Default content below |

## Types

```ts
interface Column {
  label: string;
  key: string;
  avatar?: boolean;
  badge?: boolean;
  sort?: boolean;
}

type TableRow = Record<string, string>;
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_COLUMNS: Column[] = [
  { label: "Name", key: "name", avatar: true },
  { label: "Status", key: "status", badge: true },
  { label: "Role", key: "role" },
  { label: "Joined", key: "joined", sort: true },
];

const DEFAULT_ITEMS: TableRow[] = [
  {
    name: "Sarah Chen",
    initials: "SC",
    subtitle: "sarah@acme.io",
    status: "active",
    role: "Admin",
    joined: "Jan 12",
  },
  {
    name: "Alex Park",
    initials: "AP",
    subtitle: "alex@acme.io",
    status: "active",
    role: "Developer",
    joined: "Mar 4",
  },
  {
    name: "Mia Lee",
    initials: "ML",
    subtitle: "mia@acme.io",
    status: "pending",
    role: "Designer",
    joined: "Apr 19",
  },
  {
    name: "Ben Novak",
    initials: "BN",
    subtitle: "ben@acme.io",
    status: "active",
    role: "Developer",
    joined: "Jun 1",
  },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import DataTable from "@/components/codedvisuals/data/table";

// default
<DataTable />

// fadeOut
<DataTable fadeOut />

// custom data · orders
<DataTable
  title="Orders"
  columns={[
    { label: "Customer", key: "name", avatar: true },
    { label: "Amount", key: "amount" },
    { label: "Status", key: "status", badge: true },
    { label: "Date", key: "date", sort: true },
  ]}
  items={[
    {
      name: "Emma Wilson",
      initials: "EW",
      subtitle: "#ORD-4291",
      amount: "$249.00",
      status: "active",
      date: "May 12",
    },
    {
      name: "Ryan Torres",
      initials: "RT",
      subtitle: "#ORD-4290",
      amount: "$89.50",
      status: "pending",
      date: "May 11",
    },
    {
      name: "Lisa Chang",
      initials: "LC",
      subtitle: "#ORD-4289",
      amount: "$512.00",
      status: "active",
      date: "May 10",
    },
  ]}
/>

// custom data · projects · isometric
<DataTable
  isometric
  gradient={false}
  title="Projects"
  columns={[
    { label: "Project", key: "name", avatar: true },
    { label: "Status", key: "status", badge: true },
    { label: "Tasks", key: "tasks" },
    { label: "Due", key: "due", sort: true },
  ]}
  items={[
    {
      name: "Website Redesign",
      initials: "WR",
      subtitle: "Marketing",
      status: "active",
      tasks: "12/20",
      due: "Jun 15",
    },
    {
      name: "Mobile App v2",
      initials: "MA",
      subtitle: "Engineering",
      status: "pending",
      tasks: "8/34",
      due: "Jul 1",
    },
    {
      name: "Brand Guidelines",
      initials: "BG",
      subtitle: "Design",
      status: "active",
      tasks: "18/18",
      due: "May 30",
    },
    {
      name: "API Migration",
      initials: "AM",
      subtitle: "Backend",
      status: "inactive",
      tasks: "5/12",
      due: "Jun 22",
    },
  ]}
/>
```
