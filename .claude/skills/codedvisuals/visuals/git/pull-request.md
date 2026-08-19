---
name: codedvisuals-git-pull-request
description: A pull request card whose CI checks run one by one, then settle into an approval and a merge button that lights up. The Pull Request visual in the Git category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Git / Pull Request

A pull request card whose CI checks run one by one, then settle into an approval and a merge button that lights up.

- **Registry name:** `@codedvisuals/git-pull-request`
- **Import path:** `@/components/codedvisuals/git/pull-request`

## Install if it is not in the project yet

Look for `components/codedvisuals/git/pull-request.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/git-pull-request
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`), presentation modifiers (`gradient`, `fadeOut`, `isometric`), and `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `variant` | `PullRequestVariant` | `"passing"` |
| `title` | `string` | `"Add Stripe checkout flow"` |
| `number` | `string` | `"#482"` |
| `source` | `string` | `"feat/checkout"` |
| `target` | `string` | `"main"` |
| `files` | `number` | `8` |
| `additions` | `number` | `214` |
| `deletions` | `number` | `36` |
| `checks` | `PullRequestCheck[]` | - |
| `reviewer` | `string` | `"Emma Wallace"` |
| `reviewerImage` | `string` | - |
| `status` | `string` | `"Open"` |
| `mergeLabel` | `string` | - |

## Types

```ts
type PullRequestVariant = "passing" | "failing";

interface PullRequestCheck {
  name: string;
  duration: string;
}
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import GitPullRequest from "@/components/codedvisuals/git/pull-request";

// default
<GitPullRequest />

// fadeOut
<GitPullRequest fadeOut />

// custom copy
<GitPullRequest
  title="Migrate auth to passkeys"
  number="#1204"
  source="feat/passkeys"
  target="develop"
  files={14}
  additions={486}
  deletions={92}
  reviewer="Noah Bennett"
  checks={[
    { name: "typecheck", duration: "42s" },
    { name: "e2e", duration: "3m 18s" },
  ]}
/>

// failing
<GitPullRequest variant="failing" />

// failing · custom copy
<GitPullRequest
  variant="failing"
  title="Refactor billing webhooks"
  number="#973"
  source="chore/webhooks"
  files={5}
  additions={61}
  deletions={148}
  reviewer="Ava Lindqvist"
/>
```
