---
name: codedvisuals-email-inbox
description: An email inbox list with senders, previews, and unread states. The Inbox visual in the Email category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Email / Inbox

An email inbox list with senders, previews, and unread states.

- **Registry name:** `@codedvisuals/email-inbox`
- **Import path:** `@/components/codedvisuals/email/inbox`

## Install if it is not in the project yet

Look for `components/codedvisuals/email/inbox.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/email-inbox
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `title` | `string` | `"Inbox"` |
| `meta` | `string` | - |
| `items` | `EmailItem[]` | see Default content below |

## Types

```ts
interface EmailItem {
  initials: string;
  sender: string;
  subject: string;
  preview: string;
  time: string;
  unread?: boolean;
  starred?: boolean;
  hasAttachment?: boolean;
}
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_ITEMS: EmailItem[] = [
  {
    initials: "SC",
    sender: "Sarah Chen",
    subject: "Re: Q4 roadmap review",
    preview: "Looks great, ready to ship Friday.",
    time: "9:42",
    unread: true,
  },
  {
    initials: "AP",
    sender: "Alex Park",
    subject: "Design system v3 specs",
    preview: "Tokens, motion, and typography ready.",
    time: "9:18",
    unread: true,
    starred: true,
    hasAttachment: true,
  },
  {
    initials: "ML",
    sender: "Mia Lee",
    subject: "Notification center merged",
    preview: "Tests passed, deploying to staging.",
    time: "8:34",
  },
  {
    initials: "BN",
    sender: "Ben Novak",
    subject: "Release notes draft",
    preview: "v2.4: what's new in this release.",
    time: "Yesterday",
    hasAttachment: true,
  },
  {
    initials: "JL",
    sender: "Jordan Liu",
    subject: "Onboarding walkthrough",
    preview: "First cut of the v3 walkthrough video.",
    time: "Mon",
    starred: true,
  },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import EmailInbox from "@/components/codedvisuals/email/inbox";

// default
<EmailInbox />

// fadeOut
<EmailInbox fadeOut />

// promotions · custom
<EmailInbox
  title="Promotions"
  meta="me@johnc.dev"
  items={[
    {
      initials: "FG",
      sender: "Figma",
      subject: "Config 2026, early bird tickets",
      preview: "Save 30% if you register before March.",
      time: "10:14",
      unread: true,
    },
    {
      initials: "VR",
      sender: "Vercel",
      subject: "Your November invoice",
      preview: "$48.20 charged to •••• 4242.",
      time: "9:02",
      hasAttachment: true,
    },
    {
      initials: "LN",
      sender: "Linear",
      subject: "Weekly digest · 12 closed issues",
      preview: "See what the team shipped this week.",
      time: "Yesterday",
    },
    {
      initials: "ST",
      sender: "Stripe",
      subject: "New product launch: Issuing",
      preview: "Create and manage virtual cards instantly.",
      time: "Mon",
      starred: true,
    },
  ]}
/>

// drafts · custom
<EmailInbox
  title="Drafts"
  meta="3 drafts"
  items={[
    {
      initials: "ME",
      sender: "To: design@team.io",
      subject: "Sprint kickoff agenda",
      preview: "Reviewing the goals for next two weeks…",
      time: "11:08",
    },
    {
      initials: "ME",
      sender: "To: hello@partner.co",
      subject: "Re: contract revisions",
      preview: "Thanks for the updated version, a few notes…",
      time: "10:42",
      hasAttachment: true,
    },
    {
      initials: "ME",
      sender: "To: investors@",
      subject: "December update",
      preview: "MRR up 18%, hiring two new engineers…",
      time: "Yesterday",
    },
  ]}
/>

// support · custom
<EmailInbox
  title="Support"
  meta="2 unread"
  items={[
    {
      initials: "EM",
      sender: "Emma Wright",
      subject: "Can't access billing portal",
      preview: "Getting a 403 when I try to view invoices…",
      time: "12:31",
      unread: true,
    },
    {
      initials: "RV",
      sender: "Raj Verma",
      subject: "Feature request: webhooks for refunds",
      preview: "Would love to wire this into our CRM…",
      time: "11:54",
      unread: true,
      starred: true,
    },
    {
      initials: "CK",
      sender: "Chris Kim",
      subject: "Re: API rate limits",
      preview: "Thanks, the bump solved it.",
      time: "9:20",
    },
    {
      initials: "NS",
      sender: "Nora Singh",
      subject: "Onboarding feedback",
      preview: "Loved the tour. One suggestion attached.",
      time: "Tue",
      hasAttachment: true,
    },
  ]}
/>
```
