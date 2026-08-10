---
name: codedvisuals-api-request
description: A request arcing from client to server and a response arcing back, with a method pill, a status code, and a JSON response card. The Request visual in the API category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# API / Request

A request arcing from client to server and a response arcing back, with a method pill, a status code, and a JSON response card.

- **Registry name:** `@codedvisuals/api-request`
- **Import path:** `@/components/codedvisuals/api/request`

## Install if it is not in the project yet

Look for `components/codedvisuals/api/request.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/api-request
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `variant` | `RequestVariant` | `"get"` |
| `method` | `HttpMethod` | - |
| `endpoint` | `string` | - |
| `status` | `number` | - |
| `statusText` | `string` | - |
| `latency` | `string` | - |
| `response` | `string[]` | - |
| `pulse` | `"dot" \| "line"` | `"dot"` |

## Types

```ts
type RequestVariant = "get" | "post" | "error";

type HttpMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import ApiRequest from "@/components/codedvisuals/api/request";

// default
<ApiRequest />

// isometric
<ApiRequest isometric />

// delete · custom copy
<ApiRequest
  method="DELETE"
  endpoint="/v1/api-keys/key_2Xf8"
  status={204}
  statusText="No Content"
  latency="38ms"
  response={["{ \"deleted\": true, \"id\": \"key_2Xf8\" }"]}
/>

// patch · custom copy
<ApiRequest
  method="PATCH"
  endpoint="/v1/workspaces/ws_71Ka"
  status={200}
  statusText="OK"
  latency="112ms"
  response={["{ \"id\": \"ws_71Ka\", \"name\": \"Acme Labs\", \"members\": 12 }"]}
/>

// line pulse
<ApiRequest pulse="line" />

// post
<ApiRequest variant="post" />

// error
<ApiRequest variant="error" />

// error · isometric
<ApiRequest variant="error" isometric />

// post · line
<ApiRequest variant="post" pulse="line" />
```
