---
name: codedvisuals-status-uptime-bar
description: An uptime bar showing daily operational status. The Uptime Bar visual in the Status category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Status / Uptime Bar

An uptime bar showing daily operational status.

- **Registry name:** `@codedvisuals/status-uptime-bar`
- **Import path:** `@/components/codedvisuals/status/uptime-bar`

## Install if it is not in the project yet

Look for `components/codedvisuals/status/uptime-bar.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/status-uptime-bar
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Uptime"` |
| `days` | `number` | `60` |
| `uptime` | `string` | - |
| `incidents` | `number[]` | see Default content below |
| `outages` | `number[]` | see Default content below |
| `status` | `Status` | - |
| `showLegend` | `boolean` | `true` |

## Types

```ts
type Status = "operational" | "degraded" | "outage";
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_INCIDENTS = [13, 14, 31, 49];

const DEFAULT_OUTAGES = [22];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import StatusUptimeBar from "@/components/codedvisuals/status/uptime-bar";

// default
<StatusUptimeBar />

// isometric
<StatusUptimeBar isometric />

// degraded · custom copy
<StatusUptimeBar
  title="API"
  status="degraded"
  incidents={[42, 51, 57]}
  outages={[]}
/>

// outage · isometric
<StatusUptimeBar
  title="Checkout"
  status="outage"
  incidents={[39]}
  outages={[55, 58]}
  isometric
/>

// 45 days · clean
<StatusUptimeBar
  days={45}
  incidents={[]}
  outages={[]}
  uptime="100.00%"
/>

// 30 days · incident
<StatusUptimeBar days={30} incidents={[7, 8, 19]} outages={[14]} />

// no legend
<StatusUptimeBar showLegend={false} />
```
