---
name: codedvisuals-api-logs
description: Service nodes streaming into a log console along connected paths, with severity-colored level chips and rows that tail in. The Logs visual in the API category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# API / Logs

Service nodes streaming into a log console along connected paths, with severity-colored level chips and rows that tail in.

- **Registry name:** `@codedvisuals/api-logs`
- **Import path:** `@/components/codedvisuals/api/logs`

## Install if it is not in the project yet

Look for `components/codedvisuals/api/logs.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/api-logs
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `variant` | `LogsVariant` | `"api"` |
| `service` | `string` | - |
| `lines` | `LogLine[]` | - |
| `sources` | `React.ReactNode[]` | see Default content below |
| `pulse` | `"dot" \| "line"` | `"dot"` |

## Types

```ts
type LogsVariant = "api" | "worker" | "errors";

interface LogLine {
  time: string;
  level: LogLevel;
  message: string;
}

type LogLevel = "info" | "warn" | "error" | "debug" | "success";
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_SOURCES: React.ReactNode[] = [
  <Globe className="size-3.5" strokeWidth={2} />,
  <Server className="size-3.5" strokeWidth={2} />,
  <Database className="size-3.5" strokeWidth={2} />,
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import ApiLogs from "@/components/codedvisuals/api/logs";

// default
<ApiLogs />

// isometric
<ApiLogs isometric />

// custom copy
<ApiLogs
  service="edge-router"
  lines={[
    {
      time: "03:11:02",
      level: "info",
      message: "cold start eu-west",
    },
    {
      time: "03:11:02",
      level: "debug",
      message: "warming isolates",
    },
    {
      time: "03:11:03",
      level: "success",
      message: "ready in 412ms",
    },
    {
      time: "03:11:08",
      level: "info",
      message: "GET /health 200",
    },
  ]}
/>

// line pulse
<ApiLogs pulse="line" />

// worker
<ApiLogs variant="worker" />

// errors
<ApiLogs variant="errors" />

// worker · isometric
<ApiLogs variant="worker" isometric />
```
