---
name: codedvisuals-automations-workflow-builder
description: A workflow where a trigger runs into a condition that branches to one of two actions, with a run pulse lighting the path taken. The Workflow Builder visual in the Automations category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Automations / Workflow Builder

A workflow where a trigger runs into a condition that branches to one of two actions, with a run pulse lighting the path taken.

- **Registry name:** `@codedvisuals/automations-workflow-builder`
- **Import path:** `@/components/codedvisuals/automations/workflow-builder`

## Install if it is not in the project yet

Look for `components/codedvisuals/automations/workflow-builder.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/automations-workflow-builder
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`), the presentation modifier (`isometric`), and `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `event` | `WorkflowStep` | see Default content below |
| `condition` | `WorkflowStep` | see Default content below |
| `actions` | `[WorkflowStep, WorkflowStep]` | see Default content below |
| `branches` | `[string, string]` | see Default content below |

## Types

```ts
interface WorkflowStep {
  label: string;
  title: string;
  icon?: React.ReactNode;
}
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_EVENT: WorkflowStep = {
  label: "Trigger",
  title: "New signup",
  icon: <UserPlus />,
};

const DEFAULT_CONDITION: WorkflowStep = {
  label: "Condition",
  title: "Plan is Pro",
  icon: <GitFork />,
};

const DEFAULT_ACTIONS: [WorkflowStep, WorkflowStep] = [
  {
    label: "Action",
    title: "Welcome email",
    icon: <Mail />,
  },
  {
    label: "Action",
    title: "Add to nurture list",
    icon: <ListPlus />,
  },
];

const DEFAULT_BRANCHES: [string, string] = ["Yes", "No"];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import AutomationsWorkflowBuilder from "@/components/codedvisuals/automations/workflow-builder";
import { CreditCard, Inbox, MessageSquare, RotateCcw, Tag, TriangleAlert, UserCheck, Webhook } from "lucide-react";

// default
<AutomationsWorkflowBuilder />

// hover
<AutomationsWorkflowBuilder hover />

// billing · custom copy
<AutomationsWorkflowBuilder
  event={{
    label: "Webhook",
    title: "Payment failed",
    icon: <CreditCard />,
  }}
  condition={{
    label: "Condition",
    title: "Amount over $500",
    icon: <TriangleAlert />,
  }}
  actions={[
    {
      label: "Slack",
      title: "Alert #finance",
      icon: <MessageSquare />,
    },
    {
      label: "Billing",
      title: "Retry in 3 days",
      icon: <RotateCcw />,
    },
  ]}
/>

// support · isometric · custom copy
<AutomationsWorkflowBuilder
  isometric
  branches={["Urgent", "Normal"]}
  event={{ label: "Trigger", title: "New ticket", icon: <Inbox /> }}
  condition={{
    label: "Router",
    title: "Check priority",
    icon: <Webhook />,
  }}
  actions={[
    {
      label: "Action",
      title: "Assign on-call",
      icon: <UserCheck />,
    },
    { label: "Action", title: "Tag and queue", icon: <Tag /> },
  ]}
/>

// minimal · no icons
<AutomationsWorkflowBuilder
  event={{ label: "Trigger", title: "New signup" }}
  condition={{ label: "Condition", title: "Plan is Pro" }}
  actions={[
    { label: "Action", title: "Welcome email" },
    { label: "Action", title: "Add to nurture list" },
  ]}
/>
```
