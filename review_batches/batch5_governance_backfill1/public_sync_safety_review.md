# Public Sync Safety Review

## Safe to export after review

- this proposal package
- non-sensitive governance summaries
- non-sensitive Decision Log patch drafts
- non-sensitive Project Map patch drafts
- issue summaries without credentials, shop IDs, raw API output, or business data

## Not safe to export

- `.env`
- tokens or secrets
- private keys
- raw API evidence
- shop / partner / seller / buyer identifiers
- order, refund, customer, supplier, finance, or backend real data
- DB dumps, raw/staging/DWD/mart data
- node_modules or dependency caches

## Required checks before public export

- path blacklist check
- high-confidence credential value check
- manual review of explanatory sensitive words
- confirm no API response originals or real business evidence
