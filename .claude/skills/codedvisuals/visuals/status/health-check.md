---
name: codedvisuals-status-health-check
description: A service health check with status indicators. The Health Check visual in the Status category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Status / Health Check

A service health check with status indicators.

- **Registry name:** `@codedvisuals/status-health-check`
- **Import path:** `@/components/codedvisuals/status/health-check`

## Install if it is not in the project yet

Look for `components/codedvisuals/status/health-check.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/status-health-check
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"System Status"` |
| `items` | `ServiceItem[]` | see Default content below |

## Types

```ts
interface ServiceItem {
  icon: React.ElementType;
  name: string;
  region: string;
  status: ServiceStatus;
  latency: string;
}

type ServiceStatus = "operational" | "degraded" | "down";
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_ITEMS: ServiceItem[] = [
  {
    icon: Globe,
    name: "API Gateway",
    region: "us-east-1",
    status: "operational",
    latency: "42 ms",
  },
  {
    icon: Database,
    name: "Database",
    region: "primary · replica",
    status: "operational",
    latency: "8 ms",
  },
  {
    icon: KeyRound,
    name: "Auth Service",
    region: "us-east-1",
    status: "operational",
    latency: "31 ms",
  },
  {
    icon: HardDrive,
    name: "File Storage",
    region: "us-west-2",
    status: "degraded",
    latency: "412 ms",
  },
  {
    icon: Cloud,
    name: "CDN",
    region: "edge · 218 PoPs",
    status: "operational",
    latency: "12 ms",
  },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import StatusHealthCheck from "@/components/codedvisuals/status/health-check";
import { BrainCircuit, CreditCard, Database, Globe, Search, Server, ShoppingCart, Sparkles, Webhook } from "lucide-react";

// default
<StatusHealthCheck />

// fadeOut
<StatusHealthCheck fadeOut />

// e-commerce · partial degradation
<StatusHealthCheck
  title="Shop Status"
  items={[
    {
      icon: ShoppingCart,
      name: "Checkout",
      region: "us-east-1",
      status: "operational",
      latency: "68 ms",
    },
    {
      icon: CreditCard,
      name: "Payments",
      region: "Stripe · primary",
      status: "operational",
      latency: "112 ms",
    },
    {
      icon: Search,
      name: "Product Search",
      region: "eu-west-1",
      status: "degraded",
      latency: "640 ms",
    },
    {
      icon: Webhook,
      name: "Order Webhooks",
      region: "queue · 3 retries",
      status: "operational",
      latency: "24 ms",
    },
  ]}
/>

// ai stack · outage
<StatusHealthCheck
  title="Inference Stack"
  items={[
    {
      icon: Sparkles,
      name: "LLM Gateway",
      region: "us-east-1",
      status: "operational",
      latency: "184 ms",
    },
    {
      icon: BrainCircuit,
      name: "Embeddings",
      region: "us-east-1",
      status: "operational",
      latency: "92 ms",
    },
    {
      icon: Database,
      name: "Vector DB",
      region: "Pinecone · prod",
      status: "down",
      latency: "n/a",
    },
    {
      icon: Server,
      name: "Model Server",
      region: "gpu-cluster-04",
      status: "degraded",
      latency: "1.2 s",
    },
  ]}
/>

// minimal stack · all operational
<StatusHealthCheck
  title="Production"
  items={[
    {
      icon: Globe,
      name: "Web App",
      region: "edge · global",
      status: "operational",
      latency: "38 ms",
    },
    {
      icon: Server,
      name: "API",
      region: "us-east-1",
      status: "operational",
      latency: "54 ms",
    },
    {
      icon: Database,
      name: "Postgres",
      region: "primary",
      status: "operational",
      latency: "6 ms",
    },
  ]}
/>
```
