---
name: codedvisuals-search-semantic
description: A query landing in an embedding space, where a radius sweep lights up its nearest matches with similarity scores. The Semantic visual in the Search category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Search / Semantic

A query landing in an embedding space, where a radius sweep lights up its nearest matches with similarity scores.

- **Registry name:** `@codedvisuals/search-semantic`
- **Import path:** `@/components/codedvisuals/search/semantic`

## Install if it is not in the project yet

Look for `components/codedvisuals/search/semantic.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/search-semantic
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `query` | `string` | `"upgrade my plan"` |
| `matches` | `Match[]` | see Default content below |
| `spaceLabel` | `string` | `"Embedding space"` |

## Types

```ts
interface Match {
  label: string;
  score: number;
}
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_MATCHES: Match[] = [
  { label: "Move to a higher tier", score: 0.94 },
  { label: "Compare plan features", score: 0.88 },
  { label: "Add more seats", score: 0.79 },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import SearchSemantic from "@/components/codedvisuals/search/semantic";

// default
<SearchSemantic />

// isometric
<SearchSemantic isometric />

// support · custom copy
<SearchSemantic
  query="my card was declined"
  matches={[
    { label: "Failed payments", score: 0.96 },
    { label: "Update a card", score: 0.9 },
    { label: "Dunning emails", score: 0.74 },
  ]}
/>

// docs · isometric
<SearchSemantic
  isometric
  query="rotate an API key"
  spaceLabel="Docs index"
  matches={[
    { label: "Key rotation", score: 0.97 },
    { label: "Scoped tokens", score: 0.85 },
    { label: "Revoke access", score: 0.8 },
  ]}
/>

// two matches
<SearchSemantic
  query="invite my team"
  matches={[
    { label: "Add teammates", score: 0.93 },
    { label: "Roles and access", score: 0.81 },
  ]}
/>

// one match
<SearchSemantic
  query="export my data"
  matches={[{ label: "Data export", score: 0.98 }]}
/>
```
