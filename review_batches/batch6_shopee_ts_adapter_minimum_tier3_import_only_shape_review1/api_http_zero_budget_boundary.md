# API HTTP Zero Budget Boundary

Future import-only execution budget:

- API calls: `0`
- HTTP requests: `0`
- telemetry/version-check requests: `0`

If the import triggers or attempts any external request, the batch must stop immediately and record the stop condition.
