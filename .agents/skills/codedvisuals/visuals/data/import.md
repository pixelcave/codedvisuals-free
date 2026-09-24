---
name: codedvisuals-data-import
description: A CSV import mapper where each source column connects across to its destination field, leaving unmapped columns skipped. The Import visual in the Data category of CodedVisuals. Use when adding this visual to a marketing or landing page.
---

# Data / Import

A CSV import mapper where each source column connects across to its destination field, leaving unmapped columns skipped.

- **Registry name:** `@codedvisuals/data-import`
- **Import path:** `@/components/codedvisuals/data/import`

## Install if it is not in the project yet

Look for `components/codedvisuals/data/import.tsx` under the project's source root. If it is already there, just import it. If not, add it with the shadcn CLI:

```bash
npx shadcn@latest add @codedvisuals/data-import
```

This uses the private registry (one time setup) and installs Motion and lucide-react if needed. See `SKILL.md` for the full setup and the copy and paste path, and `manual-setup.md` for projects without shadcn/ui.

## Props

Also supports the shared animation props (`animated`, `trigger`), presentation modifiers (`gradient`, `fadeOut`, `isometric`), and `className`, all documented in `SKILL.md`. Every prop is optional and falls back to a sensible default.

| Prop | Type | Default |
| --- | --- | --- |
| `fileName` | `string` | `"customers.csv"` |
| `rowCount` | `number` | `2480` |
| `unit` | `string` | `"rows ready"` |
| `mappings` | `FieldMapping[]` | see Default content below |
| `sourceLabel` | `string` | `"CSV column"` |
| `targetLabel` | `string` | `"Field"` |
| `skipLabel` | `string` | `"Skip"` |
| `actionLabel` | `string` | `"Import"` |

## Types

```ts
interface FieldMapping {
  source: string;
  target?: string;
}
```

## Default content

The values used when you do not pass the matching prop:

```ts
const DEFAULT_MAPPINGS: FieldMapping[] = [
  { source: "Email Address", target: "email" },
  { source: "Full Name", target: "name" },
  { source: "Company", target: "company" },
  { source: "Signup Date", target: "created_at" },
  { source: "Internal Ref" },
];
```

## Examples

Give the visual a sized container, then drop it in:

```tsx
import DataImport from "@/components/codedvisuals/data/import";

// default
<DataImport />

// fadeOut
<DataImport fadeOut />

// custom data · products
<DataImport
  fileName="products.csv"
  rowCount={18400}
  mappings={[
    { source: "SKU", target: "sku" },
    { source: "Product Title", target: "name" },
    { source: "Unit Price", target: "price" },
    { source: "Legacy ID" },
  ]}
/>

// custom data · contacts · isometric
<DataImport
  isometric
  gradient={false}
  fileName="contacts.xlsx"
  rowCount={640}
  unit="contacts ready"
  sourceLabel="Sheet column"
  targetLabel="Property"
  actionLabel="Sync"
  mappings={[
    { source: "Work Email", target: "email" },
    { source: "First Name", target: "first_name" },
    { source: "Last Name", target: "last_name" },
    { source: "Phone", target: "phone" },
    { source: "Notes" },
  ]}
/>

// all mapped
<DataImport
  fileName="invoices.csv"
  rowCount={912}
  mappings={[
    { source: "Invoice No", target: "number" },
    { source: "Billed To", target: "customer" },
    { source: "Amount Due", target: "amount" },
  ]}
/>
```
