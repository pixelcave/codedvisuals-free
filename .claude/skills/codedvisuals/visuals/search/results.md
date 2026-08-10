---
name: codedvisuals-search-results
description: A search results panel with filter chips, a result count, and matched terms highlighted in place. The Results visual in the Search category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Search / Results

A search results panel with filter chips, a result count, and matched terms highlighted in place.

- **Registry name:** `@codedvisuals/search-results`
- **Import path:** `@/components/codedvisuals/search/results`

## Install if it is not in the project yet

Look for `components/codedvisuals/search/results.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/search-results
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`, `hover`) and presentation modifiers (`gradient`, `fadeOut`, `isometric`) plus `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `query` | `string` | `"webhook"` |
| `stats` | `string` | `"128 results in 0.08s"` |
| `filters` | `string[]` | see Default content below |
| `activeFilter` | `number` | `0` |
| `results` | `SearchResult[]` | see Default content below |

## Types

```ts
interface SearchResult {
  icon?: React.ReactNode;
  title: string;
  path: string;
  snippet: string;
  meta?: string;
}
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_FILTERS = ["All", "Docs", "API", "Help"];

const DEFAULT_RESULTS: SearchResult[] = [
  {
    icon: <BookOpen className="size-3" strokeWidth={2.5} />,
    title: "Webhooks overview",
    path: "docs.acme.com › guides",
    snippet: "Receive events the moment they happen, without polling.",
    meta: "Docs",
  },
  {
    icon: <Code2 className="size-3" strokeWidth={2.5} />,
    title: "Verify webhook signatures",
    path: "docs.acme.com › api › security",
    snippet: "Every webhook request is signed with your endpoint secret.",
    meta: "API",
  },
  {
    icon: <FileText className="size-3" strokeWidth={2.5} />,
    title: "Retry policy for failed webhooks",
    path: "help.acme.com › delivery",
    snippet: "Failed deliveries retry with backoff for up to 24 hours.",
    meta: "Help",
  },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import SearchResults from "@/components/codedvisuals/search/results";

// default
<SearchResults />

// fadeOut
<SearchResults fadeOut />

// active filter
<SearchResults activeFilter={2} />
```
