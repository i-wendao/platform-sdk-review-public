# Proposed Command Shape

This is a future candidate command shape only. It is not executed in this batch.

Candidate shape:

```bash
cd /opt/project/sdk/adapters/shopee_ts
node --input-type=module -e "await import('@congminh1254/shopee-sdk')"
```

Shape constraints:

- single import target only
- no subpath probing in the same batch
- no fallback to `npm install`, `npx`, `npm exec`, or source edits
- no wrapper script
- no environment injection

This shape is acceptable only if the future execution batch reasserts zero API, zero DB, zero env/token, and immediate stop conditions.
