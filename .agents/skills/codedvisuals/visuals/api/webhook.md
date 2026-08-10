---
name: codedvisuals-api-webhook
description: A webhook event fanning retry arcs at your endpoint, where failed attempts fall short and the successful one delivers. The Webhook visual in the API category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# API / Webhook

A webhook event fanning retry arcs at your endpoint, where failed attempts fall short and the successful one delivers.

- **Registry name:** `@codedvisuals/api-webhook`
- **Import path:** `@/components/codedvisuals/api/webhook`

## Install if it is not in the project yet

Look for `components/codedvisuals/api/webhook.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/api-webhook
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `variant` | `WebhookVariant` | `"retry"` |
| `event` | `string` | - |
| `eventId` | `string` | - |
| `attempts` | `Attempt[]` | - |
| `summary` | `string` | - |
| `pulse` | `"dot" \| "line"` | `"dot"` |

## Types

```ts
type WebhookVariant = "retry" | "success" | "failed";

interface Attempt {
  status?: number;
  label: string;
}
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import ApiWebhook from "@/components/codedvisuals/api/webhook";

// default
<ApiWebhook />

// isometric
<ApiWebhook isometric />

// line pulse
<ApiWebhook pulse="line" />

// success
<ApiWebhook variant="success" pulse="line" />

// failed
<ApiWebhook variant="failed" />

// success · isometric
<ApiWebhook variant="success" isometric />

// two attempts · custom copy
<ApiWebhook
  event="deployment.succeeded"
  eventId="evt_9Kd2Lm"
  attempts={[
    { status: 503, label: "Unavailable" },
    { status: 200, label: "OK" },
  ]}
  summary="Delivered after 2 attempts · 1.4s"
/>
```
