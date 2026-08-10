---
name: codedvisuals-email-compose
description: An email compose window with recipient, subject, and body. The Compose visual in the Email category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Email / Compose

An email compose window with recipient, subject, and body.

- **Registry name:** `@codedvisuals/email-compose`
- **Import path:** `@/components/codedvisuals/email/compose`

## Install if it is not in the project yet

Look for `components/codedvisuals/email/compose.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/email-compose
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"New message"` |
| `meta` | `string` | - |
| `to` | `Recipient[]` | see Default content below |
| `cc` | `Recipient[]` | - |
| `subject` | `string` | `"Q4 roadmap review"` |
| `sendLabel` | `string` | `"Send"` |

## Types

```ts
interface Recipient {
  initials: string;
  email: string;
}
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_TO: Recipient[] = [
  { initials: "SC", email: "sarah@example.dev" },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import EmailCompose from "@/components/codedvisuals/email/compose";

// default
<EmailCompose />

// fadeOut
<EmailCompose fadeOut />

// with cc
<EmailCompose
  title="Reply"
  subject="Re: launch checklist"
  to={[
    { initials: "AP", email: "alex@example.dev" },
    { initials: "ML", email: "mia@example.dev" },
  ]}
  cc={[{ initials: "BN", email: "ben@example.dev" }]}
/>

// team broadcast · custom
<EmailCompose
  title="New announcement"
  subject="December all-hands recap"
  to={[
    { initials: "EN", email: "engineering@example.dev" },
    { initials: "DS", email: "design@example.dev" },
  ]}
  cc={[{ initials: "LD", email: "leads@example.dev" }]}
/>

// draft saved · meta
<EmailCompose
  title="Reply"
  meta="Draft saved · 2m ago"
  subject="Re: contract revisions"
  sendLabel="Schedule send"
  to={[{ initials: "JL", email: "jordan@example.dev" }]}
/>
```
